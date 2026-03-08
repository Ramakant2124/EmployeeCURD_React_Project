# EmployeeCURD_React_Project

## Project Setup
To create and initialize a new React project using Vite:
```
npm create vite@latest project_name
```
Go to the project folder:
```
cd project_name
```
Install required modules:
```
npm install
```
Run the project:
```
npm run dev
```
## Installing Dependencies
Install the required packages for UI, routing, forms, mock server, HTTP requests, and icons:
•	Bootstrap – For responsive UI and components
```
npm i bootstrap
```
•	React Router / React Router DOM – For client-side routing
```
npm install react-router
```
```
npm install react-router-dom
```
•	React Hook Form – For form handling and validation
```
npm i react-hook-form
```
•	JSON Server – To create a mock backend API
```
npm i json-server
```
•	Axios – For HTTP requests (GET, POST, PUT, DELETE)
```
npm install axios
```
•	Bootstrap Icons – For vector icons
```
npm install bootstrap-icons
```
## Running JSON Server (Mock Backend)
To start the JSON Server, navigate to the terminal and run:
```
npx json-server db.json
```
This will serve the database (db.json) and allow you to perform CRUD operations for testing.
## Importing Bootstrap
To use Bootstrap styles and components in your project, import the CSS and JS files from node_modules:

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// JS
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
## Project Folder Structure Example:
project_name/
│
├── node_modules/
│   └── bootstrap/
│       └── dist/
│           ├── css/
│           │   └── bootstrap.min.css
│           └── js/
│               └── bootstrap.min.js
│
├── src/
│   └── main.jsx
│
├── db.json
└── package.json
## Application Flow
The project architecture follows a client-server-database flow:
1.	UI / Client → Interacts with → Server (Mock / Fake) → Fetches data from → Database (db.json)
2.	Database → Sends data to → Server → Returns data to → React Client (BHEEM UPI)

***Ramakant Chaudhari***
