const item = document.querySelector('input[type=text]');
const entryForm = document.querySelector('form');
const checklist = document.querySelector('.checklist');
const checkedBoxes = document.querySelector('.checkedBoxes');
let toDoItems = [];
let compItems = [];

function addItem(e){
  e.preventDefault();
  toDoItems.push(item.value);
  entryForm.reset();
  updateList();
};

function updateList() {
  checklist.innerHTML = toDoItems.map((toDoItem,i) => {
    return `
    <li>
      <input type="checkbox" id="toDoItem${i}" data-index=${i}>
      <label for="toDoItem${i}">${toDoItem}</label>
    </li>
    `;
  }).join('');

};

function checked(e) {
  let indexChecked;
  let updatedToDo;
    if(e.target.checked) {
    indexChecked = parseInt(e.target.dataset.index);
    compItems.push(toDoItems[indexChecked]);
    checkedBoxes.innerHTML = compItems.map((compItem,i) => {
      return `
      <li>
        <input type="checkbox" checked=true id="compItem${i}">
        <label for="compItem${i}">${compItem}</label>
      </li>
          `;
    }).join('');
    updatedToDo = [...toDoItems.slice(0,indexChecked), ...toDoItems.slice(indexChecked + 1)];
    toDoItems = updatedToDo;
    updateList();
  };
};




entryForm.addEventListener('submit', addItem);
checklist.addEventListener('click', checked);
