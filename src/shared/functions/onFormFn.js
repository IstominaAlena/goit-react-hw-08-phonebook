export function dataCapture(e) {
  const formElements = new FormData(e.currentTarget);
  const obj = {};

  formElements.forEach((value, name) => (obj[name] = value));

  return obj;
}

export function resetForm(id) {
  const form = document.querySelector(`#${id}`);
  const inputs = form.querySelectorAll('input');

  inputs.forEach(input => (input.value = ''));
}
