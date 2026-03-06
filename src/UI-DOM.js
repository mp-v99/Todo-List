import { renderProject, renderNotes } from "./projectView";


const renderProjects = function(projectManager, today) {
    const listOfProjects = projectManager.listProjects();
    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
    const sectionHeader = document.createElement("header");
    const headerTitle = document.createElement("h2");
    const addProjectBtn = document.createElement("button");
    const projectsGrid = document.createElement("div");
   
    newSection.id = "projects_section";
    sectionHeader.id = "projects_section_header";
    projectsGrid.id = "projects_section_grid";

    headerTitle.textContent = "Projects";
    addProjectBtn.textContent = " + New Project"

    mainContainer.innerHTML = '';
    mainContainer.appendChild(newSection);
    newSection.appendChild(sectionHeader);
    newSection.appendChild(projectsGrid);
    sectionHeader.appendChild(headerTitle);
    sectionHeader.appendChild(addProjectBtn);

    for (const project of listOfProjects) {
        const projectCard = document.createElement("article")
        const projectTitle = document.createElement("h3");
        const projectDescription = document.createElement("p");
     
        const openProjectBtn = document.createElement("button");

        projectTitle.textContent = project.title;
        projectDescription.textContent = project.description.slice(0, 50).concat("...");
        projectCard.setAttribute("data-id", project.id);
     

        projectDescription.classList.add("project_description");
        openProjectBtn.textContent = "Open";
        openProjectBtn.classList.add("open_project");

        projectsGrid.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(openProjectBtn);

        

        openProjectBtn.addEventListener("click", () => {
            renderProject(projectManager, projectCard.getAttribute("data-id"), today);
        })
    }

    addProjectBtn.addEventListener("click", () => {
        renderOverlay(projectManager, today);
    })

 
}

const renderProjectCard = function(projectsGrid, projectManager, today) {
    const projectCard = document.createElement("article")
    const projectTitle = document.createElement("h3");
    const projectDescription = document.createElement("p");
    const arrayLength = projectManager.projects.length;
    const project = projectManager.projects[arrayLength -1];
 
    const openProjectBtn = document.createElement("button");

    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description.slice(0, 50).concat("...");
    projectCard.setAttribute("data-id", project.id);
 

    projectDescription.classList.add("project_description");
    openProjectBtn.textContent = "Open";
    openProjectBtn.classList.add("open_project");

    projectsGrid.appendChild(projectCard);
    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(openProjectBtn);

    

    openProjectBtn.addEventListener("click", () => {
        renderProject(projectManager, projectCard.getAttribute("data-id"), today);
    })
}


const renderAbout = function() {
    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
    const aboutTitle = document.createElement("h2");
    const aboutArticleContainer = document.createElement("div");
    const aboutArticle = document.createElement("p");
    newSection.id = "about_section";

    aboutTitle.textContent = "Kong-Dō"
    aboutArticle.textContent = `This Todo application is a lightweight task management tool inspired by workflow systems like Jira, designed to organize work through projects, tasks, and detailed checklists. Each project acts as a container for multiple todos, allowing users to separate responsibilities across different contexts such as personal tasks, work, or long-term goals. Todos include a title, description, status, priority level, due date, and an expandable checklist for breaking larger tasks into manageable steps. Rather than relying on traditional form submissions, the app emphasizes inline editing: users can update fields such as status, priority, and description directly within the interface, creating a fast and fluid editing experience. The system supports creating, updating, and removing projects, tasks, notes, and checklist items, making it a full CRUD application. Behind the interface, the project is built with modular JavaScript architecture, separating domain logic from UI rendering to keep the codebase maintainable and scalable. The result is a structured yet flexible productivity tool focused on clarity, incremental progress, and simple task management.`

    mainContainer.innerHTML = '';
    mainContainer.appendChild(newSection);

    newSection.appendChild(aboutTitle);
    newSection.appendChild(aboutArticleContainer);
    aboutArticleContainer.appendChild(aboutArticle);
}

const renderNewProjectForm = function(formOverlay, projectManager, today) {
    const body = document.querySelector("body");
    const projectsGrid = document.querySelector("#projects_section_grid");

    const projectForm = document.createElement("form");
    projectForm.id = "project_form";
    const formHeader = document.createElement("h2");
    formHeader.textContent = " + New Project"
    const titleLabel = document.createElement("label");
    const titleInput = document.createElement("input");
    titleLabel.textContent = "Title:"
    titleLabel.classList.add("project_title_label");
    titleLabel.htmlFor = "project_title_input"
    titleInput.id = "project_title_input";
    titleInput.type = "text";
    titleInput.placeholder = "Todo List App";
    titleInput.required = true;
    const descriptionLabel = document.createElement("label");
    const descriptionInput = document.createElement("textarea");
    descriptionLabel.textContent = "Description:"
    descriptionLabel.classList.add("project_description_label");
    descriptionLabel.htmlFor = "project_description_input";
    descriptionInput.id = "project_description_input";
    descriptionInput.placeholder = "A project from The Odin Project designed to practice modular architecture and system-oriented thinking in JavaScript."
    descriptionInput.required = true;
    const submitProjectBtn = document.createElement("button");
    submitProjectBtn.textContent = "Submit"
    submitProjectBtn.type = "submit"

    formOverlay.appendChild(projectForm);
    projectForm.appendChild(formHeader);
    projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(descriptionLabel);
    projectForm.appendChild(descriptionInput);
    projectForm.appendChild(submitProjectBtn);


    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        projectManager.addProject(titleInput.value, descriptionInput.value, today)
        console.log(projectManager.projects[projectManager.projects.length - 1].createdAt)
        renderProjectCard(projectsGrid, projectManager, today);   
        body.removeChild(formOverlay); 
    })
}


const renderOverlay = function(projectManager, today) {
    const formOverlay = document.createElement("dialog");
    const body = document.querySelector("body");
    formOverlay.id = "form_overlay";
    body.appendChild(formOverlay);

    renderNewProjectForm(formOverlay, projectManager, today);

    formOverlay.addEventListener("click", (e) => {
        if (e.target === formOverlay) {
            body.removeChild(formOverlay);
        }
    })
}


const initUI = function(projectManager, today) {
    const projectsBtn = document.querySelector("#projects_btn");
    const notesBtn = document.querySelector("#notes_btn");
    const aboutBtn = document.querySelector("#about_btn");

    projectsBtn.addEventListener("click", () => {
        renderProjects(projectManager, today);
    });
    aboutBtn.addEventListener("click", () => {
        renderAbout();
    });
    notesBtn.addEventListener("click", () => {
        const activeProject = projectManager.getActiveProject();
        const mainContainer = document.querySelector("#main_content");
        const newSection = document.createElement("section");
        const notesHeader = document.createElement('h4');

        newSection.id = "notes_tab_section" 
    
        mainContainer.innerHTML = "";
        mainContainer.appendChild(newSection);

        notesHeader.textContent = `(${activeProject.title}) Notes:`

        newSection.appendChild(notesHeader);
        newSection.appendChild(renderNotes(activeProject));
        
    }) 
};


export {initUI, renderProjects};