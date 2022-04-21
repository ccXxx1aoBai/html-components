;(function(window, document){
  window.onload = function(){
    var checkBox = document.querySelector("input");
    var span = document.querySelector(".l-checkbox")
    console.dir(checkBox.checked);
    checkBox.onchange = function(){
      if(checkBox.checked){
        span.classList.add("is-checked");
      }else{
        span.classList.remove("is-checked");
      }
    }
  }
}(window, document))