const applayDeleteTodoItemModal = document.getElementById("yesButton");
const closeDeleteTodoItemModal = document.getElementById("noButton");
const removeAllContainer = document.getElementById("list_delete_ul");
const headerContainer = document.getElementById("headerContainer");
const paginationContainer = document.querySelector(".list_bottom");
const deleteTodoItemModal = document.getElementById("modalSP");
const buttonMyBusiness = document.getElementById("132");
const todoContainer = document.getElementById("io");
const DeleteModal = document.getElementById("134");
const buttonAdd = document.getElementById("150");
const delet = document.getElementById("delete");
const modal = document.getElementById("133");
const input = document.getElementById("num");

const modalDeleteTodo = new Modal();
const list = new TodoList(todoContainer, onChange);

let todoList = [];

// buttonMyBusiness.addEventListener('click', () => {
//     modal.classList.remove('active')
// })

window.onclick = function (event) {
  if (event.target == DeleteModal) {
    modal.classList.add("active");
  }
};
if (localStorage.getItem("todoLink")) {
  todoList.push(...JSON.parse(localStorage.getItem("todoLink")));
  list.render(TodoItem, todoList.slice(0, 10));
}
buttonAdd.addEventListener("click", validateInput);

input.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    validateInput();
  }
});

input.addEventListener("input", myFunctionFilt);

marginLeft();

let getTotals = function () {
  if (todoList.length > 10) {
    return (Math.round((todoList.length + 4) / 10) * 10) / 10;
  } else return 1;
};
let renderPagination = () => {
  toggleDisplayPaginConttainer();
  paginationContainer.innerHTML = "";
  for (let i = 0; i < getTotals(); i++) {
    const element = createPagin(i);
    paginationContainer.append(element);
  }
};

renderPagination();

const deleteElement = () => {
  todoList = [];
  list.render(TodoItem, todoList);
  renderPagination();
  toggleRemoveAllContainer();
  localStorage.setItem("todoLink", JSON.stringify(todoList));
};

removeAllContainer.addEventListener("click", deleteElement);

