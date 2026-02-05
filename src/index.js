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

    addTodo() {
        const listTitle = prompt("Name your list");
        const dueDate = prompt("Add due date");
        const status = prompt("select the stage of this list");

        const todoList = new TodoList(listTitle, dueDate, status);
        this.todoLists.push(todoList)
        alert(`Here's the list you just made:
             ${todoList.title}
             ${todoList.dueDate}
             ${todoList.status}
             `);
        todoList.addListItem();
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