// console.log("**Problem 1**");
var frineds = ["David", "dimitre", "aliyah", "steph"];

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

//Built in Array Methods

//****************************** 08/27

var colors = ["red", "orange", "yellow"];

colors[3]; //prints "green"

colors; //Prints ["red", "orange", "yellow"]

//*Push*

colors.push("indigo");
// adds indigo to the end of the arrray

//*pop

colors = ["red", "orange", "yellow"];

colors.pop();
//removes "yellow"


//*Unshift 

var colors = ["red", "blue", "balck"];

colors.unshift("gray");

//["gray", "red", "blue", "black"]

//*Shift

var colors = ["red", "blue", "green"];

colors.shift();

//["blue", "gren"]


//indexOf

var friends = ["tracy", "lacy", "stacy"];

colors.indexOf("lacy");

// returns 1  


//*slice

var fruits = ["apple", "grape", "banana", "pear"];

fruits.slice(1, 3)
//prints "grape", "banana"






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

// what is the result of this line:

console.log(friends[2][0]);

//prints "mooney"
//corrct


