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

1. In the following code, what does the link element do?

The <link> element is used to link external resources, typically stylesheets, to an HTML document. It helps in applying styles and layouts to the document.

2. In the following code, what does a div tag do?
The <div> tag is a block-level element used for grouping and structuring content within an HTML document. It is often styled with CSS to create layout structures.

3. In the following code, what is the difference between the #title and .grid selector?

#title is an ID selector and refers to a specific HTML element with the id attribute of "title." It selects one unique element.
.grid is a class selector and refers to one or more HTML elements with the class attribute of "grid." It can select multiple elements.

4. In the following code, what is the difference between padding and margin?

Padding is the space inside an element, between its content and the element's border. It affects the element's size and content layout.
Margin is the space outside an element, around its border, and affects the spacing between elements.


5. Given this HTML and this CSS how will the images be displayed using flex?

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

6. What does the following padding CSS do?

Consider this CSS:
css
Copy code
.box {
  padding: 20px;
}
This CSS applies 20 pixels of padding on all sides (top, right, bottom, and left) of the element with the class "box." It creates space between the element's content and its border.

7. What does the following code using arrow syntax function declaration do?

Imagine the following JavaScript code:
javascript
Copy code
const add = (a, b) => a + b;
This code defines a function named add using arrow function syntax. It takes two parameters (a and b) and returns their sum. It's a concise way of defining functions.

8. What does the following code using map with an array output?

Let's say you have this JavaScript code:
javascript
Copy code
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(number => number * 2);
This code uses the map function to double each element in the numbers array. The doubled array will contain [2, 4, 6, 8, 10].

9. What does the following code output using getElementByID and addEventListener?

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

10. What does the following line of JavaScript do using a # selector?

Imagine this line of JavaScript:
javascript
Copy code
const heading = document.querySelector("#mainHeading");
This code selects the HTML element with the ID "mainHeading." It retrieves the element, allowing you to manipulate or access its properties in your JavaScript code.

11. **Which of the following are true? (mark all that are true about the DOM)**
   - The DOM (Document Object Model) represents the structure of a web page as a tree of objects.
   - The DOM allows JavaScript to access and manipulate the content and structure of an HTML document.
   - The DOM can be used to add, modify, or delete HTML elements.
   - The DOM provides a way to interact with user interfaces, respond to events, and update content dynamically.

12. **By default, the HTML span element has a default CSS display property value of:**
   - By default, the HTML `<span>` element has a default CSS display property value of `inline`.

13. **How would you use CSS to change all the div elements to have a background color of red?**
   - You can use the following CSS rule:
     ```css
     div {
       background-color: red;
     }
     ```

14. **How would you display an image with a hyperlink in HTML?**
   - You can use the `<a>` (anchor) element to create a hyperlink and the `<img>` element to display an image. Here's an example:
     ```html
     <a href="https://example.com">
       <img src="image.jpg" alt="Image Description">
     </a>
     ```

15. **In the CSS box model, what is the ordering of the box layers starting at the inside and working out?**
   - The ordering of the box layers in the CSS box model, from the inside to the outside, is as follows: content, padding, border, margin.

16. **Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?**
   - You can use CSS to select specific text within an element using the `::first-line` pseudo-element. For example:
     ```css
     p::first-line {
       color: green;
     }
     ```

17. **What will the following code output when executed using a for loop and console.log?**
   - To provide an answer, I would need to see the specific code you're referring to.

18. **How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?**
   - You can use the following JavaScript code:
     ```javascript
     const element = document.getElementById("byu");
     element.style.color = "green";
     ```

19. **What is the opening HTML tag for a paragraph, ordered list, unordered list, second-level heading, first-level heading, third-level heading?**
   - Here are the opening HTML tags for the mentioned elements:
     - Paragraph: `<p>`
     - Ordered List: `<ol>`
     - Unordered List: `<ul>`
     - Second-level Heading: `<h2>`
     - First-level Heading: `<h1>`
     - Third-level Heading: `<h3>`

20. **How do you declare the document type to be HTML?**
    - You declare the document type for an HTML document using a document type declaration (DOCTYPE) at the beginning of the HTML document. For HTML5, it is declared as follows:
      ```html
      <!DOCTYPE html>
      ```

