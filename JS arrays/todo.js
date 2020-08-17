var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");



while(input !== "quit") {
	//handle input
	if(input === "list") {
		listTodos();
	} 

	else if(input === "new") {
		addTodo();

	} 

	else if(input === "delete"){
		deleteTodo();		
	}

	//asking for input again to start the loop over
	var input = prompt("What would you like to do?");
}

console.log("You quit the app!"); 

function listTodos(){
	console.log("*******");
		todos.forEach(function(todo, i){
			console.log(i + ": " + todo);
		});
		console.log("*******");
}

function addTodo(){
		//ask for new todo
		var newTodo = prompt("Enter new todo");
		//add to todos array
		todos.push(newTodo);
		console.log("Todo added!");
}

function deleteTodo(){
		//ask for index of todo to be deleted
		var index = prompt("Enter index of todo to delete");
		//delete that todo using splice
		todos.splice(index, 1);
		console.log("Item deleted!");
}