import { ProjectManager } from "./domain.js";
import { initUI, renderProjects } from "./UI-DOM.js";
import { format } from "date-fns";
import "./styles.css"


// Get present day date:

const today = format(new Date(), "eeee MM-dd-yyyy" );

// Create the project manager container and default project:

const appProjectManager = new ProjectManager();

appProjectManager.addProject(
    "Saving Middle Earth",
    "This project is about carrying a burden that was never meant for one person alone. The road ahead is uncertain, and every step brings new dangers, doubts, and hard choices. I will rely on the Fellowship not only for protection, but for strength when my own courage falters. If we stay together, look after one another, and keep moving forward even when the path grows dark, then perhaps Middle-earth can be spared from what threatens it.",
    today
  );
  
  appProjectManager.addProject(
    "Work",
    "Track tasks, deadlines, meetings, and notes related to work responsibilities.",
    today
  );
  
  appProjectManager.addProject(
    "Life",
    "Track personal tasks, errands, and everyday goals.",
    today
  );
  
  // =========================
  // Saving Middle Earth
  // =========================
  appProjectManager.setActiveProject(appProjectManager.projects[0].id);
  
  let middleEarthProject = appProjectManager.getActiveProject();
  
  middleEarthProject.addTodo(
    "Take the ring to mordor",
    "This task represents the full journey from the safety of the Shire to the fires of Mount Doom. It involves long travel, resisting temptation, making hard choices under pressure, and trusting allies when the burden feels too heavy to carry alone. The goal is not just to reach Mordor, but to grow through the journey and protect the people who would be harmed if the task fails. Progress may be slow, dangerous, and emotionally exhausting, but every step forward matters.",
    "2026-05-01",
    "In progress",
    "High"
  );
  
  middleEarthProject.addTodo(
    "Have second breakfast",
    "A critical morale operation. No fellowship survives on empty stomachs and bad vibes alone.",
    "2026-04-02",
    "To do",
    "Low"
  );
  
  middleEarthProject.addTodo(
    "Deal with Gollum",
    "Figure out whether Gollum should be trusted, watched closely, or kept at a safe stabbing distance. Balance pity with caution.",
    "2026-04-18",
    "Done",
    "Medium"
  );
  
  middleEarthProject.addTodo(
    "Form the Fellowship",
    "Gather a trustworthy group capable of surviving the road ahead. Each member should bring unique strengths, practical skill, and a willingness to protect the mission.",
    "2026-03-25",
    "Done",
    "High"
  );
  
  middleEarthProject.addTodo(
    "Cross dangerous territory safely",
    "Move through forests, mountains, rivers, and enemy-patrolled land with as little attention as possible while preserving energy and supplies.",
    "2026-04-20",
    "In progress",
    "High"
  );
  
  middleEarthProject.addTodo(
    "Resist the ring's influence",
    "Stay mentally grounded and avoid isolation, paranoia, or making selfish decisions under the ring's pressure.",
    "2026-05-01",
    "In progress",
    "High"
  );
  
  middleEarthProject.addNote("Even the smallest steps still move the journey forward.");
  middleEarthProject.addNote("Rest is part of the quest, not a failure of it.");
  middleEarthProject.addNote("Kindness carries you further than courage alone.");
  middleEarthProject.addNote("You don’t have to see the whole path to take the next step.");
  middleEarthProject.addNote("Burden shared is burden made lighter.");
  middleEarthProject.addNote("There is always a way forward, even in the dark.");
  middleEarthProject.addNote("Suspicion keeps you alive, but trust keeps you human.");
  middleEarthProject.addNote("A terrible plan with loyal friends still beats a perfect plan alone.");
  
  middleEarthProject.todos[0].addListItem("invite Sam to join the journey");
  middleEarthProject.todos[0].addListItem("pack essentials and supplies");
  middleEarthProject.todos[0].addListItem("leave the Shire quietly");
  middleEarthProject.todos[0].addListItem("avoid drawing attention from enemies");
  middleEarthProject.todos[0].addListItem("decide on a safe route through Middle-earth");
  middleEarthProject.todos[0].addListItem("find allies along the way");
  middleEarthProject.todos[0].addListItem("rest and recover when exhaustion hits");
  
  middleEarthProject.todos[1].addListItem("check pantry for mushrooms, bread, and tea");
  middleEarthProject.todos[1].addListItem("set table like a civilized hobbit");
  middleEarthProject.todos[1].addListItem("do not pretend one breakfast is enough");
  
  middleEarthProject.todos[2].addListItem("decide whether to spare Gollum");
  middleEarthProject.todos[2].addListItem("set clear rules for travel together");
  middleEarthProject.todos[2].addListItem("keep an eye on suspicious behavior");
  
  middleEarthProject.todos[3].addListItem("consult Gandalf");
  middleEarthProject.todos[3].addListItem("secure support from Aragorn");
  middleEarthProject.todos[3].addListItem("bring Legolas and Gimli into the group");
  middleEarthProject.todos[3].addListItem("clarify mission and stakes with everyone");
  
  middleEarthProject.todos[4].addListItem("choose between mountain pass and mines");
  middleEarthProject.todos[4].addListItem("ration food and water");
  middleEarthProject.todos[4].addListItem("set watch rotations at night");
  middleEarthProject.todos[4].addListItem("identify fallback escape routes");
  
  middleEarthProject.todos[5].addListItem("avoid holding the ring unnecessarily");
  middleEarthProject.todos[5].addListItem("stay close to trusted companions");
  middleEarthProject.todos[5].addListItem("recognize fear-driven thoughts early");
  middleEarthProject.todos[5].addListItem("remember why the mission matters");
  
  // =========================
  // Work
  // =========================
  let workProject = appProjectManager.projects[1];
  
  workProject.addTodo(
    "Prepare weekly status report",
    "Summarize progress, blockers, completed tasks, and priorities for the coming week so nothing catches fire in the meeting.",
    "2026-03-20",
    "In progress",
    "High"
  );
  
  workProject.addTodo(
    "Attend project sync meeting",
    "Join the team sync, share updates, clarify blockers, and leave with actual action items instead of corporate fog.",
    "2026-03-18",
    "To do",
    "Medium"
  );
  
  workProject.addTodo(
    "Organize task backlog",
    "Clean up outdated items, clarify vague tickets, assign priorities, and remove duplicate nonsense.",
    "2026-03-22",
    "To do",
    "Medium"
  );
  
  workProject.addTodo(
    "Submit expense report",
    "Collect receipts, verify categories, and submit reimbursement before future-me starts swearing.",
    "2026-03-19",
    "To do",
    "Low"
  );
  
  workProject.addTodo(
    "Finish client deliverable draft",
    "Complete the draft, double-check requirements, and make sure it looks deliberate rather than assembled by sleep deprivation.",
    "2026-03-21",
    "In progress",
    "High"
  );
  
  workProject.addTodo(
    "Review team documentation",
    "Read current internal docs, note outdated processes, and capture missing information that slows onboarding or execution.",
    "2026-03-24",
    "To do",
    "Medium"
  );
  
  workProject.addNote("A task written clearly is already half done.");
  workProject.addNote("Blockers ignored today become emergencies tomorrow.");
  workProject.addNote("Not every meeting deserves to exist.");
  workProject.addNote("Good documentation saves future-you from rage.");
  workProject.addNote("Progress beats perfection when the deadline is real.");
  workProject.addNote("Clarify ownership early or enjoy chaos later.");
  
  workProject.todos[0].addListItem("review completed tasks from the week");
  workProject.todos[0].addListItem("list current blockers");
  workProject.todos[0].addListItem("highlight top priorities for next week");
  workProject.todos[0].addListItem("send report to manager before end of day");
  
  workProject.todos[1].addListItem("review agenda beforehand");
  workProject.todos[1].addListItem("prepare concise progress update");
  workProject.todos[1].addListItem("write down action items during meeting");
  workProject.todos[1].addListItem("follow up on unresolved blockers");
  
  workProject.todos[2].addListItem("archive completed or irrelevant tasks");
  workProject.todos[2].addListItem("rewrite vague task titles");
  workProject.todos[2].addListItem("assign priority levels");
  workProject.todos[2].addListItem("group related items into categories");
  
  workProject.todos[3].addListItem("collect receipts from email and phone");
  workProject.todos[3].addListItem("fill in reimbursement form");
  workProject.todos[3].addListItem("verify totals");
  workProject.todos[3].addListItem("submit before deadline");
  
  workProject.todos[4].addListItem("review project requirements");
  workProject.todos[4].addListItem("finish first full draft");
  workProject.todos[4].addListItem("proofread for errors and gaps");
  workProject.todos[4].addListItem("share draft for feedback");
  
  workProject.todos[5].addListItem("read current onboarding docs");
  workProject.todos[5].addListItem("mark outdated instructions");
  workProject.todos[5].addListItem("draft suggested updates");
  workProject.todos[5].addListItem("send notes to team");
  
  // =========================
  // Life
  // =========================
  let lifeProject = appProjectManager.projects[2];
  
  lifeProject.addTodo(
    "Buy groceries",
    "Restock the essentials so the house contains actual food instead of random ingredients and misplaced optimism.",
    "2026-03-17",
    "To do",
    "Medium"
  );
  
  lifeProject.addTodo(
    "Clean apartment",
    "Do a proper reset: dishes, laundry, surfaces, floors, and that one corner everyone silently judges.",
    "2026-03-18",
    "In progress",
    "Medium"
  );
  
  lifeProject.addTodo(
    "Exercise three times this week",
    "Keep the body functional and the brain less dramatic by moving with intention at least three times.",
    "2026-03-23",
    "In progress",
    "High"
  );
  
  lifeProject.addTodo(
    "Schedule dentist appointment",
    "Stop pretending this can be postponed forever and book the appointment like a responsible mammal.",
    "2026-03-20",
    "To do",
    "High"
  );
  
  lifeProject.addTodo(
    "Review monthly budget",
    "Check spending, spot leaks, and make sure money is going where it should instead of vanishing into chaos.",
    "2026-03-25",
    "To do",
    "High"
  );
  
  lifeProject.addTodo(
    "Call family",
    "Take time to check in properly instead of sending one dry text and disappearing for a week.",
    "2026-03-19",
    "Done",
    "Low"
  );
  
  lifeProject.addNote("Tiny maintenance beats giant recovery.");
  lifeProject.addNote("A messy room quietly taxes your energy.");
  lifeProject.addNote("Health tasks are annoying right up until they become urgent.");
  lifeProject.addNote("Money likes attention. Ignore it and it gets weird.");
  lifeProject.addNote("You are allowed to build a life at human speed.");
  lifeProject.addNote("Doing the boring thing on time is low-key heroic.");
  
  lifeProject.todos[0].addListItem("check fridge and pantry first");
  lifeProject.todos[0].addListItem("make a shopping list");
  lifeProject.todos[0].addListItem("buy basics: eggs, bread, fruit, vegetables, protein");
  lifeProject.todos[0].addListItem("avoid buying nonsense while hungry");
  
  lifeProject.todos[1].addListItem("wash dishes");
  lifeProject.todos[1].addListItem("start laundry");
  lifeProject.todos[1].addListItem("wipe surfaces");
  lifeProject.todos[1].addListItem("vacuum or sweep floors");
  lifeProject.todos[1].addListItem("take out trash");
  
  lifeProject.todos[2].addListItem("plan workout days");
  lifeProject.todos[2].addListItem("prepare clothes and water bottle");
  lifeProject.todos[2].addListItem("complete first session");
  lifeProject.todos[2].addListItem("complete second session");
  lifeProject.todos[2].addListItem("complete third session");
  
  lifeProject.todos[3].addListItem("find dentist contact info");
  lifeProject.todos[3].addListItem("call during office hours");
  lifeProject.todos[3].addListItem("book available slot");
  lifeProject.todos[3].addListItem("save appointment in calendar");
  
  lifeProject.todos[4].addListItem("review bank account activity");
  lifeProject.todos[4].addListItem("categorize recent spending");
  lifeProject.todos[4].addListItem("compare spending against budget");
  lifeProject.todos[4].addListItem("adjust next month's limits if needed");
  
  lifeProject.todos[5].addListItem("choose a time with no distractions");
  lifeProject.todos[5].addListItem("ask how everyone is doing");
  lifeProject.todos[5].addListItem("share a meaningful update from your week");
  
  // Initialize UI after all seed data is ready
  initUI(appProjectManager, today);

renderProjects(appProjectManager, today)