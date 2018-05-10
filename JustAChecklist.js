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
  updateToDoItems();
};

function updateToDoItems() {
  checklist.innerHTML = toDoItems.map((toDoItem,i) => {
    return `
    <li>
      <input type="checkbox" id="toDoItem${i}" data-index=${i}>
      <label for="toDoItem${i}">${toDoItem}</label>
    </li>
    `;
  }).join('');
};

function updateCheckedItems() {
  checkedBoxes.innerHTML = compItems.map((compItem,i) => {
    return `
    <li>
      <input type="checkbox" id="compItem${i}" data-index=${i} checked>
      <label for="compItem${i}">${compItem}</label>
    </li>
    `;
  }).join('');
};


function checked(e) {
  let indexChecked;
  let updatedToDo;
    if(e.target.checked) {
      console.log(e.target.dataset.index);
      indexChecked = parseInt(e.target.dataset.index);
      compItems.push(toDoItems[indexChecked]);
      updatedToDo = [...toDoItems.slice(0,indexChecked), ...toDoItems.slice(indexChecked + 1)];
      toDoItems = updatedToDo;
      updateCheckedItems();
      updateToDoItems();
  }
};

function unchecked(e) {
  let indexUnchecked;
  let updatedCompItems;
    if(!e.target.checked) {
      console.log(e.target.dataset.index);
      indexUnchecked = parseInt(e.target.dataset.index);
      toDoItems.push(compItems[indexUnchecked]);
      updatedCompItems = [...compItems.slice(0,indexUnchecked), ...compItems.slice(indexUnchecked + 1)];
      compItems = updatedCompItems;
      updateCheckedItems();
      updateToDoItems();
    }
  };




entryForm.addEventListener('submit', addItem);
checklist.addEventListener('click', checked);
checkedBoxes.addEventListener('click', unchecked);
