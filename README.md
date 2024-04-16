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

# react-type-animation
Used to animate text in hero
npm i react-type-animation
Docs - https://react-type-animation.netlify.app/

# CSS Reset
https://www.joshwcomeau.com/css/custom-css-reset/

# To Do:
Fix header/nav styling
  Use black FWD logo in sidebar component
  Figure out how to position the sidebar component along the side of the screen and keep it there regardless of scroll (seems like you may need a container around the rest of the components then use flexbox to put them to the side of the "header")
  Import contact component and stick it at bottom of "header" on larger screen widths, then hide contact at bottom on smaller screens (display: none)
  Dynamic width based on screen width (for both burger menu on small sizes and "header" on larger sizes)
    25vw?
  Change size of "X" close button on burger menu
Consider adding image to background of home view under hero
Edit text content
Move thumbnail screenshot above text description in portfolio section?
Decide whether to divide technologies in Skills to "well-used" and "some exposure" or something of that nature
Modify layout/size of Contact section so that when you click the Nav link to it, it doesn't look like you've just jumped to the bottom of the section above it. Maybe it doesn't need to be 100vh size, but maybe needs to be 50vh?
Check accessibility checklist