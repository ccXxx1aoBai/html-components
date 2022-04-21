;(function(window, document){
  window.onload = function(){
    var card = document.querySelector(".card");
    var p = document.querySelector(".title");
    var span = document.querySelector(".desc");
    var title = card.getAttribute("title");
    var desc = card.getAttribute("desc");
    p.innerHTML = title;
    span.innerHTML = desc;
  }
}(window, document))