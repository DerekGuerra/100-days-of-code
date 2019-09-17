# 100 Days Of Code - Log

DAY 1: 

Today I started my journey in learning Java. I learned how to first print using System.out.println("string");
Later learned how to take data from Stdin and oprint to Stdout. I retreived data from HackerRanks information and outputted the corrct solution.

Feeling a little bit nervous since I took an absence from coding and learning a new language, but super excited to start once again!

DAY 2: 

Today I worked on front end work with CSS/HTML Appplied Visual Design and a few more snippets of code into a personal project. Felt a bit exhaisted from work and lack of sleep I guess, but got it done. 

DAY 3: 

Today I did a bit more work on frontend and started more code with JavaScript, I made a Simple Guessing Game program without repition for now, but will come in the near future. Also added more to personal Project.

          //create secret number
          var secretNumber = 4;


          //ask user for guess
          var guess = prompt("Guess a number");

          //check guess
          if (Number(guess) === secretNumber) {
            alert("You got it!!");
          }

          //otherwise check if higher
          else if(Number(guess) > secretNumber) {
            alert("Too high, try again!");
          }

          //checks if lower
          else {
            alert("Too low, guess again!");
          }

DAY 4:

Today I practiced more with Applied Visual Design with frontend, and worked more with JavaScript. I am practicing on making websites a bit more dynamic!

https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/adjust-the-hue-of-a-color

DAY 5:

Had a busy day with the family and didnt have much time to code, nevertheless worked on some front end!

https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/adjust-the-tone-of-a-color

DAY 6: 

Today I had the opportunity to work a little bit on the backend side of a previous project that was made during my bootcamp. I mainly used it for practice with authetications and user data. Also worked with Applied Visual Design: Use the CSS Transform scale Property to Change the Size of an Element for my front end.

https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/use-the-css-transform-scale-property-to-change-the-size-of-an-element

DAY 7: 

Today I worked more with website structure and becoming a bit more familiar with for loops in javascript. I also completed a few more tasks on the html/css side of things. I also started discovering web developement podcasts! 

https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/create-a-graphic-using-css
https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/3861360?start=0#overview

DAY 8: 

Today i didnt have much time to sit and code, but i worked with creating movements using CSS animation and did some work with more javascript.

https://learn.freecodecamp.org/responsive-web-design/applied-visual-design/create-movement-using-css-animation/

DAY 9: 

Today I spent my day off watching several videos catching up on basics with python and Javascript. I did some practice code on hackerrank and tried rewriting some simple programs for python (guessing game & countdown program).

https://www.udemy.com/complete-python-bootcamp/learn/lecture/9388540?start=0#overview

Day 10:

Today I focused a bit more into detailing with while loops with JavaScript to help keep code D.R.Y (Dont repeat code) to make sure readability is as best as possible. I also worked on a few things for front end in changing directions of set objects using cubic-bezier or animation-timing-function

https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/3861366#overview

DAY 11:

I strictly worked on JavaScript while loops and for loops, made a fun little program to constantly ask for user input if answer was not met using prompt(); 

https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/6651418#overview

DAY 12: 

Today I worked with Applied Accessibility with HTML and CSS, Im navigating back and forth between JavaScript and HTML/CSS to get a feel for both a bit quicker.

https://learn.freecodecamp.org/responsive-web-design/applied-accessibility/use-headings-to-show-hierarchical-relationships-of-content

DAY 13: 

Worked with JavaScript For Loops, and wrote down nores on the similarities/ differences for For and While loops. Did sets of similar practice problems like while loops however i refactored the solutions to For Loops which were noticably shorter snippets of code.

console.log("**Print all numbers between -10 and 19**")

for (var i = -10; i <= 19; i++) {
  console.log(i);
}


console.log("**Print all even numbers between 1 and 40**");

for (var i = 1; i <= 40; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("**Print all odd numbers between 300 and 333**");

for (var i = 300; i <= 333; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}



console.log("**Print all numbers divisible by 5 AND 3 between 5 and 50**");

for (var i = 5; i <= 50; i++) {
  if (i % 5 === 0 && i % 3 ===0) {
    console.log(i);
  }


  DAY 14:

  Today I worked with JavaScript functions both declaration and expression. Made several small programs testing each function using single and multiple arguments. Then called them to make sure they worked.

  Example: 
          function isEven(num) {
          if (num % 2 === 0) {
            return "true";
          }
          else {
            return "False";
          }
        }

DAY 15: 

HTML/CSS
HTML/CSS
HTML/CSS
HTML/CSS
HTML/CSS
werk

Day 16:

Worked on JavaScript functions and included For() loops in there with 1-3 arguments for each funtion. 

Day 17: 

Worked with JavaScript Scope examples, declarin variables inside and outside of functions and how we are able to manipulate them differently. 

example: 

var phrase = "hi there!";

function doSomething() {
  var phrase = "Goodbye!";
  console.log(phrase);
}

doSomething();
//prints "Goodbye!"

//outside of the function, if we try to get phrase.
phrase;
//prints "hi there!"

Day 18:

Today I worked with Higher Ordered Functions and Anonymous functions within JavaScript. Ive also begun the intro to arrays and different methods that we can use for them.

friends[0];
//prints david

friends[0] = "Derek";

//manipulates the existing data

//we can array data as well as long as we enter it at an index that does not exist

friends[4] = "Arya";
// this adds arya to the end of the friends list



//we can initialize an empty array two ways:
var friends = []; //nofriends :(
var friends = new Array() //uncommon

//Arrays can hold any type of data:
var random_collection = [49, true, "Arya", null];

//Arrays have a length property
var nums = [45, 37, 89, 24];
nums.length //prints 4


var dogs = ["Rusty", "WYatt", "Olly"];

dogs.length //prints 2

dogs[2];
//prints olly


Day 19:

Today I worked with arrays, nested arrays and the several methods to make code a bit more DRY. (push()/pop()/shift()/unshift()/indexOf()/slice())

Also completed a quick array quiz :)

//*ARRAY QUIZ*

var numbers = [22, 67, 33, 96, 88];

// what does the following line print?

console.log(numbers[numbers.length]);

//prints undefined
//correct


var frineds = [
  ["harry", "ron", "hermione"],  
  ["malfoy", "crabbe", "goyle"],
  ["mooney", "wormtail", "prongs"]
];

/ what is the result of this line:

console.log(friends[2][0]);

//prints "mooney"
//corrct

D
var todos = ["Clean Rooom"];

var input = prompt("What would you like to do?");


while (input !== "quit") {
  //handle input
  if (input === "list") {
    console.log(todos);
  } else if (input === "new") {
    //ask for new to fo
    var newTodo = prompt("Enter a new todo");
    //add to the list
    todos.push(newTodo);
  }
  input = prompt("What would you like to do?");
}
console.log("Thank you for using the todo app!");

Day 21:

Started working from scratch on creating an Issue App, which is working with both HTML and JavaScript. I completed the HTMl form-controls and the seperate <div>'s to create each input. It will require an input (issue), a uregency using <select> and an assignee to attach it to 

https://github.com/DerekGuerra/jsIssueApp

day 22: 

Today i worked on setting up the JavaScript functions to allow the data being inputted on the user end to save and store it inside of the database while being able to reciprocate a visual feed to it...didnt quite get it done but working on it!

Day 23: 

Today was a light day, just came back from vacation and decided to use my time today to catch up on previous code, rereading, refactoring and debugging. Also did a few JS practice problems i had set out. :)
