// import { initUI } from "./UI-DOM";

const loadProject = function(projectManager, projectID) {
    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
    const todosContainer = document.createElement("div");
    const notesContainer = document.createElement("div");
   
    newSection.id = "active_project_section";
    todosContainer.classList.add("todos_list");
    notesContainer.classList.add("notes_grid");

    mainContainer.innerHTML = '';
    mainContainer.appendChild(newSection);


    const projectTitle = document.createElement('h1');
    const notesHeader = document.createElement('h2');
    const listOfTodos = document.createElement('ul');

    projectManager.setActiveProject(projectID);
    projectTitle.textContent = `Project: ${projectManager.getActiveProject(projectID).title}`;
    notesHeader.textContent = "Notes:"

    for (const todo of projectManager.getActiveProject(projectID).todos) {
        const newTodo = document.createElement("li");
        const todoCheckBox = document.createElement("input");
        const todoTitle = document.createElement("h5");
        const todoStatus = document.createElement("p");
        const todoPriority = document.createElement("h6");

        todoCheckBox.type = "checkbox"
        todoTitle.textContent = todo.title;
        todoStatus.textContent = todo.status;
        todoPriority.textContent = `Priority: ${todo.priority}`;

        listOfTodos.appendChild(newTodo);
        newTodo.appendChild(todoCheckBox);
        newTodo.appendChild(todoTitle);
        newTodo.appendChild(todoStatus);
        newTodo.appendChild(todoPriority);
    }

    for (const note of projectManager.getActiveProject(projectID).notes) {
        const newNote = document.createElement("article");
       
        newNote.textContent = note.textBody;
        
        notesContainer.appendChild(newNote);
    }

    newSection.appendChild(todosContainer);
    newSection.appendChild(projectTitle);
    newSection.appendChild(notesHeader);
    newSection.appendChild(notesContainer);
    todosContainer.appendChild(listOfTodos);
}

export {loadProject};