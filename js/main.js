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

  /** Live feedback: error appears while typing if the value is too short (before Submit). */
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

  /** Live feedback: error appears while typing if the value is too short (before Submit). */
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