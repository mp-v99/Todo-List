import {renderProjects} from "./UI-DOM.js";

const renderProject = function(projectManager, projectID, today) {
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
    projectsBackBtn.textContent = "Back";
    notesHeader.textContent = "Notes:";
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
    newSection.appendChild(renderNotes(activeProject, projectManager));

    projectDetails.appendChild(descriptionHeader);
    projectDetails.appendChild(projectDescription);
    projectDetails.appendChild(projectCreatedAt);

    projectsBackBtn.addEventListener("click", () => {
        renderProjects(projectManager, today);
    })

    projectTitle.addEventListener("click", () => {
        replaceProjectElementWithInput(projectTitle, newSection, activeProject)
    })

    projectDescription.addEventListener("click", () => {
        replaceProjectElementWithInput(projectDescription, projectDetails, activeProject)
    })

    addNoteBtn.addEventListener("click", () => {
        renderNoteModal(activeProject)
    })
};

const renderTodoItem = function(listOfTodos, activeProject, todo, projectManager) {
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
        renderTodo(activeProject, todo, projectManager);
    }) 
    todoStatus.addEventListener("click", () => {
        updateTodoStatus(todoStatus, activeProject, todo);
    });

    todoPriority.addEventListener("click", () => {
        updateTodoPriority(todoPriority, activeProject, todo)
    })

}

const renderNewTodoForm = function(formOverlay, activeProject, projectManager) {
    const body = document.querySelector("body");
    const todosList = document.querySelector(".list_of_todos");
  
    const todoForm = document.createElement("form");
    todoForm.id = "todo_form";
    const formHeader = document.createElement("h2");
    formHeader.textContent = " + New Todo"
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    titleLabel.textContent = "Title:";
    titleLabel.classList.add("todo_title_label");
    titleLabel.htmlFor = "todo_title_input"
    titleInput.id = "todo_title_input";
    titleInput.type = "text";
    titleInput.placeholder = "Implement localStorage persistence";
    titleInput.required = true;
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("textarea");
    descriptionLabel.textContent = "Description:"
    descriptionLabel.classList.add("todo_description_label");
    descriptionLabel.htmlFor = "todo_description_input";
    descriptionInput.id = "todo_description_input";
    descriptionInput.placeholder = "Save projects and todos to localStorage so the app persists after refresh."
    descriptionInput.required = true;
    const dueDateLabel = document.createElement("label");
    const dueDateInput = document.createElement("input");
    dueDateLabel.textContent = "Due:";
    dueDateLabel.classList.add("todo_due_date_label");
    dueDateLabel.htmlFor = "todo_due_date_input"
    dueDateInput.id = "todo_due_date_input";
    dueDateInput.type = "date";
    dueDateInput.required = true;
    const priorityLabel = document.createElement("label");
    const priorityInput = document.createElement("input");
    priorityLabel.textContent = "Priority:";
    priorityLabel.classList.add("todo_priority_label");
    priorityLabel.htmlFor = "todo_priority_input";
    priorityInput.id = "todo_priority_input";
    priorityInput.type = "button";
    priorityInput.value = "Low";
    priorityInput.classList = "priority_low";
    
    const submitProjectBtn = document.createElement("button");
    submitProjectBtn.textContent = "Submit"
    submitProjectBtn.type = "submit"

    formOverlay.appendChild(todoForm);
    todoForm.appendChild(formHeader);
    todoForm.appendChild(titleLabel);
    todoForm.appendChild(titleInput);
    todoForm.appendChild(dueDateLabel);
    todoForm.appendChild(dueDateInput);
    todoForm.appendChild(priorityLabel);
    todoForm.appendChild(priorityInput);
    todoForm.appendChild(descriptionLabel);
    todoForm.appendChild(descriptionInput);
    todoForm.appendChild(submitProjectBtn);

    function closeForm() {formOverlay
        document.removeEventListener("keydown", handleEscape);
        if (formOverlay.parentNode) {
            formOverlay.parentNode.removeChild(formOverlay);
        }
    }

    function handleEscape(e) {
        if (e.key === "Escape") {
            closeForm();
        }
    }

    priorityInput.addEventListener("click", () => {
        // alert(priorityInput.value);
        if (priorityInput.value.toLowerCase() === "low") {
            priorityInput.value = "Medium";
            priorityInput.classList = "priority_medium";
        }
        else if (priorityInput.value.toLowerCase() === "medium") {
            priorityInput.value = "High";
            priorityInput.classList = "priority_high";
        }
        else if (priorityInput.value.toLowerCase() === "high") {
            priorityInput.value = "Low";
            priorityInput.classList = "priority_low";
        }    
    })



    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        activeProject.addTodo(titleInput.value, descriptionInput.value, dueDateInput.value, "To do", priorityInput.value);
        const todo = activeProject.todos[activeProject.todos.length - 1];
        renderTodoItem(todosList, activeProject, todo, projectManager);   
        body.removeChild(formOverlay); 
    })

    document.addEventListener("keydown", handleEscape);
};


