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
    constructor(title, description, createdAt) {
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.todos = [];
        this.notes = [];
    }

    addTodo() {
        const listTitle = prompt("Name your list");
        const dueDate = prompt("Add due date");
        const status = prompt("select the stage of this list");

        const todoList = new TodoList(listTitle, dueDate, status);
        this.todos.push(todoList)
        alert(`Here's the list you just made:
             ${todoList.title}
             ${todoList.dueDate}
             ${todoList.status}
             `);
        todoList.addListItem();
    }
}

const drawProject = function(project) {
    console.log(`
|Title:     ${project.title}               
|Body:      ${project.description}              
|Created at:       ${project.createdAt}       
|Lists:           
`)
for (const todo of project.todos) {console.log(`${todo.title}
    
    `)}
}

const groceries = new Project("groceries", "this is a groceries project", "today") 
drawProject(groceries)

window.groceries = groceries;