function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.button.addEventListener('click', onButtonChangeBodyBgColor);

function onButtonChangeBodyBgColor() {
  const currentColor = getRandomHexColor();
  document.body.style.background = currentColor;
  refs.span.textContent = currentColor;
}