const renderNoteModal = function(activeProject, note) {
    const body = document.querySelector("body");
    const formOverlay = document.createElement("dialog");
    formOverlay.id = "form_note_overlay";
    body.appendChild(formOverlay);
  
    const noteForm = document.createElement("form");
    noteForm.id = "note_form";
    const noteInput = document.createElement("textarea");
    noteInput.classList.add("note_article_input");
    if (note) {
        noteInput.value = note.textContent;
    }
    
    const submitProjectBtn = document.createElement("button");
    submitProjectBtn.textContent = "Ready"
    submitProjectBtn.type = "submit"

    formOverlay.appendChild(noteForm);
    noteForm.appendChild(noteInput);
    noteForm.appendChild(submitProjectBtn);

    function closeForm() {formOverlay
        document.removeEventListener("keydown", handleEscape);
        if (formOverlay.parentNode) {
            formOverlay.parentNode.removeChild(formOverlay);
        }
    }

    function handleEscape(e) {
        if (e.key === "Escape") {
            closeForm();
        }
    }

    noteForm.addEventListener("submit", (e) => {
        e.preventDefault();

        if (note) {
            activeProject.updateNote(note.id, noteInput.value);
            note.textContent = noteInput.value;
            body.removeChild(formOverlay);
        }

        else if (!note) {
            activeProject.addNote(noteInput.value);
            const newNoteID = activeProject.notes[0].id;
            renderNewNote(noteInput.value, newNoteID, activeProject)
            body.removeChild(formOverlay); 
        }
    })

    formOverlay.addEventListener("click", (e) => {
        if (e.target === formOverlay) {
            body.removeChild(formOverlay);
        }
    })    

    document.addEventListener("keydown", handleEscape);
};

const renderOverlay = function(activeProject, projectManager) {
    const formOverlay = document.createElement("dialog");
    const body = document.querySelector("body");
    formOverlay.id = "form_overlay";
    body.appendChild(formOverlay);

    renderNewTodoForm(formOverlay, activeProject, projectManager);

    formOverlay.addEventListener("click", (e) => {
        if (e.target === formOverlay) {
            body.removeChild(formOverlay);
        }
    })
}

