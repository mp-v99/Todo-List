// import { createListTitle, createListDueDate, createListStatus, createListItem, showList } from "./UI-DOM";


class TodoList {
    constructor(title, dueDate, status) {
        this.title = title;
        this.dueDate = dueDate;
        this.status = status;
        this.listItems = [];    
    }

    addListItem(listItem) {
        // const listItem = createListItem();
        this.listItems.push(listItem);
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

    addTodo(title, dueDate, listStatus) {

        // const todoList = new TodoList(createListTitle(), createListDueDate(), createListStatus());
        const todoList = new TodoList(title, dueDate, listStatus);
        this.todos.push(todoList)
        // showList(todoList);
       
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
        ${todo.listItems[0]}
    `)}
}

const groceries = new Project("groceries", "this is a groceries project", "today") 

window.groceries = groceries;
groceries.addTodo("Vegetables", "Feb-6th", "To do")
groceries.todos[0].addListItem("Carrot");

drawProject(groceries)
