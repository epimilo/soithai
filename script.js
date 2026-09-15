const gatefold = document.querySelector('.gatefold');
const toggle = document.querySelector('.toggle');

if (gatefold && toggle) {
  toggle.addEventListener('click', () => {
    gatefold.classList.toggle('is-open');
    toggle.textContent = gatefold.classList.contains('is-open') ? 'Đóng lại' : 'Mở ra';
  });
}
