const item = document.querySelector('input[type=text]');
const entryForm = document.querySelector('form');
const checklist = document.querySelector('.checklist');
const checkedBoxes = document.querySelector('.checkedBoxes');

let toDoItems = [];
let compItems = [];
let boxChecked = false;

function addItem(e){
  e.preventDefault();
  toDoItems.push(item.value);
  entryForm.reset();
  updateItems(checklist,toDoItems);
};

function updateItems(list,items) {
  list.innerHTML = items.map((item,i) => {
    return `
      <li>
        <input type="checkbox" ${boxChecked ? `id=itemChecked${i}` : `id=item${i}`} data-index=${i} ${boxChecked ? "checked" : ""}>
        <label ${boxChecked ? `for=itemChecked${i}` : `for=item${i}`}>${item}</label>
      </li>
      `;
  }).join('');
};

function checked(e) {
  let indexChecked;
  let updatedToDo;
    if(e.target.checked) {
      console.log(e.target);
      indexChecked = parseInt(e.target.dataset.index);
      compItems.push(toDoItems[indexChecked]);
      updatedToDo = [...toDoItems.slice(0,indexChecked), ...toDoItems.slice(indexChecked + 1)];
      toDoItems = updatedToDo;
      boxChecked = true;
      updateItems(checkedBoxes,compItems);
      boxChecked = false;
      updateItems(checklist,toDoItems);
  };
};

function unchecked(e) {
  let indexUnchecked;
  let updatedCompItems;
    if(e.target.checked===false) {
      console.log('unchecked');
      console.log(e.target);
      console.log(e.target.dataset.index);
      console.log(toDoItems);
      indexUnchecked = parseInt(e.target.dataset.index); //returning NAN when label is clicked on
      toDoItems.push(compItems[indexUnchecked]);
      updatedCompItems = [...compItems.slice(0,indexUnchecked), ...compItems.slice(indexUnchecked + 1)];
      compItems = updatedCompItems;
      updateItems(checklist,toDoItems);
      boxChecked = true;
      updateItems(checkedBoxes,compItems);
      boxChecked = false;
    };
  };


entryForm.addEventListener('submit', addItem);
checklist.addEventListener('click', checked);
checkedBoxes.addEventListener('click', unchecked);
