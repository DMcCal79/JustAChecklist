const item = document.querySelector('input[type=text]');
const entryForm = document.querySelector('form');
const checklist = document.querySelector('.checklist');
const toDoItems = [];
// const newItems = document.querySelectorAll('.newItem');
const boxes = document.querySelectorAll('input[type=checkbox]');


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

function strike(e) {
  console.log(e);
};


entryForm.addEventListener('submit', addItem);
boxes.forEach(item => addEventListener('click',strike));
