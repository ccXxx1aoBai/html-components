;(function(window, document){
  window.onload = function(){
    var mask = document.querySelector(".l-drawer.mask");
    var box = document.querySelector(".l-drawer-box");
    var open = document.querySelector(".open");
    open.onclick = function(){
      mask.style.display = "block";
      mask.style.animation = "fadeIn .2s forwards";
      box.style.animation = "fadeRightIn .2s forwards";
      // fadeLeftIn 从左侧进入
      // fadeRightIn 从右侧进入
      // 根据需求修改
      document.styleSheets[1].insertRule("@keyframes fadeRightIn{from{right: " + (-box.clientWidth) + "px}to{right: 0}}");
      document.styleSheets[1].insertRule("@keyframes fadeLeftIn{from{left: " + (-box.clientWidth) + "px}to{left: 0}}");
      document.styleSheets[1].insertRule("@keyframes fadeIn{from{opacity: 0}to{opacity: 1}}");
    }
    mask.onclick = function(){
      mask.style.animation = "fadeOut .2s forwards";
      box.style.animation = "fadeRightOut .2s forwards";
      document.styleSheets[1].insertRule("@keyframes fadeRightOut{from{right: 0}to{right:" + (-box.clientWidth) + "px}}");
      document.styleSheets[1].insertRule("@keyframes fadeLeftOut{from{left: 0}to{left:" + (-box.clientWidth) + "px}}");
      document.styleSheets[1].insertRule("@keyframes fadeOut{from{opacity: 1}to{opacity: 0}}");
      setTimeout(() => {
        mask.style.display = "none";
      }, 200);
    }
  }
}(window, document))