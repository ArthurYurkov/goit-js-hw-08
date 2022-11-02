'use strict';
import throttle from 'lodash.throttle';
import localStorageApi from './storage';

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

const emailForm = throttle(({ target }) => {
  const formName = target.name;
  const formValue = target.value;
  const formData = localStorageApi.load(CONTACT_KEY) || {};

  formData[formName] = formValue;
  console.log(formName, formValue);
  localStorageApi.save(CONTACT_KEY, formData);
}, 500);

const formSubmit = event => {
  event.preventDefault();
  event.target.reset();
  localStorageApi.remove(CONTACT_KEY);
};

emailValue.addEventListener('input', emailForm);
emailValue.addEventListener('submit', formSubmit);
contactField(emailValue);
