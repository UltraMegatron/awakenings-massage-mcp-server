const express = require('express');
const path = require('path');
const axios = require('axios');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Environment variables for Canva OAuth
const CANVA_CLIENT_ID = process.env.CANVA_CLIENT_ID;
const CANVA_CLIENT_SECRET = process.env.CANVA_CLIENT_SECRET;
const BASE_URL = process.env.BASE_URL || 'https://awakenings-canva-sync-xyz.vercel.app';
const CANVA_REDIRECT_URI = `${BASE_URL}/api/canva-callback`;

// Store for OAuth state (in production, use Redis/Database)
const oauthStates = new Map();

// Main handler function for Vercel
module.exports = (req, res) => {
    const { url, method } = req;
    
    // Route handling
    if (url === '/' && method === 'GET') {
        return res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canva Sync - Awakenings Massage Company</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .container {
            max-width: 600px;
            padding: 3rem;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            text-align: center;
        }
        .logo {
            font-size: 2.5rem;
            font-weight: bold;
            color: #667eea;
            margin-bottom: 1rem;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            background: #667eea;
            color: white;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            transition: background 0.3s ease;
            margin: 0.5rem;
        }
        .btn:hover { background: #5a6fd8; }
    </style>
</head>
<body>
    <div class="container">
        <div class="logo">🎨 Canva Sync</div>
        <h1>Awakenings Massage Company</h1>
        <p>Connect your Canva account to automatically create professional social media designs.</p>
        <br>
        <a href="/api/canva/auth" class="btn">🔗 Connect to Canva</a>
        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #eee; color: #666;">
            <p><strong>🏢 Awakenings Massage Company</strong></p>
            <p>📍 2402 North Nevada Avenue, Colorado Springs, CO</p>
        </div>
    </div>
</body>
</html>
        `);
    }
    
    if (url === '/health' && method === 'GET') {
        return res.json({
            status: 'healthy',
            service: 'Awakenings Massage Company - Canva Sync',
            timestamp: new Date().toISOString()
        });
    }
    
    if (url === '/api/canva/auth' && method === 'GET') {
        if (!CANVA_CLIENT_ID) {
            return res.status(500).json({ error: 'Canva Client ID not configured' });
        }
        
        // Generate secure state parameter
        const state = crypto.randomBytes(32).toString('hex');
        oauthStates.set(state, { timestamp: Date.now() });
        
        const authUrl = new URL('https://www.canva.com/api/oauth/authorize');
        authUrl.searchParams.set('client_id', CANVA_CLIENT_ID);
        authUrl.searchParams.set('redirect_uri', CANVA_REDIRECT_URI);
        authUrl.searchParams.set('response_type', 'code');
        authUrl.searchParams.set('state', state);
        authUrl.searchParams.set('scope', 'design:read design:write folder:read folder:write');
        
        return res.redirect(authUrl.toString());
    }
    
    if (url.startsWith('/api/canva-callback') && method === 'GET') {
        const urlObj = new URL(req.url, `http://${req.headers.host}`);
        const code = urlObj.searchParams.get('code');
        const state = urlObj.searchParams.get('state');
        const error = urlObj.searchParams.get('error');
        
        if (error) {
            return res.redirect(`/?error=${encodeURIComponent(error)}`);
        }
        
        if (!state || !oauthStates.has(state)) {
            return res.redirect('/?error=invalid_state');
        }
        
        oauthStates.delete(state);
        
        if (!code) {
            return res.redirect('/?error=no_code');
        }
        
        // Success - redirect with success
        return res.redirect('/?code=success&connected=true');
    }
    
    // Default 404
    res.status(404).json({ error: 'Not found' });
};