// import { initUI } from "./UI-DOM";

const loadProject = function(projectManager, projectID) {
    projectManager.setActiveProject(projectID);
    const activeProject = projectManager.getActiveProject();

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
    
    projectTitle.textContent = `Project: ${activeProject.title}`;
    notesHeader.textContent = "Notes:"

    
  
    for (const note of activeProject.notes) {
        const newNote = document.createElement("article");
       
        newNote.textContent = note.textBody;
        
        notesContainer.appendChild(newNote);
    }
    
    newSection.appendChild(projectTitle);
    newSection.appendChild(notesHeader);
    newSection.appendChild(todosContainer);
    newSection.appendChild(notesContainer);
    todosContainer.appendChild(renderTodos(activeProject.todos));
};

const renderTodos = function(todosArray) {
    const listOfTodos = document.createElement('ul');

    for (const todo of todosArray) {
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

    return listOfTodos;

}



export {loadProject};