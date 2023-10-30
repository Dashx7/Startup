This is where my notes are going to be.

Created an IP address for my website. Couldn't figure out how to make it elastic so that might be a problem for future me

Used Routes 53 to register a domain name to my ip. If I ever cahnge the IP on accident I need to go back here to alter the records

Used the Caddy file in the ssh and just replaced it with my domain. The innerworkings are a mystery but I can now get an https certification

In the following code, what does the link element do?

The <link> element is used to link external resources, typically stylesheets, to an HTML document.
In the following code, what does a div tag do?

The <div> tag is a block-level element used for grouping and structuring content within an HTML document.
In the following code, what is the difference between the #title and .grid selector?

#title is an ID selector, selecting a specific HTML element by its unique ID.
.grid is a class selector, selecting one or more HTML elements with a common class.
In the following code, what is the difference between padding and margin?

Padding is the space inside an element, affecting content layout.
Margin is the space outside an element, affecting spacing between elements.
Given this HTML and this CSS how will the images be displayed using flex?

With display: flex; justify-content: space-between;, images will be displayed in a row with equal spacing between them.
What does the following padding CSS do?

.box { padding: 20px; } applies 20px of padding on all sides of the element, creating space between content and the border.
What does the following code using arrow syntax function declaration do?

const add = (a, b) => a + b; defines a function adding two values using arrow function syntax.
What does the following code using map with an array output?

const doubled = numbers.map(number => number * 2); doubles each element in the numbers array.
What does the following code output using getElementByID and addEventListener?

Adds a click event listener to an element with the ID "myButton," triggering an alert when clicked.
What does the following line of Javascript do using a # selector?

const heading = document.querySelector("#mainHeading"); selects an element with the ID "mainHeading."
Which of the following are true? (mark all that are true about the DOM)

The DOM represents the structure of a web page.
It allows JavaScript to access and manipulate the content.
It can be used to add, modify, or delete HTML elements.
Provides a way to interact with user interfaces.
By default, the HTML span element has a default CSS display property value of:

By default, the HTML <span> element has a display property of inline.
How would you use CSS to change all the div elements to have a background color of red?

Use the CSS rule: div { background-color: red; }.
How would you display an image with a hyperlink in HTML?

Use the <a> (anchor) element to link an <img> element to an image file.
In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

The order is content, padding, border, margin from inside to outside.
Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

Use CSS like this: p::first-line { color: green; }.
What will the following code output when executed using a for loop and console.log?

Code output depends on the specific code being executed.
How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

Use JavaScript: document.getElementById("byu").style.color = "green";.
What is the opening HTML tag for a paragraph, ordered list, unordered list, second-level heading, first-level heading, third-level heading?

Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
Second-level Heading: <h2>
First-level Heading: <h1>
Third-level Heading: <h3>
How do you declare the document type to be html?

Declare the HTML document type with: <!DOCTYPE html>.
What is valid JavaScript syntax for if, else, for, while, switch statements?

If statement: if (condition) { /* code */ }
Else statement: if (condition) { /* code */ } else { /* code */ }
For loop: for (initialization; condition; update) { /* code */ }
While loop: while (condition) { /* code */ }
Switch statement:
javascript
Copy code
switch (expression) {
  case value1: /* code */ break;
  case value2: /* code */ break;
  default: /* code */
}
What is the correct syntax for creating a JavaScript object?

Objects can be created using an object literal: const obj = {}, constructor function, or class (ES6+).
Is it possible to add new properties to JavaScript objects?

Yes, new properties can be added to JavaScript objects by simply assigning values to them.
If you want to include JavaScript on an HTML page, which tag do you use?

To include JavaScript in an HTML page, use the <script> tag.
Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?

Use JavaScript to select and modify the text of specific elements in the HTML document.
Which of the following correctly describes JSON?

JSON (JavaScript Object Notation) is a lightweight data interchange format used for data storage and exchange between systems.
What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?

These are common Unix/Linux console commands:
chmod: Changes file permissions.
pwd: Prints the current working directory.
cd: Changes the current directory.
ls: Lists directory contents.
vim and nano: Text editors.
mkdir: Creates directories.
mv: Moves or renames files/directories.
rm: Removes files/directories.
man: Displays manual pages.
ssh: Initiates secure shell sessions.
ps: Lists running processes.
wget: Downloads files from the web.
sudo: Executes commands with superuser privileges.
Which of the following console command creates a remote shell session?

The ssh command creates a remote shell session by connecting to a remote server.

29. Which of the following is true when the -la parameter is specified for the ls console command?

When you use the ls -la command, it lists all files and directories (including hidden ones) in long format. It provides detailed information about file permissions, ownership, and more.
30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top-level domain, which is a subdomain, which is a root domain?

In the domain name "banana.fruit.bozo.click":
"click" is the top-level domain (TLD).
"bozo.click" is a subdomain of "click."
"fruit" is a subdomain of "bozo.click."
"banana" is a subdomain of "fruit."
31. Is a web certificate necessary to use HTTPS?

Yes, a web certificate (specifically, an SSL/TLS certificate) is necessary to use HTTPS (Hypertext Transfer Protocol Secure). It provides encryption and authentication for secure data transmission over the web.
32. Can a DNS A record point to an IP address or another A record?

A DNS A record maps a domain name to an IP address, but it cannot directly point to another A record. You can use CNAME (Canonical Name) records to create aliases for domain names.
33. Port 443, 80, 22 is reserved for which protocol?

Port 443 is reserved for HTTPS (secure web browsing).
Port 80 is reserved for HTTP (unsecured web browsing).
Port 22 is reserved for SSH (Secure Shell) for secure remote access.
34. What will the following code using Promises output when executed?

The output of the code depends on the specific code that uses Promises. Promises are used for asynchronous operations in JavaScript, and their output would depend on the resolved or rejected state of the promises and the code that handles them. The output would need to be specified in the context of the actual code being used.
