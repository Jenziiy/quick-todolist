const TodoItem = require("./todo-item");
const todoList = require("./todo-list"); 

todoList.addToList(new TodoItem("first item", "first item description"));
todoList.addToList(new TodoItem("item 2", "description item2"));
console.log(todoList.todoList);
