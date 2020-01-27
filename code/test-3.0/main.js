$(document).ready(function() {
  var $magic = $(".magic"),
      magicWHalf = $magic.width() / 2;

  console.log(magicWHalf)

  // $(document).on("mousemove", function() {
  //   $magic.css
  // })
  $(document).on("mousemove", function(e) {
    $magic.css({"left": e.pageX - magicWHalf, "top": e.pageY - magicWHalf});
  });
});

// const magic = document.getElementsByClassName(".magic")
// const magicWHalf = magic.width() /2;

// console.log(magicWHalf)
//  