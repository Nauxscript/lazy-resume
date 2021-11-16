// public style
import "./style/index.css"
// darkmode param

// HTML files hot reload setting, only open in development environment
if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}

// darkmode
window.onload = function() {
  console.log('ready')
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.add('dark')
  } else {
    document.querySelector('html').classList.remove('dark')
  }
}
const darkModeBtn = document.getElementById('toggleDarkMode')
darkModeBtn.addEventListener('click', function(e){
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
})

const switchBtn = document.getElementById('switch')
switchBtn.addEventListener('click', function(e){
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
})