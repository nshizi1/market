import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})



// disable right click
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});


// disable ctrl+u
window.addEventListener('keydown', function (e) {
  if ((e.ctrlKey || e.metaKey) && e.key === 'u') {
      e.preventDefault();
  }
});



// disable f12
window.addEventListener('keydown', function (e) {
  if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
  }
});
