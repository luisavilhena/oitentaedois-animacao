window.onload = function() {
  const turb = document.querySelector("#turb")

  TweenMax.to(turb, 1, {attr:{baseFrequency: 0.01}, ease: Expo.easeInOut, delay:0, repeat: -1, yoyo: true});  
}