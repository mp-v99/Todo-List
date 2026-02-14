class Project {
    constructor(title, description, createdAt) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.todos = [];
        this.notes = [];
    }

    addTodo(title, description, dueDate, listStatus, priority) {     

        const todo = new Todo(title, description, dueDate, listStatus, priority);
        this.todos.push(todo)
       
    }

    addNote(text) {

        const note = new Note(text);
        this.notes.push(note);
    }
}

class Todo {
    constructor(title, description, dueDate, status, priority) {
        this.id = crypto.randomUUID();
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

class Note {
    constructor(textBody) {
        this.id = crypto.randomUUID();
        this.textBody = textBody;
    }
}

const drawProject = function(project) {
    console.log(`
    |Title:     ${project.title}               
    |Body:      ${project.description}              
    |Created at:       ${project.createdAt}         
    `)
    
    console.log(`    
    |List of Todos:           
    `)

    for (const todo of project.todos) {console.log(`${todo.title}`)};

    console.log(`
    |List of Notes:
    `)

    for (const note of project.notes) {console.log(`${note.textBody}`)};
}

const drawTodo = function(todo) {
    console.log(`
        |Title:     ${todo.title}               
        |Description:      ${todo.description}              
        |Due:       ${todo.dueDate}         
        |Status: ${todo.status}
        |Priority: ${todo.priority}
        `)

    console.log(`    
        |Checklist:           
        `)
    
        for (const check of todo.checkList) {console.log(`[]${check}`)};
}


// Logs:

const groceries = new Project("groceries", "this is a groceries project", "today");

window.groceries = groceries;
groceries.addTodo("buy veggies", "go to the street market to get fresh veggies", "Feb-6th", "To do", "high");
groceries.addTodo("buy protein", "the protein has to come in frozen format in order to last", "Feb-6th", "To do", "high");
groceries.addTodo("buy candy", "the BBB store has good offers for valentine's", "Feb-6th", "To do", "high");
groceries.addNote("Remember to check the pantry before leaving to check if you are missing something.");

groceries.todos[0].addListItem("carrot");
groceries.todos[0].addListItem("brocoli");

drawProject(groceries);

const veggiesID = groceries.todos[0].id;
const findTodoID = function(todoID) {
    const findIndex = groceries.todos.findIndex(t => t.id === todoID);
    return findIndex
};

drawTodo(groceries.todos[findTodoID(veggiesID)]);