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
For larger monitor sizes (1500px and up, with 1920x1080 being standard largest size to design for): consider centering content (but not headers) of each section
  Make section headers larger (3.5rem)
  Consider making the rest of the font sizes larger, too
    subheaders (h3) - 2.5rem
    p tags - 2rem
    Increase size of portfolio screenshots
    consider increasing size of skills logo images
  After changing size of font, will likely need to change the margins:
    between text in the About section
    around the image in the portfolio section
    maybe between text lines in the portfolio section too
    between skills logos

Edit text content
  Hero text animation wording ideas: the outdoors, anything, applications,

Check accessibility checklist

Lighthouse?

Why is there a small white line at the top of the screen when you click on the skills section?
  This is from the about section, but both have 100vh
  Adding border to skills section didn't solve it
  Adding higher order z-index to skills section didn't solve it