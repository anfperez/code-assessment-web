# Angela Perez - Work & Co Web Code Assessment

This is a copy of the [Redux Shopping Cart Example](https://github.com/reactjs/redux/tree/master/examples/shopping-cart).

To start a development server:

```
npm start
```

## Tasks

Please publish your work to a fork of this repo. You're welcome (but not required) to add any libraries you think would be helpful.

Note: You're encouraged to show your work by including multiple commits - we'll be looking through your fork's git history.

1. [Implement Responsive Design](/tasks/01-responsive-design.md)
2. [Enhance Cart Functionality](/tasks/02-cart-enhancements.md)
3. [Hook Up Product API](/tasks/03-product-api.md)

### Languages/Frameworks Used
- HTML
- CSS (Bootstrap)
- JavaScript/React/Redux

### React Libraries Imported Into Project
- react-strap: Bootstrap library for React

### Resources Consulted
- console/Redux-logger
- Postman (JSON viewer)
- Youtube tutorials
- Stack Overflow
- Github issues
- HelloJS articles
- React documentation (especially on array.reduce and Promises)
- Redux documentation (middleware)
- reactstrap documentation

### New Concepts Tackled
- Redux (concept of reducers, dispatch, middleware, promises) - haven't worked with React before, learned basic concepts
- Complex system of Components, Reducers, and Containers

An informal blog was created during construction to document how I was feeling during each stage of creation, methods I tried, and questions I pondered. You can find it on this project as blog.md.

I created a few additional 'test' apps to help architecting solutions. These were useful if I wanted to test one component (i.e. the API call). They are located here:
https://github.com/anfperez/React_Project
https://github.com/anfperez/Practicing_Media_Queries

## Task 1 - Implement Responsive Design

This was achieved by using the reactstrap library on npm. At first I tried to implement react-bootstrap and react-responsive, and attempted to use Media Queries. I was having some trouble with the different files needed for jQuery. After doing some research online, reactstrap was recommended to me as a lightweight framework that would make the website responsive.

I tried to implement a Cart overlay using reactstrap. It seemed like a major facet, so I decided to leave it for later and focus on addressing cart functionality first.

### Future Improvements
- cart overlay

## Task 2 - Enhance Cart Functionality

I was able to get "removeFromCart" working, albeit with a bunch of errors. First, let's go back to "Add to Cart" -- this actually adds an entire instance of the Products Card to the Cart. The Products Card still behaves as if it were in the ProductsList. That is a major error that I am still trying to address.

Update: Was able to get removeFromCart working in a better way than usual with better functionality than before!

The + and - buttons do not have correct functionality at this time either. Still working on this.

### Future Improvements
- get + and - buttons to work

## Task 3 - Hook Up Product API

I spent a very long time on this task! I was under the impression that it would be better for me to have a class called "ProductApi" that I would call to grab the JSON data. I would then push the JSON data into a file that would add itself to the api folder. I spent some time researching the feasibility of this, but I realized that unlike Java and Ruby, JavaScript doesn't lend itself to creating files locally. I was going to try to use "fs" but that turned out to be a bust. 

However, I realized that I was over-complicating things with my thoughts about creating new classes or creating JSON files locally. I decided to just use a simple const called "fetchData" and used the ".fetch" method (which is very useful!). However, my main problem is that I needed to pass the JSON into "products" so that it could get called by getProducts. I was able to get here:

(from the react-logger on console)

`action {type: "RECEIVE_PRODUCTS", products: Promise}
products: Promise
__proto__ :Promise
[[PromiseStatus]] :"resolved"
[[PromiseValue]]: Array(3)`

I can clearly see the array of the Chronograph, Quartz, and Weekender inside the PromiseValue. I'm going to keep trying to extract the PromiseValue somehow. I'm sure there's a way to do it. 

### Future Improvements
* extract data from PromiseValue to get API call to work

## Current Isolated Problems - Require Resolution

### properly implement the Cart Overlay
- use reactstrap to generate an onClick element that would open the cart with all products within. Currently stuck at "products.length" being undefined when I push the "View Cart" button.

### get Increase Item / Decrease Item to work properly
- Increase and Decrease Item buttons are not working properly yet.

### extract the value from the API call so that I can pass it to getProducts
- for now, all I have is that [[PromiseValue]]: Array(3) result. I need to figure out how I can get that to work. I am thinking that a deeper understanding of Promises is involved.

### Challenges

This was a very challenging project for me to tackle. I have been doing small/basic programs in React.js, but I have never worked with Redux. I read documentation and watched tutorials on Redux, but I think that the best way for me to understand Redux is to just read over the code until I really understand how it works.

I feel like it would have been easier for me to make a Shopping Cart from scratch! But in the real world, that is rarely the case -- usually engineers find themselves working on apps written years ago by other people. So it's important for engineers to be flexible and learn on the fly. If I had more time (a week perhaps) I feel like I would have been able to get more functionality to work. Until then, I am somewhat proud of how far I got. I was also working full-time during this week, so I feel that if I had more hours during the day, I would have gotten farther.

### Progression of the Shopping Cart

First Version - basic Shopping Cart <br />
![first_version](https://github.com/anfperez/code-assessment-web/blob/master/assets/screenshot_1.png)

Second Version - styled with reactstrap <br />
![second_version](https://github.com/anfperez/code-assessment-web/blob/master/assets/screenshot_2.png)

Third Version - able to add cards to the cart <br />
![third_version](https://github.com/anfperez/code-assessment-web/blob/master/assets/screenshot_3.png)

Fourth Version - added remove button to the cart <br />
![fourth_version](https://github.com/anfperez/code-assessment-web/blob/master/assets/screenshot_4.png)

Fifth Version - logging "Object object" to the cart <br />
![fifth_version](https://github.com/anfperez/code-assessment-web/blob/master/assets/screenshot_5.png)

Sixth Version - logging the objects in the array <br />
![sixth_version](https://github.com/anfperez/code-assessment-web/blob/master/assets/screenshot_6.png)

Seventh Version - adding cleaner card with removeFromCart button <br />
![seventh_version](https://github.com/anfperez/code-assessment-web/blob/master/assets/screenshot_7.png)
