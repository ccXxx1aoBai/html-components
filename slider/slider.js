;(function(window, document){
  window.onload = function(){
    var slider = document.querySelector(".l-slider");
    var left = slider.offsetLeft;
    var bg = document.querySelector(".l-slider-bg");
    var btn = document.querySelector(".l-slider-btn");
    var max = false;
    btn.onmousedown = function(e){
      var x = e.clientX - left;
      btn.classList.add("hover");
      console.log(x)
      //console.log(e.clientX);
      console.log(left);
      onmousemove = function(e){
        if(e.clientX - left >= slider.clientWidth){
          bg.style.width = slider.clientWidth + "px";
          btn.style.left = slider.clientWidth - 10 + "px";
        }else if(e.clientX - left <= 0){
          bg.style.width = 0 + "px";
          btn.style.left = 0 + "px";
        }else{
            //console.log(e.clientX - left);
            bg.style.width = e.clientX - left + "px";
            btn.style.left = e.clientX - left + "px";
           
        }
      }
    }
    onmouseup = function(){
      btn.classList.remove("hover");
      onmousemove = function(){

      }
    }
  }
}(window, document))