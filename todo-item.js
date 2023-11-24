module.exports = class TodoItem {
  constructor(title, description, checked = false, startDate ){
    this.project = "default";
    this.title = title;
    this.description = description;
    this.checked = checked
    this.startDate = new Date().toLocaleString().split(",")[0];
    this.endDate = null;
  }

  getProject(){
    return this.project;
  }

  setProject(name){
    this.project = name;
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