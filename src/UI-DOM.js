import { renderProject, renderNotes } from "./projectView";


const loadProjects = function(projectManager) {
    const listOfProjects = projectManager.listProjects();
    const mainContainer = document.querySelector("#main_content");
    const newSection = document.createElement("section");
   
    newSection.id = "projects_section"

    mainContainer.innerHTML = '';
    mainContainer.appendChild(newSection);


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

        newSection.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(openProjectBtn);

        

        openProjectBtn.addEventListener("click", () => {
            renderProject(projectManager, projectCard.getAttribute("data-id"));
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




const initUI = function(projectManager) {
    const projectsBtn = document.querySelector("#projects_btn");
    const notesBtn = document.querySelector("#notes_btn");
    const aboutBtn = document.querySelector("#about_btn");

    projectsBtn.addEventListener("click", () => {
        loadProjects(projectManager);
    });
    aboutBtn.addEventListener("click", () => {
        loadAbout();
    });
    notesBtn.addEventListener("click", () => {
        const activeProject = projectManager.getActiveProject();
        const mainContainer = document.querySelector("#main_content");
        const newSection = document.createElement("section");
        const notesHeader = document.createElement('h2');

        newSection.id = "notes_tab_section" 
    
        mainContainer.innerHTML = "";
        mainContainer.appendChild(newSection);

        notesHeader.textContent = `(${activeProject.title}) Notes:`

        newSection.appendChild(notesHeader);
        newSection.appendChild(renderNotes(activeProject.notes));
        
    }) 
};


export {initUI, loadProjects};