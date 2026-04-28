/* NAME FIELD */
document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.getElementById('floatingInputName');
  const errorEl = document.getElementById('floatingInputName-error');
  const form = document.getElementById('contactModalForm');

  if (!nameInput || !errorEl || !form) return;

  function nameIsValid() {
    return nameInput.value.trim().length >= 3;
  }

  function showNameError(show) {
    if (show) {
      errorEl.classList.remove('d-none');
      nameInput.classList.add('is-invalid');
      nameInput.setAttribute('aria-invalid', 'true');
    } else {
      errorEl.classList.add('d-none');
      nameInput.classList.remove('is-invalid');
      nameInput.removeAttribute('aria-invalid');
    }
  }

  /** Live feedback while typing. */
  nameInput.addEventListener('input', () => {
    const len = nameInput.value.trim().length;
    if (len === 0) {
      showNameError(false);
      return;
    }
    showNameError(len < 3);
  });

  nameInput.addEventListener('blur', () => {
    if (!nameIsValid()) {
      showNameError(true);
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!nameIsValid()) {
      showNameError(true);
      nameInput.focus();
    }
  });
});

/* SURNAME FIELD */
document.addEventListener('DOMContentLoaded', () => {
  const lastNameInput = document.getElementById('floatingInputLastName');
  const errorLS = document.getElementById('floatingInputLastName-error');
  const formLS = document.getElementById('contactModalForm');

  if (!lastNameInput || !errorLS || !formLS) return;

  function lastNameIsValid() {
    return lastNameInput.value.trim().length >= 3;
  }

  function showLastNameError(show) {
    if (show) {
      errorLS.classList.remove('d-none');
      lastNameInput.classList.add('is-invalid');
      lastNameInput.setAttribute('aria-invalid', 'true');
    } else {
      errorLS.classList.add('d-none');
      lastNameInput.classList.remove('is-invalid');
      lastNameInput.removeAttribute('aria-invalid');
    }
  }

  /** Live feedback while typing.  */
  lastNameInput.addEventListener('input', () => {
    const len = lastNameInput.value.trim().length;
    if (len === 0) {
      showLastNameError(false);
      return;
    }
    showLastNameError(len < 3);
  });

  lastNameInput.addEventListener('blur', () => {
    if (!lastNameIsValid()) {
      showLastNameError(true);
    }
  });

  formLS.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!lastNameIsValid()) {
      showLastNameError(true);
      lastNameInput.focus();
    }
  });
});

/* EMAIL FIELD */
document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('floatingInputEmail');
  const errorE = document.getElementById('floatingInputEmail-error');
  const formE = document.getElementById('contactModalForm');

  if (!emailInput || !errorE || !formE) return;

  function emailIsValid() {
    return emailInput.value.includes('@');
  }

  function showEmailError(show) {
    if (show) {
      errorE.classList.remove('d-none');
      emailInput.classList.add('is-invalid');
      emailInput.setAttribute('aria-invalid', 'true');
    } else {
      errorE.classList.add('d-none');
      emailInput.classList.remove('is-invalid');
      emailInput.removeAttribute('aria-invalid');
    }
  }

  /** Live feedback: error appears while typing if the value is too short (before Submit). */
  emailInput.addEventListener('input', () => {
    const len = emailInput.value.trim().length;
    if (len === 0) {
      showEmailError(false);
      return;
    }
    showEmailError(!emailIsValid());
  });

  emailInput.addEventListener('blur', () => {
    if (!emailIsValid()) {
      showEmailError(true);
    }
  });

  formE.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailIsValid()) {
      showEmailError(true);
      emailInput.focus();
    }
  });
});

/* MESSAGE FIELD */
document.addEventListener('DOMContentLoaded', () => {
  const contactUsFormInput = document.getElementById('contactUsForm');
  const errorCU = document.getElementById('contactUsForm-error');
  const formCU = document.getElementById('contactModalForm');

  if (!contactUsFormInput || !errorCU || !formCU) return;

  function contactUsFormValid() {
    const len = contactUsFormInput.value.trim().length;
    return len >= 1 && len <= 200;
  }

  function showContactUsFormError(show) {
    if (show) {
      errorCU.classList.remove('d-none');
      contactUsFormInput.classList.add('is-invalid');
      contactUsFormInput.setAttribute('aria-invalid', 'true');
    } else {
      errorCU.classList.add('d-none');
      contactUsFormInput.classList.remove('is-invalid');
      contactUsFormInput.removeAttribute('aria-invalid');
    }
  }

  /** Live feedback while typing. */
  contactUsFormInput.addEventListener('input', () => {
    const len = contactUsFormInput.value.trim().length;
    if (len === 0) {
      showContactUsFormError(false);
      return;
    }
    showContactUsFormError(len > 200);
  });

  contactUsFormInput.addEventListener('blur', () => {
    if (!contactUsFormValid()) {
      showContactUsFormError(true);
    }
  });

  formCU.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!contactUsFormValid()) {
      showContactUsFormError(true);
      contactUsFormInput.focus();
    }
  });
});

