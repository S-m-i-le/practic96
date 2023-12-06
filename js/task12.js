// /* <div>
//       <p class="taskTitle">ЗАДАЧА 7</p>
//       <div class="outerCircle">
//         <div class="innerCircle"></div>
//       </div>
//   </div>
//
// // Завдання 7
// // При натисканні на коло він повинен слідувати за курсором.
// // При повторному натисканні він стає в початкове положення.
// // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/MouseEvent
// // https://developer.mozilla.org/ru/docs/Web/API/MouseEvent/pageX
// // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/pageY//

const outerCirc = document.querySelector('.outerCircle');
outerCirc.addEventListener('click', onMove);
function onMove(event) {
    const item = event.currentTarget;

    if (item.style.position === 'absolute') {
        window.removeEventListener('mousemove', onMouseMove);
        item.style.position = 'static';
        return
    }
    item.style.position = 'absolute';
    window.addEventListener('mousemove', onMouseMove);
}
function onMouseMove(event) {
    console.log(event.pageX);
    let left = event.pageX;
    let top = event.pageY;
    outerCirc.style.top = top -15  +'px';
    outerCirc.style.left = left -15 + 'px';
}

