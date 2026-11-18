/* Открытие модального окна по кнопке «Сохранить на память».
Закрывается кнопкой «ОК» (она лежит внутри form method="dialog"). */

const dialog = document.querySelector('.dialog');
const openDialogButton = document.querySelector('.footer__button');

openDialogButton.addEventListener('click', () => {
  dialog.showModal();
});