const toggleRemoveAllContainer = () => {
  if (!todoList.length) {
    removeAllContainer.style.display = "none";
  } else {
    removeAllContainer.style.display = "flex";
  }
};
function validateInput() {
  var inputValue = document.getElementById("num").value;
  if (inputValue.length > 0) {
    addItem();
    input.value = "";
    input.focus();
  } else {
    alert("Пожалуйста, введите данные.");
  }
}
function unDuplicateArraySingleValues() {
  let todoListResult = [];
  for (let i = 0; todoList.length > i; i++) {
    if (!todoListResult.some((item) => item.todo == todoList[i].todo)) {
      todoListResult.push(todoList[i]);
    }
  }
  return todoListResult;
}
function createPagin(i) {
  const element = document.createElement("div");
  element.classList.add("number_list");
  element.innerHTML = i + 1;
  element.addEventListener("click", function () {
    todoContainer.innerHTML = "";
    let min = i > 0 ? i * 10 : 0;
    let max = (i + 1) * 10;
    let todoListSlice = todoList.slice(min, max);
    list.render(TodoItem, todoListSlice);
  });
  return element;
}
function marginLeft() {
  document
    .getElementById("arrow-object")
    .addEventListener("mouseover", function () {
      document.getElementById("arrow").style.display = "block";
      document.getElementById("arrow").addEventListener("click", function () {
        modal.classList.add("active");
      });
    });
  document
    .getElementById("arrow-object")
    .addEventListener("mouseout", function () {
      document.getElementById("arrow").style.display = "none";
    });
}
function myFunctionFilt() {
  var filter, ul, li, i, txtValue;
  filter = input.value.toUpperCase();
  ul = document.getElementById("io");
  li = ul.querySelectorAll(".information-bar");
  for (i = 0; i < li.length; i++) {
    delo = li[i].getElementsByClassName("delo")[0]; // ?
    txtValue = delo.textContent || delo.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
function deleteTask(id) {
  todoList = todoList.filter((task) => task.id != id);
  list.render(TodoItem, todoList);
  renderPagination();
  toggleRemoveAllContainer();
  localStorage.setItem("todoLink", JSON.stringify(todoList));
}

function addItem() {
  let newTodo = {
    todo: input.value,
    checked: false,
    id: Math.random(),
  };
  todoList.unshift(newTodo);
  todoList = unDuplicateArraySingleValues();
  list.render(TodoItem, todoList);
  renderPagination();
  toggleRemoveAllContainer();
  localStorage.setItem("todoLink", JSON.stringify(todoList));
}
function toggleDisplayPaginConttainer() {
  if (todoList.length < 11) {
    paginationContainer.style.display = "none";
  } else {
    paginationContainer.style.display = "flex";
  }
}
function filtTask() {
  let checkedFals = todoList.filter((checkbox) => !checkbox.checked);
  let checkedFalsd = todoList.filter((checkbox) => checkbox.checked);
  todoList = checkedFals.concat(checkedFalsd);
  todoContainer.innerHTML = "";
  list.render(TodoItem, todoList);
  renderPagination();
  toggleRemoveAllContainer();
  localStorage.setItem("todoLink", JSON.stringify(todoList));
}
function setCheck(id) {
  todoList = todoList.map(function (item) {
    if (item.id === id) {
      item.checked = !item.checked;
    }
    return item;
  });
  localStorage.setItem("todoLink", JSON.stringify(todoList));
}
function onChange(id) {
  setCheck(id);
  filtTask();
}

let tubs = [
  { key: 1, children: modal, title: "TodoList" },
  { key: 2, children: DeleteModal, title: "ManadgerHayLite" },
  { key: 3, children: "", title: "Google Carta" },
];

const tabs1 = new Tabs(tubs);
const tabs1Render = tabs1.render();
document.body.append(tabs1Render);

let collapse = [
  {
    slide: 1,
    text: 1 + ")" + " Вопросы по казаку ? Задайте и мы ответим!",
    title: "List 1",
  },
  { slide: 2, text: 2 + ")" + " Купите и получите !", title: "List 2" },
  { slide: 3, text: 3 + ")" + " Текст тестовый", title: "List 3" },
];

const codeList = new Collapse(collapse);
const tabs1Rendersq = codeList.render();
DeleteModal.append(tabs1Rendersq);

initMap();

// Деструктуризация //
// Асинхронный js //

const map = document.createElement("div");
map.id = "map";
document.getElementById("3").append(map);

const containerClass = new Calculator();
const containerIniz = containerClass.render();
document.body.append(containerIniz);

const listNumber = document.querySelectorAll("div.button-nuber-calculator");

const numberStrong = new Calculator(listNumber);
const numerStrongTwo = numberStrong.renderButton();

const contentButtonMath = new Calculator();
const contentButtonMathTwo = contentButtonMath.renderButtonCosTg();






// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((result) =>
//     result.results.forEach((i) => {
//       const containerRick = document.createElement("div");
//       console.log(i.name)
//       containerRick.classList.add("rick");
//       containerRick.textContent = i.name
//       containerRick.style.margin = "10px";
//       containerRick.style.display = "flex";
//       containerRickOne.append(containerRick);
//     })
//   );
// const containerRickOne = document.createElement("div");
// document.body.append(containerRickOne);
// containerRickOne.style.display = "flex";
// containerRickOne.style.justifyContent = "center";
// fetch("https://rickandmortyapi.com/api/location")
//   .then((response) => response.json())
//   .then((result) => 
//   result.results.forEach((i)=>{
//     const createName = document.createElement('div');
//     createName.classList.add('createNameRick');
//     createName.textContent = i.name + ' , ' + i.dimension 
//     containerRickTwo.append(createName)
//   })
//   );
//   const containerRickTwo = document.createElement("div");
//   containerRickTwo.classList.add('containerRickTwo');
//   document.body.append(containerRickTwo);
//   fetch("https://rickandmortyapi.com/api/location")
//   .then((response) =>   response.blob())
//   .then((result) => console.log(result.size))
  fetch("https://rickandmortyapi.com/api/location")
  .then((response) =>   response.json())
  .then((result) => 
  console.log(result.results[2].name + ' ' + result.info.next),
    console.log(1),
    console.log(2)
  );


  // async function testFunction() {
  //   let asd = await fetch("https://rickandmortyapi.com/api/character");
  //   console.log(asd)
  //   const result = await asd.json();
  //   console.log(result)
  // }
  // testFunction()

//  async function testFunction() {
//     let asd = await fetch("https://rickandmortyapi.com/api/character");
//     console.log(1)
//     const result = await asd.json();
//     console.log(result)
//     console.log(2)

//   }
//   testFunction()




  // response => promise => object






  // async function addObject() {
  //    fetch("https://rickandmortyapi.com/api/location")
  //   .then((response) =>   response.body)
  //   .then((result) => console.log(result.locked));  
  // }

  //  addObject()




  
// React по ролику , череез vite. сборщик.

// калькулятор переделать.


