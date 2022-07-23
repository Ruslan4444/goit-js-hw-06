const refs = {
  input: document.querySelector('#validation-input'),
};
const dataLength = Number(refs.input.dataset.length);

refs.input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === dataLength) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
  } else {
    refs.input.classList.remove('valid');
    refs.input.classList.add('invalid');
  }
}
