const express = require('express');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Environment variables for Canva OAuth
const CANVA_CLIENT_ID = process.env.CANVA_CLIENT_ID;
const CANVA_CLIENT_SECRET = process.env.CANVA_CLIENT_SECRET;
const BASE_URL = process.env.BASE_URL || `http://localhost:${process.env.PORT || 3000}`;
const CANVA_REDIRECT_URI = `${BASE_URL}/canva-callback`;

// Store for OAuth state (in production, use Redis/Database)
const oauthStates = new Map();

// Serve static files from the landing-page directory
app.use(express.static(__dirname));

// Main landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Legacy callback handler (now handled above)
// app.get('/canva-callback', (req, res) => {
//     res.sendFile(path.join(__dirname, 'canva-callback.html'));
// });

// Privacy Policy page
app.get('/privacy-policy', (req, res) => {
    res.sendFile(path.join(__dirname, 'privacy-policy.html'));
});

// Support page
app.get('/support', (req, res) => {
    res.sendFile(path.join(__dirname, 'support.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        service: 'Awakenings Massage Company - Canva Sync',
        timestamp: new Date().toISOString()
    });
});

// Start Canva OAuth flow
app.get('/api/canva/auth', (req, res) => {
    if (!CANVA_CLIENT_ID) {
        return res.status(500).json({ error: 'Canva Client ID not configured' });
    }
    
    // Generate secure state parameter
    const state = crypto.randomBytes(32).toString('hex');
    oauthStates.set(state, { timestamp: Date.now() });
    
    // Clean old states (older than 10 minutes)
    const tenMinutesAgo = Date.now() - 10 * 60 * 1000;
    for (const [key, value] of oauthStates.entries()) {
        if (value.timestamp < tenMinutesAgo) {
            oauthStates.delete(key);
        }
    }
    
    const authUrl = new URL('https://www.canva.com/api/oauth/authorize');
    authUrl.searchParams.set('client_id', CANVA_CLIENT_ID);
    authUrl.searchParams.set('redirect_uri', CANVA_REDIRECT_URI);
    authUrl.searchParams.set('response_type', 'code');
    authUrl.searchParams.set('state', state);
    authUrl.searchParams.set('scope', 'design:read design:write folder:read folder:write');
    
    console.log('🔗 Redirecting to Canva OAuth:', authUrl.toString());
    res.redirect(authUrl.toString());
});

// Handle Canva OAuth callback and exchange code for token
app.get('/canva-callback', async (req, res) => {
    const { code, state, error } = req.query;
    
    // Handle OAuth error
    if (error) {
        console.error('❌ Canva OAuth error:', error);
        return res.redirect(`/?error=${encodeURIComponent(error)}`);
    }
    
    // Verify state parameter
    if (!state || !oauthStates.has(state)) {
        console.error('❌ Invalid or missing state parameter');
        return res.redirect('/?error=invalid_state');
    }
    
    // Remove used state
    oauthStates.delete(state);
    
    if (!code) {
        console.error('❌ No authorization code received');
        return res.redirect('/?error=no_code');
    }
    
    try {
        // Exchange authorization code for access token
        if (!CANVA_CLIENT_SECRET) {
            throw new Error('Canva Client Secret not configured');
        }
        
        console.log('🔄 Exchanging code for access token...');
        const tokenResponse = await axios.post('https://api.canva.com/rest/v1/oauth/token', {
            grant_type: 'authorization_code',
            client_id: CANVA_CLIENT_ID,
            client_secret: CANVA_CLIENT_SECRET,
            code: code,
            redirect_uri: CANVA_REDIRECT_URI
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        const { access_token, refresh_token, expires_in } = tokenResponse.data;
        
        console.log('✅ Successfully obtained Canva access token');
        console.log('Token expires in:', expires_in, 'seconds');
        
        // In production, store tokens securely in database
        // For now, we'll store in environment variable format
        console.log('\n🔑 Add this to your .env file:');
        console.log(`CANVA_ACCESS_TOKEN=${access_token}`);
        if (refresh_token) {
            console.log(`CANVA_REFRESH_TOKEN=${refresh_token}`);
        }
        
        // Redirect back to main page with success
        res.redirect('/?code=success&connected=true');
        
    } catch (error) {
        console.error('❌ Token exchange failed:', error.response?.data || error.message);
        res.redirect(`/?error=${encodeURIComponent('token_exchange_failed')}`);
    }
});

// API endpoint to get OAuth configuration
app.get('/api/canva/config', (req, res) => {
    res.json({
        clientIdConfigured: !!CANVA_CLIENT_ID,
        clientSecretConfigured: !!CANVA_CLIENT_SECRET,
        redirectUri: CANVA_REDIRECT_URI,
        baseUrl: BASE_URL
    });
});

const PORT = process.env.PORT || 3000;

// For Vercel, export the app
if (process.env.NODE_ENV === 'production') {
    module.exports = app;
} else {
    app.listen(PORT, () => {
        console.log(`🌟 Awakenings Massage Company - Canva Sync Server`);
        console.log(`🌐 Server running on http://localhost:${PORT}`);
        console.log(`📍 Landing Page: http://localhost:${PORT}`);
        console.log(`🔗 Callback URL: http://localhost:${PORT}/canva-callback`);
        console.log(`\n🎨 Use this callback URL in your Canva Developer App settings:`);
        console.log(`   http://localhost:${PORT}/canva-callback`);
        console.log(`\n🏔️ Ready to connect Canva for Awakenings Massage Company!`);
    });
}

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down Canva Sync server...');
    process.exit(0);
});