class ProjectManager {
    constructor() {
        this.projects = [];
    }

    addProject(title, description, createdAt) {

        const project = new Project(title, description, createdAt);

        this.projects.push(project);
    }

    removeProject(projectID) {
       
        const projectIndex = this.projects.findIndex(t => t.id === projectID);
        this.projects.splice(projectIndex,1);

    }


}

const appProjectManager = new ProjectManager();

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

    addListItem(text) {

        const checkListItem = new CheckListItem(text);

        this.checkList.push(checkListItem);
    };

    removeListItem(listItemID) {
       
        const listItemIndex = this.checkList.findIndex(t => t.id === listItemID);
        this.checkList.splice(listItemIndex,1);

    }

    updateListItem(listItemID, text) {

        const listItemIndex = this.checkList.findIndex(t => t.id === listItemID);
        this.checkList[listItemIndex].updateTextLine(text);

    };

    toggleListItem(listItemID) {

        const listItemIndex = this.checkList.findIndex(t => t.id === listItemID);
        this.checkList[listItemIndex].toggleCheckBox();

    };

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
    };

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
    
        for (const item of todo.checkList) {console.log(`${item.checkBox} ${item.textLine}`)};
}


// Logs:

appProjectManager.addProject("groceries", "this is a groceries project", "today");
appProjectManager.addProject("Work", "this is a work project", "today");



appProjectManager.projects[0].addTodo("buy veggies", "go to the street market to get fresh veggies", "Feb-6th", "To do", "high");
appProjectManager.projects[0].addTodo("buy protein", "the protein has to come in frozen format in order to last", "Feb-6th", "To do", "high");
appProjectManager.projects[0].addTodo("buy candy", "the BBB store has good offers for valentine's", "Feb-6th", "To do", "high");
appProjectManager.projects[0].addNote("Remember to check the pantry before leaving to check if you are missing something.");
appProjectManager.projects[0].addNote("Bring coupons!!!");
appProjectManager.projects[0].addNote("Bring more coupons!")

appProjectManager.projects[0].todos[0].addListItem("carrot");
appProjectManager.projects[0].todos[0].addListItem("brocoli");



drawProject(appProjectManager.projects[0])

appProjectManager.removeProject(appProjectManager.projects[0].id)

drawProject(appProjectManager.projects[0])


