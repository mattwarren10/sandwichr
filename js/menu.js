// CREATE JS HAMBURGER MENU

var hb = document.getElementsByClassName('hb');
var x = document.getElementsByClassName('x');
var menu = document.getElementsByClassName('menu')


// show menu when clicking hamburger button
hb[0].addEventListener( 'click', function showMenu () {
  if (window.innerWidth < 769) {
    x[0].style.display = 'inline-block';
    hb[0].style.display = 'none';
    menu[0].style.display = 'block';
  }
})

// hide menu when click the x button
x[0].addEventListener( 'click', function hideMenu () {
  if (window.innerWidth < 769) {
    x[0].style.display = 'none';
    hb[0].style.display = 'inline-block';
    menu[0].style.display = 'none';
  } 
})

// hide x button and menu on load
menu[0].style.display = 'none';
x[0].style.display = 'none';

if (window.innerWidth > 768) {
    hb[0].style.display = 'none';
    x[0].style.display = 'none';
    menu[0].style.display = 'inline-block';
  } 