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
