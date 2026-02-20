
const loadProjects = function(projectManager) {
    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
   
    newSection.id = "projects_section"

    mainContainer.innerHTML = '';
    mainContainer.appendChild(newSection);


    for (const project of projectManager.listProjects()) {
        const projectCard = document.createElement("article")
        const projectTitle = document.createElement("h3");
        const projectTodoPreview = document.createElement("p");
        const openProjectBtn = document.createElement("button");

        projectTitle.textContent = project.title;
        projectCard.setAttribute("data-id", project.id);
        openProjectBtn.textContent = "Open";
        openProjectBtn.classList.add("open_project");

        newSection.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectTodoPreview);
        projectCard.appendChild(openProjectBtn);

        

        openProjectBtn.addEventListener("click", () => {
            loadProject(projectManager, projectCard.getAttribute("data-id"));
        })
    }

 
}


const loadAbout = function() {
    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
    const aboutTitle = document.createElement("h3");
    const aboutArticle = document.createElement("p");
    newSection.id = "about_section";

    aboutTitle.textContent = "Kong-Dō"
    aboutArticle.textContent = `Lorem Ipsum is still fine for pure layout testing,
but for portfolio projects and demos?
It looks lazy in 2026. Real-ish copy makes your project feel 10x more legit.`

    mainContainer.innerHTML = '';
    mainContainer.appendChild(newSection);

    newSection.appendChild(aboutTitle);
    newSection.appendChild(aboutArticle);


    
}

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



const initUI = function(projectManager) {
    const projectsBtn = document.querySelector("#projects_btn");
    const aboutBtn = document.querySelector("#about_btn");

    projectsBtn.addEventListener("click", () => {
        loadProjects(projectManager);
    });
    aboutBtn.addEventListener("click", () => {
        loadAbout();
    });
   
}


export {initUI, loadProjects, loadProject};