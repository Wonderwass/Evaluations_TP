let image = ["background.jpg", "voiture.jpg"];

let curent = 0;

setInterval(() => {
  curent++;
  if (curent == image.length) {
    curent = 0;
  }
  document.getElementById("banner").style.backgroundImage =
    "url(../img/" + image[curent] + ")";
}, 15000);

///////////////////////////////////// CAROUSEL//////////////////////////////////////

let curentIndex = 0;

let images = ["../img/vehicule1.png", "../img/vehicule2.png"];

$(".prev").click(() => {
  curentIndex--;
  if (curentIndex < 0) {
    curentIndex = images.length - 1;
  }
});

$(".next").click(() => {
  curentIndex++;
  if (curentIndex == images.length) {
    curentIndex = 0;
  }
});
