const createListTitle = function() {
    const listTitle = prompt("Name your list");
    return listTitle;
}
const createListDueDate = function() {
    const dueDate = prompt("Add due date");
    return dueDate;
}

const createListStatus = function() {
    const status = prompt("select the stage of this list");
    return status;
}

const createListItem = function() {
    const listItem = prompt("Add one list item if you'd like(you can re-prompt to add more items if you'd like)");
    return listItem;
};

const showList = function(todoList) {
    alert(`Here's the list you just made:
        ${todoList.title}
        ${todoList.dueDate}
        ${todoList.status}
        List Items:
            ${todoList.listItems}
        `);
}
export {createListTitle, createListDueDate, createListStatus, createListItem, showList}

