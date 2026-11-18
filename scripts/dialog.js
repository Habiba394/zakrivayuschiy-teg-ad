/* Открытие модального окна по кнопке «Сохранить на память»
и закрытие по кнопке «ОК». */

const dialog = document.querySelector('.dialog');
const openDialogButton = document.querySelector('.footer__button');
const closeDialogButton = document.querySelector('.dialog__button');

openDialogButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  dialog.showModal();
});

closeDialogButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  dialog.close();
});
