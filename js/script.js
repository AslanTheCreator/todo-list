const formText = document.querySelector('.form__text');
const formButton = document.querySelector('.form__button');
const form = document.querySelector('form');
const taskSection = document.querySelector('.tasks');

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});

formButton.addEventListener('click', () => {
  const task = document.createElement('div');
  const taskContent = document.createElement('div');

  const taskText = document.createElement('input');
  const buttonTask = document.createElement('div');
  const buttonEdit = document.createElement('button');
  const buttonRemove = document.createElement('button');

  const valueText = formText.value;

  if (!valueText) {
    alert('Ваша задача пустая!');
    return;
  }

  task.classList.add('task');
  taskContent.classList.add('task__content');
  taskText.classList.add('task__text');
  buttonTask.classList.add('button__task');
  buttonEdit.classList.add('button__task__edit');
  buttonRemove.classList.add('button__task__remove');

  taskSection.appendChild(task);
  task.appendChild(taskContent);
  taskContent.appendChild(taskText);
  taskContent.appendChild(buttonTask);
  buttonTask.appendChild(buttonEdit);
  buttonTask.appendChild(buttonRemove);

  buttonEdit.innerHTML = 'edit';
  buttonRemove.innerHTML = 'delete';

  taskText.setAttribute('type', 'text');
  taskText.setAttribute('readonly', 'readonly');
  taskText.setAttribute('value', valueText);

  formText.value = '';

  buttonRemove.addEventListener('click', () => {
    task.remove();
  });

  buttonEdit.addEventListener('click', () => {
    if (buttonEdit.textContent === 'edit') {
      buttonEdit.innerText = 'save';
      taskText.removeAttribute('readonly');
      taskText.focus();
    } else {
      buttonEdit.innerText = 'edit';
      taskText.setAttribute('readonly', 'readonly');
    }
  });
});
