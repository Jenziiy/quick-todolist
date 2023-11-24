const toDoList = require("./todo-list");

class ToDoProject{

  constructor(){
    this.project = null;
  }

  getProject(projectName = "default"){
    return this.project = toDoList.todoList.filter(item => item.projectName == projectName);
  }

}

module.exports = new ToDoProject();