const emailValue = document.querySelector('.feedback-form');

const CONTACT_KEY = 'feedback-form-state';

const contactField = form => {
  const { elements: contactFormEl } = form;
  const dataForm = localStorageApi.load(CONTACT_KEY);

  if (!dataForm) {
    return;
  }

  const keys = Object.keys(dataForm);

  for (const key of keys) {
    contactFormEl[key].value = dataForm[key];
  }
};

const emailForm = ({ target }) => {
  const formName = target.name;
  const formValue = target.value;
  const formData = localStorageApi.load(CONTACT_KEY) || {};

  formData[formName] = formValue;

  console.log(formName, formValue);
  localStorageApi.save(CONTACT_KEY, formData);
};

const formSubmit = event => {
  event.preventDefault();
  event.target.reset();
  localStorageApi.remove(CONTACT_KEY);
};

emailValue.addEventListener('input', trottle(emailForm, 500));
emailValue.addEventListener('submit', formSubmit);
contactField(emailValue);