21. **What is valid JavaScript syntax for if, else, for, while, switch statements?**
    - Here's the valid syntax for these control structures in JavaScript:
      - `if` statement:
        ```javascript
        if (condition) {
          // Code to execute if condition is true
        }
        ```

      - `else` statement:
        ```javascript
        if (condition) {
          // Code to execute if condition is true
        } else {
          // Code to execute if condition is false
        }
        ```

      - `for` loop:
        ```javascript
        for (initialization; condition; update) {
          // Code to execute in each iteration
        }
        ```

      - `while` loop:
        ```javascript
        while (condition) {
          // Code to execute as long as the condition is true
        }
        ```

      - `switch` statement:
        ```javascript
        switch (expression) {
          case value1:
            // Code to execute if expression equals value1
            break;
          case value2:
            // Code to execute if expression equals value2
            break;
          default:
            // Code to execute if expression doesn't match any case
        }
        ```
Here are answers to the next set of questions:

22. **What is the correct syntax for creating a JavaScript object?**
   - You can create a JavaScript object using either of the following syntaxes:
     - Object Literal: `const obj = {}`
     - Constructor Function: `const obj = new Object()`
     - Class (ES6+): 
       ```javascript
       class MyClass {
         constructor() {
           this.property = value;
         }
       }
       const obj = new MyClass();
       ```

23. **Is it possible to add new properties to JavaScript objects?**
   - Yes, you can dynamically add new properties to JavaScript objects by simply assigning values to them. For example: `object.newProperty = "new value";`

24. **If you want to include JavaScript on an HTML page, which tag do you use?**
   - To include JavaScript in an HTML page, you use the `<script>` tag. You can place JavaScript code directly within the `<script>` tag or link to an external JavaScript file using the `src` attribute.

25. **Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?**
   - To change the text "animal" to "crow" and leave "fish" unaffected in the following HTML:
     ```html
     <p id="myText">animal fish</p>
     ```
     You can use this JavaScript:
     ```javascript
     const textElement = document.getElementById("myText");
     textElement.innerHTML = textElement.innerHTML.replace("animal", "crow");
     ```

26. **Which of the following correctly describes JSON?**
   - JSON (JavaScript Object Notation) is a lightweight data interchange format used for data storage and exchange between a server and a client, or between different systems. It is a text-based, human-readable format and closely resembles JavaScript object literal notation. JSON is used for configuration files, data transmission, and more.

27. **What does the console command `chmod`, `pwd`, `cd`, `ls`, `vim`, `nano`, `mkdir`, `mv`, `rm`, `man`, `ssh`, `ps`, `wget`, `sudo` do?**
   - `chmod`: Changes file permissions.
   - `pwd`: Prints the current working directory.
   - `cd`: Changes the current directory.
   - `ls`: Lists the contents of a directory.
   - `vim` and `nano`: Text editors for creating and editing files in the console.
   - `mkdir`: Creates a new directory.
   - `mv`: Moves or renames files and directories.
   - `rm`: Removes files or directories.
   - `man`: Displays manual pages for commands.
   - `ssh`: Initiates a secure shell session for remote login.
   - `ps`: Lists running processes.
   - `wget`: Downloads files from the web.
   - `sudo`: Executes commands with superuser privileges.

28. **Which of the following console command creates a remote shell session?**
   - `ssh` creates a remote shell session by allowing you to securely connect to a remote server or computer.

29. **Which of the following is true when the `-la` parameter is specified for the `ls` console command?**
   - When you specify the `-la` parameters for the `ls` command, it lists all files, including hidden files (those starting with a dot), with detailed information such as permissions, owner, size, and modification date.

30. **Which of the following is true for the domain name "banana.fruit.bozo.click"?**
   - "click" is the top-level domain.
   - "bozo" is a subdomain.
   - "fruit" is a root domain.

31. **Is a web certificate necessary to use HTTPS?**
    - Yes, a web certificate, often referred to as an SSL/TLS certificate, is necessary to use HTTPS (HyperText Transfer Protocol Secure). It ensures that the data transmitted between the user's browser and the web server is encrypted and secure.

32. **Can a DNS A record point to an IP address or another A record?**
    - A DNS A (Address) record can point to an IPv4 address but not to another A record. For DNS resolution, A records associate domain names with their corresponding IPv4 addresses.

33. **Port 443, 80, 22 is reserved for which protocol?**
    - Port 443 is reserved for HTTPS (HTTP over TLS/SSL).
    - Port 80 is reserved for HTTP (Hypertext Transfer Protocol).
    - Port 22 is reserved for SSH (Secure Shell) for secure remote access.

34. **What will the following code using Promises output when executed?**
    - To provide an answer, I would need to see the specific code you're referring to.
