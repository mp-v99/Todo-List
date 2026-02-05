class TodoList {
    constructor(title, dueDate, status) {
        this.title = title;
        this.dueDate = dueDate;
        this.status = status;
        this.listItems = [];    
    }

    addListItem() {
        const listItem = prompt("Add one list item if you'd like(you can re-prompt to add more items if you'd like)");
        this.listItems.push(listItem);

        alert(this.listItems)
    }

}


class Project {
    constructor(title, description, dueDate, status, todoLists, notes) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.todoLists = [];
        this.notes = [];
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

const groceries = new Project("groceries", "this is a groceries project", "May-5th-2026", "To do") 
drawProject(groceries)

window.groceries = groceries;