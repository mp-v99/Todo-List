import { ProjectManager } from "./domain.js";
import { initUI, loadProject} from "./UI-DOM.js"
import "./styles.css"
// import { showList } from "./UI-DOM.js";


// Get present day date:

const today = new Date().toLocaleDateString("en-US")

// Create the project manager container and default project:

const appProjectManager = new ProjectManager();

appProjectManager.addProject("My tasks", "Don't know where to start? Start by writing a todo!!", today);
appProjectManager.addProject("Work", "Don't know where to start? Start by writing a todo!!", today);
appProjectManager.addProject("Life", "Don't know where to start? Start by writing a todo!!", today);



appProjectManager.setActiveProject(appProjectManager.projects[0].id);

let activeProject = appProjectManager.getActiveProject();

activeProject.addTodo("Write your first todo!", "This would be the description", "Due: March 7th", "In progress", "High");
activeProject.addTodo("Write your second todo!", "This would be the description", "Due: March 7th", "In progress", "High");
activeProject.addTodo("Write your thirds todo!", "This would be the description", "Due: March 7th", "In progress", "High");

initUI(appProjectManager);


loadProject(appProjectManager, activeProject.id);