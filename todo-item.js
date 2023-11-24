module.exports = class TodoItem {
  constructor(title, description, projectName = "default"){
    this.projectName = projectName;
    this.title = title;
    this.description = description;
    this.checked = false;
    this.creationDate = new Date().toLocaleString().split(",")[0];
    this.endDate = null;
  }

  getProject(){
    return this.projectName;
  }

  setProject(name){
    this.projectName = name;
    console.log(`project name has been set to ${name}`);
  }

  setChecked(){
    this.checked = !this.checked;
  }

  setEndDate(){
    this.checked ? this.endDate = new Date().toLocaleString().split(",")[0] : this.endDate = "";
  }

}

// const todo = new todoItem("learn something", "learn kotlin", null, 25/11/2023);
// console.log(todo);
// todo.setChecked();
// todo.setEndDate();
// console.log(todo);