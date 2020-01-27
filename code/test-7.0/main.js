window.onload = function() {
  const hallucinationEffect = document.querySelector(".hallucination-effect")
  const styleBefore = window.getComputedStyle(hallucinationEffect, "::before").getPropertyValue("transform")

  document.addEventListener('scroll', function() {
    hallucinationEffect.style.transform = scrollY;
  })
  console.log(scrollY)
}