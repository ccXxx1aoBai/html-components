;(function(window, document){
  window.onload = function(){
    var lswitch = document.querySelector(".l-switch");
    var on = false;
    lswitch.onclick = function(){
      console.log(on);
      if(on){
        lswitch.classList.add("off");
        lswitch.classList.remove("on");
        on = false;
      }else{
        lswitch.classList.add("on");
        lswitch.classList.remove("off");
        on = true;
      }
    }
  }
}(window, document))