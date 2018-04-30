var header = document.querySelector(".page-header");
var toggle = document.querySelector(".page-header__toggle");

header.classList.remove("page-header--nojs");

toggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (header.classList.contains("page-header--closed")) {
    header.classList.remove("page-header--closed");
    header.classList.add("page-header--opened");
  } else {
    header.classList.add("page-header--closed");
    header.classList.remove("page-header--opened");
  }
});

var link = document.querySelector(".good-hit__btn");
var catalogLink = document.querySelector(".catalog-card__basket");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".overlay");

if (link) {
  link.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
}

if (catalogLink) {
  catalogLink.addEventListener ("click", function (evt) {
    evt.preventDefault();
    modal.classList.add("modal--show");
    overlay.classList.add("overlay--show");
  });
}

if (overlay) {
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    modal.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("modal--show")) {
      modal.classList.remove("modal--show");
      overlay.classList.remove("overlay--show");
    }
  }
});

function initMap() {
var centerLatLng = new google.maps.LatLng(59.938827, 30.323073);
var mapOptions = {
      center: centerLatLng,
      zoom: 16
};

var map = new google.maps.Map(document.querySelector(".contacts__map"), mapOptions);
var addressLatLng = new google.maps.LatLng(59.938827, 30.323073);

var isIE11 = !!(navigator.userAgent.match(/Trident/) && navigator.userAgent.match(/rv[ :]11/));
var marker = new google.maps.Marker({
  position: addressLatLng,
  map: map,
  title: "ул. Большая Конюшенная 19/8, Санкт-Петербург",
  icon: isIE11 ? "img/icon-map-pin.png" : "img/icon-map-pin.svg"
});
}

google.maps.event.addDomListener(window, "load", initMap);
