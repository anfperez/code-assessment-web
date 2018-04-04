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
- Redux (concept of reducers, dispatch, middleware, promises)
- Complex system of Components, Reducers, and Containers

An informal blog was created during construction to document how I was feeling during each stage of creation, methods I tried, and questions I pondered.

I created a few additional 'test' apps to help architecting solutions. These were useful if I wanted to test one component (i.e. the API call).

## Task 1 - Implement Responsive Design

This was achieved by using the reactstrap library on npm. At first I tried to implement react-bootstrap and react-responsive, and attempted to use Media Queries. I was having some trouble with the different files needed for jQuery. After doing some research online, react-strap was recommended to me as a lightweight framework that would make the website responsive.

I tried to implement a Cart overlay using reactstrap. It seemed like a major facet, so I decided to leave it for later and focus on addressing cart functionality first.

### Future Improvements
- cart overlay
- log ProductTitle and accurately log amount of items in Cart

## Task 2 - Enhance Cart Functionality

I was able to get "Remove From Cart" working, albeit with a bunch of errors. First, let's go back to "Add to Cart" -- this actually adds an entire instance of the Products Card to the Cart. The Products Card still behaves as if it were in the ProductsList. That is a major error that I am still trying to address.

The + and - buttons do not have correct functionality at this time either. Still working on this.

### Future Improvements
- Different card pops up when Product is added to Cart - maybe one called CartProduct
- get + and - buttons to work

## Third Task - Hook Up Product API

I spent a very long time on this task! I was under the impression that it would be better for me to have a class called "ProductApi" that I would call to grab the JSON data. Many of the tutorials I saw online used this method. However, I realized that I was over-complicating things. I decided to just use a simple const called "fetchData" and used the ".fetch" method (which is very useful!). However, my main problem is that I needed to pass the JSON into "products" so that it could get called by getProducts. I was able to get here:

(from the react-logger on console)

action {type: "RECEIVE_PRODUCTS", products: Promise}
products: Promise
__proto__ :Promise
[[PromiseStatus]] :"resolved"
[[PromiseValue]]: Array(3)

I can clearly see the array of the Chronograph, Quartz, and Weekender inside the PromiseValue. I'm going to keep trying to extract the PromiseValue somehow. I'm sure there's a way to do it. 



### Future Improvements
