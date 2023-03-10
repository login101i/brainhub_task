
# BrainHub app

A simple app with form where you can add your event name to our data base. 
Just type in your first name, last name, event date and your email. 
Then, after completing the form correctly, press the save button.
Be aware that you can add only one event
that will be connected with unique email address. Do not wait, try it.


# Getting started with a project:

### Info: 
The project was created in React
  [Create React App](https://github.com/facebook/create-react-app). with node v16.16.0


## File structure


#### `backend` - Holds the server application.
- #### `__tests__` - This folder holds  test for unit and integration tests .
- #### `config` - This holds our configuration files, like mongoDB uri and connection with dataBase.
- #### `controllers` - These hold  callback functions that each route will call.
- #### `models` - This holds all of our event model.
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url.
- #### `utils` - Util functions which distributed on backend.
- #### `server.js` - Defines connection with server on specific port.
- #### `app.js` - Defines connection with server on specific port.

#### `frontend` - Holds the frontend application.
- #### `public` - This holds roof file of a project.
- #### `src`
    - #### `__tests__` - This folder holds main test for frontend components.
    - #### `appState` - This folder holds login for app data provider. There you can find initial state and later after running project, current state of the app.
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `infrasctructure` - These will be for app theme files such like colors, fonts or main bigger components structure of app.
    - #### `mocks` - Here you find server setup for mocking backend endpoints for testing purpose.
    - #### `utils` - You will find here util functions which are distributed on whole app.
    - #### `App.js` - This is what renders all of our browser routes and different views.
    - #### `index.js` - This is what renders the react app by rendering App.js, should not change.
- #### `package.json` - Defines npm behaviors and packages for the client.
- #### `....` - Configure files for purpose of this project.

#### `.gitignore` - Tells git which files to ignore.
#### `README` - This file!
#### `jest.config.js` - configuration file for backend tests.
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README.


## Available Scripts


In the project directory, you can run below script to install packages for backend:


```sh
 npm install
```

Switch to frontend location and install required packages for client side by running the same script. 


Here you go! Go to project directory and run below script:

```sh
npm run dev
```

It runs both the client and the server at the same time in development mode.
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

If this process to open project with this method seems too long for you try run client and server separately by choosing :

```sh
npm run client
```

Runs just the client app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.

```sh
npm run server
```

Runs just the server in development mode.<br>


```sh
npm run build
```
Runs one of those to test unit or integration tests for backend.<br>

```sh
npm run test:unit
```
```sh
npm run test:integration
```
If you want to test client side just go to ../frontend location and run:

```sh
npm run test
```

If you are in ../frontend location run: 

```sh
npm run build
```

It correctly bundles React in production mode and optimizes the build for the best performance.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn how to setup a local MongoDB instance for testing, check out how to [Connect to MongoDB](https://docs.mongodb.com/guides/server/drivers/).

To learn how to deploy a full-stack web app to heroku, check out [this great guide](https://daveceddia.com/deploy-react-express-app-heroku/).

To learn React, check out the [React documentation](https://reactjs.org/).
