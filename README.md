# B Star Website

![bstar-white-logo-blue](https://user-images.githubusercontent.com/77710705/137644643-904b10e3-4bb7-45de-ae57-a38676e94d73.png)

## Overview

B Star Website is a :sparkles:revamped:sparkles: version of the [old B Star Website](https://www.bstarbar.com/) with improved UI and a new weather forecast feature. By improving the UI and adding new features, this will allow for easy to read menus and a smoother outdoor dining experience. This project will be using OpenWeather API to access weather forecasts and menu items will be stored in a database.

This application is currently live on [Heroku](https://bstar-website-revamped.herokuapp.com/).

![Homepage](https://user-images.githubusercontent.com/77710705/141378531-780527d0-8998-4cb9-8aca-1814a144bf39.gif)

## Inspiration

B Star is a well loved and family owned restaurant located in the Richmond District of San Francisco. Although their food tastes amazing, their website on the other hand, is a little lack luster. I know that sometimes great things don't have to come from original ideas, it could come from taking what's there and making it exponentially better. So I decided to challenge myself and recreate a B Star's website and give it more functionality.

### Functionality

- Menu is in database and not an image
- Can filter through menu depending on dietary restrictions
- Can check current weather and 5 day forecast before making outdoor seating reservations 
- Can check when restaurant is located on map and links to google maps for directions 
- Static pages/important tabs are not accessible and easy to find


## Tech Stack (PERN)

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

#### API Keys
This application utlizes Open Weather Map API and Google Maps API. Follow the steps to set up keys in the app.
- Create API Keys ([Open Weather Map API](https://openweathermap.org/) and [Google Maps API](https://developers.google.com/maps))

##### Open Weather Map API
1. At root folder: create an .env file and copy contents of .env.example 
2. Replace variables with appropriate values and create new var to assign your own Open Weather Map API key

##### Google Maps API
1. In Google Maps API application interface, restrict your API key to a specific IP address/website domain
2. In app/src/Reservations/Reservations.js, replace the API key in the URL within the iframe tag

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

<img width="1035" alt="Screen Shot 2021-10-17 at 2 39 14 PM" src="https://user-images.githubusercontent.com/77710705/141376198-572e13de-e68c-4cb5-86ec-ce6eca7ddd2b.png">

## Difficulties/Unresolved Problems

- Creating a relational database that allows for quick and easy queries to get what I want (I originally started out with two tables, and mornalizing it to 5)
- Coding the UI for the filter function was difficult for me. I started out making it over complicated and changed the set up of my database. I had to take a step back and rethink my approach and logic.
- Currently, my google maps API is exposed in the frontend. I've restricted it to only give access to my heroku app, so I think is should be fine.

## Future Development

- Include login for users/admin user
  - Users can favorite/unfavorite a menu item
  - Admin can directly add, delete, or edit items on the menu
  - Able to log out
- Able to actually purchase gift cards
- Able to make orders
- QR code that goes straight to the menu
- Link instagram api to page to display photos
