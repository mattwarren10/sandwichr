// CREATE JS HAMBURGER MENU

var hb = document.getElementById('hb');
var x = document.getElementById('x');
var menu = document.getElementById('menu')


// show menu when clicking hamburger button
hb.addEventListener( 'click', function showMenu () {
  if (window.innerWidth < 769) {
    x.style.display = 'inline-block';
    hb.style.display = 'none';
    menu.style.display = 'block';
  }
})

// hide menu when click the x button
x.addEventListener( 'click', function hideMenu () {
  if (window.innerWidth < 769) {
    x.style.display = 'none';
    hb.style.display = 'inline-block';
    menu.style.display = 'none';
  } 
})

// hide x button and menu on load
menu.style.display = 'none';
x.style.display = 'none';

if (window.innerWidth > 768) {
    hb.style.display = 'none';
    x.style.display = 'none';
    menu.style.display = 'inline-block';
  } 