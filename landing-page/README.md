# Awakenings Massage Company - Canva Sync Landing Page

A professional landing page for Canva OAuth integration, designed specifically for Awakenings Massage Company's social media automation system.

## 🌟 Features

- **Professional OAuth Landing Page** - Clean, branded interface for Canva authorization
- **OAuth Callback Handling** - Processes Canva authorization responses
- **Brand Integration** - Matches Awakenings Massage Company's elegant aesthetic
- **Responsive Design** - Works on desktop and mobile devices
- **Error Handling** - Graceful handling of authorization failures

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd landing-page
npm install
```

### 2. Start the Server

```bash
npm start
```

The server will start on `http://localhost:3000`

### 3. Configure Canva App

In your Canva Developer App settings, set the redirect URI to:
```
http://localhost:3000/canva-callback
```

For production, replace `localhost:3000` with your actual domain.

## 📱 Pages

### Main Landing Page (`/`)
- **URL**: `http://localhost:3000/`
- **Purpose**: Canva integration status and connection interface
- **Features**: 
  - Connection status display
  - OAuth configuration details
  - Integration benefits overview
  - Awakenings Massage Company branding

### OAuth Callback (`/canva-callback`)
- **URL**: `http://localhost:3000/canva-callback`
- **Purpose**: Handles Canva OAuth authorization responses
- **Features**:
  - Success/error status handling
  - Authorization code processing
  - User-friendly feedback
  - Troubleshooting guidance

## 🔧 Configuration

### For Local Development
```
Callback URL: http://localhost:3000/canva-callback
```

### For Production Deployment
Replace `localhost:3000` with your actual domain:
```
Callback URL: https://yourdomain.com/canva-callback
```

## 🌐 Deployment Options

### Option 1: Local Development
- Run `npm start` for local testing
- Use `http://localhost:3000/canva-callback` in Canva app settings

### Option 2: Cloud Deployment (Recommended)

**Vercel (Free):**
1. Push code to GitHub
2. Connect to Vercel
3. Deploy automatically
4. Use the Vercel URL for Canva callback

**Netlify (Free):**
1. Drag and drop the `landing-page` folder
2. Get instant URL
3. Use Netlify URL for Canva callback

**Heroku:**
1. Create Heroku app
2. Deploy via Git
3. Use Heroku URL for Canva callback

## 📋 Canva App Configuration

When setting up your Canva Developer App, use these settings:

```
App Name: Awakenings Massage Company Social Media
Description: Professional social media content creation for massage therapy business
Redirect URI: [YOUR-DOMAIN]/canva-callback
Scopes: design:content:read, design:content:write
```

## 🎨 Customization

### Colors & Branding
The landing page uses Awakenings Massage Company's professional aesthetic:
- **Primary Color**: `#667eea` (Professional blue)
- **Secondary Color**: `#764ba2` (Elegant purple)
- **Background**: Linear gradient for modern look
- **Typography**: Clean, professional fonts

### Business Information
All business details are included:
- **Address**: 2402 North Nevada Avenue, Colorado Springs, CO
- **Website**: awakeningsmassagecos.com
- **Service Focus**: Professional Massage Therapy & Wellness

## 🔒 Security Notes

- Never commit real OAuth secrets to version control
- Use environment variables for production secrets
- Implement proper CSRF protection in production
- Validate all OAuth state parameters

## 📞 Support

For issues with the Canva integration:
1. Check Canva Developer App configuration
2. Verify redirect URI matches exactly
3. Ensure OAuth scopes are correct
4. Contact support if problems persist

## 🏔️ About Awakenings Massage Company

Professional massage therapy services in Colorado Springs, specializing in:
- Therapeutic massage
- Stress relief and relaxation
- Pain management
- Sports recovery
- Wellness programs

**Location**: 2402 North Nevada Avenue, Colorado Springs, CO
**Website**: https://awakeningsmassagecos.com