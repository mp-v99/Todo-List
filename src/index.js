import { ProjectManager } from "./domain.js";
import { initUI } from "./UI-DOM.js"
import { renderProject } from "./projectView.js"
import "./styles.css"
// import { showList } from "./UI-DOM.js";


// Get present day date:

const today = new Date().toLocaleDateString("en-US")

// Create the project manager container and default project:

const appProjectManager = new ProjectManager();

appProjectManager.addProject("Saving Middle Earth", "This project is about carrying a burden that was never meant for one person alone. The road ahead is uncertain, and every step brings new dangers, doubts, and hard choices. I will rely on the Fellowship not only for protection, but for strength when my own courage falters. If we stay together, look after one another, and keep moving forward even when the path grows dark, then perhaps Middle-earth can be spared from what threatens it.", today);
appProjectManager.addProject("Work", "Don't know where to start? Start by writing a todo!!", today);
appProjectManager.addProject("Life", "Don't know where to start? Start by writing a todo!!", today);



appProjectManager.setActiveProject(appProjectManager.projects[0].id);

let activeProject = appProjectManager.getActiveProject();

activeProject.addTodo("Take the ring to mordor", "This task represents the full journey from the safety of the Shire to the fires of Mount Doom. It involves long travel, resisting temptation, making hard choices under pressure, and trusting allies when the burden feels too heavy to carry alone. The goal is not just to reach Mordor, but to grow through the journey and protect the people who would be harmed if the task fails. Progress may be slow, dangerous, and emotionally exhausting, but every step forward matters.", "2026-05-01", "In progress", "High");
activeProject.addTodo("Have second breakfast", "This would be the description", "2026-05-01", "To do", "Low");
activeProject.addTodo("Unalive Gollum(?)", "This would be the description", "2026-05-01", "Done", "Medium");


activeProject.addNote("Even the smallest steps still move the journey forward.");
activeProject.addNote("Rest is part of the quest, not a failure of it.");
activeProject.addNote("Kindness carries you further than courage alone.");
activeProject.addNote("You don’t have to see the whole path to take the next step.");
activeProject.addNote("Burden shared is burden made lighter.");
activeProject.addNote("There is always a way forward, even in the dark.");

initUI(appProjectManager);

activeProject.todos[0].addListItem("invite Sam to join the journey");
activeProject.todos[0].addListItem("pack essentials and supplies");
activeProject.todos[0].addListItem("leave the Shire quietly");
activeProject.todos[0].addListItem("avoid drawing attention from enemies");
activeProject.todos[0].addListItem("decide on a safe route through Middle-earth");
activeProject.todos[0].addListItem("find allies along the way");
activeProject.todos[0].addListItem("rest and recover when exhaustion hits");


renderProject(appProjectManager, activeProject.id);