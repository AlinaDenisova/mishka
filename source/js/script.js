  var header = document.querySelector('.page-header');
  var toggle = document.querySelector('.page-header__toggle');

  header.classList.remove('page-header--nojs');

  toggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (header.classList.contains('page-header--closed')) {
      header.classList.remove('page-header--closed');
      header.classList.add('page-header--opened');
    } else {
      header.classList.add('page-header--closed');
      header.classList.remove('page-header--opened');
    }
  });
