// Week of 14 Homework Node Express Handlebars
// Introduction

// You will create a burger logger with a homemade ORM (yum!), MySQL, Node, Express, handlebars using the MVC design pattern.

// You will use Handlebars to generate HTML.

// You will use Node to connect to your MySQL database and Express to handle routing.

// see demonstration of how it works

// App Summary

// Eat-Da-Burger! is a fun app that lets a user input the name of a burger they want to eat.

// Once submited, the burger is displayed in text on the left side of the page where it's waiting to be devoured.

// Each burger in the waiting area also has a Devour it! button. Once clicked, the burger will move to the right side of the page.

// Every burger entered is stored in the database

// Remember

// You will be fully capable of doing this homework by the end of Saturday's class.

// Setup and steps

// This is how your homework should look like when done:

// watch the demonstration of how this app works with this file in the repo: burger_demo.mp4
// App setup:

// DB Setup:

// Part One



//     5. In the db folder, Create a `seeds.sql` file

//     6. Put insert sql queries inside of the `seeds.sql` file to populate your tables with data

//     7. Run the `schema.sql` and `seeds.sql` files

//     8. navigate to the db folder in this app
//     9. get into mysql
//         maybe it's `mysql`
//         or `mysql -u root -p`
//     10. run this first: `source schema.sql` - this will make the database and the table inside of it
//     11. run this second: `source seeds.sql` - this will populate the table with data
//     12. get out of mysql by typing and executing `exit`
// Config Setup:

// 1. Inside your `burger` directory create a directory named `config`

// 2. Create the `connection.js` file inside `config` directory

//     3. Inside the `connection.js` setup the code to connect Node to MySQL

//     4. Export the connection

// 5. Create the `orm.js` file inside `config` directory

//     6. Import `connection.js` into `orm.js`

//     7. Inside the `orm.js` file create the code that will execute MySQL commands

//     8. Export the orm
// Model setup:

// 1. Inside your `burger` directory create a directory named `models`

//     2. Create a `burger.js` file.

//         3. Inside `burger.js`, import `orm.js` into `burger.js`

//         4. Inside `burger.js` create the code that will call the orm functions using burger specific input for the orm

//         5. Export at the end of the `burger.js` file
// Controller setup:

// 1. Inside your `burger` directory create a directory named `controllers`

// 2. Create the `burgers_controller.js` file

// 3. Inside `burgers_controller.js` file import
//     * express
//     * router
//     * burger

//     4. Create the routes for the app, and export the routes at the end
// View setup:

// 1. Inside your `burger` directory create a directory named `views`

// 2. Create the `index.handlebars` file inside `views` directory

// 3. Create the `layouts` directory inside `views` directory

// 4. Create the `main.handlebars` file inside `layouts` directory

// 5. Setup the `main.handlebars` file so it's able to be used by Handlebars

// 6. Setup the `index.handlebars` to have the template that Handlebars can render onto

// 7. Create a button in `index.handlebars` that will submit the user input into the database
// Copyright
// Coding Boot Camp (C) 2016. All Rights Reserved.


// //node
// express

// mysql as database

// handlebars to serve HTML

// most of the acations happenson eth same page

// launch nodenon to start server


// Once hits submit will hit on the left side, 
// move to the right side its eaten

// // then devour it! button --for each butoon 

// "Devour it moves to the right side"