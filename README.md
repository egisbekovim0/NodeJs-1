To install and run this project we would need a npm, node package manager, with npm init we create node modules and package json. Then we should write  npm install express, 
npm install body-parser, npm install path that we use further in our project. Express provides us a router and application, with path we can join the path to folders and their files,
and with body-parser we parse json and get right results. We defined port 3000 so we run node server.js and it will run on port 3000, I don't use nodemon, just use node command. By the
way we can also use nodemon. 
So overall my project has routers, views and script. As we can see in public folder we have client side script, and our server script is outside in the project itself, we have routers 
to go to that routes like bmi or home. So that is it for now! 

IMPORTANT!!!
I didn't use res.sendFile  '/' for index.html, because by default project opens index.html, I used get method with that for opening res.SendFile '/' home.html
