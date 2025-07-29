@echo off
echo Starting Vercel deployment...
echo.
echo Step 1: Logging in to Vercel
vercel login
echo.
echo Step 2: Deploying to production
vercel --prod --yes
echo.
echo Deployment complete!
pause