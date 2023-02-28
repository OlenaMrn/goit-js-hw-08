import throttle from 'lodash.throttle';

const formData = {};

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('input', throttle(onFormDataInput, 500));

form.addEventListener('submit', evt => {
  evt.preventDefault();
  evt.target.reset();
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
});

initForm();

function onFormDataInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function initForm() {
  let prevFormFields = localStorage.getItem('feedback-form-state');
  if (prevFormFields) {
    prevFormFields = JSON.parse(prevFormFields);
    // console.log(prevFormFields);
    Object.entries(prevFormFields).forEach(([name, value]) => {
      // console.log(name, value);
      // console.log(form.elements);
      formData[name] = value;
      form.elements[name].value = value;
    });
  }
}
