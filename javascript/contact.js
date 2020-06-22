
var myImg = document.getElementById("demo");
var mySlide = [
    "../assets/contact-images/contact-slide.png",
    "../assets/contact-images/carousel1.png",
];

var mylength = mySlide.length;

var myTimer;

var i = 0;
function myIncrement(){
  i++;
  return i;
}

function myDecrement(){
  i--;
  return i;
}


function myBackShow(){
  myDecrement()
  if(i < 0){
    i = mylength-1;
    myImg.style.backgroundImage = `url(${mySlide[i]})`;
  } else {
    myImg.style.backgroundImage = `url(${mySlide[i]})`;
  }
}



function mySlideShow(){
  myIncrement()
  if(i == mylength){
    i = 0;
    myImg.style.backgroundImage = `url(${mySlide[i]})`; 
  } else if(i != mylength - 1) {
    myImg.style.backgroundImage = `url(${mySlide[i]})`;
  } else if(i == mylength - 1) {
    myImg.style.backgroundImage = `url(${mySlide[i]})`;
    i = -1;
  }
}

myTimer = setInterval(mySlideShow, 8000)

function myNext(c){
  
  if(c.className == "previous"){
    myBackShow()
  } else if(c.className == "next"){
    mySlideShow()
  }
}

