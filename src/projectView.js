// import { initUI } from "./UI-DOM";

const loadProject = function(projectManager, projectID) {
    projectManager.setActiveProject(projectID);
    const activeProject = projectManager.getActiveProject();

    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
    const todosContainer = document.createElement("div");
    
    newSection.id = "active_project_section";
    todosContainer.classList.add("todos_list");
    
    mainContainer.innerHTML = '';
    mainContainer.appendChild(newSection);

    const projectTitle = document.createElement('h1');
    const notesHeader = document.createElement('h2');
    
    projectTitle.textContent = `Project: ${activeProject.title}`;
    notesHeader.textContent = "Notes:"
    
    newSection.appendChild(projectTitle);
    newSection.appendChild(notesHeader);
    newSection.appendChild(todosContainer);
    todosContainer.appendChild(renderTodos(activeProject.todos));
    newSection.appendChild(renderNotes(activeProject.notes));
};

const renderTodos = function(todosArray) {
    const listOfTodos = document.createElement('ul');

    for (const todo of todosArray) {
        const newTodo = document.createElement("li");
        const todoCheckBox = document.createElement("input");
        const subjectContainer = document.createElement("div");
        const todoSubject = document.createElement("button");
        const statusContainer = document.createElement("div");
        const todoStatus = document.createElement("p");
        const priorityContainer = document.createElement("div");
        const todoPriority = document.createElement("button");


        subjectContainer.classList.add("todo_subject");
        statusContainer.classList.add("todo_status");
        priorityContainer.classList.add("todo_priority");
        todoCheckBox.type = "checkbox"
        todoSubject.textContent = todo.title;
        todoSubject.classList.add("todo_subject_btn");
        todoStatus.textContent = todo.status;
        todoPriority.textContent = `${todo.priority}`;
        todoPriority.classList = todo.priority;

        listOfTodos.appendChild(newTodo);
        todoSubject.setAttribute("data-id", todo.id);
        newTodo.appendChild(todoCheckBox);

        newTodo.appendChild(subjectContainer);
        subjectContainer.appendChild(todoSubject);
        newTodo.appendChild(statusContainer);
        statusContainer.appendChild(todoStatus);
        newTodo.appendChild(priorityContainer);
        priorityContainer.appendChild(todoPriority);

        todoSubject.addEventListener("click", () => {
            renderTodo(todo);
        }) 
    }

    return listOfTodos;

}

const renderNotes = function(notesArray) {
    const notesContainer = document.createElement("div");
    notesContainer.classList.add("notes_grid");

    for (const note of notesArray) {
        const newNote = document.createElement("article");
       
        newNote.textContent = note.textBody;
        
        notesContainer.appendChild(newNote);
    }

    return notesContainer;
}

const renderTodo = function(todo) {
    const currentSection = document.querySelector("section");
    const todosContainer = document.querySelector(".todos_list");

    currentSection.innerHTML = '';

    const todoContainer = document.createElement("form");
    todoContainer.classList.add("todo_container");

    currentSection.appendChild(todoContainer);

    const todoSubject = document.createElement("h5");
    todoSubject.textContent = todo.title;
    const todoDescription = document.createElement("p");
    todoDescription.textContent = todo.description;
    const todoStatus = document.createElement("button");
    todoStatus.textContent = todo.status;
    const todoPriority = document.createElement("button");
    todoPriority.textContent = todo.priority;
    const todoDueDate = document.createElement("p");
    todoDueDate.textContent = todo.dueDate;
    const todoChecklist = document.createElement("ul");


    todoContainer.appendChild(todoSubject);
    todoContainer.appendChild(todoDescription);
    todoContainer.appendChild(todoStatus);
    todoContainer.appendChild(todoPriority);
    todoContainer.appendChild(todoDueDate);

    todoContainer.appendChild(todoChecklist);

    console.log(todo.checkList[0])

    for (const listItem of todo.checkList) {
        const listItemContainer = document.createElement("li");
        listItemContainer.textContent = listItem.textLine;

        todoChecklist.appendChild(listItemContainer);
    }
    
}

export {loadProject, renderNotes};