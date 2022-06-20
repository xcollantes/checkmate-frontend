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

### config.json

Settings for web app such as website name, home page taglines, links to terms, links to privacy statement, and color scheme.  Acts as global variables for application.  

###

## Common pitfalls

**Fonts don't work**

Use <https://fontsource.org/fonts/carter-one> for importing font.  

### Optimizations

Use NextJS's `Image` tag as opposed to the `img` tag.  `Image` will automatically image reponsive and load the image only when in the viewport.

`getStaticPaths` needs to be used for dynamic pages such as `[id].js`.  

``
