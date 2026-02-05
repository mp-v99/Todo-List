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

const drawProject = function(todo) {
    console.log(`
|Title:     ${todo.title}               
|Body:      ${todo.description}              
|Due:       ${todo.dueDate}                 
|Status:    ${todo.status}             
`)
}

const groceries = new Project("groceries", "this is a groceries project", "May-5th-2026", "To do", [{listItem: "Todo List"}], [{note: "Note"}]) 
drawProject(groceries)

window.groceries = groceries;