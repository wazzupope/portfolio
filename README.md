Personal portfolio page

Use Vite for creating React app:
npm create vite@latest portfolio -- --template react

To get local server running:
npm run dev

To run a build for deployment:
npm run build
However, this command not necessary with Netlify hosting, pushing to github will automatically deploy.

Hosted on Netlify at:
fairhart.netlify.app

To install dependency for React Burger Menu:
npm install react-burger-menu --save
Docs - https://www.npmjs.com/package/react-burger-menu

Crimson: #A60F2D
Gray: #4D4D4D

Light and dark theme with gray as background for dark mode and text for light mode, crimson as accent color?

To Do:
figure out why images in contact.jsx file are not deploying to netlify
add "apple tv"-like element to hero text, something along the lines of "your web solution for medical, health, wellness, sports leagues, tournaments, etc."
  https://codepen.io/stevenlei/pen/RwpRgzy
Look at Nav.jsx hrefs, the were previously "/" and "/About", etc.
  When you changed to #section-names, the url path changed
  What kind of routing is happening with the burger menu?
  Should you just change your ids to be more presentable as url paths?
useClickAway from react-use to close nav when clicking outside of that element
Dial in header logo and contact section image sizing
Edit text content
Fix hamburger menu styling
  Can you make it slide down from the top?
  Size in relation to the rest of the screen
  Dynamic width based on screen width
Close burger menu on click of a link?
Styling
  Choose font
  Add font
  Spacing
  Alignment
Responsiveness
  Static nav on one side on desktop, burger pops up instead on mobile widths
Decide whether to divide technologies in Skills to "well-used" and "some exposure" or something of that nature
Check accessibility checklist