// menu
// in de les
var deMenuButton= document.querySelector("header > button");
var deNav = document.querySelector("header > nav");
var sluitButton = document.querySelector("header nav button");
var toaster = document.querySelector ("main > img");
var images = document.querySelectorAll ("main section:nth-of-type(2) img");
var white = document.querySelector ('main section:nth-of-type(1) img');
var audio = document.querySelector('main audio:nth-of-type(1)')
var boosAudio = document.querySelector('main audio:nth-of-type(2)')




deMenuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  deNav.classList.toggle("ikBenOpen")
}

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  deNav.classList.remove("ikBenOpen");
}


// toaster
images.forEach(image => {
  image.onclick = function(){
    toaster.src = image.getAttribute('src');
    }

})


// like
function changeImage () {
  let displayImage = document.getElementById('image1')
  if(displayImage.src.match('./img/like.png')){
    displayImage.src = './img/liked.png'
      audio.play()

  } else{
    white.src = './img/like.png'
    boosAudio.play()

  }
  //zorgt ervoor dat de audio speelt

}