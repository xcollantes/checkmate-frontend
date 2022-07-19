# Front-end web application for Checkmate sample tutorial project

<p align="center">
  <a href="https://nextjs.org/">
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
  </a>
    <a aria-label="Vercel logo" href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  </a>
<a aria-label="NPM version" href="https://firebase.google.com/">
     <img src="https://img.shields.io/badge/firebase V9-ffca28?style=for-the-badge&logo=firebase&logoColor=black">
  </a>
  <a aria-label="Vercel logo" href="https://www.javascript.com/">
    <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/">
    <img alt="" src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
  </a>
</p>

## Getting started

### .env.local

Global variables for web app.  In production, this can be replaced with ENV vars.

```
NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_DATABASE_URL=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

### config.json

Settings for web app such as website name, home page taglines, links to terms, links to privacy statement, and color scheme.  Acts as global variables for application.  

### firebaseApp.js

Firebase specific credentials.

## Conventions

### Referring to products by ID

Since the backend is a NoSQL database (Firebase), references between the `users` database and `products` database should be sparse since this could results in large quantities of API calls.  

If references should be made, for example, get product data on user subscriptions, the common key should be the product ID in Firebase.

## Catalog categories config

To update the categories in the user facing catalog, change the
`categories.json` file.  

`_id` - Unique identifier as an integer.  Avoid re-using numbers.  Follow
convention by adding next sequencial integer with new products.

`name` - Title of category to display.  String is case-insenstive
but keeps spaces.  This must match exactly (except in case) in product field
for `catalog`.  

`menuSelect` - Default state of the checkbox when user first loads page.  If
`true`, the checkboxes will be selected on load.

```json
[
    {
        "_id": 1,
        "name": "video games",
        "menuSelect": false
    },
    {
        "_id": 2,
        "name": "Cars",
        "menuSelect": false
    }
]
```

## Image path naming

Images are named with the same as the product ID.  This convention should hold until the one-to-one relationship with images to products exists.  In other words, this convention doesn't work if you have multiple images per one product.

For example, if the product ID is `xbox_series_x`, then the image path should be `http://.../xbox_series_x.jpeg` or with whatever extension is decided.

## Common pitfalls

**Fonts don't work**

Use <https://fontsource.org/fonts/carter-one> for importing font.  

**No router instance found**

This happens when router is called from the server since route changes get called in the client.  This usually occurs when there is an issue with the context.

```bash
No router instance found. you should only use "next/router" inside the client side of your app.
````

**Which state should I use?**

Use `useState()` for page-wide variables and React Contexts for webapp-wide variables.

<https://www.netlify.com/blog/2020/12/01/using-react-context-for-state-management-in-next.js>

**Output when debugging is a Promise object**

The call to an API returns a Promise object instead of data.  

This happens because the print out statement occurs before data is fufilled in the API call.  Use `.then()` to handle results from an API.

<https://stackoverflow.com/questions/70358000/cant-iterate-through-array-from-an-async-javascript-function>

### Optimizations

Use NextJS's `Image` tag as opposed to the `img` tag.  `Image` will automatically image reponsive and load the image only when in the viewport.

`getStaticPaths` needs to be used for dynamic pages such as `[id].js`.  

``
