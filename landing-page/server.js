const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the landing-page directory
app.use(express.static(__dirname));

// Main landing page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Canva OAuth callback endpoint
app.get('/canva-callback', (req, res) => {
    res.sendFile(path.join(__dirname, 'canva-callback.html'));
});

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

// API endpoint to handle Canva auth code exchange (for future use)
app.post('/api/canva/exchange-token', express.json(), (req, res) => {
    const { code, state } = req.body;
    
    // In a real implementation, you would:
    // 1. Verify the state parameter
    // 2. Exchange the code for an access token
    // 3. Store the token securely
    // 4. Return success/failure
    
    console.log('Received auth code:', code);
    
    res.json({
        success: true,
        message: 'Authorization code received successfully',
        timestamp: new Date().toISOString()
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🌟 Awakenings Massage Company - Canva Sync Server`);
    console.log(`🌐 Server running on http://localhost:${PORT}`);
    console.log(`📍 Landing Page: http://localhost:${PORT}`);
    console.log(`🔗 Callback URL: http://localhost:${PORT}/canva-callback`);
    console.log(`\n🎨 Use this callback URL in your Canva Developer App settings:`);
    console.log(`   http://localhost:${PORT}/canva-callback`);
    console.log(`\n🏔️ Ready to connect Canva for Awakenings Massage Company!`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down Canva Sync server...');
    process.exit(0);
});