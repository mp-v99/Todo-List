import { createListTitle, createListDueDate, createListStatus, createListItem, showList } from "./UI-DOM";


class TodoList {
    constructor(title, dueDate, status) {
        this.title = title;
        this.dueDate = dueDate;
        this.status = status;
        this.listItems = [];    
    }

    addListItem() {
        const listItem = createListItem();
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

        const todoList = new TodoList(createListTitle(), createListDueDate(), createListStatus());
        todoList.addListItem();
        this.todos.push(todoList)
        showList(todoList);
       
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
groceries.addTodo()