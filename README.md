# Chat_Application
## To make localhost server available on LAN :
1)	Open cmd and type “ipconfig”
2)	Search for wireless LAN adapter Wifi IPv4 address ( Keeps on changing )
3)	Open browser(client), type http://[IPv4 address]:[server port]/
4)	Eg. http://192.168.1.7:3000/

## To make localhost server available on Internet:
1)	Open ngrok.exe
2)	Type:> ngrok http [server port] 	Eg. ngrok http 3000
3)	Copy any of the 2 given URLs in browser to access local server from any network. 

## Steps:
(1)	Install Node.js on your system. https://nodejs.org/en/download/
(2)	Run commands:
- npm install -g nodemon          //installs the nodemon module globally
- nodemon [app name] Eg. nodemon app.js (Starts the local server) 
(3)	Note the local server address from above. Eg. 3000
(4)	Start the public server using the following steps:
- Open ngrok.exe
- Type:> ngrok http [server port] 	Eg. ngrok http 3000
- Copy any of the 2 given URLs in browser to access local server from any network.
