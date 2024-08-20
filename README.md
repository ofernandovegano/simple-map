## 🚀 Project in production

[https://simple-map-seven.vercel.app/](https://simple-map-seven.vercel.app/)


## 📜 About

Frontend web application to visualize a map and details of the country in which the location is.

The project was deployed using [Vercel](https://vercel.com/).


### 🎯 core function

- Map using [Mapbox](https://www.mapbox.com/).
- Search using [Search Box](https://docs.mapbox.com/mapbox-search-js/api/core/search/).
- Persistent URL to enable share link.
- Responsive for web, iPad, and mobile.
- Toast message to give API feedback to the user.

## 💻 To run it locally

  ### `npm install`

  ### `npm run dev`

### :warning: use .env-example as an example to create a .env file. It is necessary for the project to run locally :warning:

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎨 The project is made with

<p align="left">
  <a href="https://react.dev/">
    <img src="https://skillicons.dev/icons?i=react" />
  </a>

  <a href="https://www.typescriptlang.org/">
    <img src="https://skillicons.dev/icons?i=ts" />
  </a>

  <a href="https://nextjs.org/">
    <img src="https://skillicons.dev/icons?i=nextjs" />
  </a>

  <a href="https://graphql.org/">
    <img src="https://skillicons.dev/icons?i=graphql" />
  </a>

  <a href="https://styled-components.com/">
    <img src="https://skillicons.dev/icons?i=styledcomponents" />
  </a>
</p>

## ✅ Questions Made

### How did you decide on the technical and architectural choices used as part of your solution?

- The organization of the app folder meets the product requirements for navigation architecture. Meanwhile, modules satisfy the architecture responsible for organizing the code, aiming to facilitate the separation of domains, layers, and responsibilities.

This dissociation of routes and modules is also important for:

- Separation of implementation details from Next.js.
- The ability to implement route paths without tying them to specific domains, allowing more flexibility in URL path names, and giving more freedom for the product to determine the navigation architecture.

### Are there any improvements you could make to the final piece?

- Add code-gen to generate Graphql types automatically.
- Build input from scratch to add a debounce hook.
- Add memoization to cache values from the Graphql API.
  
### What would you do differently if you had more time?

Apart from implementing the statements mentioned in the last topic. I would make some product improvements, for example:

- Login to allow the user to have an account and have functions
  - History
  - Booked location (preferred places, for example).
- Add a persistent drawer to hide search input.

## 💙 Candidate Linkedin

https://www.linkedin.com/in/fernandogomesrodrigues/
