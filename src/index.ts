#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';
import dotenv from 'dotenv';

import { ContentGenerator } from './services/contentGenerator.js';
import { CanvaService } from './services/canvaService.js';
import { createSocialMediaTools, handleSocialMediaTool } from './tools/socialMediaTools.js';
import { BusinessInfo, CanvaAuthConfig } from './types/index.js';

dotenv.config();

class SocialMediaMCPServer {
  private server: Server;
  private contentGenerator: ContentGenerator;
  private canvaService: CanvaService;
  private businessInfo: BusinessInfo;
  private tools: any[];

  constructor() {
    this.businessInfo = this.loadBusinessInfo();
    this.contentGenerator = new ContentGenerator(this.businessInfo);
    
    const canvaConfig: CanvaAuthConfig = {
      clientId: process.env.CANVA_CLIENT_ID || '',
      clientSecret: process.env.CANVA_CLIENT_SECRET || '',
      redirectUri: process.env.CANVA_REDIRECT_URI || '',
      accessToken: process.env.CANVA_ACCESS_TOKEN
    };
    
    this.canvaService = new CanvaService(canvaConfig);
    this.tools = createSocialMediaTools(this.contentGenerator, this.canvaService, this.businessInfo);

    this.server = new Server(
      {
        name: 'social-media-mcp-server',
        version: '1.0.0'
      },
      {
        capabilities: {
          tools: {}
        }
      }
    );

    this.setupHandlers();
  }

  private loadBusinessInfo(): BusinessInfo {
    return {
      name: process.env.BUSINESS_NAME || 'Your Massage Therapy Business',
      type: process.env.BUSINESS_TYPE || 'massage_therapy',
      description: process.env.BUSINESS_DESCRIPTION || 'Professional massage therapy services',
      location: process.env.BUSINESS_LOCATION,
      phone: process.env.BUSINESS_PHONE,
      email: process.env.BUSINESS_EMAIL,
      website: process.env.BUSINESS_WEBSITE,
      instagramHandle: process.env.INSTAGRAM_HANDLE,
      facebookPage: process.env.FACEBOOK_PAGE
    };
  }

  private setupHandlers(): void {
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: this.tools
      };
    });

    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;
      
      return await handleSocialMediaTool(
        name,
        args,
        this.contentGenerator,
        this.canvaService,
        this.businessInfo
      );
    });
  }

  async run(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    
    console.error('Social Media MCP Server running on stdio');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const server = new SocialMediaMCPServer();
  server.run().catch(console.error);
}