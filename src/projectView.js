import {loadProjects} from "./UI-DOM.js";

const renderProject = function(projectManager, projectID) {
    projectManager.setActiveProject(projectID);
    const activeProject = projectManager.getActiveProject();

    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
    const projectDetails = document.createElement("div");
    const todosContainer = document.createElement("div");
    
    newSection.id = "active_project_section";
    projectDetails.classList.add("project_details");
    todosContainer.classList.add("todos_list");
    
    mainContainer.innerHTML = '';
    mainContainer.appendChild(newSection);

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add("active_project_title");
    const projectsBackBtn = document.createElement("button");
    projectsBackBtn.classList.add("back_to_projects_btn");
    const notesHeader = document.createElement('h3');
    notesHeader.classList.add("active_project_notes_header");
    const addNoteBtn = document.createElement("button");
    addNoteBtn.classList.add("add_note_btn");
    const descriptionHeader = document.createElement("h3");
    const projectDescription = document.createElement("p");
    const projectCreatedAt = document.createElement("p");
    descriptionHeader.classList.add("description_header");
    projectDescription.classList.add("project_description");
    projectCreatedAt.classList.add("project_created_at");
    
    projectTitle.textContent = `${activeProject.title}`;
    projectsBackBtn.textContent = "Back"
    notesHeader.textContent = "Notes:"
    addNoteBtn.textContent = "+";
    descriptionHeader.textContent = "Description"
    projectDescription.textContent = activeProject.description;
    projectCreatedAt.textContent = `Created at: ${activeProject.createdAt}`
    
    newSection.appendChild(projectTitle);
    newSection.appendChild(projectsBackBtn);
    newSection.appendChild(projectDetails);
    newSection.appendChild(todosContainer);
    newSection.appendChild(notesHeader);
    newSection.appendChild(addNoteBtn);
    todosContainer.appendChild(renderTodos(projectManager, activeProject.todos, todosContainer));
    newSection.appendChild(renderNotes(activeProject));

    projectDetails.appendChild(descriptionHeader);
    projectDetails.appendChild(projectDescription);
    projectDetails.appendChild(projectCreatedAt);

    projectsBackBtn.addEventListener("click", () => {
        loadProjects(projectManager);
    })

    projectTitle.addEventListener("click", () => {
        replaceProjectElementWithInput(projectTitle, newSection, activeProject)
    })

    projectDescription.addEventListener("click", () => {
        replaceProjectElementWithInput(projectDescription, projectDetails, activeProject)
    })

    addNoteBtn.addEventListener("click", () => {
        // activeProject.addNote("New note");
        renderNewNote(activeProject);
    })
};

const renderTodos = function(projectManager, todosArray, todosContainer) {
    const listOfTodos = document.createElement('ul');
    const activeProject = projectManager.getActiveProject();
    const listHeader = document.createElement("header");

    listHeader.id = "todos_header"
    
    const subjectHeader = document.createElement("span");
    const statusHeader = document.createElement("span");
    const priorityHeader = document.createElement("span");


    subjectHeader.classList.add("subject_header");
    subjectHeader.textContent = "Task:"
    statusHeader.classList.add("status_header");
    statusHeader.textContent = "Status:"
    priorityHeader.classList.add("priority_header");
    priorityHeader.textContent = "Priority:";

    todosContainer.appendChild(listHeader);

    listHeader.appendChild(subjectHeader);
    listHeader.appendChild(statusHeader);
    listHeader.appendChild(priorityHeader);


    for (const todo of todosArray) {

        const newTodo = document.createElement("li");
        const subjectContainer = document.createElement("div");
        const todoSubject = document.createElement("button");
        const statusContainer = document.createElement("div");
        const todoStatus = document.createElement("button");
        const priorityContainer = document.createElement("div");
        const todoPriority = document.createElement("button");


        subjectContainer.classList.add("todo_subject");
        statusContainer.classList.add("todo_status");
        priorityContainer.classList.add("todo_priority");
        todoSubject.textContent = todo.title;
        todoSubject.classList.add("todo_subject_btn");
        todoStatus.textContent = todo.status;

        if (todo.status.toLowerCase() === "to do") {
            todoStatus.classList.add("status_todo");
        }
        else if (todo.status.toLowerCase() === "in progress") {
            todoStatus.classList.add("status_progress");
        }
        else if (todo.status.toLowerCase() === "done") {
            todoStatus.classList.add("status_done");
        }

        todoPriority.textContent = `${todo.priority}`;
        todoPriority.classList.add('priority_btn')

        if (todo.priority.toLowerCase() === "low") {
            todoPriority.classList.add("priority_low")
        }
        else if (todo.priority.toLowerCase() === "medium") {
            todoPriority.classList.add("priority_medium");
        }
        else if (todo.priority.toLowerCase() === "high") {
            todoPriority.classList.add("priority_high");
        }

        listOfTodos.appendChild(newTodo);
        todoSubject.setAttribute("data-id", todo.id);

        newTodo.appendChild(subjectContainer);
        subjectContainer.appendChild(todoSubject);
        newTodo.appendChild(statusContainer);
        statusContainer.appendChild(todoStatus);
        newTodo.appendChild(priorityContainer);
        priorityContainer.appendChild(todoPriority);

        todoSubject.addEventListener("click", () => {
            renderTodo(projectManager, todo);
        }) 
        todoStatus.addEventListener("click", () => {
            updateTodoStatus(todoStatus, activeProject, todo);
        });

        todoPriority.addEventListener("click", () => {
            updateTodoPriority(todoPriority, activeProject, todo)
        })
    
    }

    return listOfTodos;

}

