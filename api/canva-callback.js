const axios = require('axios');

// Environment variables for Canva OAuth
const CANVA_CLIENT_ID = process.env.CANVA_CLIENT_ID;
const CANVA_CLIENT_SECRET = process.env.CANVA_CLIENT_SECRET;
const BASE_URL = process.env.BASE_URL || 'https://awakenings-canva-sync-xyz.vercel.app';
const CANVA_REDIRECT_URI = `${BASE_URL}/api/canva-callback`;

module.exports = async (req, res) => {
    const { code, state, error } = req.query;
    
    // Handle OAuth error
    if (error) {
        console.error('❌ Canva OAuth error:', error);
        return res.redirect(`/?error=${encodeURIComponent(error)}`);
    }
    
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
        
        // Return success page
        return res.status(200).send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Canva Connected Successfully!</title>
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
        .success-icon { font-size: 4rem; color: #28a745; margin-bottom: 1rem; }
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
        .auth-details {
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            margin: 1.5rem 0;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="success-icon">✅</div>
        <h1>Successfully Connected!</h1>
        <p>Your Canva account has been successfully linked to Awakenings Massage Company's social media system.</p>
        
        <div class="auth-details">
            <h3>🎨 What's Now Available:</h3>
            <ul style="margin-left: 1.5rem;">
                <li>✅ Automatic design creation for social media posts</li>
                <li>✅ Professional Instagram post designs (1080x1080)</li>
                <li>✅ Facebook cover and post designs</li>
                <li>✅ Instagram story templates (1080x1920)</li>
                <li>✅ Export in PNG, JPG, and PDF formats</li>
                <li>✅ Branded designs for Awakenings Massage Company</li>
            </ul>
        </div>
        
        <p style="background: #e7f3ff; padding: 1rem; border-radius: 6px; margin: 1rem 0;">
            <strong>📋 Token Details:</strong><br>
            Access Token: ${access_token.substring(0, 20)}...<br>
            Expires: ${expires_in} seconds<br>
            ${refresh_token ? `Refresh Token: Available` : ''}
        </p>
        
        <a href="/" class="btn">🏠 Return to Main Page</a>
        
        <div style="margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid #eee; color: #666;">
            <p><strong>🏢 Awakenings Massage Company</strong></p>
            <p>📍 2402 North Nevada Avenue, Colorado Springs, CO</p>
        </div>
    </div>
</body>
</html>
        `);
        
    } catch (error) {
        console.error('❌ Token exchange failed:', error.response?.data || error.message);
        return res.redirect(`/?error=${encodeURIComponent('token_exchange_failed')}`);
    }
};