class Todo {
    constructor(title, description, dueDate, status, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
        this.priority = priority;
        this.checkList = [];    
    }

    addListItem(listItem) {
        this.checkList.push(listItem);
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

    addTodo(title, description, dueDate, listStatus) {     

        const todo = new Todo(title, description, dueDate, listStatus);
        this.todos.push(todo)
       
    }
}

const drawProject = function(project) {
    console.log(`
    |Title:     ${project.title}               
    |Body:      ${project.description}              
    |Created at:       ${project.createdAt}       
    |List of Todos:           
    `)

    for (const todo of project.todos) {console.log(`${todo.title}`)}
}

const groceries = new Project("groceries", "this is a groceries project", "today") 

window.groceries = groceries;
groceries.addTodo("buy veggies", "Feb-6th", "To do", "high")

drawProject(groceries)
