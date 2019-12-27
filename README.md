# Star Wars Planet Viewer
An application to view planets and their residents within the Star Wars universe.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [React Component Structure](#react-component-structure)
* [Routing](#routing)
* [Redux State Tree](#redux-state-tree)
* [Setup](#setup)
* [Testing](#testing)

## General info
This application is pretty traditional in the fact of being a single paged react app served on Express. We have 4 components, 2 client side routes and 3 server side routes. A design decision I made was to eagerly load the components but lazy load the data. This means that there is no server side rendering of the components. I choose this because the 4 components can cover all the views necessary for this application and the components are not that 'heavy'. Although the data for this application is simple json, and therefore relatively lightweight, I choose to request the data at the moment the user is clicking a button or list item. This provides some lag but since we are always requesting small chunks of data from the server they come very quickly. And once the data is in the store, than any subsuquent renders are ready to go and need nothing else from the server.
	
## Technologies
Project is created with:
* React
* Redux & Redux-Sagas
* React-Router
* Node & Express
* Webpack v.4
* Babel v.7
* Jest & Enzyme

## React Component Structure
We have 4 components for the application. All of them are funcional components and utilize hooks. Although the hooks used are useLayoutEffect and useEffect. I have not used any useState/useContext/useReducer as Redux contols all aspects of state. 
The components:
<App /> : Houses client side routes and the landing page. No actions are dispatched from here.
<Galaxy /> : Our main component, as Galaxy houses a Controller and a list of Planets and their respective 'hidden' residents.
<Planet /> : The planet component has a few actions and is able to toggle open and closed to expose the residents that call that planet home.
<Controller /> : This component has the most business logic and most actions/sagas associated with it. That is mainly because you can move incremently by one page or jump to the page you desire.

## Routing

This application exposes both client side routing and server side routing.

Client Side: 
  '/' -- just renders home and the nav bar has some clickable text that will take you back to the landing page.
  '/galaxy' -- this renders the other three components. Of which each component will watch for itself being rendered and start to ask the server for data.

Server Side: 
  '/' -- this returns a file which is out index.html and our bundle.js is called main.js
  '/residents' -- this route is a readonly data endpoint for getting the people that live on each planet
  '/planets' -- this route is also a data endpoint for each of our planets and each 'page' of data

	
## Redux State Tree

Our State Tree starts like this:
```javascript
{
  controller: {
    back: null,
    forward: null,
    pages: null,
    currentPage: null,
    currentPageUrl: null,
    init: false
  },
  galaxy: {
    init: false
  },
  planet: {
    planetActive: ''
  }
};

```

controller - is complete and nothing else is added, only the null become strings, booleans or numbers

galaxy - is where the 'pages' of planets go. I also choose to keep the larger items as key: value pairs as opposed to arrays of data. And the reason I went with key:value pairs is they are constant in lookup as it is very easy to check to see if a key exists and with a bonus if the key:value does not exist javascript will not throw an error.

Below is an example of how I am using the key:value data storeage: 
```javascript
galaxy: {
  ['https://swapi.co/api/planets']: {
    count: 61,
    next: 'https://swapi.co/api/planets/?page-2',
    previous: null,
    results: [],
    etc.....etc......etc....
  }
}
```
You may notice that my api endpoint is my key and the result is my value.

And lastly the planet object contains a similar pattern to the key:value storage system we just saw, the difference is that we are storing queries about individual residents based upon the planet they belong to.

## Setup
This project is formatted as a zip file without node_modules or webpack build directory.
Also I used yarn to handle packages so there is a yarn.lock file.
Lastly there is no .gitignore or .git file as I was not planning to push it to a github repo.

First step is to create an empty folder/directory. This file can be named whatever you want.

Next move the zip file into the empty folder. The zip file is named 'zipFile.zip'

Make sure you are at the head of the folder you have created.
```bash
$ fileNameYouGaveToThisFolder

// unzip the file
$ unzip zipFile.zip

// you can now delete the zipFile.zip if you wish
$ rm zipFile.zip
```

Next we will build the node_modules
```bash
$ yarn install
```

Next we can build for development or production.
As I have seperated the commands you will need a terminal with two tabs open

Developer Build
```bash
// webpack build with watch flag
$ yarn build:dev

// nodemon watched express/node server
$ yarn start:dev
```

Production Build
```
// webpack prod build
$ yarn build

// start node server
$ yarn start
```

Lastly the project will be served on localhost:5005
You can open a web browser and type localhost:5005 into the search bar

*NOTE - this application will look for process.env.PORT before defaulting to port 5005,
        so if you have this environmental variable defined that is why 5005 is not working.


## Testing

This application uses Jest, React-Testing-Library and react-test-renderer for testing.

Test files are nested in the src/ dir next to their respective component.
Most of my testing is targeting the React component internals. I am not very familiar with best practices in regards to testing Redux store, reducers, Redux-Saga and middleware. This is a weakness that I am aware of and I am working to better understand best practices and a more fundamental knowledge of mocking server apis, Redux stores and testing Generator functions.
 

This command will run all tests
```
$ yarn test
```