const renderNotes = function(activeProject) {
    const notesContainer = document.createElement("div");
    notesContainer.classList.add("notes_grid");

    for (const note of activeProject.notes) {
        const newNote = document.createElement("article");
        newNote.classList.add("note_article");
        newNote.id = note.id;

       
        newNote.textContent = note.textBody;
        
        notesContainer.appendChild(newNote);

        newNote.addEventListener("click", () => {
            replaceProjectElementWithInput(newNote, notesContainer, activeProject);
        })
    }

    return notesContainer;
}

const renderNewNote = function(activeProject) {
    const notesContainer = document.querySelector(".notes_grid");
    const noteInput = document.createElement("textarea");
    noteInput.classList.add("note_article_input")

    notesContainer.prepend(noteInput);
    noteInput.focus();

    noteInput.addEventListener("keydown", (e) => {
        const noteArticle = document.createElement("article");
        noteArticle.classList.add('note_article');
      
        if (e.key === "Enter" && noteInput.value.length > 0) {
           
            activeProject.addNote(noteInput.value);         
            noteArticle.textContent = noteInput.value;
            noteArticle.id = activeProject.notes[0].id;
            
            notesContainer.replaceChild(noteArticle, noteInput);
           
            noteArticle.addEventListener("click", () => {
                replaceProjectElementWithInput(noteArticle, notesContainer, activeProject);
            });

        }
        else if (e.key === "Enter" && noteInput.value.length === 0) {
            alert("This field can't be empty");
        }
    });



}

