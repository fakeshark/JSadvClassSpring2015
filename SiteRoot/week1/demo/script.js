
var div = document.querySelector('div');

div.classList.add('error');

div.style.position = 'absolute';
div.style.top = '50px';
div.style.zIndex = '3';
div.style.paddingLeft = '2em';

function hide() {
  //div.style.display = 'none';
  div.classList.remove('show');
  div.classList.add('hide');
}

function show() {
  //div.style.display = 'none';
  div.classList.add('show');
  div.classList.remove('hide');
}

// select by ID Attribute
var btnHide = document.querySelector('#hide');

// select by Class Attribute
var btnShow = document.querySelector('.btn-show');

btnHide.addEventListener('click', hide);
btnShow.addEventListener('click', show);