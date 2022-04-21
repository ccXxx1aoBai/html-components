;(function(window, document){
  window.onload = function(){
    var total = 100;
    var progress = 55;
    var border = document.querySelector(".border");
    var wrapper = document.querySelector(".wrapper");
    if(progress >= total / 2){
      wrapper.style.backgroundColor = "#ffffff";
      border.style.transform = "rotate(" + (((progress / total) - 0.5) * 360) + "deg)"; 
    }else{
      wrapper.style.transform = "rotate(" + (progress / total * 360) + "deg)";
    }
    var span = document.querySelector(".mask span");
    span.innerHTML = ((progress / total) * 100).toFixed(0) + "%";
  }
}(window, document))