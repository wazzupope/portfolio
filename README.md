# Personal portfolio page

# Use Vite for creating React app:
npm create vite@latest portfolio -- --template react

# To get local server running:
npm run dev

# To run a build for deployment:
npm run build
However, this command not necessary with Netlify hosting, pushing to github will automatically deploy.

# Hosted on Netlify at:
fairhart.netlify.app

# To install dependency for React Burger Menu:
Used for hamburger menu nav that slides in from side of screen
npm install react-burger-menu --save
Docs - https://www.npmjs.com/package/react-burger-menu
FAQ, includes examples for handling open/closed state - https://github.com/negomi/react-burger-menu/wiki/FAQ
There is a bug with resizing the cross button to close the menu:
https://github.com/negomi/react-burger-menu/issues/282
Usage of customCrossIcon prop was recommended:
https://github.com/negomi/react-burger-menu#custom-icons

# react-type-animation
Used to animate text in hero
npm i react-type-animation
Docs - https://react-type-animation.netlify.app/

# CSS Reset
https://www.joshwcomeau.com/css/custom-css-reset/

# Background Image
Credit to Jayrocky on Pexels - image of Riffe Lake in Washington, USA

# To Do:
Edit text content
  Revammp About section
  Consider other ways of describing Portfolio projects

Lighthouse
  Look into performance diagnostics in the report and ways to improve

Why is there a small white line at the top of the screen when you click on the skills section?
  This is from the about section, but both have 100vh
  Adding border to skills section didn't solve it
  Adding higher order z-index to skills section didn't solve it