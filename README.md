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
npm install react-burger-menu --save
Docs - https://www.npmjs.com/package/react-burger-menu

# CSS Reset
https://www.joshwcomeau.com/css/custom-css-reset/

# Apple TV - Word Rotation
Hero animation based on the following code, which is written in JS with DOM manipulation. It has been adapted to React, but the css and other parts originated from this work:
https://codepen.io/stevenlei/pen/RwpRgzy

# To Do:
Fix error in WordWheel, only re-rendering one time
useClickAway from react-use to close nav when clicking outside of that element
Dial in header logo and contact section image sizing
Edit text content
Fix hamburger menu styling
  Can you make it slide down from the top?
  Size in relation to the rest of the screen
  Dynamic width based on screen width
Close burger menu on click of a link?
Styling
  Spacing
  Alignment
Responsiveness
  Static nav on one side on desktop, burger pops up instead on mobile widths
Decide whether to divide technologies in Skills to "well-used" and "some exposure" or something of that nature
Check accessibility checklist