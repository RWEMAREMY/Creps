let image = document.getElementById("image");
let pictures = [
  "/IMAGES/jordan3.png",
  "/IMAGES/jordan4.png",
  "/IMAGES/vanz.png",
  "/IMAGES/booster.png",
  "/IMAGES/bad bunny shoe.png",
];
setInterval(function () {
  let rondom = Math.floor(Math.random() * 5);
  image.src = pictures[rondom];
}, 2700);
