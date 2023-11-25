const navToggle = document.querySelector('.nav-toggle')
const primaryNav = document.getElementById('primary-nav')

let toggled = false
navToggle.addEventListener('click', (e) => {
  toggled = !toggled
  if(toggled) {
    navToggle.dataset.expanded = true
    primaryNav.ariaExpanded = true
  } else {
    navToggle.dataset.expanded = false
    primaryNav.ariaExpanded = false
  }
})