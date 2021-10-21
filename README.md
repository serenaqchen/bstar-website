# BStar Website

![bstar-white-logo-blue](https://user-images.githubusercontent.com/77710705/137644643-904b10e3-4bb7-45de-ae57-a38676e94d73.png)

## Overview

Bstar Website is a :sparkles:revamped:sparkles: version of the [old Bstar Website](https://www.bstarbar.com/) with improved UI and a new weather forecast feature. By improving the UI and adding new features, this will allow for easy to read menus and a smoother outdoor dining experience. This project will be using OpenWeather API to access weather forecasts and menu items will be stored in a database. 

This application is currently live on [Heroku](https://bstar-website-revamped.herokuapp.com/).

## Techstack (PERN) 

### Languages

- HTML/CSS
- JavaScript 
- JSX

### Frameworks

- Postgress
- Express
- React
- Node

## Installation/Running my application 

### Prerequisites 

#### Docker

This project relies on Docker to run the PostgreSQL server. You must install
Docker first before continuing.

Once you've installed Docker Desktop, you'll need to launch the app. On macOS,
it's located in `/Applications/Docker`.

#### Node

You'll need to install Node v14 or above.

### Set Up the Development Environment

#### Install NPM Packages

```sh
npm install
```

#### Start the Development Environment

```sh
npm start
```

Visit <http://localhost:3000>.

#### Shut Down the Development Environment

1. `Ctrl-C` to stop the Express and React development servers.
1. `npm stop` to stop and destroy the PostgreSQL Docker container. Don't worry,
   your data is safe.

## Mock Up/User Flow/Data model

### Mock Up
Chekout my wireframe for this project on [Figma](https://www.figma.com/proto/6ILKBjLqLqUSW6qRvxu8e3/Bstar-Website?node-id=10%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=10%3A2).

### User Flow
<img width="1030" alt="Screen Shot 2021-10-17 at 2 40 21 PM" src="https://user-images.githubusercontent.com/77710705/137645943-fc2da92d-7580-43f9-80f5-25e5b46baf62.png">

### Data Model
<img width="1035" alt="Screen Shot 2021-10-17 at 2 39 14 PM" src="https://user-images.githubusercontent.com/77710705/137645906-f11a5d1c-6803-4bdc-bc2e-8e28f4105d79.png">

## Difficulties/Unresolved Problem

## Future Development
- Include login for users/admin user
   - Users can favorite/unfavorite a menu item 
   - Admin can directly add, delete, or edit items on the menu 
   - Able to log out 
- Able to actually purchase gift cards
- Able to make orders 
- QR code that goes straight to the menu 
- Link instagram api to page to display photos 
