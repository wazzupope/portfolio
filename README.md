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

# To Do:
Why is there a small white line at the top of the screen when you click on the skills section?

Change size of "X" close button on burger menu - use customCrossIcon referenced in docs, also see above linked github issue, users mentioned they needed to change the min-height and min-width of bm-cross-button in order to change the clickable button's size as well

Consider adding image to background of home view under hero

Edit text content

Move thumbnail screenshot above text description in portfolio section?

Decide whether to divide technologies in Skills to "well-used" and "some exposure" or something of that nature

On mobile views: modify layout/size of Contact section so that when you click the Nav link to it, it doesn't look like you've just jumped to the bottom of the section above it. Maybe it doesn't need to be 100vh size, but maybe needs to be 50vh? Add footer to it?

Check accessibility checklist