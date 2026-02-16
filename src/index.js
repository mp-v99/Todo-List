class ProjectManager {
    constructor() {
        this.projects = [];
    }

    addProject(title, description, createdAt) {

        const project = new Project(title, description, createdAt);

        this.projects.push(project);
    }

    removeProject(projectID) {
       
        this.projects.splice(this.getProjectByID(projectID),1);

    }
  
    selectActiveProject(projectID) {
    
       return this.projects[this.getProjectByID(projectID)];
      
    }


    drawHomeMenu() {

        let menuArray = [];
        for (const project of this.projects) {

            
            if (project.todos[0] !== undefined) {
                menuArray.push({title: project.title, firstTodo: project.todos[0]})
            }
            else {
                menuArray.push({title: project.title})
            }
        }

        return(menuArray);
    }


    getProjectByID(projectID) {

        const projectIndex = this.projects.findIndex(t => t.id === projectID);

        return projectIndex;
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

const groceries = appProjectManager.projects[0];

const groceriesID = groceries.id;

groceries.addTodo("Buy protein");


console.log(appProjectManager.drawHomeMenu())