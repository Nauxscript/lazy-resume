import "./style/index.css"

if (process.env.NODE_ENV !== 'production') {
  require('../index.html')
}

let mode = 'light'

// darkmode
window.onload = function() {
  console.log('ready')
  let m = localStorage.getItem('mode')
  if (m && m === 'dark') {
    mode = 'dark'
    document.documentElement.classList.add('dark')
  }
}
const darkModeBtn = document.getElementById('toggleDarkMode')
darkModeBtn.addEventListener('click', function(e){
  if (mode === 'dark') {
    mode = 'light'
    document.documentElement.classList.remove('dark')
    localStorage.setItem('mode', 'light')
  } else {
    mode = 'dark'
    document.documentElement.classList.add('dark')
    localStorage.setItem('mode', 'dark')
  }
  
})