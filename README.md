<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

_About this project:_

This is the backend API for the Finance Tracker app, which allows users to manage their financial transactions.



## 🚀 Quick Start

1.  Clone and Install packages.
    Use _git clone_ to download this repo into your machine, navigate to the project folder and use _npm_ to install dependencies.
    
        .
        npm install

3.  RUN MIGRATIONS TO CREATE A SEED DATABASE
       
        equelize init
        npm run migration_seed

5.  CREATE AN .ENV FILE IN THE MAIN DIRECTORY CONTENT WITH YOUR LOCAL VARIABLES use port 4000

        APP_PORT=4000
        APP_DB_PORT=3306
        DB_HOST=localhost
        DB_USER=root
        DB_PASS=password
        DB_NAME=tracker_database
        DATABASE_URL=mysql://root:password@localhost/tracker_database
    
6.  RUN THE PROJECT

        npm run dev


## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Express JS project.

    .
    ├── node_modules
    ├── src
    ├── .babelrc
    ├── .gitignore
    ├── index.js
    ├── package-lock.json
    ├── package.json
    └── README.md

    

1.  _`/node_modules`_: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  _`/src`_ This directory contains the source code of the Finance Tracker backend, including route handlers, middleware, and database models.

3.  _`.babelrc`_ Babel configuration file for transpiling modern JavaScript to a compatible version for Node.js.

4.  _`.gitignore`_ This file tells git which files it should not track / not maintain a version history for.

5.  _`index.js`_ The entry point of the application, where the server is initialized and routes are defined.\*

6.  _`package-lock.json`_ (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. _(You won’t change this file directly)._

7.  _`package.json`_: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

8.  _`README.md`_: A text file containing useful reference information about your project.



## RUN ALL TEST

    npm run tes
