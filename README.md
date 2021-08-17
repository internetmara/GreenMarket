<p align="center">
 <img src="https://user-images.githubusercontent.com/76984497/129493224-b39dbe43-4a7d-41f3-8447-27ede4304105.png">
</p>


## Green Market is a online directory that allows users to browse, purchase and locate local goods and services.

[Live Demo](link not yet available!)

## Background and Overview

We live in an increasingly disconnected society despite having more access to communication than ever in history. At the same time, we import products from all over the globe, which comes at a huge environmental cost. The impact of transportation and large-scale consumption has widespread effects on all of us. At Green Market, we believe in something very simple – we can do better.

Green Market is an app where users can connect with their local community to find goods and services. Users can find and list items in their local community to trade with their neighbors.

We will need to: 
  * Build a database to store user and item data
  * Construct a Web application for visualization of and interaction with the user's location data and market items

## Functionality & MVP

   - [ ] Hosting on Heroku 
   - [ ] User authentication: sign up and log in
   - [ ] Data visualization of environmental infographic/motivation using Footprint Network API
   - [ ] Saving of user's products & services data to database
   - [ ] Products and services appear on an interactive map of nodes
   - [ ] Index page of items
   - [ ] Show page with information about a sellers's products and/or services
   - [ ] Production README

#### Bonus Features
   - [ ] Ranking system to promote user interaction
   - [ ] Search functionality with pre-set categories
   - [ ] Integrate websockets for direct messaging (double super bonus)

## WireFrames

Home Page
![Home Page](https://user-images.githubusercontent.com/76984497/129492600-67220be2-cc13-446d-80c4-0a2cacb883aa.png)

User Auth Modal
<img width="525" alt="userlogin" src="https://user-images.githubusercontent.com/76984497/129775930-50368b7a-2cc9-49ab-8e62-c6511d0f5aff.png">

Map View
![GreenMarketMapShow](https://user-images.githubusercontent.com/76984497/129601868-fed9cc63-ea7a-45d0-9681-4317581abe33.png)

Item Pop-ups
![GreenMarketItemPopup](https://user-images.githubusercontent.com/76984497/129601820-67ec15c6-33ac-4f4f-bbe9-83e0e5a1e1d1.png)

User Popup
<img width="775" alt="usershow" src="https://user-images.githubusercontent.com/76984497/129775809-01dc9f58-2985-44d2-bc6f-4b0ca4a4f351.png">


## Technologies & Technical Challenges

Green Market’s core application is a single page user app, with a backend designed to save user authorization and data. The data will be collected via user input and stored using AWS and Mongo DB. Data will be visualized on the frontend using Express, React, and Node JS.

  ##### Backend: MongoDB/Express
  ##### Frontend: React/Node.js using D3 for data visualizations

Technical challenges: 

Collecting other information (e.g., time and date tab opened) from the objects returned by API methods
Obtaining impactful data for various APIs
Implementing new technologies within the MERN stack

##### Backend: MongoDB/Express 

The user data will be stored as nodes in a tree structure. Each node object will contain the following properties: 

time accessed  
user data
product and service data
reviews

##### Frontend: React/Node.js 

The data will be visualized in an application using a library and will take the form of scrollable index. The app will also provide category filters and potentially search capability.

## `Framework:`
* Mongo DB
* Express
* React.js
* Redux.js
* Node
* Webpack
* Amazon AWS S3

```javascript
//code snippet
```

## Accomplished over the Weekend

  - All members of the team read the MERN tutorials
  - Set up database
  - Set up wiki, wireframes and sample state
  - Wrote proposal Readme and planned work for the week

## Group Members & Work Breakdown

* **Christopher Dell'Acqua** - Backend Lead
* **Erik Ingebretson** - Frontend Lead
* **Mara Finkel** - Team Lead
* **Veronika Pilipenko** - Frontend/Backend Asst.

### Monday - Initial structure
  - Continue and complete the basic work from Sunday - **All**
  - Decide which data to save in database, and how to structure it - **All will discuss**
  - Implement user authorization on database backend/Build login view - **Chris** 
  - Build skeleton React site -  **Erik**
  - Investigate Google API methods and test collection of data - **Mara/Erik**
  - AWS S3 setup - **Veronika/Mara**
  - Write and test methods to save browser data to database - **Erik/Chris**
  - Look at environmental data visualization libraries - **Mara**

### Tuesday - Implementation
  - Connect user authorization database to front end - **Chris/Erik**
  - Meet to decide duties for next three days **All**
  - Photo submit form - **Veronika**
  - Map - **Mara**

### Wednesday - Implementation/Debugging
  - Continue implementation of visualization on Web application 
  - Add methods to fetch data for popups in visualization
  - Run tests
  - Styling/CSS

### Thursday - Testing/Debugging/Bonus
  - Complete visualization of data on Web application 
  - Add popups to visualization
  - Make seed/demo data and visualizations for guest user
  - Final CSS
  - Adding bonus features

### Friday - Presenting
  - Finish testing and debugging - **All team members** 
  - Complete Production README.md - **Mara** 
  - Refine design/CSS 


<p align="center">
 <img width=400 src="https://user-images.githubusercontent.com/76984497/129493261-2379644a-306e-4791-9edb-d2b601f8a967.png">
</p>
