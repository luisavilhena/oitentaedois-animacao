// (function() {
//   var bFControl = document.getElementById("bFControl"),
//     bFSVG = document.querySelector("#bFControl ~ svg"),
//     effect = bFSVG.querySelector("feTurbulence"),
//     val = document.querySelector("#value");

//   bFControl.addEventListener("change", updatebFSVG);
//   bFControl.addEventListener("input", updatebFSVG);

//   function updatebFSVG() {
//     let v = bFControl.value;
    
//     val.innerText = v;

//     effect.setAttribute("baseFrequency", v);
//   }
// })();

window.onload = function() {
  const bFControl = document.getElementById("bFControl"),
    bFSVG = document.querySelector("#bFControl ~ svg"),
    effect = bFSVG.querySelector("feTurbulence"),
    val = document.querySelector("#value");

    bFControl.addEventListener("mousemove", updatebFSVG);
    // bFControl.addEventListener("input", updatebFSVG);

    function updatebFSVG() {
      let v = bFControl.value;
      val.innerText = v;

      effect.setAttribute("baseFrequency", v);
    }

  console.log(bFControl, bFSVG)
}