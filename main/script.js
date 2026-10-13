document.querySelectorAll('.tabs_header').forEach (radio => {
  radio.addEventListener('change', () => {
    window.scrollTo({ top:0, behavior: 'smooth'})
  })
}
