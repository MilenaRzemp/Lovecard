
// FUNKCJE SLIDERA

function Slide1Start() {
    $(".produkt1-box").css("opacity", "0.0");
    $(".my-slide1 img").css("opacity", "0");
    $(".my-slide1 img").animate({
      opacity: "0.5",
      height: "85vh"}, 500).animate({
      opacity: "1.0",
      height: "80vh"}, 500);
    
    $(".balls").delay(1000).animate({
      opacity: "1.0"}, 1500);
  
    $(".slider1-tlo, .slide1-left, .slide1-right").css("opacity", "0");
    $(".slider1-tlo, .slide1-left, .slide1-right").delay(500).animate({
      opacity: "0.9"}, 1000);
  
    $(".slider1-tlo-tekst").css("left", "-100vw");
    $(".slider1-tlo-tekst").delay(800).animate({
      left: "74%"}, 1000);
  
    $(".produkt1-box").css("height", "0");
    $(".produkt1-box").css("top", "100%");
    $(".produkt1-box").delay(1500).animate({
      opacity: "1.0"}, 500).animate({
      height: "47%",
      top: "31%"}, 1200);
  
    $(".produkt1-box-button").css("opacity", "0.0");
    $(".produkt1-box-button").delay(3200).animate({
      opacity: "0.5",
      height: "20%"}, 500).animate({
      opacity: "1.0",
      height: "15%"}, 500);
  }
  
  function Slide2Start() {
    $(".my-slide2 img").css("opacity", "0");
    $(".my-slide2 img").animate({
      opacity: "0.5",
      height: "85vh"}, 500).animate({
      opacity: "1.0",
      height: "80vh"}, 500);
  
    $(".slider2-tlo, .slide2-left, .slide2-right").css("opacity", "0");
    $(".slider2-tlo, .slide2-left, .slide2-right").delay(500).animate({
      opacity: "0.9"}, 1000);
  
    $(".slider2-tlo-tekst").css("left", "-100vw");
    $(".slider2-tlo-tekst").delay(800).animate({
      left: "10vw"}, 1000);
  
    $(".produkt2-box").css("height", "0");
    $(".produkt2-box").css("top", "100%");
    $(".produkt2-box").delay(1500).animate({
      height: "46%",
      top: "49%"}, 1200);
  
    $(".produkt2-box-button").css("opacity", "0.0");
    $(".produkt2-box-button").delay(2700).animate({
      opacity: "0.5",
      height: "20%"}, 500).animate({
      opacity: "1.0",
      height: "16%"}, 500);
  }
  
  function Slide3Start() {
    $(".my-slide3 img").css("opacity", "0");
    $(".my-slide3 img").animate({
      opacity: "0.5",
      height: "85vh"}, 500).animate({
      opacity: "1.0",
      height: "80vh"}, 500);
  
    $(".slider3-tlo, .slide3-left, .slide3-right").css("opacity", "0");
    $(".slider3-tlo, .slide3-left, .slide3-right").delay(500).animate({
      opacity: "0.9"}, 1000);
  
    $(".slider3-tlo-tekst0").css("left", "-100%");
    $(".slider3-tlo-tekst0").delay(800).animate({
      left: "33%"}, 1000);
    
    $(".slider3-tlo-tekst1").css("left", "-1000px");
    $(".slider3-tlo-tekst1").delay(800).animate({
      left: "75px"}, 1000);
  
    $(".produkt3-box").css("height", "0");
    $(".produkt3-box").css("top", "100%");
    $(".produkt3-box").delay(1500).animate({
      height: "46%",
      top: "40%"}, 1200);
  
    $(".produkt3-box-button").css("opacity", "0.0");
    $(".produkt3-box-button").delay(2700).animate({
      opacity: "0.5",
      height: "20%"}, 500).animate({
      opacity: "1.0",
      height: "15%"}, 500);
  }
  
  
  // RUCH SLIDERA
  
  $(document).ready(Slide1Start());
  
  $(".slide1-right").click(() => {
    $(".my-slide1").css("visibility", "hidden");
    $(".balls").css("opacity", "0.0");
    $(".my-slide2").css("visibility", "visible");
    Slide2Start();
  });
  
  $(".slide2-right").click(() => {
    $(".my-slide2").css("visibility", "hidden");
    $(".my-slide3").css("visibility", "visible");
    Slide3Start();
  });
  
  $(".slide3-right").click(() => {
    $(".my-slide3").css("visibility", "hidden");
    $(".my-slide1").css("visibility", "visible");
    Slide1Start();
  });
  
  $(".slide1-left").click( () => {
    $(".my-slide1").css("visibility", "hidden");
    $(".balls").css("opacity", "0.0");
    $(".my-slide3").css("visibility", "visible");
    Slide3Start(); 
  });
  
  $(".slide2-left").click( () => {
    $(".my-slide2").css("visibility", "hidden");
    $(".my-slide1").css("visibility", "visible");
    Slide1Start(); 
  });
  
  $(".slide3-left").click( () => {
    $(".my-slide3").css("visibility", "hidden");
    $(".my-slide2").css("visibility", "visible");
    Slide2Start(); 
  });
  
  
// GALERIA PRODUKTU
  
const activeImage = document.querySelector(".active");
const productImages = document.querySelectorAll(".produkt-img");
  
function changeImage(e) {
  activeImage.src = e.target.src;
}
  
productImages.forEach(image => image.addEventListener("click", changeImage));
  
// GALERIA ZOOM
  
const forZoom = document.querySelector(".active");
console.log(forZoom)
const bigImageCont = document.querySelector(".popup");
const bigImage = document.querySelector(".popup img");
const closeZoom = document.querySelector(".popup span");

forZoom.onclick = () => {
  bigImageCont.style.display = "block";
  bigImage.src = forZoom.getAttribute("src");
}

closeZoom.onclick = () => {
  bigImageCont.style.display = "none";
}