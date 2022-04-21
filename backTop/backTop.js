;(function(window, document){
  window.onload = function(){
    var back = document.querySelector(".l-backtop");
    var backTop = document.documentElement.scrollTop;
    if(backTop > 600){
      back.style.display = "block";
    }
    window.onscroll = function(){
      backTop = document.documentElement.scrollTop;
      if(backTop > 600){
        back.style.display = "block";
      }
    }
    back.onclick = function(){
      var y = 0;
      var interval = setInterval(() => {
        backTop = document.documentElement.scrollTop;
        y = backTop;
        y -= backTop / 20; //修改分母值 可改变回滚速度
        window.scroll(0, y);
        if(y <= 0){
          clearInterval(interval);
        }
      }, 10);
    }
  }
}(window, document))