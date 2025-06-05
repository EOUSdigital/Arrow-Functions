//TODO 📚 Module 4 - Lesson 08.01: Arrow Functions


//TODO  🧠 Step 1: Explore the Topic with Examples & Practice

//* 🎯 Learning Goal:
// 🔰 Understand how arrow functions are written, how they behave differently than regular functions, and when to use (or avoid) them.

//? 📘 Concept Overview

//*  ✅ Syntax Basics

//  1. A standard function:
function greet(name) {
    return `Hello, ${name}`;
}

//  2.Becomes an arrow function:
const greet2 = (name) => {
    return `Hello, ${name}`;
};

//  3. If it returns a single expression, we can omit return and braces:
const greet3 = name => `Hello, ${name}`;

//  🚫 Key Difference: this Behavior
//  • Unlike regular functions, arrow functions don’t have their own this.
//  • They inherit this from their surrounding (lexical) context.

//  🔍 Example:

const person = {
    name: "Alex",
    greet: function () {
        setTimeout(() => {
            console.log(`Hi, I am ${this.name}.`);
        }, 1000);
    }
};

person.greet();                                 //  ✅ Hi, I am Alex.

//  Why it works:
//  • Arrow function uses this from the greet method's context (the object person).
//  • A regular function would lose that context.

//* 🧪 Guided Practice Prompt
//  Try converting the following regular functions into arrow functions:

//? ✏️ Task 1:

function double(n) {
    return  n * 2;
}

//! Solution

const double2 = n => n * 2;


//? ✏️ Task 2:

function sayHello(name) {
    console.log(`Hello, ${name}`);
}

//! Solution

const sayHello2 = name => {
    console.log(`Hello, ${name}`);
};


//TODO  🌍 Step 2: Real-World Examples — Arrow Functions in Practice

//* ✅ Example 1: Array Mapping (Most Common Use Case)

//  Array of numbers
const nums = [1, 2, 3, 4];

//  Use arrow function to double each value
const doubled = nums.map(n => n * 2);

console.log(doubled);                           //  Result: [2, 4, 6, 8]

//  ✅ Why this works:
//  • map() expects a short, clean callback function
//  • Arrow syntax makes it concise and readable

//* ✅ Example 2: Filtering Items

//  Filter even numbers
const even = nums.filter(n => n % 2 === 0);

console.log(even);                              //  Result: [2, 4]

//  ✔️ Arrow functions are ideal for inline callbacks in filter(), map(), forEach(), etc.

//* 🚫 Example 3: Arrow Functions and this in Objects

const user = {
    name: "Taylor",
    greet: () => {
        console.log(`Hi, I am ${this.name}`);
    }
};

user.greet();                                   //  ❌ Hi, I am undefined

//! ❗ Why this fails:
//  • Arrow functions do not bind their own this
//  • this.name refers to the global context, not user.name

//  ✅ Fix by using a function declaration:

/*
greet: function () {
    console.log(`Hi, I am ${this.name}`);
}
*/

//* ✅ Best Use Cases for Arrow Functions

//? Use Case                                    Use Arrow Function?
//  Array callbacks                             ✅ Yes
//  Simple logic                                ✅ Yes
//  One-liner return                            ✅ Yes
//  Object methods                              ❌ No
//  Event handlers (HTML)                       ⚠️ Be careful
//  Needing this                                ❌ Avoid

//*  💬 Discussion Prompts:

//  1. Why do arrow functions behave differently with "this"?
//  Arrow functions in JavaScript behave differently with this compared to regular (function expression) functions. Arrow functions don’t bind their own this. Instead, this is inherited from the nearest non-arrow function or object in which the arrow function is defined. This means that this value within an arrow function is determined by the context in which the function is defined, not how it is invoked. 

//  2. What advantages do arrow functions have over traditional functions?
//  Arrow functions in JavaScript offer advantages like concise syntax, making code more readable and maintainable, and lexical this binding, which reduces errors and simplifies code. They are particularly useful for callback functions and situations where you want a short, anonymous function.
//  Arrow functions reduce boilerplate and are ideal for inline logic, but they should be avoided where a dynamic or contextual this is needed (like in object methods or constructors).

//  3. Can arrow functions return objects? If yes, how?
//  Arrow functions can have implicit returns when written in a single line, with the ability to omit parentheses for single parameters. Returning Objects in Arrow Functions: Wrapping objects in parentheses is necessary to avoid syntax errors.

//? 💡 Reminder:

const getUser = () => ({ name: "Alex", role: "admin" });

//  Without parentheses:

const getUser2 = () => { name: "Alex" };        // ❌ returns undefined

//! The {} is read as a block, not an object — that’s why wrapping it is essential.


//TODO  🔰 Step 3: Quiz Questions – Arrow Functions.

//  Each question will test a different part of what you’ve learned: syntax, scope, this, and return behavior.

