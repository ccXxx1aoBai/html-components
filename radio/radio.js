;(function(window, document){
  window.onload = function(){
    var label = document.querySelectorAll("label");
    for(let i = 0; i < label.length; i++){
      var name = label[i].getAttribute("name");
      var input = label[i].querySelector("input");
      input.name = name;
      label[i].onclick = function(){
        var span = label[i].querySelector(".l-radio");
        for(let j = 0; j < label.length; j++){
          span = label[j].querySelector(".l-radio");
          span.classList.remove("is-checked");
        }
        span = label[i].querySelector(".l-radio");
        span.classList.add("is-checked");
      }
    }
  }
}(window, document))