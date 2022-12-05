# Eurisko articles

## this react project was created using npm create vite@latest

Vitejs is a modern technology, and is recently being widely recommended to be used instead of create-react-app. It is considered to be better use for production applications, it also is significantly faster than create-react-app…

For more on Vite: https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/

## Run this project:

1- Open on Visual Studio Code and run: npm install 

2- Then run: npm run dev

3- Command click on http://127.0.0.1:5173/ when it appears in the terminal, or enter http://localhost:5173/ in the browser

video preview of the project: http:// link

## Description
This project is composed of a login screen and a dashboard screen, when the user logs in with the correct credentials, he is sent to the dashboard page where he can navigate between articles and read their content.

### Tech: 
API’s are being handled using Axios, Async thunks & Redux Toolkit. 
- The official documentation of redux has been strongly recommending the use of redux toolkit since 2019, it is an advocate of simple, clean, structured and reusable code.
- Axios is a popular package which providers very useful features especially when working on bigger projects, like interceptors and defaults for example

### Product features:
- The Login screen is responsive to most commonly used mobile devices, and the dashboard cards as well.
- Upon login success the user is greeted with a success message.
- The cards on the dashboard screen have a simple clean design and a corner button which when is clicked, shows a longer paragraph from the article if available. If not available, details are provided about the article and a bottom link is shown in both cases that allows the user to see the full article on NY Post.
- The dashboard screen contains a custom top bar which has a search field, a button to turn tooltips on/off and a theme switch where both of the latter effect all the elements of the application.
- The user may pull down to refresh by pulling down the screen by a pointer click & drag.
- The styling of the 404 page is randomized on reload.
- The login logo is randomized on reload.
- The article's card image is randomized on reload.
- Responsive Loading Skeletons that match the article's main card style and count.
- Loader animations where necessary.
- Info alerts where needed.

### Main Libraries:
- axios
- redux
- react-redux
- reduxjs/toolkit
- react-router-dom
- react-share
- react-simple-pull-to-refresh
- react-toastify
- uuid

UI Libraries:
- @mui/icons-material
- @mui/material












