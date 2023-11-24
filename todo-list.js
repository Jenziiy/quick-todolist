const TodoItem = require('./todo-item');
class TodoList{

  constructor(){
    this.todoList = [];
  }

  addToList(item){
    if ( typeof(TodoItem) ){
      this.todoList.push(item);
      return this.todoList[this.todoList.length-1];
    } 
    return console.error("typechecking failed, plz use a real todo item");
  }

}

module.exports = new TodoList();