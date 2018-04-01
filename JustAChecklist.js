const item = document.querySelector('input[type=text]');
const entryForm = document.querySelector('form');
const checklist = document.querySelector('.checklist');
const toDoItems = [];


function addItem(e){
  e.preventDefault();
  toDoItems.push(item.value);
  checklist.innerHTML = toDoItems.map(toDoItem => `<li>${toDoItem}</li>`).join('');
  entryForm.reset();
};

entryForm.addEventListener('submit', addItem);
