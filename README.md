# Countries Search with Name and Alpha Code.

## Description

This project is developed to display rest countries API data in tabular form.
Filteration is done on name and alpha code.
Application is responsive for almost all devices.

## Views

These are the views for the REST Countries lsiting.

1. **Home view**

    This view is showing the hardcoded data with User name from the .env file
 
2. **Countries list view**

    This view is showing the list of the countries in a table along with alpha code,
    There is input field which is used for the search country by name or by alpha code.

## Some technical details for developers

### This is a [react.js] project bootstrapped with [`create-react-app`](https://create-react-app.dev/).

To learn more about reactjs, take a look at the following resources:

- [Learn reactjs](https://reactjs.org/docs/getting-started.html)
- [learn create-react-app](https://create-react-app.dev/) 

#### To run the Project locally

**Install dependencies**

run the fowllowing command to install the dependencies

> npm install


**Run project**

run the following command to run the project

> npm start

Once you're done with app started on localhost 3000

Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.

### API endpoints

Frontend consumes the following endpoints from rest countries API [full documentation here](https://restcountries.com):

| Endpoint              | Usage in views         |
| --------------------- | ---------------------- |
| GET /all              | Countries Lisitng View |

### Routing

Routing of this application is managed with well known package named [`react-router-dom`](https://reactrouter.com/docs/en/v6/getting-started/overview) .

When we need to add a new route, we have to go to routing file placed in `src/routes/routing.tsx`. 
We will register new route here with a unique path.

### TypeScript

All `typescript` interfaces are placed in `src/models` folder. This approach will help us to understand the expected reponse of each API.

### Models

This app is using [Typescript](https://www.typescriptlang.org/), which has better readability, predictions and more rich IDE support compared to regular JavaScript. It also makes it easy to early identify bugs and refactor faster.

**Run project Tests**

Run the following command to run the cypress tests

> npx cypress open

**Run project Tests code coverage**

When you're done with the cypress tests now you can see the code coverage
in the coverage folder under following address

coverage/Icov-report/index.html

Run this file in the browser to see the code coverage of your app.

Feel free to contact me if you need any assistance.

Happy coding :-)