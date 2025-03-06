# chatbt
ChatBT - Custom AI Chatbot to help you with customer service and automating support tasks

### Run in Production
Build Next.js for production with command:
```
npm run build
```
Run the production app:
```
npm run start
```

### Setup PM2 process manager
Install pm2 package to run nodejs app in the background
```
sudo npm install -g pm2
```
Navigate to the Next.js application directory (eg: /var/www/chagpt)
```
cd /var/www/chatbt
```
Start the Next.js app using pm2:
```
sudo -u nodejs pm2 start npm --name "chatbt" -- start
```
The command above should start the app already. To ensure it starts on boot, run:
```
sudo -u nodejs pm2 startup
```
Finally, save current process
```
sudo -u nodejs pm2 save
```