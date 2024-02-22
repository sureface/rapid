const carousel = document.querySelector("#carousel");
let containerItems = document.querySelectorAll("#carousel > a");
let itemLength = containerItems.length;
let index = 0;
let bgVideo = document.querySelector(".bg-video video");

function startSlide() {
  setInterval(nextSlide, 3000);
}

function nextSlide() {
  let itemW = document.querySelector("#carousel > a").offsetWidth;

  carousel.style.transform = `translateX(-${itemW + 22}px)`;
  document.querySelector("#carousel > a:nth-child(2)").classList.remove("active");
  document.querySelector("#carousel > a:nth-child(3)").classList.add("active");


  setTimeout(() => {
    let firstItem = document.querySelector("#carousel > a");
    let itemClone = firstItem.cloneNode(true);
    firstItem.remove();
    carousel.append(itemClone);
    carousel.style.transition = "0s";
    carousel.style.transform = `translateX(0px)`;
  }, 500);

  carousel.style.transition = "0.5s linear";

}

startSlide();

function playVideo(){
  if(bgVideo.currentTime >= bgVideo.duration){
    bgVideo.currentTime = 0;
    bgVideo.play();
  }

  setTimeout(playVideo,1000);
}

playVideo();
