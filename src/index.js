class Project {
    constructor(title, description, createdAt) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.todos = [];
        this.notes = [];
    }

    addTodo(title, description, dueDate, status, priority) {     

        const todo = new Todo(title, description, dueDate, status, priority);
        this.todos.push(todo);
       
    }

    addNote(text) {

        const note = new Note(text);
        this.notes.push(note);

    }

    removeTodo(todoID) {
       
        const todoIndex = this.todos.findIndex(t => t.id === todoID);
        this.todos.splice(todoIndex,1);

    }

    removeNote(noteID) {
       
        const noteIndex = this.notes.findIndex(t => t.id === noteID);
        this.notes.splice(noteIndex,1);

    }

    updateTodo(todoID, patch) {

        const todoIndex = this.todos.findIndex(t => t.id === todoID);
        this.todos[todoIndex].updateItem(patch);

    }

    updateNote(noteID, text) {

        const noteIndex = this.notes.findIndex(t => t.id === noteID);
        this.notes[noteIndex].updateTextBody(text);

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

    updateItem(patch) {
        if (patch.title !== undefined) {
            this.title = patch.title;
        }

        if (patch.description !== undefined) {
            this.description = patch.description;
        }

        if (patch.dueDate !== undefined) {
            this.dueDate = patch.dueDate;
        }

        if (patch.status !== undefined) {
            this.status = patch.status;
        }

        if (patch.priority !== undefined) {
            this.priority = patch.priority;
        }
    }

}

class Note {
    constructor(textBody) {
        this.id = crypto.randomUUID();
        this.textBody = textBody;
    }

    updateTextBody(text) {
        this.textBody = text;
    }
}


class CheckListItem {
    constructor(textLine) {
        this.id = crypto.randomUUID();
        this.textLine = textLine;
        this.checkBox = false;
    }

    updateTextLine(text) {
        this.textLine = text;
    }    

    toggleCheckBox() {
        if (this.checkBox === true) {
            this.checkBox = false;
        }
        else if (this.checkBox === false) {
            this.checkBox = true;
        }
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
groceries.addNote("Bring coupons!!!");
groceries.addNote("Bring more coupons!")

groceries.todos[0].addListItem("carrot");
groceries.todos[0].addListItem("brocoli");

const veggiesID = groceries.todos[0].id;
const noteOneID = groceries.notes[0].id;

drawProject(groceries);

groceries.updateNote(noteOneID, "check pantry before leaving")

drawProject(groceries);
