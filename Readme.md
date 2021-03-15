# Employee Manager V2

This project is a user register login, and authenticate web application. Using server side routing middleware to host static file. Create a custom API, using JSON file to store data. Fetch data and display it on the client side.

### Dashboard
Endpoint dashboard is a derver side rendering page, fetch api request, read json data file, using custom event controller send back to the client side.


__Install__. 
To start install the project node_modules by running ```npm install```

__Development__. 
Start the server so the client can access the api ```npm run server```.  Make sure your are in the employee-manager directory when you run this command. To view any edits you make run ```snowpack dev``` from the employee-manager root folder. The project should run on localhost:3000

__Production__. 
When your read to deploy to Netlify you first must build a deployment build of the client site. To do this run ```snowpack build```. This will create a new folder called www inside the employee manager folder. This folder contains the optimized production bundle. Once you have this folder created commit your changes to git and visit your Heroku app an test your project. 

__Data Reset__. 
There is an api route /api/departments/reset that will copy the original data back to the employee.json file. You can run this command locally from the browser by running ```http://localhost:5000/api/departments/reset```