//* 🧪 Instructions:
//  • There are 5 multiple-choice questions.
//  • Take your time — we’ll review them together afterward.
//  • Code examples are fully commented to support learning.

//? 📝 Question 1:
//  What will this code output?

const double3 = n => n * 2;
console.log(double3(4));

//  A. 8
//  B. 4
//  C. undefined
//  D. NaN

//! Solution:   A

//? 📝 Question 2:
//  Which of the following is true about arrow functions?

//  A. They always require a return statement
//  B. They have their own this
//  C. They inherit this from the outer lexical scope
//  D. They cannot be used with arrays

//! Solution:   C

//? 📝 Question 3:
//  What will this code log?

const user3 = {
    name: "Taylor",
    greet: () => {
        console.log(`Hi, I am ${this.name}`);
    }
};

user3.greet();

//  A. "Hi, I'm Taylor"
//  B. "Hi, I'm undefined"
//  C. ReferenceError
//  D. "Hi, I'm [object Object]"

//! Solution:   B

//? 📝 Question 4:
//  Which arrow function will return an object with { done: true }?

//  A. const result = () => { done: true };
//  B. const result = () => (done: true);
//  C. const result = () => ({ done: true });
//  D. const result = => { return { done: true }; };

//! Solution:   C

//? 📝 Question 5:
//  When should you avoid arrow functions?

//  A. In callbacks
//  B. Inside array methods
//  C. When you need access to a dynamic this
//  D. When the function returns a value

//! Solution:   C


//TODO Questions and Answers

//* ✅ The New Learning Plan (Based on Your Needs)

//  1. What is `this`?
//  2. What does "lexically scoped" mean?
//  3. What is a "callback"? What is an "array method"?
//  4. Step-by-step: How do we write arrow functions and know when to use them?
//  5. At each step: Practice exercises with guided line-by-line explanations

//TODO 🔹 Step 1: What is `this` in JavaScript?

//  ✅ Before the code:

//  `this` refers to the thing that owns or is running the current piece of code.
//  Think of `this` as a special keyword that means:
//      > “Hey JavaScript, what object is currently doing the work here?”

//  🧠 Real-life analogy:

//  If we re in a classroom and the teacher says:
//      > "This is your assignment."
//  You understand “this” means you, the person being spoken to.
//  In code, `this` means *the object that is currently active*.

//* 🧪 Simple Example

// This is an object called "user"
const user4 = {
    name: "Taylor",

    // This is a method (a function inside the object)
    sayHi: function () {
        // "this" here means the user object
        console.log(`Hi, I'm ${this.name}`);
    }
};

user4.sayHi(); // Hi, I'm Taylor

//? 💬 What is happening:

//  • `this.name` means: “Get the `name` from **this object**”
//  •  In this case, `this` is equal to `user`

//* ✅ Practice

//  Try writing the following object like this:


const animal = {
    type: "Cat",
    speak: function () {
        console.log(`This animal is a ${this.type}`);
    }
};

animal.speak(); // Should log: This animal is a Cat

//  > Try changing `"Cat"` to `"Dog"` and run it again. Then ask yourself: what does `this` refer to?


//* Question: 🔜 Step 2: What does **"lexically scoped"** mean (and how does it affect arrow functions)?
//! Answer: Lexical scoping is a concept in programming languages that determines how variable names are resolved in nested functions or blocks of code. Lexical scoping inherits this context from its surrounding scope.

//GPT  ✅ Perfect — that's a solid definition. You're describing it accurately: **lexical scope** means JavaScript looks at the **place where the function is defined**, not where it is called, to determine which variables (or `this`) it can use.


//TODO  🔹 Step 2: What Does "Lexically Scoped `this`" Mean in Arrow Functions?

//* ✅ Quick Summary:
//  • A regular function creates its **own `this`**
//  • An arrow function does not — it uses the `this` from where it was defined.
//  This is called "lexical binding of `this`"" — and it is one of the biggest differences between arrow functions and regular functions.

//* 🔍 Why it Matters
//  Let’s walk through a real situation "line-by-line", with two versions — one using a "regular function", and one using an "arrow function".

//! 🚫 Regular Function Example (Wrong `this`)

// Create an object
const person2 = {
    name: "Lena", // a property of the object

    // A method using a regular function
    greet: function () {
        setTimeout(function () {
            // ❌ "this" doesn't refer to person anymore
            console.log(`Hi, I'm ${this.name}`);
        }, 1000);
    }
};

person2.greet(); // Hi, I'm undefined

// 🧠 Line-by-line:
//  • person.greet() runs just fine
//  • Inside `setTimeout(function() { ... })`, `this` is no longer the `person` object — it’s now the global object
//  • `this.name` is `undefined` because the global object doesn’t have a `name` property


//* ✅ Arrow Function Version (Correct `this`)

