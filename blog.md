#Blog - Angela's Thoughts on the Code Assignment

Thanks for giving me the opportunity to challenge myself. I am a very visual learner. I do very well from watching code tutorials on Youtube or reading through written walkthroughs on how to do a particular task. I always believe that if I can't solve something on my own, there will always be an answer, somehow.

This blog is written sort of informally as a way to track what I've been doing and what I've been working on. More formal information will be contained in the readme.md.

## General Tasks and First Steps

* pulled down local branch
* missing dependencies. I am not very familiar with error logging yet, but I have learned to read through each thoroughly. I've found that error logging messages are very quick and to the point. If I cannot understand, I usually try to Google the error message. Usually, an answer will be found on Stack Overflow or GitHub.
*two main errors:
1. Cannot read property 'thisCompilation' of undefined
solved by Googling error. Answer located here: https://github.com/angular/angular-cli/issues/9794
- answer: npm remove webpack, npm install webpack@3.11.0
2. Missing ajv
answer: npm install ajv@^6.0.0

* npm start to load page on localhost:3000
* a super bare bones page has appeared, but at least it's there! 

## First Task: 
1. Implement Responsive Design
* Implement media queries through css
* Create inline css styling with media queries
* Use the react-responsive library to establish the three breakpoints

### 3/30/18
On this first assignment, I decided to use Media Queries in css to make the app responsive. I decided to tackle this one first since it would help me get to know the code.
* npm install react-responsive

in index.js: const mediaQuery = require('react-responsive');
Switched color to JavaScript (Babel) to assist. Created new React class, ResponsiveField, to assist with responsive design

After a lot of fiddling around, I realize that it may be easier to place media queries inside a css stylsheet. or maybe I will need to pass down each state as a prop. I'll do more research, read some more tutorials and watch more videos in the meantime.

Later...

Had some free time today so I watched a Youtube tutorial that explained media queries. I felt i needed to understand them on a simpler level before trying to implement.

Pushed a very simple repo to git with my media query practice. https://github.com/anfperez/Practicing_Media_Queries
this is just very simple html and css though, so I'm not sure if it will work in a react app. I may try to create a simple react app and implement media queries there before attempting it in the main app.

Decided to create a simple React app: https://github.com/facebook/create-react-app. This is actually new for me -- I'd been practicing React with Webpack and Babel so not having to configure that is pretty cool.

Hm! I guess the issue with using create-react-app is that is already install the responsiveness in for you. But the code test, we need to work with what we have there. So maybe I'll install a more simple react app. 

Decided not use mxiins...

okay, was able to successfully get my regular react app (rock-paper-scissors clone) to scale. Will test on different devices.

Fooled around with some really crappy looking divs. I think I've got the hang of things now -- maybe! We will see if the media queries will work better inside the CSS file than if I tried to implement as a class/variable using react-responsive. I made these changes in the ReactJS_Project I have up on GitHub

Later...

I'm starting to think that maybe implementing Bootstrap is the best way to solve this, and maybe leave Media Queries for another time. Plus it would be a good way to practice Bootstrap. let's investigate this line of thinking further.

installed react-bootstrap, bootstrap, jquery, and popper

### 3/31/2018

Getting weird error. Cannot use Bootstrap right now because it can't locate jQuery in my node modules.

I did some research and found another library called reactstrap. I might try to use this instead.
npm remove react-bootstrap
npm remove bootstrap

npm install reactstrap 
Reactstrap docs: https://reactstrap.github.io/

Okay, this seems to work better than using react-bootstrap for now. Let's see how it goes. Styled some fonts and buttons. In order to create the overlay Shopping Cart, I'm going to try to use the "card" property https://reactstrap.github.io/components/card/.

Later...

Spent a lot of time trying to get the Cart Overlay to work. I did get some sort of Overlay to work, but it looks wonky. I think I'm going to try to work on the Remove_From_Cart method for a bit to clear my head.

Later ...

Ended up spending a lot of time looking at the cart to figure out how it works. The thing I do want to perfect by the end of today is being able to pass the Product name over to the Cart along with its price!


## Second Task
2. Enhance Cart Functionality
* "add to cart", "update cart"

"ADD_TO_CART" is going to become a function in constants/ActionTypes.js

### 3/31/2018

So I began learning more about React-Redux. I have to say, I am more familiar with regular React, so learning more about Redux quickly was important for me to understand this task. Today I took a long look at the reducers/ folder as a way for me to understand how exactly Redux works.

Later...

Read a lot more about the principles of Redux. Can't say I understand perfectly, but I think I can grasp the core principles by now...I think! Well, you can't really understand something until you practice, so let me get going.

## Third task

Products from the API will replace the static products

### 3/30/18

After some trial and error, I was able to grab the API from the endpoint!

So I was able to call the API using the method I learned. But for some reason the items display three times each, for a total of nine items! I did some sidework with another api and got that one to display properly. So there must be another thing in the code I need to alter to make it not display 3 times. I think I may try to tackle responsiveness first.
