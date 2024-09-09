class TodoList {
    constructor(todoContainer, onChange) {
        this.todoContainer = todoContainer;
        this.onChange = onChange.bind(this);
    }
    render(renderItem , list) {
        this.todoContainer.innerHTML = "";
        list.forEach(function (item) {
            const todo = new renderItem(item,() => this.onChange(item.id));
            const elementRender = todo.render();
            this.todoContainer.append(elementRender);
        }.bind(this));
    }
}



