;(function(window, document){
  window.onload = function(){
    var obj = document.querySelector(".l-inputNumber");
    var input = document.querySelector(".l-inputNumber-input input");
    var reduce = document.querySelector(".l-reduce");
    var add = document.querySelector(".l-add");
    var step = obj.getAttribute("step");
    reduce.onclick = function(){
      if(input.value <= 1){
        reduce.style.cursor = "no-drop";
      }else{
        input.value = parseInt(input.value) - parseInt(step);
        if(input.value <= 1){
          reduce.style.cursor = "no-drop";
        }
      }
    }
    add.onclick = function(){
      reduce.style.cursor = "pointer";
      input.value = parseInt(step) + parseInt(input.value);
    }
  }
}(window, document))