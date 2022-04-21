;(function(window, document){
  window.onload = function(){
    var progress = document.querySelectorAll(".progress");
    var pro = 0.3;
    for(let i = 0; i < progress.length; i++){
      var bg = progress[i].querySelector(".progress-bg");
      var tips = progress[i].querySelector(".tips");
      var animation = progress[i].querySelector(".animation");
      var width = progress[i].clientWidth * pro;
      bg.style.width = progress[i].clientWidth * pro + 'px';
      tips.innerHTML = pro * 100 + '%';
      pro += 0.1;
      var index = i + 1;
      animation.style.animation = "linear"+ (i + 1) + " 2s infinite";
      document.styleSheets[1].insertRule("@keyframes linear" + index +" {from {opacity: .7;left: 2%;}to{opacity: .1;left: " + ( width - 30) + "px;}}");
    }
  }
}(window, document))