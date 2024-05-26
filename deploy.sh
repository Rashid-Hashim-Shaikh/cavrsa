# Build React app
npm install
npm run build

# Deploy to Hostinger via FTP
echo "Deploying to Hostinger..."
curl -T dist/* -u u252975527.cavrsa:R25572983cavrsa ftp://ftp.cavrsa.com/public_html/
echo "Deployment to Hostinger complete."
