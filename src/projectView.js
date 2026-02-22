// import { initUI } from "./UI-DOM";

const renderProject = function(projectManager, projectID) {
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
    todosContainer.appendChild(renderTodos(projectManager, activeProject.todos));
    newSection.appendChild(renderNotes(activeProject.notes));
};

const renderTodos = function(projectManager, todosArray) {
    const listOfTodos = document.createElement('ul');

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

    listOfTodos.appendChild(listHeader);

    listHeader.appendChild(subjectHeader);
    listHeader.appendChild(statusHeader);
    listHeader.appendChild(priorityHeader);


    for (const todo of todosArray) {

        const newTodo = document.createElement("li");
        const subjectContainer = document.createElement("div");
        const todoSubject = document.createElement("button");
        const statusContainer = document.createElement("div");
        const todoStatus = document.createElement("p");
        const priorityContainer = document.createElement("div");
        const todoPriority = document.createElement("button");


        subjectContainer.classList.add("todo_subject");
        statusContainer.classList.add("todo_status");
        priorityContainer.classList.add("todo_priority");
        todoSubject.textContent = todo.title;
        todoSubject.classList.add("todo_subject_btn");
        todoStatus.textContent = todo.status;
        todoPriority.textContent = `${todo.priority}`;
        todoPriority.classList = todo.priority;

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

const renderTodo = function(projectManager, todo) {

    // const activeProject = projectManager.getActiveProject();
    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
    const todoHeader = document.createElement('h1');

    newSection.id = "active_todo_section" 

    mainContainer.innerHTML = "";
    mainContainer.appendChild(newSection);

    todoHeader.textContent = todo.title;

    const todoFormContainer = document.createElement("form");
    todoFormContainer.classList.add("todo_container");

    newSection.appendChild(todoHeader);
    newSection.appendChild(todoFormContainer);

 

    const statusLabel = document.createElement("p");
    statusLabel.textContent = "Status:"
    const todoStatus = document.createElement("button");
    todoStatus.textContent = todo.status;

    const priorityLabel = document.createElement("p");
    priorityLabel.textContent = "Priority:"
    const todoPriority = document.createElement("button");
    todoPriority.textContent = todo.priority;

    const dueDateLabel = document.createElement("p");
    dueDateLabel.textContent = "Due:"
    const todoDueDate = document.createElement("p");
    todoDueDate.textContent = todo.dueDate;

    const descriptionLabel = document.createElement("p");
    descriptionLabel.textContent = "Description:"
    const todoDescription = document.createElement("p");
    todoDescription.textContent = todo.description;

    const todoChecklist = document.createElement("ul");

   
    
    todoFormContainer.appendChild(statusLabel);
    todoFormContainer.appendChild(todoStatus);
    todoFormContainer.appendChild(priorityLabel);
    todoFormContainer.appendChild(todoPriority);
    todoFormContainer.appendChild(dueDateLabel);
    todoFormContainer.appendChild(todoDueDate);

    todoFormContainer.appendChild(descriptionLabel);
    todoFormContainer.appendChild(todoDescription);

    todoFormContainer.appendChild(todoChecklist);

    console.log(todo.checkList[0])

    for (const listItem of todo.checkList) {
        const listItemContainer = document.createElement("li");
        listItemContainer.textContent = listItem.textLine;

        todoChecklist.appendChild(listItemContainer);
    }
    
};

export {renderProject, renderNotes, renderTodo};