# 3 Reducers
A simple react redux counter example with Jest testing 

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [React Component Structure](#react-component-structure)
* [Redux State Tree](#redux-state-tree)
* [Setup](#setup)
* [Testing](#testing)

## General info
This application is pretty traditional in the fact of being a single paged react app served on Express. We have 4 components in which all state is globally available via the redux store.
	
## Technologies
Project is created with:
* React
* Redux 
* Node & Express
* Webpack v.4
* Babel v.7
* Jest & Testing Library

## React Component Structure
We have 4 components for the application. All of them are funcional components.  
The components:
<App /> : Houses all the other components and contains two buttons to dispatch actions that increase all three counters or decrease all three counters by one.
<A /> : A component to show the local counter, a global counter and exposes two buttons that increment or decrement the local counter by 1. 
<B /> : Same as component <A /> only the local counter is seperate from A's local counter.
<Logger /> : This component is a basic list of all actions that have come through the reducer. With the lattest action type will appear first on the list and the last item on the list is the oldest action to pass through.

	
## Redux State Tree

Our State Tree starts like this:
```javascript
{
  A: { count: 0 }, 
  B: { count: 0 },
  global: {
    count: 0,
    log: []
  }
};

```

## Setup

Clone and move into the new directory
```bash
$ git clone https://github.com/M-garrigan/3-Reducers.git

$ cd 3-Reducers
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

Test files are nested in the src directory next to their respective component. 

This command will run all tests
```
$ yarn test
```