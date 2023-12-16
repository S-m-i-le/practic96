    // <h2>Задача 2</h2>
    // <form id="task-form">
    //   <input type="text" name="taskName" />
    //   <button type="submit">Додати</button>
    // </form>

// <ul id="task-list"></ul>


    // { name:name, id:id }

const form = document.querySelector('#task-form');
form.addEventListener('submit', onSubmit)
const arrSubmit =JSON.parse(localStorage.getItem("KEY_STOR"))|| [];
function  onSubmit(event) {
    event.preventDefault();
    console.dir(event.target.elements.taskName.value);
    console.dir(event.target.elements);
    const inputValue = event.target.elements.taskName.value;
    const id = Math.round(Math.random() * 100);
    const objectInput = { 
        name: inputValue,
        id,
    }

    arrSubmit.push(objectInput);
    localStorage.setItem("KEY_STOR", JSON.stringify(arrSubmit))
};

const markup = arrSubmit.map(item => (`<li data-id= ${item.id}>${item.name}</li>`));
const ul = document.querySelector('#task-list');
ul.insertAdjacentHTML("beforeend", markup.join(''));
console.log(ul);
console.log(markup);
console.log(arrSubmit);