const renderTodos = function(projectManager, todosArray, todosContainer) {
    const listOfTodos = document.createElement('ul');
    listOfTodos.classList.add("list_of_todos")
    const activeProject = projectManager.getActiveProject();
    const listHeader = document.createElement("header");

    listHeader.id = "todos_header"
    
    const subjectHeader = document.createElement("span");
    const statusHeader = document.createElement("span");
    const priorityHeader = document.createElement("span");
    const addTodoBtn = document.createElement("button");



    subjectHeader.classList.add("subject_header");
    subjectHeader.textContent = "Task:"
    statusHeader.classList.add("status_header");
    statusHeader.textContent = "Status:"
    priorityHeader.classList.add("priority_header");
    priorityHeader.textContent = "Priority:";
    addTodoBtn.classList.add("add_todo_btn");
    addTodoBtn.textContent = "+";

    todosContainer.appendChild(listHeader);

    listHeader.appendChild(subjectHeader);
    listHeader.appendChild(statusHeader);
    listHeader.appendChild(priorityHeader);
    listHeader.appendChild(addTodoBtn);


    for (const todo of todosArray) {

        const newTodo = document.createElement("li");
        const subjectContainer = document.createElement("div");
        const todoSubject = document.createElement("button");
        const statusContainer = document.createElement("div");
        const todoStatus = document.createElement("button");
        const priorityContainer = document.createElement("div");
        const todoPriority = document.createElement("button");
        const deleteBtnContainer = document.createElement("div");
        const todoDeleteBtn = document.createElement("button");


        subjectContainer.classList.add("todo_subject");
        statusContainer.classList.add("todo_status");
        priorityContainer.classList.add("todo_priority");
        todoDeleteBtn.classList.add("delete_todo");
        todoSubject.textContent = todo.title;
        todoSubject.classList.add("todo_subject_btn");
        newTodo.setAttribute("data-id", todo.id);

        todoStatus.textContent = todo.status;
        todoDeleteBtn.textContent = "X";

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
        newTodo.appendChild(deleteBtnContainer);
        deleteBtnContainer.appendChild(todoDeleteBtn);

        todoSubject.addEventListener("click", () => {
            renderTodo(activeProject, todo, projectManager);
        })
        todoStatus.addEventListener("click", () => {
            updateTodoStatus(todoStatus, activeProject, todo);
        });

        todoPriority.addEventListener("click", () => {
            updateTodoPriority(todoPriority, activeProject, todo)
        });

        todoDeleteBtn.addEventListener("click", () => {
            renderTodoDeleteCard(activeProject, newTodo, todoSubject)
        })
    
    }

    addTodoBtn.addEventListener("click", () => {
        renderOverlay(activeProject, projectManager)
    })

    return listOfTodos;

}

const renderTodoDeleteCard = function(activeProject, todoElement, todoTitle) {
    const body = document.querySelector("body");
    const listOfTodos = document.querySelector(".list_of_todos");
    const formOverlay = document.createElement("dialog");
    formOverlay.id = "form_note_overlay";
    body.appendChild(formOverlay);

    const deleteTodoForm = document.createElement("form");
    deleteTodoForm.id = "delete_form";
    const formHeader = document.createElement("h2");
    formHeader.textContent = "Delete Todo?"
    const formDescription = document.createElement("p");
    formDescription.innerHTML = `This will delete the todo: <strong>${todoTitle.textContent}</strong>`
    const submitDeleteFormBtn = document.createElement("button");
    submitDeleteFormBtn.classList.add("submit_delete_form_btn");
    submitDeleteFormBtn.innerHTML = `<strong>Delete Todo</strong>`;
    submitDeleteFormBtn.type = "submit";
    const cancelDeleteFormBtn = document.createElement("button");
    cancelDeleteFormBtn.classList.add("cancel_delete_form_btn");
    cancelDeleteFormBtn.innerHTML = `<strong>Cancel</strong>`;
    cancelDeleteFormBtn.type = "button"

    formOverlay.appendChild(deleteTodoForm);
    deleteTodoForm.appendChild(formHeader);
    deleteTodoForm.appendChild(formDescription);
    deleteTodoForm.appendChild(cancelDeleteFormBtn);
    deleteTodoForm.appendChild(submitDeleteFormBtn);

    function closeForm() {
        document.removeEventListener("keydown", handleEscape);
        if (formOverlay.parentNode) {
            formOverlay.parentNode.removeChild(formOverlay);
        }
    }

    function handleEscape(e) {
        if (e.key === "Escape") {
            closeForm();
        }
    }
    
    deleteTodoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        activeProject.removeTodo(todoElement.getAttribute("data-id"));
        listOfTodos.removeChild(todoElement);
        body.removeChild(formOverlay); 
    })

    cancelDeleteFormBtn.addEventListener("click", () => {
        closeForm();
    })

    document.addEventListener("keydown", handleEscape);
}

const renderNotes = function(activeProject, projectManager) {
    const notesContainer = document.createElement("div");
    notesContainer.classList.add("notes_grid");

    if (!activeProject) {
        for (const project of projectManager.projects) {
            for (const note of project.notes) {
                const newNote = document.createElement("article");
                newNote.classList.add("note_article");
                newNote.id = note.id;
        
               
                newNote.textContent = note.textBody;
                
                notesContainer.appendChild(newNote);
        
                newNote.addEventListener("click", () => {
                    renderNoteModal(project, newNote);
                })
            }
        }
    }

    else if (activeProject) {
        for (const note of activeProject.notes) {
            const newNote = document.createElement("article");
            newNote.classList.add("note_article");
            newNote.id = note.id;
    
           
            newNote.textContent = note.textBody;
            
            notesContainer.appendChild(newNote);
    
            newNote.addEventListener("click", () => {
                renderNoteModal(activeProject, newNote);
            })
        }
    }
    

   

    return notesContainer;
}

