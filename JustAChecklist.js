const item = document.querySelector('input[type=text]');
const entryForm = document.querySelector('form');
const checklist = document.querySelector('.checklist');
const checkedBoxes = document.querySelector('.checkedBoxes');
const toDoItems = [];
const compItems = [];

function addItem(e){
  e.preventDefault();
  toDoItems.push(item.value);
  checklist.innerHTML = toDoItems.map((toDoItem,i) => {
      return `
      <li>
        <input type="checkbox" id="toDoItem${i}" data-index=${i}>
        <label for="toDoItem${i}">${toDoItem}</label>
       </li>
          `;
      }).join('');
  entryForm.reset();
};

function checked(e) {
  let indexChecked = e.target.dataset.index;
  console.log(indexChecked);
  if(e.target.checked) {
    compItems.push(toDoItems[indexChecked]);
    checkedBoxes.innerHTML = compItems.map((compItem,i) => {
      return `
      <li>
        <input type="checkbox" checked=true id="compItem${i}">
        <label for="compItem${i}">${compItem}</label>
      </li>
          `;
    }).join('');

    // const leftToDo = [...toDoItems.slice(0,indexChecked),
    //                   ...toDoItems.slice(indexChecked+1)];
    // console.log(leftToDo);
  }
}


// function checked(e) {
//   if(e.target.checked) {
//     console.log('I am checked!');
//   } else {
//     console.log('I am not checked!');
//   };
// };

entryForm.addEventListener('submit', addItem);
checklist.addEventListener('click', checked);
