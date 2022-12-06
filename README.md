# Eurisko articles

<p align="center">
  <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
    <img width="180" src="https://vitejs.dev/logo.svg" alt="Vite logo">
  </a>
</p>
<a href="https://axios-http.com" rel="nofollow" align="center">
  <img src="https://camo.githubusercontent.com/272811d860f3fab0dd8ff0690e2ca36afbf0c96ad44100b8d42dfdce8511679b/68747470733a2f2f6178696f732d687474702e636f6d2f6173736574732f6c6f676f2e737667" data-canonical-src="https://axios-http.com/assets/logo.svg" style="max-width: 100%;">
</a>


<div align="center">
  <p>
  <a href="https://npmjs.com/package/vite"><img src="https://img.shields.io/npm/v/vite.svg" alt="npm package"></a>
  <a href="https://nodejs.org/en/about/releases/"><img src="https://img.shields.io/node/v/vite.svg" alt="node compatibility"></a>
  <a href="https://github.com/vitejs/vite/actions/workflows/ci.yml"><img src="https://github.com/vitejs/vite/actions/workflows/ci.yml/badge.svg?branch=main" alt="build status"></a>
  <a href="https://chat.vitejs.dev"><img src="https://img.shields.io/badge/chat-discord-blue?style=flat&logo=discord" alt="discord chat"></a>
</p>
  </div>


Vitejs is a modern technology, and is recently being widely recommended to be used instead of create-react-app. It is considered to be better use for production applications, it also is significantly faster than create-react-app…

For more on Vite: https://blog.logrocket.com/vite-3-vs-create-react-app-comparison-migration-guide/

## Run this project:

1- Open on Visual Studio Code and run: npm install 

2- npm run dev

3- Command click on http://127.0.0.1:5173/ when it appears in the terminal, or enter http://localhost:5173/ in the browser

video preview of the project: https://drive.google.com/file/d/1z4d9sH7edlbEZcE2ak1FhkZVEOTlD025/view?usp=share_link

## Description
This project is composed of a login screen and a dashboard screen, when the user logs in with the correct credentials, he is sent to the dashboard page where he can navigate between articles and read their content.

### Tech: 
API’s are being handled using Axios, Async thunks (Redux Toolkit). 
- The official documentation of redux has been strongly recommending the use of redux toolkit since 2019, it is an advocate of simple, clean, structured and reusable code, source: https://redux.js.org/redux-toolkit/overview#what-is-redux-toolkit
- Axios is a popular package which provides very useful features especially when working on bigger projects, like interceptors and defaults for example

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












