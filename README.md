# Todo-List

Live Demo: https://mp-v99.github.io/Todo-List/

**About the Project:**

The Project Todo List is the last project of "Organizing your code" block. It consists of reinforcing the most recently learned concepts(npm scripts, OOP principles) and overall, bundle up together the entirety of this section into one project.

<img width="1910" height="913" alt="image" src="https://github.com/user-attachments/assets/12fc98e3-343e-4943-bdb8-56e377ab938c" />


**What the app is** The app consists of a small Task manager where you can create goal oriented Todos through the environment of titled "Projects" that own a list of Todos and a grid of Notes.

**How it works for the user** You can start by creating a new Project which will open an environment where you can add as many todos or notes as you want and expand them to add more details to each note or todo.

**Key features**Create/Edit/Delete Projects. Add todos with priority, due date, status, description and subtasks. Add notes.

Built With: HTML, CSS and JavaScript

Architecture / Code Structure:
The app uses webpack in order to keep concerns and responsibilities separated between modules. Domain.js handles the prototype and logic. UI-DOM.js and projectView.js handle DOM manipulation based on the information inherited to them. index.js is the bridge between the UI and the Logic. 

What I Practiced: 
System oriented thinking with JavaScript, practicing OOP principles, using modules, JSON, localStorage and date-fns.

**Challenges I Faced:**

The main challenge during this project was managing **coupling and separation of concerns** between modules. As the application grew, it became increasingly difficult to decide what logic should live in the domain layer and what should belong to the UI layer.

Questions like what to export, where to import it, and how much responsibility each module should have came up constantly. I had to iterate multiple times on my structure to avoid tightly coupling UI behavior with core logic.

Another challenge was deciding when to abstract logic into reusable functions versus keeping it inline. Over-abstraction made the code harder to follow, while under-abstraction led to repetition. Finding a balance between readability and modularity was an ongoing process.

Finally, implementing inline editing across different parts of the app (projects, todos, notes, and subtasks) required careful coordination between DOM updates and state updates. Ensuring that UI changes correctly reflected the underlying data without breaking the flow of the app was one of the most complex parts of the project.

**Inspiration:** 

I was advised by The Odin Project to use Todoist and similar apps as inspiration, but I was more drawn to take this opportunity to build a small jira app. You can see that both in the styling and the name being a small reference to Jira's name origin story. 

Author: Max Pons