const renderTodo = function(projectManager, todo) {

    const activeProject = projectManager.getActiveProject();
    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
    const todoHeader = document.createElement('h1');
    const backBtn = document.createElement("button");

    newSection.id = "active_todo_section" 

    mainContainer.innerHTML = "";
    mainContainer.appendChild(newSection);

    todoHeader.textContent = todo.title;
    todoHeader.classList.add("active_todo_header");
    backBtn.textContent = "Back"
    backBtn.classList.add("back_btn");

    const todoFormContainer = document.createElement("div");
    todoFormContainer.classList.add("todo_container");
    todoFormContainer.setAttribute("data-id", todo.id);

    const checkListContainer = document.createElement("div");
    checkListContainer.classList.add("check_list_container")
    const checkListHeader = document.createElement("h4");
    checkListHeader.textContent = "Subtasks:"
    const addListItemBtn = document.createElement("button");
    addListItemBtn.classList.add("add_subtask_btn");
    addListItemBtn.textContent = "+";
    const todoChecklist = document.createElement("ul");

    newSection.appendChild(todoHeader);
    newSection.appendChild(backBtn);
    newSection.appendChild(todoFormContainer);
    newSection.appendChild(checkListContainer);
    checkListContainer.appendChild(checkListHeader);
    checkListContainer.appendChild(addListItemBtn);
    checkListContainer.appendChild(todoChecklist);

 
    // Status:
    const statusLabel = document.createElement("p");
    statusLabel.textContent = "Status:"
    const todoStatusBtn = document.createElement("button");
    todoStatusBtn.type = 'button'
    todoStatusBtn.classList.add("status_btn");

    if (todo.status.toLowerCase() === "to do") {
        todoStatusBtn.classList.add("status_todo");
    }
    else if (todo.status.toLowerCase() === "in progress") {
        todoStatusBtn.classList.add("status_progress");
    }
    else if (todo.status.toLowerCase() === "done") {
        todoStatusBtn.classList.add("status_done");
    }
    todoStatusBtn.textContent = todo.status;

    // Priority: 

    const priorityLabel = document.createElement("p");
    priorityLabel.textContent = "Priority:"
    const todoPriorityBtn = document.createElement("button");
    todoPriorityBtn.type = 'button'
    todoPriorityBtn.classList.add("priority_btn");

    if (todo.priority.toLowerCase() === "low") {
        todoPriorityBtn.classList.add("priority_low")
    }
    else if (todo.priority.toLowerCase() === "medium") {
        todoPriorityBtn.classList.add("priority_medium");
    }
    else if (todo.priority.toLowerCase() === "high") {
        todoPriorityBtn.classList.add("priority_high");
    }
    todoPriorityBtn.textContent = todo.priority;


    // Due date: 

    const dueDateLabel = document.createElement("p");
    dueDateLabel.textContent = "Due:"
    const todoDueDate = document.createElement("p");
    todoDueDate.textContent = todo.dueDate;

    // Description:

    const descriptionLabel = document.createElement("p");
    descriptionLabel.textContent = "Description:"
    const todoDescription = document.createElement("p");
    todoDescription.textContent = todo.description;
    todoDescription.classList.add("description_text");   
    
    todoFormContainer.appendChild(statusLabel);
    todoFormContainer.appendChild(todoStatusBtn);
    todoFormContainer.appendChild(priorityLabel);
    todoFormContainer.appendChild(todoPriorityBtn);
    todoFormContainer.appendChild(dueDateLabel);
    todoFormContainer.appendChild(todoDueDate);
    todoFormContainer.appendChild(descriptionLabel);
    todoFormContainer.appendChild(todoDescription);

 

    for (const listItem of todo.checkList) {
        const listItemContainer = document.createElement("li");
        const textLineContainer = document.createElement("div");
        const textLine = document.createElement("p");
        textLine.textContent = listItem.textLine;
        textLine.classList.add('checklist_item');
        textLine.id = listItem.id;
        const statusToggle = document.createElement("input");
        statusToggle.type = "checkbox";
        if (listItem.checkBox) {
            statusToggle.checked = true;
        }
        else if (!listItem.checkBox) {
            statusToggle.checked = false;
        }
        
        textLineContainer.appendChild(statusToggle);
        textLineContainer.appendChild(textLine);
        listItemContainer.appendChild(textLineContainer);
        todoChecklist.appendChild(listItemContainer);

        statusToggle.addEventListener("click", () => {
            todo.toggleListItem(listItem.id);
        });

        textLine.addEventListener("click", () => {
            replaceTodoElementWithInput(textLine, textLineContainer, activeProject, todo);
        });
    }

    // add back btn functionality:

    backBtn.addEventListener("click", () => {
        renderProject(projectManager, activeProject.id)
    })   

    // add inputs functionality:

    const todoDueDateInput = document.createElement("input");
    todoDueDateInput.classList.add("priority_input");
    todoDueDateInput.type = "date"
    todoDueDateInput.value = todoDueDate.textContent;

    todoHeader.addEventListener("click", () => {
        replaceTodoElementWithInput(todoHeader, newSection, activeProject, todo);
    })

    todoStatusBtn.addEventListener("click", () => {
        updateTodoStatus(todoStatusBtn, activeProject, todo);
    });

    todoPriorityBtn.addEventListener("click", () => {
        updateTodoPriority(todoPriorityBtn, activeProject, todo);
    });

    todoDescription.addEventListener("click", () => {
        replaceTodoElementWithInput(todoDescription, todoFormContainer, activeProject, todo);
    });

    todoDueDate.addEventListener("click", () => {
        todoFormContainer.replaceChild(todoDueDateInput, todoDueDate);
    });

    todoDueDateInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            updateTodoDueDate(activeProject, todo, todoDueDateInput.value);
            todoDueDate.textContent = todoDueDateInput.value;
            todoFormContainer.replaceChild(todoDueDate, todoDueDateInput);
        }
    });

    // add subtask functionality:

    addListItemBtn.addEventListener("click", () => {
        const listItemContainer = document.createElement("li");
        const inputContainer = document.createElement("div");
        const input = document.createElement("input");
        input.type = "text";        
        input.classList.add('checklist_item_input');
        const statusToggle = document.createElement("input");
        statusToggle.type = "checkbox";
       
        inputContainer.appendChild(statusToggle);
        inputContainer.appendChild(input);
        listItemContainer.appendChild(inputContainer);
        todoChecklist.appendChild(listItemContainer);
        input.focus();

        input.addEventListener("keydown", (e) => {
            const element = document.createElement("p");
            element.classList.add('checklist_item');

            input.classList.add(`${element.classList}_input`);
          

            if (e.key === "Enter" && input.value.length > 0) {
               
                todo.addListItem(input.value)           
                element.textContent = input.value;
                element.id = todo.checkList[todo.checkList.length - 1].id;
                
                inputContainer.replaceChild(element, input);
               
                element.addEventListener("click", () => {
                    replaceTodoElementWithInput(element, inputContainer, activeProject, todo);
                });
                statusToggle.addEventListener("click", () => {
                    todo.toggleListItem(element.id);
                });
            }
            else if (e.key === "Enter" && input.value.length === 0) {
                alert("This field can't be empty");
            }
        });
    });

};