/* PASSWORD FIELD */
document.addEventListener('DOMContentLoaded', () => {
  const password = document.getElementById('password-field'); /*Q: why using const here?*/
  const errorPassword = document.getElementById('password-field-error');
  const formPassword = document.getElementById('contactModalForm');
  const repeat = document.getElementById('password-repeat-field');
  const errorRepeat = document.getElementById('password-repeat-field-error');

  if (!password || !errorPassword || !formPassword) return;

  function passwordValid() {
    const passwordValue = password.value; /*Q: the code works without it, why using it?*/
    return ( /*Q: why is return required here?*/
      passwordValue.length >= 8 &&
      /[A-Z]/.test(passwordValue) &&
      /\d/.test(passwordValue) &&
      /[^A-Za-z0-9]/.test(passwordValue)
    );
  }

  function repeatValid() {
    const passwordValue = password.value; 
    const repeatValue = repeat.value; 

    return passwordValue == repeatValue; 
  }

  function showPasswordError(show) {
    if (show) {
      errorPassword.classList.remove('d-none');
      password.classList.add('is-invalid');
      password.setAttribute('aria-invalid', 'true'); /*Q: not sure what it does, tried to adding it to the password and didnt see any styling changes*/
    } else {
      errorPassword.classList.add('d-none');
      password.classList.remove('is-invalid');
      password.removeAttribute('aria-invalid');
    }
  }

  function showRepeatError(show) {
    if (show) {
      errorRepeat.classList.remove('d-none');
      repeat.classList.add('is-invalid');
      repeat.setAttribute('aria-invalid', 'true');
    } else {
      errorRepeat.classList.add('d-none');
      repeat.classList.remove('is-invalid');
      repeat.removeAttribute('aria-invalid');
    }
  }

  /** Live feedback while typing. */
  password.addEventListener('input', () => {
  const len = password.value.trim().length; /*Q: not sure why is trim important*/
    if (len === 0) {
      showPasswordError(false);
      return;
    }
    showPasswordError(!passwordValid());
  });

  repeat.addEventListener('input', () => {
    const len = repeat.value.trim().length; 
    if (len === 0) {
      showRepeatError(false); 
      return;
    }
    showRepeatError(!repeatValid());
  });

  password.addEventListener('blur', () => {
    if (!passwordValid()) {
      showPasswordError(true);
    }
  });

    repeat.addEventListener('blur', () => {
    if (!repeatValid()) {
      showRepeatError(true);
    }
  });

  formCU.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!passwordValid()) {
      showPasswordError(true);
      password.focus();
    }
  });

    formCU.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!repeatValid()) {
      showRepeatError(true);
      repeat.focus();
    }
  });
});


/* FIELDS VALIDATION */
document.addEventListener('DOMContentLoaded', () => {
  const contactUsButton = document.querySelector('.contact-us-button');
  const firstNameInput = document.getElementById('floatingInputName');
  const lastNameInput = document.getElementById('floatingInputLastName');
  const emailInput = document.getElementById('floatingInputEmail');
  const messageInput = document.getElementById('contactUsForm');
  const passwordInput = document.getElementById('password-field');
  const formButton = document.getElementById('contactModalForm');
  const success = document.getElementById('application-success');

  if (!contactUsButton || !formButton || !firstNameInput || !lastNameInput || !emailInput || !messageInput) return;
  function nameIsValid() {
    return firstNameInput.value.trim().length >= 3;
  }
  function lastNameIsValid() {
    return lastNameInput.value.trim().length >= 3;
  }
  function emailIsValid() {
    return emailInput.value.trim().includes('@');
  }
  function contactUsFormValid() {
    const len = messageInput.value.trim().length;
    return len >= 1 && len <= 200;
  }
  function contactUsButtonValid() {
    const isValid =
      nameIsValid() &&
      lastNameIsValid() &&
      emailIsValid() &&
      contactUsFormValid();
    contactUsButton.disabled = !isValid;
    contactUsButton.classList.toggle('disabled', !isValid);
  }
  formButton.addEventListener('input', contactUsButtonValid);
  contactUsButtonValid();
  
  /* CLEAR FIELDS ON SUBMIT */
  function contactUsButtonIsPressed () {
    success.classList.remove('d-none')
    firstNameInput.value = "John";
    lastNameInput.value = "Smith"; 
    emailInput.value = "name@example.com"; 
    messageInput.value = "Enter your message."; 
    passwordInput.value = "";
  }

  contactUsButton.addEventListener('click', contactUsButtonIsPressed)
});