// Create an object
const person3 = {
    name: "Lena",

    // Method using arrow function inside setTimeout
    greet: function () {
        setTimeout(() => {
            // ✅ this is inherited from the outer "greet" method
            console.log(`Hi, I'm ${this.name}`);
        }, 1000);
    }
};

person3.greet(); // Hi, I'm Lena

//  🧠 Line-by-line:
//  • Arrow functions do not bind their own `this`
//  • So when JavaScript runs the `() => {}`, it says:
//      > “I will use the same `this` from where I was written — inside `greet()`.”
//  • And inside `greet()`, `this` refers to `person`
//  • So this works ✅


//* 🧪 Practice Exercise

//  Try writing this:

const game = {
    title: "Zelda",

    start: function () {
        setTimeout(() => {
            console.log(`Starting ${this.title}`);
        }, 1000);
    }
};

game.start(); // Should print "Starting Zelda"

//? 🏁 Exercise:   Change `"Zelda"` to another title, and test that `this.title` still works. Then try replacing the arrow function inside `setTimeout` with a regular `function () {}` and observe the difference.

//! Solution 1.

const game2 = {
    title: "Minecraft",

    start: function () {
        setTimeout(() => {
            console.log(`Starting ${this.title}`);
        }, 1000);
    }
};

game2.start();                                      // Starting Minecraft

//  ✅ Why it works:
//  • The arrow function does not create a new this
//  • It inherits this from the start() method
//  • And in start(), this is the object game2
//  • So: this.title → "Minecraft" ✅

//! Solution 2.

const game3 = {
    title: "Zelda",

    start: function () {
        setTimeout(function () {
            console.log(`Starting ${this.title}`);
        }, 1000);
    }
};

game3.start();                                      // Starting undefined

//  ❌ Why it fails:
//  • Regular functions create their own this
//  • When setTimeout() runs the callback function, this becomes the global object
//  • this.title → undefined (because window.title or global.title doesn’t exist)

//* 🔜 Step 3: What are Callbacks and Array Methods (and how arrow functions fit in)?
//! Answer: 
//  • A "Callback" is a function passed as an argument to another function. This technique allows a function to call another function. A callback function can run after another function has finished.
//  • JavaScript provides a rich set of methods for manipulating and working with arrays. We can categorize them by the most widely used array methods:
//      > Adding and Removing Elements
//          • push(item) – Adds one or more items to the end of an array.
//          • pop() – Removes the last item from an array.
//          • unshift(item) – Adds one or more items to the beginning of an array.
//          • shift() – Removes the first item from an array.
//          • splice(start, deleteCount, ...items) – Adds, removes, or replaces elements at a specific index.
//          • toSpliced() – Similar to splice, but returns a new array without modifying the original.
//      > Creating New Arrays
//          • concat(...arrays) – Merges arrays and/or values into a new array.
//          • slice(start, end) – Returns a shallow copy of a portion of an array.
//          • flat(depth) – Flattens nested arrays up to the specified depth.
//          • copyWithin(target, start, end) – Copies elements within the array to another location.
//      > Searching and Testing
//          • indexOf(item, fromIndex) – Returns the first index of the item, or -1 if not found.
//          • lastIndexOf(item, fromIndex) – Returns the last index of the item, or -1 if not found.
//          • includes(value) – Checks if the array contains a value.
//          • find(callback) – Returns the first element that satisfies the callback function.
//          • findIndex(callback) – Returns the index of the first element that satisfies the callback.
//          • some(callback) – Checks if at least one element passes the test.
//          • every(callback) – Checks if all elements pass the test.
//      > Iterating and Transforming
//          • forEach(callback) – Executes a function for each array element.
//          • map(callback) – Creates a new array with the results of calling a function on every element.
//          • filter(callback) – Creates a new array with elements that pass the test.
//          • reduce(callback, initialValue) – Reduces the array to a single value.
//          • reduceRight(callback, initialValue) – Same as reduce, but from right to left.
//          • flatMap(callback) – Maps each element and flattens the result into a new array.
//      > Sorting and Reversing
//          • sort(compareFunction) – Sorts the elements of an array.
//          • reverse() – Reverses the array in place.
//          • toSorted() – Returns a new sorted array.
//          • toReversed() – Returns a new reversed array.
//      > Conversion and Utility
//          • join(separator) – Joins all elements into a string.
//          • toString() – Converts the array to a string.
//          • fill(value, start, end) – Fills elements with a static value.
//          • isArray(obj) – Checks whether an object is an array.
//          • from(obj) – Creates an array from an array-like or iterable object.
//          • of(...items) – Creates a new array from the arguments

//! Example:

const numbers = [1, 2, 3, 4, 5];

// Add
numbers.push(6);                                    // [1,2,3,4,5,6]

// Remove
numbers.pop();                                      // [1,2,3,4,5]