const replaceTodoElementWithInput = function(element, section, activeProject, todo) {
    let input;
    // Header is an input. Description is a text area:
    if (element.classList.contains('active_todo_header') || element.classList.contains('checklist_item') ) {
        input = document.createElement('input');
        input.type = "text";
    }
    else {
        input = document.createElement("textarea");
    }

    input.classList.add(`${element.classList}_input`)
    input.value = element.textContent;
    section.replaceChild(input, element);
    input.focus();

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.length > 0) {
            if(element.classList.contains("active_todo_header")) {
                updateSubject(activeProject, todo, input.value);
            }
            else if (element.classList.contains("description_text")) {
                updateDescription(activeProject, todo, input.value)
            }
            else if (element.classList.contains("checklist_item")) {
                todo.updateListItem(element.id, input.value)
                console.log(todo.checkList)
            }
            element.textContent = input.value;
            section.replaceChild(element, input);
        }
        else if (e.key === "Enter" && input.value.length === 0) {
            alert("This field can't be empty");
        }
  
    });

};

const replaceProjectElementWithInput = function(element, section, activeProject) {
    let input;
    // Header is an input. Description is a text area:
    if (element.classList.contains('active_project_title')) {
        input = document.createElement('input');
        input.type = "text";
    }
    else {
        input = document.createElement("textarea");
    }

    input.classList.add(`${element.classList}_input`)
    input.value = element.textContent;
    section.replaceChild(input, element);
    input.focus();

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && input.value.length > 0) {
            if(element.classList.contains("active_project_title")) {
                activeProject.updateTitle(input.value);
            }
            else if (element.classList.contains("project_description")) {
                activeProject.updateDescription(input.value)
            }
            else if (element.classList.contains("note_article")) {
                activeProject.updateNote(element.id, input.value)
            }
            element.textContent = input.value;
            section.replaceChild(element, input);
        }
        else if (e.key === "Enter" && input.value.length === 0) {
            alert("This field can't be empty");
        }
  
    });

};

const updateSubject = function(activeProject, todo, inputValue) {
    activeProject.updateTodo(todo.id, {title: inputValue});
};

const updateTodoStatus = function(statusBtn, activeProject, todo) {
  
    if (statusBtn.textContent.toLowerCase() === "to do") {
        activeProject.updateTodo(todo.id, {status: "In Progress"});
        statusBtn.classList = ("status_btn status_progress");
    }
    else if (statusBtn.textContent.toLowerCase() === "in progress") {
        activeProject.updateTodo(todo.id, {status: "Done"});
        statusBtn.classList = "status_btn status_done";
    }
    else if (statusBtn.textContent.toLowerCase() === "done") {
        activeProject.updateTodo(todo.id, {status: "To do"});
        statusBtn.classList = "status_btn status_todo";
    }

    statusBtn.textContent = todo.status;
};

const updateTodoPriority = function(priorityBtn, activeProject, todo) {

    if (priorityBtn.textContent.toLowerCase() === "low") {
        activeProject.updateTodo(todo.id, {priority: "Medium"});
        priorityBtn.classList = ("priority_btn priority_medium");
    }
    else if (priorityBtn.textContent.toLowerCase() === "medium") {
        activeProject.updateTodo(todo.id, {priority: "High"});
        priorityBtn.classList = "priority_btn priority_high";
    }
    else if (priorityBtn.textContent.toLowerCase() === "high") {
        activeProject.updateTodo(todo.id, {priority: "Low"});
        priorityBtn.classList = "priority_btn priority_low";
    }

    priorityBtn.textContent = todo.priority;
};

const updateTodoDueDate = function(activeProject, todo, inputValue) {
    activeProject.updateTodo(todo.id, {dueDate: inputValue})
}

const updateDescription = function(activeProject, todo, inputValue) {
    activeProject.updateTodo(todo.id, {description: inputValue});
}

export {renderProject, renderNotes, renderTodo};