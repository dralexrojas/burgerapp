# Eat da Burger App

## Overview

This project is a burger app created with MySQL2, Node, Express, Handlebars and Sequelize.

## Expected Outcomes

* App allows users to input the name of a burger they'd like to eat and creates a list in order of submission.

* The app will display the burger on the left side of the page.

* Each burger listed on the page also has a `Devour it!` button that when clicked moves the selected burger to the `Devoured List`.

## NPM Installations

1. Create a package.json file by running `npm init` from the command line.

2. Install the Body-parser npm package: `npm install body-parser`. 

3. Install the Express npm package: `npm install express`.

4. Install the Express Handlebars npm package: `npm install express-handlebars`.

5. Install the Handlebars Helper CSS npm package: `npm install handlebars-helper-css`.

6. Install Method Override npm package: `npm install method-override`.

7. Install MySQL2 npm package: `npm install mysql2`.

8. Install Sequelize npm package: `npm install sequelize`.

## Directory structure

```
├── config
│   ├── config.json
│ 
├── controllers
│   └── burgers_controller.js
│
├── models
│   └── burger.js
│   └── index.js
│
├── node_modules
│
├── models
│   └── burger.js
│ 
├── node_modules
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       └── img
│           └── burgerpic.png
│── views
│    └── layouts
│    |    └── main.handlebars
│    |__ index.handlebars
│
├── .gitignore   
│
├── package-lock.json
│
├── package.json
│
├── README.md
│   
├── schema.sql
│
├── server.js
```
- - -
## Code Sample

### POST Route to create burger with redirect if validation error
```javascript
router.post("/burgers/create", function (req, res) {
  db.Burger.create({
    burger_name: req.body.burger_name
  }).then(function (dbBurger) {
    res.redirect("/");
  }).catch(function(err){
    console.log(err);
    res.redirect("/");
  });
});
```

### PUT Route to devour burger
```javascript
router.put("/burgers/update", function (req, res) {

  db.Burger.update({
    devoured: true
  },
    {
      where: {
        id: req.body.burger_id
      }
    }
  ).then(function (dbBurger) {
    res.redirect("/");
  });
});
```

### Model with validation
```javascript
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      validate: { len: [3, 100] }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
    { timestamps: false 
  });
return Burger;
};
```

### DB Schema
```sql
CREATE DATABASE  burgers_db;

USE burgers_db;
```
---