// Transform
const doubled2 = numbers.map(x => x * 2);           // [2,4,6,8,10]

// Filter
const even2 = numbers.filter(x => x % 2 === 0);     // [2,4]

// Search
const hasThree = numbers.includes(3);               // true

// Reduce
const sum = numbers.reduce((acc, cur) => acc + cur, 0);     // 15


//TODO  🔹 Step 3: What Are Callbacks and Array Methods — and How Arrow Functions Fit In?

//* 🧠 Part A: What Is a Callback?
//  A callback is a function you pass to another function to be called later.

//  • Think of it like:
//  “Hey function A, once you are done, please run function B for me.”

//* 🧪 Simple Example with Named Function:

function greetUser(name) {
    console.log(`Hi, ${name}`);
}

function processUser(callback) {
    const userName = "Jordan";
    callback(userName);                             //  Call the function passed in
}

processUser(greetUser);                             //  Hi, Jordan

//? 🧠 Line by line:

//  • greetUser is a normal function
//  • processUser takes another function as an argument (callback)
//  • That function is called inside processUser
//  • ✅ This is a callback

//* ✅ Now with Arrow Function

processUser( name => console.log( `Hi, ${name}` )); // Hi, Jordan

//? 🎯 Arrow functions are great for callbacks because:
//  • We can write them in-line
//  • We avoid naming and defining a whole function elsewhere

//* 🧠 Part B: What Are Array Methods?
//  Array methods are built-in functions that help us work with arrays.

//  ✅ Common Array Methods:
//? Method                  What it does                                        Example Arrow Function Use
//  forEach                 Runs a function on each item                        arr.forEach(x => console.log(x))
//  map                     Transforms each item into a new array               arr.map(x => x * 2)
//  filter                  Returns a new array with items that match           arr.filter(x => x > 5)
//  find                    Returns the first matching item                     arr.find(x => x === 'apple')


//* 🧪 Arrow Function in Action (Practice Time)
//  This is an example we can try in our console or file:

const numbers2 = [1, 2, 3, 4, 5];
// Use .map to double each number
const doubled3 = numbers.map(n => n * 2);
console.log(doubled3); // [2, 4, 6, 8, 10]

//  ✅ map() expects a callback
//  ✅ n => n * 2 is the callback
//  ✅ Arrow function makes it short and readable


//* 🔁 Practice - trying to solve the following exercise:

const items = ["apple", "banana", "kiwi", "pear"];

//  ❓ Use .filter() and an arrow function to return only items with 5+ letters
const longWords = items.filter( word => word.length >= 5 );

console.log(longWords);                                 // Should show: ["apple", "banana"]

//* 🧠 Breakdown:
//? Part                            What it does
//  items.filter(...)               Calls the filter method on the items array
//  word => ...                     Arrow function, takes one item at a time (each word)
//  word.length >= 5                Checks if the word has 5 or more letters

//  ✅ Returns a new array with only the words that match	
//  • from ["apple", "banana", "kiwi", "pear"]
//  • we get ["apple", "banana"]


//TODO  🔹 Step 4: How to Create Arrow Functions in Real Code — Step by Step

//* ✅ Step-by-Step Process

//? 🔹 Step 1: Ask, What do I want this function to do?
//  • What should it receive? (parameters).
//  • What should it return? (output or effect).
//  👉 Example: I want a function that adds two numbers and returns the sum.

//? 🔹 Step 2: Write the logic using a traditional function first (if needed)

function add(a, b) {
    return a + b;
}

//? 🔹 Step 3: Convert to an arrow function
//  • Use const to store the function
//  • Drop the function keyword
//  • Use => between the parameters and body
//  • If it is a one-liner with a return, remove {} and return

const add2 = (a, b) => a + b;
console.log(add2(1, 2));

//* 🧠 More Arrow Function Patterns
//? Pattern                     Example                             Notes
//  One param, one return       n => n * 2                          No need for () around param
//  No params                   () => 42                            Use empty ()
//  Multiple lines              (a, b) => { return a + b; }         Use {} and return
//  Return object               () => ({ done: true })              Wrap object in ()

//* 🧪 Real-World Example: Filtering Names

const names = ["Anna", "John", "Christine", "Max"];
const shortNames = names.filter(name => name.length <= 4);
console.log(shortNames); // ["Anna", "John", "Max"]

//  • ✅ Arrow function used inside .filter()
//  • ✅ Concise syntax: (name => ...)
//  • ✅ Logical check: name.length <= 4

//* ✏️ Practice Exercise
//  • Write an arrow function that:
//  • Accepts a single word
//  • Returns true if the word starts with the letter "b"

const startsWithB = word => word[0].toLowerCase() === "b";

console.log(startsWithB("banana")); // true
console.log(startsWithB("Berry"));
console.log(startsWithB("apple"));  // false

