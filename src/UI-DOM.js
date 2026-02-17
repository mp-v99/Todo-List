const showList = function(todoList) {
    alert(`Here's the list you just made:
        ${todoList.title}
        ${todoList.description}
        ${todoList.status}
        List Items:
            
        `);
        for (const listItem of todoList.checkList) {
           alert(`${listItem.checkBox}
           ${listItem.textLine}`)
        }
}

export {showList}