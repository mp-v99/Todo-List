class Project {
    constructor(title, description, dueDate, status, todoLists, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.todoLists = todoLists;
        this.notes = notes;
    }

}

const drawTodo = function(todo) {
    console.log(`
|Title:     ${todo.title}               
|Body:      ${todo.description}              
|Due:       ${todo.dueDate}                 
|Status:    ${todo.status}             
`)
}

const groceriesList = new Project("groceries", "this is a groceries project", "May-5th-2026", "To do") 
drawTodo(groceriesList)