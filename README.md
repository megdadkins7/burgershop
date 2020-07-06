# Bob's Restaurant App

In this code assessment you will be creating a simple React App to help Bob manage his burger restaurant. It will have a simple calendar, a scheduling tool, a place for him to save names for his burger-of-the-day, and a user management tool for creating/editing/deleting users.

Bob is a simple man, so make sure the App is simple and intuitive. I list some `screens` below, but feel free to be creative and combine these screens or to break them down even more. So long as it's easy, Bob will be happy.

Feel free to be as creative as you want. Make this App however you think is the best way.

When you're done, either post this project to a private Git repo you can give share access to, or zip it up (without node_modules/) and send me that.

## Requirements

The only hard requirement is that you must use a modern version of React. The patterns you use within your React code is totally up to you. This App was bootstrapped with CRA (Create React App).

Feel free to use any additional frameworks or libraries you'd like. Some of the libraries and frameworks we like are:

- Axios
- Redux
- Thunks
- Styled-Components
- Prettier
- Moment.js
- Jest

## Getting Started

To get started with, just run the following commands:

```
npm install
npm start
```

Starting the App will kick off two processes: the React App and a simple API. The API is powered by [json-server](https://github.com/typicode/json-server). Refer to `json-server`'s documentation for how to query, edit, delete and create new records. The API intentionally has a small delay in response time.

The webserver can be accessed at:

- [http://localhost:3000](http://localhost:3000)

The API is proxied and can be found at:

- [http://localhost:3001/burgers](http://localhost:3001/burgers)
- [http://localhost:3001/schedule](http://localhost:3001/schedule)
- [http://localhost:3001/users](http://localhost:3001/users)

## Expected Screens

#### Login Screen

When first accessing the site the user will have to enter their username and password. You'll ping the API looking for a user with that username and checking if the password is valid. If so store their information (minus the password) in LocalStorage. If the login fails, an error message should be displayed.

#### Main Dashboard

The first screen the user sees after logging in will be a Dashboard that displays the week's schedule. Feel free to be as creative as you want here, but the following information for each day should be displayed:

- List of staff working that day
- The burger of the day

#### User Management

This tool will display a list users and provide methods to create/edit/delete them. Only admins like Bob should have access to this tool. A few rules to managing users:

- Only admins can manage users
- Admins can't change their own admin/user status
- Bob must always be an admin

#### Schedule

A very simple screen to mark what days staff members work. No need to worry about hours, and since Bob only occasionally changes the schedule, using this tool will just update everyone's current schedule. He never plans too far ahead or intends to see who worked when. Bob's lazy.

Bob also wants a way to select the burger-of-the-day for each day on this screen. He saves his burger names in the next tool.

A few rules for scheduling:

- Bob and Linda work everyday
- The rest of the staff must work weekends and have two days off a week

#### Burger of the Day

Bob just needs a simple tool where he can save names for his burger of the day. He should be able to edit and delete them as well. These burger names should only be accessible to users with `burgerAdmin` access.

## Bonus Points

- Tests
- Great UX/UI
