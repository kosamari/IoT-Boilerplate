# IoT Boilerplate
This is a boilerplate to create Node.js IoT system with Arduino and Socket.io
I have been using this system for most of my network controlled hardware project.

## System
The system is divided to of 3 parts.

0. Web server (hosts controller website & socket.io connections) `server.js`
0. Controller website `views/controller.html`
0. Arduino Client `client.js`

## Demo Setup
For sample, I've included small code to turn LED on and off from website, & receive message on webserver when button is pressed.

0. Set up your hard ware as below  
![demo setup](https://cloud.githubusercontent.com/assets/4581495/10714188/3076004e-7ab8-11e5-88d2-0c1ac65c387e.png)
0. From your computer (or on your server) start a server `node server.js`
0. From your computer connected to Arduino via USB, start Arduino client  `node client.js`
0. Open `localhost:5030` in your browser to see controller site

**note:** if you are running `server.js` and `client.js` from different computer (i.e `server.js` on hosting service & `client.js` on your Raspberry Pi) You'll need to change socket.io address in `client.js` and `views/controller.html`

## Setup for your own system
- For hardware setup, I recommend browsing [Johnny-five doc](http://johnny-five.io/) and edit `client.js`
- You can add as many socket message as you like and customize your controller website by editing  `server.js` and `views/controller.html`.
