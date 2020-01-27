

window.onload = function() {

  const htmlSVG = document.querySelector("svg")
  const htmlSVGfeTurbulence = htmlSVG.querySelector("feTurbulence")
  const val = document.querySelector("#value");

  console.log(htmlSVGfeTurbulence)
  document.addEventListener("scroll", function(){
    // if (scrollY = 5) {
    //   scrollY = 0;
    // }else {
    //   return;
    // }
    console.log(scrollY)
    htmlSVGfeTurbulence.setAttribute("baseFrequency", (scrollY/10000))

  })

}