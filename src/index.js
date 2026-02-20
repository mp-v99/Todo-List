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

activeProject.addTodo("Take the ring to mordor", "This would be the description", "Due: March 7th", "In progress", "High");
activeProject.addTodo("Have second breakfast", "This would be the description", "Due: March 7th", "To do", "Low");
activeProject.addTodo("Unalive Gollum(?)", "This would be the description", "Due: March 7th", "Paused", "Medium");

activeProject.addNote("Even the smallest steps still move the journey forward.");
activeProject.addNote("Rest is part of the quest, not a failure of it.");
activeProject.addNote("Kindness carries you further than courage alone.");
activeProject.addNote("You don’t have to see the whole path to take the next step.");
activeProject.addNote("Burden shared is burden made lighter.");
activeProject.addNote("There is always a way forward, even in the dark.");

initUI(appProjectManager);


loadProject(appProjectManager, activeProject.id);