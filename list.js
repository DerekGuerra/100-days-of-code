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