# Build React app
npm install
npm run build

# Deploy to Hostinger via FTP
echo "Deploying to Hostinger..."
lftp -c "open -u u252975527.cavrsa,R25572983cavrsa, ftp.cavrsa.com; set ssl:verify-certificate no; mirror -R dist/ /public_html/"
echo "Deployment to Hostinger complete."
