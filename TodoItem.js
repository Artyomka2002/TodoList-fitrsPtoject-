class TodoItem {
    constructor(item, onChange) {
        this.onChange = onChange.bind(this);
        this.item = item;
    }
    render() {
        const numberDiv = document.createElement('div');
        const buttonTwo = document.createElement('div');
        let checkbox = document.createElement('input');
        let newList = document.createElement('div');
        const delo = document.createElement('div');
        const asd = document.createElement('div');

        newList.classList.add('information-bar');
        numberDiv.classList.add('number-div');
        buttonTwo.classList.add('button_two');
        delo.classList.add('delo');

        delo.innerHTML = this.item.todo;
        buttonTwo.innerHTML = '&times;';
        asd.style.display = 'flex';

        newList.append(buttonTwo);
        asd.append(numberDiv);
        asd.append(checkbox);
        newList.append(asd);
        asd.append(delo);

        checkbox.checked = this.item.checked
        checkbox.name = 'checkbox-name';
        checkbox.type = 'checkbox';
        checkbox.id = 'chech';

        checkbox.addEventListener('change', this.onChange);
        buttonTwo.addEventListener('click', () => { 
            deleteTaskTest(this.item);
        });
        return newList
    }
}

const deleteTaskTest = (item) => {
    modalDeleteTodo.open(createDeleteTodoModal(item));
}

function createDeleteTodoModal(item) {
    const blockRender = document.createElement('div');
    blockRender.classList.add('blockRender');
    
    const topName = document.createElement('div');
    topName.classList.add('topName');
    topName.id = 'topName';
    topName.textContent = 'Подтвердите действие...';

    const middleName = document.createElement('div');
    middleName.classList.add('middleName');
    middleName.id = 'middleName';
    middleName.textContent = 'Уверены, что хотите удалить?';

    const buttomYesButton = document.createElement('button');
    buttomYesButton.classList.add('buttomButton');
    buttomYesButton.id = 'buttomYesButton';
    buttomYesButton.innerHTML = 'yes';
   

    const buttomNoButton = document.createElement('button');
    buttomNoButton.classList.add('buttomButton');
    buttomNoButton.id = 'buttomNoButton';
    buttomNoButton.innerHTML = 'no';
    buttomYesButton.addEventListener('click', function () {
        deleteTask(item.id);
        modalDeleteTodo.close()
    });
    buttomNoButton.addEventListener('click', function () {
        modalDeleteTodo.close()
    });
    blockRender.append(topName)
    blockRender.append(middleName)
    blockRender.append(buttomYesButton)
    blockRender.append(buttomNoButton)

    return blockRender;
}
































    