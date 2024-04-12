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

# react-type-animation
Used to animate text in hero
npm i react-type-animation
Docs - https://react-type-animation.netlify.app/

# CSS Reset
https://www.joshwcomeau.com/css/custom-css-reset/

# To Do:
useClickAway from react-use to close nav when clicking outside of that element
Edit text content
Move portfolio component up, between Home and About?
Fix hamburger menu styling
  Can you make it slide down from the top?
  Size in relation to the rest of the screen
  Dynamic width based on screen width
Close burger menu when you click on a link within it?
Consider adding image to background of home view under hero
Responsiveness
  Static nav on one side on desktop, burger pops up instead on mobile widths
  Fine tune sizing and spacing
  Add media queries
Decide whether to divide technologies in Skills to "well-used" and "some exposure" or something of that nature
Modify layout/size of Contact section so that when you click the Nav link to it, it doesn't look like you've just jumped to the bottom of the section above it. Maybe it doesn't need to be 100vh size, but maybe needs to be 50vh?
Check accessibility checklist