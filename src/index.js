import { ProjectManager } from "./domain.js"


// Get present day date:

const today = new Date().toLocaleDateString("en-US")

// Create the project manager container and default project:

const appProjectManager = new ProjectManager();

appProjectManager.addProject("My tasks", "Don't know where to start? Start by writing a todo!!", today);

appProjectManager.setActiveProject(appProjectManager.projects[0].id);

const defaultProject = appProjectManager.getActiveProject();
defaultProject.addTodo("Create your first Todo!", "Leave a description here.", null, "To do", "Low");


console.log(`Default Project: ${defaultProject.title}`)
console.log(`Todo: ${defaultProject.todos[0].title}`);

defaultProject.todos[0].addListItem("create a low priority todo");
defaultProject.todos[0].addListItem("create a medium priority todo");
defaultProject.todos[0].addListItem("create a high priority todo");

defaultProject.todos[0].checkList[0].toggleCheckBox();

for (const listItem of defaultProject.todos[0].checkList) {
    console.log(` ${listItem.textLine}
    Checked: ${listItem.checkBox} `)
}

