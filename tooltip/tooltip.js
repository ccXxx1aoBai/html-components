/**
 * hover 触发
 */
;(function(window, document){
  window.onload = function(){
    var a = document.querySelector("p");
    var tooltip = document.querySelector(".tooltip");
    var content = tooltip.getAttribute("content");
    var p = document.querySelector(".tooltip p");
    p.innerHTML = content;
    a.onmouseenter = function(){
      tooltip.style.display = "block";
      var top = a.offsetTop + a.clientHeight + 6;
      var left = a.offsetLeft;
      tooltip.style.top = top + 'px';
      tooltip.style.left = left + 'px';
    }
    a.onmouseleave = function(){
      tooltip.style.display = "none";
    }
  }
}(window, document))


/**
 * click 触发
 */
// ;(function(window, document){
//   window.onload = function(){
//     var show = false;
//     var a = document.querySelector(".click");
//     var tooltip = document.querySelector(".tooltip");
//     var content = tooltip.getAttribute("content");
//     var p = document.querySelector(".tooltip p");
//     p.innerHTML = content;
//     a.onclick = function(e){
//       if(show){
//         tooltip.style.display = "none";
//         show = false;
//       }else{
//         e.stopPropagation();
//         tooltip.style.display = "block";
//         var top = a.offsetTop + a.clientHeight + 6;
//         var left = a.offsetLeft;
//         tooltip.style.top = top + 'px';
//         tooltip.style.left = left + 'px';
//         show = true;
//       }
//     }
//     document.onclick = function(){
//       tooltip.style.display = "none";
//       show = false;
//     }
//   }
// }(window, document))

