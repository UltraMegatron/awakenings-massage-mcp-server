import axios, { AxiosInstance } from 'axios';
import { CanvaAuthConfig, CanvaDesignRequest } from '../types/index.js';

export class CanvaService {
  private client: AxiosInstance;
  private config: CanvaAuthConfig;

  constructor(config: CanvaAuthConfig) {
    this.config = config;
    this.client = axios.create({
      baseURL: 'https://api.canva.com/rest/v1',
      headers: {
        'Authorization': `Bearer ${config.accessToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async createDesign(designRequest: CanvaDesignRequest): Promise<any> {
    try {
      const response = await this.client.post('/designs', {
        design_type: 'SocialMediaPost',
        title: designRequest.title,
        ...(designRequest.width && designRequest.height && {
          dimensions: {
            width: designRequest.width,
            height: designRequest.height
          }
        })
      });

      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to create design: ${error.response?.data?.message || error.message}`);
    }
  }

  async getDesign(designId: string): Promise<any> {
    try {
      const response = await this.client.get(`/designs/${designId}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to get design: ${error.response?.data?.message || error.message}`);
    }
  }

  async exportDesign(designId: string, format: 'PNG' | 'JPG' | 'PDF' = 'PNG'): Promise<any> {
    try {
      const response = await this.client.post(`/exports`, {
        design_id: designId,
        format: {
          type: format
        }
      });

      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to export design: ${error.response?.data?.message || error.message}`);
    }
  }

  async getExportJob(jobId: string): Promise<any> {
    try {
      const response = await this.client.get(`/exports/${jobId}`);
      return response.data;
    } catch (error: any) {
      throw new Error(`Failed to get export job: ${error.response?.data?.message || error.message}`);
    }
  }

  generateAuthUrl(scopes: string[] = ['design:content:read', 'design:content:write']): string {
    const params = new URLSearchParams({
      client_id: this.config.clientId,
      redirect_uri: this.config.redirectUri,
      response_type: 'code',
      scope: scopes.join(' '),
      code_challenge_method: 'S256',
      // Note: In production, generate a proper code_challenge
      code_challenge: 'placeholder-challenge'
    });

    return `https://www.canva.com/api/oauth/authorize?${params.toString()}`;
  }

  async exchangeCodeForToken(authCode: string): Promise<string> {
    try {
      const response = await axios.post('https://api.canva.com/rest/v1/oauth/token', {
        grant_type: 'authorization_code',
        client_id: this.config.clientId,
        client_secret: this.config.clientSecret,
        redirect_uri: this.config.redirectUri,
        code: authCode,
        code_verifier: 'placeholder-verifier' // In production, use proper PKCE
      });

      this.config.accessToken = response.data.access_token;
      this.client.defaults.headers['Authorization'] = `Bearer ${response.data.access_token}`;
      
      return response.data.access_token;
    } catch (error: any) {
      throw new Error(`Failed to exchange code for token: ${error.response?.data?.message || error.message}`);
    }
  }
}