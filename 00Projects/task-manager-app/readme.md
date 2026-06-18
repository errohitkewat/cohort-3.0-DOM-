# README - Browser Rendering & Event Flow Concepts

# 1. Parsing
Parsing is the process where the browser reads HTML, CSS, and JavaScript code and converts it into a      structure that it can understand.
  
  How it works:
  Browser receives HTML file.
  HTML parser reads the code line by line.
  Elements are converted into DOM nodes.
  CSS is parsed separately to create the CSSOM.
  Both are used for rendering the webpage.
  Example

  <h1>Hello World</h1>
  <p>Welcome to my website</p>
  
  The browser parses these tags and converts them into objects.

# 2. Tokenization
Tokenization is the process of breaking source code into small meaningful pieces called tokens.

Example

<h1>Hello</h1>

Tokens:

< h1 >
Hello
< / h1 >

The parser uses these tokens to create the DOM Tree.

Why Tokenization is Important?
  * Makes parsing easier.
  * Helps browsers understand code structure.
  * First step in creating DOM and CSSOM.


# 3. DOM Tree (Document Object Model)

DOM Tree is a tree-like representation of the HTML document.

Example HTML
<html>
  <body>
    <h1>Hello</h1>
    <p>Paragraph</p>
  </body>
</html>


* DOM Structure :
    Document
    │
    └── html
        │
        └── body
            │
            ├── h1
            │   └── "Hello"
            │
            └── p
                └── "Paragraph"

* Benefits : 
  JavaScript can access elements.
  Elements can be created, updated, or removed dynamically.
  Makes webpages interactive.


# 4. CSSOM Tree (CSS Object Model)
CSSOM is a tree-like structure created from CSS rules.

* Example CSS:
    h1 {
      color: red;
    }
    p {
      font-size: 20px;
    }

* CSSOM Structure
    CSSOM
    │
    ├── h1
    │   └── color: red
    │
    └── p
        └── font-size: 20px

* Purpose:
  Stores all CSS rules.
  Helps browser know how elements should look.
  Combined with DOM to create the Render Tree.


# 5. Render Tree
Render Tree is created by combining the DOM Tree and CSSOM Tree.

* Process
    HTML
      ↓
    DOM Tree
    
    CSS
      ↓
    CSSOM Tree
    
    DOM + CSSOM
          ↓
     Render Tree

* Important Notes
  Hidden elements (display: none) are not included.
  Contains only visible elements.
  Used for layout and painting.

* Example
<h1>Hello</h1>
<p>Welcome</p>

h1 {
  color: blue;
}

Render Tree stores both structure and styling information.


# 6. Event Bubbling
Event Bubbling means an event starts from the target element and moves upward to its parent elements.

* Example
<div id="parent">
  <button id="child">Click Me</button>
</div>

document.getElementById("child").addEventListener("click", () => {
  console.log("Button Clicked");
});

document.getElementById("parent").addEventListener("click", () => {
  console.log("Div Clicked");
});

* Output
Button Clicked
Div Clicked

* Flow :
    Button
       ↑
    Div
       ↑
    Body
       ↑
    Document

* Use Cases
  Event Delegation
  Handling multiple elements efficiently


7. Event Capturing
Event Capturing is the opposite of bubbling.
The event travels from the top of the DOM tree down to the target element.

* Example: 

parent.addEventListener("click", () => {
    console.log("Parent");
}, true);

child.addEventListener( "click", () => {
    console.log("Child");
}, true);

* Output
  Parent
  Child

* Flow
    Document
       ↓
    Body
       ↓
    Div
       ↓
    Button

Capturing Enable Karne Ke Liye
addEventListener("click", callback, true);


# 8. Event Delegation
Event Delegation is a technique where a parent element handles events for its child elements.

* Example :
<ul id="list">
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

document.getElementById("list").addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

* Benefits: 
  Better performance.
  Less memory usage.
  Works for dynamically added elements.
  Fewer event listeners required.


* Example :
container.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
  }
});


* Complete Browser Rendering Flow
    
    HTML File
       ↓
    Tokenization
       ↓
    Parsing
       ↓
    DOM Tree
    
    CSS File
       ↓
    Tokenization
       ↓
    Parsing
       ↓
    CSSOM Tree
    
    DOM + CSSOM
          ↓
     Render Tree
          ↓
     Layout
          ↓
     Painting
          ↓
     Screen Display