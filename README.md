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
Why is burger menu no longer opening on smaller screen sizes? What did you change on the element that contains the open/close logic that disabled that functionality?
There's some weirdness going on with the transition to screen width less than 1024px
Height of Home/main component is now less than 100% on smaller screen sizes (after messing with media queries and styling on larger screen sizes)
Probably need a min width on the header for when screen width getting down toward 768 (portfolio text overflowing wider than the container)
Will need to modify size of logos in contact section as screen widths shrink toward 768px
Fix header/nav styling
  Dynamic width based on screen width (for both burger menu on small sizes)
    20vw?
  Change size of "X" close button on burger menu
Consider adding image to background of home view under hero
Edit text content
Move thumbnail screenshot above text description in portfolio section?
Decide whether to divide technologies in Skills to "well-used" and "some exposure" or something of that nature
On mobile views: modify layout/size of Contact section so that when you click the Nav link to it, it doesn't look like you've just jumped to the bottom of the section above it. Maybe it doesn't need to be 100vh size, but maybe needs to be 50vh?
Check accessibility checklist