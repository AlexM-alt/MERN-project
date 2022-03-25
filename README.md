### Run The App Locally

- npm run install-dependencies
- rename .env.temp to .env
- setup value for - MONGO_URL, JWT_SECRET, JWT_LIFETIME
- npm start
- visit url http://localhost:3000/

### Setup React App

- create 'client' folder
- open terminal 
- cd client
- npx create-react-app@latest .
- npm start
- set editor/browser side by side
- copy/paste assets from complete proejct

### Spring Cleaning

- in src remove
- App.css 
- App.test.js
- logo.svg
- reportWebVitals.js
- setupTests.js
- fix App.js and index.js

### Title and Favicon

- change title in public/index.html
- replace favicon.ico in public
- resource (favicons) [https:favicon.io/]

### Normalize.css and Global Styles

- CSS in JS
- saves times on the setup
- less lines of CSS
- speeds up the development
- normalize.css
- small CSS file that provides cross-browser consistency in the default styling of HTML elements.
- (normalize)[https://necolas.github.io/normalize.css/]
- npm install normalize.css
- import 'normalize.css' in index.js
- SET BEFORE 'index.css' 

### Landing Page
- zoom level 175%
- markdown preview extension
- get something on the screen with
- react router and styled components right after
- create page directory in the source
- for now Landing.js
- create component (snippets extension) (rafce cl   )
- setup basic return

````js
<h4>Landing Page</h4>
````

- import logo.svg and main.svg
- import Landing in A