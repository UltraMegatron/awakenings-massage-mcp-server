# 🚀 HTTPS Deployment Guide for Canva OAuth

## Why HTTPS is Required
Canva requires HTTPS callback URLs for OAuth security. Here are your free deployment options:

## Option 1: Vercel (Recommended ⭐)

**Already configured!** Your `vercel.json` is ready.

### Steps:
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   cd landing-page
   vercel
   ```

3. Your HTTPS URL will be: `https://awakenings-canva-sync.vercel.app`

### Canva App Settings:
```
Redirect URI: https://awakenings-canva-sync.vercel.app/canva-callback
```

## Option 2: Netlify

### Steps:
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `landing-page` folder
3. Get instant HTTPS URL

### Manual Deploy:
1. Zip your `landing-page` folder
2. Drop on Netlify dashboard
3. Get URL like: `https://magical-name-123456.netlify.app`

## Option 3: Railway

### Steps:
1. Go to [railway.app](https://railway.app)
2. Connect GitHub repo
3. Deploy automatically
4. Get HTTPS URL

## Option 4: Render

### Steps:
1. Go to [render.com](https://render.com)
2. Connect GitHub repo
3. Free HTTPS hosting
4. Get URL like: `https://awakenings-canva.onrender.com`

## Environment Variables for Production

Set these in your hosting platform:

```env
CANVA_CLIENT_ID=your_client_id_from_canva
CANVA_CLIENT_SECRET=your_client_secret_from_canva
BASE_URL=https://your-deployed-domain.com
PORT=3000
```

## Testing Your Deployment

1. Visit your HTTPS URL
2. Click "Connect to Canva"
3. Should redirect to Canva OAuth
4. After authorization, should redirect back with success

## Canva Developer App Configuration

Use your new HTTPS URL:

```
App Name: Awakenings Massage Company Social Media
Description: Professional social media content creation for massage therapy
Redirect URI: https://your-domain.com/canva-callback
Scopes: design:content:read design:content:write folder:read folder:write
```

## 🎯 Quick Start with Vercel

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Navigate to landing page
cd social-media-mcp-server/landing-page

# 3. Deploy (first time)
vercel

# 4. Deploy updates
vercel --prod
```

## Troubleshooting

### Common Issues:
1. **Build fails**: Check Node.js version (needs 16+)
2. **Environment variables**: Set in hosting platform dashboard
3. **OAuth fails**: Verify redirect URI matches exactly
4. **CORS errors**: Ensure HTTPS is used throughout

### Verification Steps:
1. ✅ Site loads over HTTPS
2. ✅ Callback URL is accessible
3. ✅ Environment variables are set
4. ✅ Canva app configuration matches

Your professional HTTPS website will be ready for Canva OAuth integration!