const renderNewNote = function(textValue, noteID, activeProject) {
    const notesContainer = document.querySelector(".notes_grid");
    const noteElement = document.createElement("article");
    noteElement.id = noteID;
    noteElement.classList.add("note_article");
    noteElement.textContent = textValue;

    notesContainer.prepend(noteElement);

    noteElement.addEventListener("click", () => {
        renderNoteModal(activeProject, noteElement)
    })
}

const renderTodo = function(activeProject, todo, projectManager) {

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
    renderTodoDetails(newSection, activeProject, todo);
    newSection.appendChild(checkListContainer);
    checkListContainer.appendChild(checkListHeader);
    checkListContainer.appendChild(addListItemBtn);
    checkListContainer.appendChild(todoChecklist);
  
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

    todoHeader.addEventListener("click", () => {
        replaceTodoElementWithInput(todoHeader, newSection, activeProject, todo);
    })

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

    const inputContainer = document.createElement("form");
    inputContainer.classList = "inline_edit_form";
    input.classList.add(`${element.classList}_input`)
    input.id = `${element.classList}_input`
    input.value = element.textContent;
    const submitBtn = document.createElement("button");
    submitBtn.classList.add("submit_input_btn");
    submitBtn.htmlFor = `${element.classList}_input`;
    submitBtn.textContent = "Ready";
    inputContainer.appendChild(input);
    inputContainer.appendChild(submitBtn);
    section.replaceChild(inputContainer, element);
    input.focus();

    inputContainer.addEventListener("submit", (e) => {
        e.preventDefault();

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
        section.replaceChild(element, inputContainer);
        
    });

    inputContainer.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && e.ctrlKey) {
            if (element.classList.contains("project_description")) {
                activeProject.updateDescription(input.value)
            }
            else if (element.classList.contains("note_article")) {
                activeProject.updateNote(element.id, input.value)
            }
            element.textContent = input.value;
            section.replaceChild(element, inputContainer);
        }
    })

};

const updateSubject = function(activeProject, todo, inputValue) {
    activeProject.updateTodo(todo.id, {title: inputValue});
};

const renderTodoDetails = function(newSection, activeProject, todo) {
    const todoDetails = document.createElement("div");
    todoDetails.classList.add("todo_details_container");
    todoDetails.setAttribute("data-id", todo.id);
    newSection.appendChild(todoDetails);

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

     const todoDueDateInput = document.createElement("input");
     todoDueDateInput.classList.add("priority_input");
     todoDueDateInput.type = "date"
     todoDueDateInput.value = todoDueDate.textContent;
 
     // Description:
 
     const descriptionLabel = document.createElement("p");
     descriptionLabel.textContent = "Description:"
     const todoDescription = document.createElement("p");
     todoDescription.textContent = todo.description;
     todoDescription.classList.add("description_text");   

    todoDetails.appendChild(statusLabel);
    todoDetails.appendChild(todoStatusBtn);
    todoDetails.appendChild(priorityLabel);
    todoDetails.appendChild(todoPriorityBtn);
    todoDetails.appendChild(dueDateLabel);
    todoDetails.appendChild(todoDueDate);
    todoDetails.appendChild(descriptionLabel);
    todoDetails.appendChild(todoDescription);

    todoDescription.addEventListener("click", () => {
        replaceTodoElementWithInput(todoDescription, todoDetails, activeProject, todo);
    });

    todoDueDate.addEventListener("click", () => {
        todoDetails.replaceChild(todoDueDateInput, todoDueDate);
    });

    todoDueDateInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            updateTodoDueDate(activeProject, todo, todoDueDateInput.value);
            todoDueDate.textContent = todoDueDateInput.value;
            todoDetails.replaceChild(todoDueDate, todoDueDateInput);
        }
    });

    todoStatusBtn.addEventListener("click", () => {
        updateTodoStatus(todoStatusBtn, activeProject, todo);
    });

    todoPriorityBtn.addEventListener("click", () => {
        updateTodoPriority(todoPriorityBtn, activeProject, todo);
    });
 
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