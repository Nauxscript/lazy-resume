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
  let csses = document.getElementsByTagName("style")
  console.log(csses)
}

function darkAndLight(e) {
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.querySelector('html').classList.remove('dark')
    localStorage.theme = 'light'
  } else {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  }
}

const darkModeBtn = document.getElementById('toggleDarkMode')
darkModeBtn.addEventListener('click', darkAndLight)

const switchBtn = document.getElementById('switch')
switchBtn.addEventListener('click', darkAndLight)

// print
const printBtn = document.getElementById('print')
printBtn.addEventListener("click", printResume)

const pdfBtn = document.getElementById('pdfFile')
pdfBtn.addEventListener("click", printResume)

function printResume(){
  //判断iframe是否存在，不存在则创建iframe
  var iframe=document.getElementById("print-iframe");
  if(!iframe){
    let el = document.getElementById("print-content");
    iframe = document.createElement('IFRAME');
    let doc = null;
    iframe.setAttribute("id", "print-iframe");
    document.body.appendChild(iframe);
    doc = iframe.contentWindow.document;
    iframe.style.display = "none"
    // 插入样式
    doc.write('<style media="print">@page {background-color: #000;margin: 0;padding: 0;size: A4 portrait;-webkit-print-color-adjust:exact;color-adjust: exact;}body {zoom: .8;} .resume-header, .resume-body, .module-header span {-webkit-print-color-adjust:exact;color-adjust: exact;}</style>');
    doc.write('<link rel="stylesheet" href="index.css">');
    doc.write('<body>' + el.innerHTML + '</body>');
    doc.close();
    iframe.contentWindow.focus();
  }
  //解决第一次样式不生效的问题
  setTimeout(function(){ iframe.contentWindow.print();},50)
  // 兼容IE浏览器，我就不兼容，IE 人人喊打
  // if (navigator.userAgent.indexOf("MSIE") > 0){
  //   document.body.removeChild(iframe);
  // }   
}