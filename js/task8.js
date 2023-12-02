// <!-- ЗАДАЧА 1 -->
    // <div>
    //   <p class="taskTitle">ЗАДАЧА 1</p>
    //   <button id="alertButton">SHOW ME</button>
    //   <input id="alertInput" type="text" />
    // </div>

// Завдання 1
// Натискання на кнопку "SHOW ME" має виводити значення з поля введення (дивіться на елементи в html-розмітці)

const butShow = document.querySelector("#alertButton");
const inputRef = document.querySelector('#alertInput');
butShow.addEventListener('click', onShow);
function onShow() {
    console.log(inputRef.value);
   
}
