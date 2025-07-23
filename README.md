# Social Media MCP Server

A Model Context Protocol (MCP) server for creating social media posts and campaigns with Canva API integration, specifically designed for massage therapy businesses but adaptable to other service-based businesses.

## Features

- **Social Media Post Generation**: Create engaging posts for Instagram and Facebook
- **Content Themes**: Specialized content for relaxation, wellness, pain relief, and sports recovery
- **Campaign Management**: Generate comprehensive multi-day/multi-week social media campaigns
- **Canva Integration**: Create and export professional designs using Canva's API
- **Educational Content**: Generate informative posts about massage therapy benefits
- **Promotional Posts**: Create special offer and discount announcements
- **Hashtag Generation**: Relevant hashtag sets for different content themes

## Installation

1. Clone or download the project
2. Install dependencies:
   ```bash
   cd social-media-mcp-server
   npm install
   ```

3. Copy the environment file and configure:
   ```bash
   cp .env.example .env
   ```

4. Edit `.env` with your business information and Canva API credentials

## Configuration

### Required Environment Variables

```env
# Canva API Configuration (required for design features)
CANVA_CLIENT_ID=your_canva_client_id
CANVA_CLIENT_SECRET=your_canva_client_secret
CANVA_REDIRECT_URI=https://your-domain.com/callback

# Business Information
BUSINESS_NAME=Your Massage Therapy Business
BUSINESS_TYPE=massage_therapy
BUSINESS_DESCRIPTION=Professional massage therapy services for relaxation and wellness
BUSINESS_LOCATION=Your City, State
BUSINESS_PHONE=+1-555-123-4567
BUSINESS_EMAIL=contact@yourbusiness.com
BUSINESS_WEBSITE=https://yourbusiness.com

# Social Media Handles
INSTAGRAM_HANDLE=@yourbusiness
FACEBOOK_PAGE=YourBusinessPage
```

### Getting Canva API Credentials

1. Visit [Canva Developers](https://www.canva.com/developers/)
2. Create a new app
3. Get your Client ID and Client Secret
4. Set up OAuth redirect URI
5. Use the `get_canva_auth_url` tool to generate authorization URL
6. Complete OAuth flow to get access token

## Usage

### Building and Running

```bash
# Build the project
npm run build

# Run in development mode
npm run dev

# Run production build
npm start
```

### Available Tools

#### 1. `generate_social_media_post`
Generate themed social media posts for massage therapy business.

**Parameters:**
- `theme`: "relaxation" | "wellness" | "pain_relief" | "sports_recovery"
- `platform`: "instagram" | "facebook" | "both"
- `customMessage` (optional): Additional custom text

**Example:**
```json
{
  "theme": "relaxation",
  "platform": "instagram",
  "customMessage": "Special weekend hours available!"
}
```

#### 2. `generate_promotional_post`
Create promotional posts with special offers.

**Parameters:**
- `offer`: String describing the promotion
- `platform`: "instagram" | "facebook" | "both"

**Example:**
```json
{
  "offer": "20% off your first massage session this month!",
  "platform": "both"
}
```

#### 3. `generate_educational_post`
Create educational content about massage therapy.

**Parameters:**
- `topic`: "benefits" | "techniques" | "selfcare"
- `platform`: "instagram" | "facebook" | "both"

#### 4. `create_weekly_content_schedule`
Generate a full week of social media posts.

**Parameters:**
- `startDate` (optional): Start date in YYYY-MM-DD format

#### 5. `create_social_media_campaign`
Generate comprehensive multi-day campaigns.

**Parameters:**
- `campaignName`: Name of the campaign
- `duration`: Campaign duration in days
- `frequency`: "daily" | "weekly"

#### 6. `create_canva_design`
Create designs in Canva for social media.

**Parameters:**
- `title`: Design title
- `platform`: "instagram_post" | "facebook_post" | "instagram_story" | "facebook_cover"
- `textContent` (optional): Text to include

#### 7. `get_canva_auth_url`
Generate OAuth URL for Canva authentication.

#### 8. `export_canva_design`
Export Canva designs as images.

**Parameters:**
- `designId`: The Canva design ID
- `format`: "PNG" | "JPG" | "PDF"

#### 9. `generate_hashtag_sets`
Generate relevant hashtags for different themes.

**Parameters:**
- `theme`: Content theme
- `count` (optional): Number of hashtags (default: 10)

## Integration with Claude

This MCP server can be used with Claude Desktop or other MCP-compatible clients. Add the server to your MCP client configuration:

```json
{
  "mcpServers": {
    "social-media": {
      "command": "node",
      "args": ["path/to/social-media-mcp-server/dist/index.js"],
      "env": {
        "BUSINESS_NAME": "Your Business Name",
        // ... other environment variables
      }
    }
  }
}
```

## Example Workflows

### 1. Create a Weekly Content Plan
```
Use the create_weekly_content_schedule tool to generate 7 days of content, then use create_canva_design for each post to create matching visuals.
```

### 2. Launch a Promotional Campaign
```
1. Use generate_promotional_post with your offer
2. Create matching Canva design with create_canva_design
3. Export the design with export_canva_design
4. Schedule across multiple days using create_social_media_campaign
```

### 3. Educational Content Series
```
Use generate_educational_post with different topics (benefits, techniques, selfcare) to create an informative content series.
```

## Content Themes

The server includes specialized content for massage therapy businesses:

- **Relaxation**: Stress relief and tranquility focused content
- **Wellness**: General health and wellbeing messaging
- **Pain Relief**: Therapeutic and medical benefits
- **Sports Recovery**: Athletic performance and recovery content
- **Educational**: Informative posts about massage benefits and techniques
- **Promotional**: Special offers and business announcements

## Development

### Project Structure
```
src/
├── index.ts              # Main MCP server
├── types/               # TypeScript interfaces
├── services/
│   ├── contentGenerator.ts  # Content creation logic
│   └── canvaService.ts      # Canva API integration
└── tools/
    └── socialMediaTools.ts  # MCP tool definitions
```

### Adding New Content Themes

1. Extend the content templates in `contentGenerator.ts`
2. Add new theme options to tool schemas
3. Update hashtag sets in the tools

### Customization

The server can be adapted for other business types by:

1. Modifying content templates in `ContentGenerator`
2. Updating business type configurations
3. Adjusting hashtag sets for your industry

## Security Notes

- Never commit your `.env` file with real credentials
- Store Canva access tokens securely
- Use environment variables for all sensitive configuration
- Canva API calls require server-side execution (not client-side)

## Troubleshooting

### Common Issues

1. **Canva API Authentication Errors**
   - Verify your Client ID and Client Secret
   - Ensure redirect URI matches your Canva app configuration
   - Check that access token is valid and not expired

2. **Missing Environment Variables**
   - Copy `.env.example` to `.env`
   - Fill in all required business information

3. **Build Errors**
   - Run `npm install` to ensure all dependencies are installed
   - Check TypeScript version compatibility

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## Support

For issues and questions:
1. Check the troubleshooting section
2. Review Canva API documentation
3. Open an issue in the project repository