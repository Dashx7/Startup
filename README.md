# CS260, Home of my CS260 project - Gym Bro Buddy

## Elevator Pitch

- Have you ever wanted to remember what your best bench was? Do you want to physically see the progress that you make in the gym? Want to brag to your friends about those massive winter gains or the summer cut? With the absolute dullest blade technology I could find I present to you the Gym Bro Buddy<sup>©</sup> it will keep track of your stats, make you training plans, calculate your ORM and almost nothing else! What a steal!

## Requirements

### Authentication:
- Users will have to login using email and password in order to access everything and this account will be tied to them and their stats
### Database data:
- I'm going to track the data of the user for their gym stats and graph it visually for them. They can see their progress from numbers pulled from the database that I will maintain.
### WebSocket data: 
- This will be pulling the most recent data and being able to share stats with friends. Everyone wants to show off to friends, or if you just want to see where your at so you would be able to pull up live time feed and see how its going for them
- ![Image of my sketch](https://github.com/Dashx7/Startup/blob/main/IMG_7540.JPG)

## TODO
- Holdiay web pages
- Predict stats from other stats?
- The actual Node.js tracker and grapher
- The send message thing


## Notes
Check out [My Google Doc](https://docs.google.com/document/d/1kt-fd8KEM64hTFWVifAqa3g5ZAjUoWANesyJ6xcsqHk/edit)
Workout Buddy web development idea? Gym bro buddy, bench bro buddy Buddy
- ./deployFiles.sh -k <yourpemkey> -h <yourdomain> -s <type>
- ./deployFiles.sh -k ../JoshWiseman.pem -h JoshWiseman.click -s startup
- Change units
- Predict stats from other stats, like incline bench from regular bench
- Create workout plans for push pull and legs
- Tracker
-Track progress with graphs
- Have users
- Send messages to friends and look at their live time stats

> `Lets get this bread` - Unknown

# Midterm notes

In the following code, what does the link element do?

The <link> element is used to link external resources, typically stylesheets, to an HTML document. It helps in applying styles and layouts to the document.
In the following code, what does a div tag do?

The <div> tag is a block-level element used for grouping and structuring content within an HTML document. It is often styled with CSS to create layout structures.
In the following code, what is the difference between the #title and .grid selector?

#title is an ID selector and refers to a specific HTML element with the id attribute of "title." It selects one unique element.
.grid is a class selector and refers to one or more HTML elements with the class attribute of "grid." It can select multiple elements.
In the following code, what is the difference between padding and margin?

Padding is the space inside an element, between its content and the element's border. It affects the element's size and content layout.
Margin is the space outside an element, around its border, and affects the spacing between elements.


Given this HTML and this CSS how will the images be displayed using flex?

Let's say you have HTML like this:
html
Copy code
<div class="image-container">
  <img src="image1.jpg">
  <img src="image2.jpg">
  <img src="image3.jpg">
</div>
And your CSS like this:
css
Copy code
.image-container {
  display: flex;
  justify-content: space-between;
}
In this example, the images will be displayed in a row with equal spacing between them, due to the use of display: flex and justify-content: space-between.
What does the following padding CSS do?

Consider this CSS:
css
Copy code
.box {
  padding: 20px;
}
This CSS applies 20 pixels of padding on all sides (top, right, bottom, and left) of the element with the class "box." It creates space between the element's content and its border.
What does the following code using arrow syntax function declaration do?

Imagine the following JavaScript code:
javascript
Copy code
const add = (a, b) => a + b;
This code defines a function named add using arrow function syntax. It takes two parameters (a and b) and returns their sum. It's a concise way of defining functions.
What does the following code using map with an array output?

Let's say you have this JavaScript code:
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
This code uses the map function to double each element in the numbers array. The doubled array will contain [2, 4, 6, 8, 10].
What does the following code output using getElementByID and addEventListener?

Consider the HTML:
html
Copy code 
<button id="myButton">Click Me</button>
And the JavaScript:
javascript
Copy code
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("Button clicked!");
});
This code adds a click event listener to the button with the ID "myButton." When the button is clicked, it triggers an alert that says "Button clicked!"
What does the following line of JavaScript do using a # selector?

Imagine this line of JavaScript:
javascript
Copy code
const heading = document.querySelector("#mainHeading");
This code selects the HTML element with the ID "mainHeading." It retrieves the element, allowing you to manipulate or access its properties in your JavaScript code.
