# 🎨 Canva OAuth Landing Page - Awakenings Massage Company

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
cd social-media-mcp-server/landing-page
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
```

Edit `.env` with your Canva app credentials:
```env
CANVA_CLIENT_ID=your_canva_app_client_id_here
CANVA_CLIENT_SECRET=your_canva_app_client_secret_here
PORT=3000
BASE_URL=http://localhost:3000
```

### 3. Create Canva Developer App

1. Go to https://www.canva.com/developers/
2. Click "Create an app"
3. Fill in app details:
   - **App name**: "Awakenings Massage Company - Social Media Automation"
   - **App description**: "Professional social media content creation for massage therapy business"
   - **App type**: "Integration"
4. Set **Redirect URI**: `http://localhost:3000/canva-callback`
5. Request scopes: `design:read`, `design:write`, `folder:read`, `folder:write`
6. Copy your **Client ID** and **Client Secret** to `.env`

### 4. Start the Server
```bash
npm start
```

Visit: http://localhost:3000

## 🔗 OAuth Flow

1. **User clicks "Connect to Canva"**
2. **Redirects to Canva authorization**
3. **User grants permissions**
4. **Canva redirects back with authorization code**
5. **Server exchanges code for access token**
6. **Access token is displayed in console** (copy to your MCP .env)

## 🌐 Production Deployment

### Vercel Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard:
# CANVA_CLIENT_ID
# CANVA_CLIENT_SECRET  
# BASE_URL=https://your-app.vercel.app
```

Update your Canva app redirect URI to: `https://your-app.vercel.app/canva-callback`

## 📋 Features

- ✅ **Secure OAuth 2.0 flow** with state parameter validation
- ✅ **Professional UI** for Awakenings Massage Company branding
- ✅ **Automatic token exchange** and console output
- ✅ **Error handling** for all OAuth scenarios
- ✅ **Production ready** with environment variable support
- ✅ **Mobile responsive** design

## 🔐 Security

- State parameter prevents CSRF attacks
- Client secret stored securely in environment variables
- OAuth states automatically expire after 10 minutes
- HTTPS required for production deployment

## 📞 Support

For Awakenings Massage Company:
- **Address**: 2402 North Nevada Avenue, Colorado Springs, CO
- **Website**: https://awakeningsmassagecos.com

---
*Professional social media automation for therapeutic wellness.*