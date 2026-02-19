
const loadProjects = function(projectManager) {
    const mainContainer = document.querySelector("#main_content");
    const previousContent = document.querySelector("section");
    const newSection = document.createElement("section");
   
    newSection.id = "projects_section"

    mainContainer.removeChild(previousContent);
    mainContainer.appendChild(newSection);


    for (const project of projectManager) {
        const projectCard = document.createElement("article")
        const projectTitle = document.createElement("h3");
        const projectTodoPreview = document.createElement("p");
        projectTitle.textContent = project.title;
        projectTodoPreview.textContent = project.todos[0].title;
        newSection.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(projectTodoPreview);

    }
}


const loadAbout = function() {
    const mainContainer = document.querySelector("#main_content");
    const previousContent = document.querySelector("section");
    const newSection = document.createElement("section");
    const aboutTitle = document.createElement("h3");
    const aboutArticle = document.createElement("p");
    newSection.id = "about_section";

    aboutTitle.textContent = "Kong-Dō"
    aboutArticle.textContent = `Lorem Ipsum is still fine for pure layout testing,
but for portfolio projects and demos?
It looks lazy in 2026. Real-ish copy makes your project feel 10x more legit.`

    mainContainer.removeChild(previousContent);
    mainContainer.appendChild(newSection);

    newSection.appendChild(aboutTitle);
    newSection.appendChild(aboutArticle);


    
}



const initUI = function(projectManager) {
    const projectsBtn = document.querySelector("#projects_btn");
    const aboutBtn = document.querySelector("#about_btn");
    projectsBtn.addEventListener("click", () => {
        loadProjects(projectManager.listProjects())
    });
    aboutBtn.addEventListener("click", () => {
        loadAbout()
    });
}


export {initUI, loadProjects};