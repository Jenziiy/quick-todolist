const TodoItem = require("./todo-item");
const todoList = require("./todo-list"); 
const todoProject = require("./todo-project");

todoList.addToList(new TodoItem("first item", "first item description"));
todoList.addToList(new TodoItem("item 2", "description item2"));
//console.log(todoList.todoList);
//console.log(todoList.todoList[0])
todoList.todoList[1].setProject("example");
//console.log(todoList.todoList[0])
//console.log(todoList.todoList[1])

const projectOfChoice = todoProject.getProject("example");
console.log(projectOfChoice);