/*document.querySelectorAll('.tabs_header').forEach (radio => {
  radio.addEventListener('change', () => {
    window.scrollTo({ top:0, behavior: 'smooth'})
  })
}*/

function menuBar() {
  const menu = document.getElementById('mobile_menu');
  menu.classList.toggle('is-open');
}
