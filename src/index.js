class TodoList {
    constructor(title, description, dueDate, status) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.status = status;
    }

    todoInfo() {
        drawTodo(this)
    }


}

const drawTodo = function(todo) {
    console.log(`
|Title:     ${todo.title}               
|Body:      ${todo.description}              
|Due:       ${todo.dueDate}                 
|Status:    ${todo.status}             
`)
}

const groceriesList = new TodoList("groceries", "this is a groceries list", "May-5th-2026", "To do") 
groceriesList.todoInfo();