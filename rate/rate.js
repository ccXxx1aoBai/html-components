;(function(window, document){
  window.onload = function(){
    var canvas = document.querySelector("#canvas");
    var cvsCtx = canvas.getContext("2d");
    cvsCtx.beginPath();
    cvsCtx.moveTo(50, 50);
    cvsCtx.lineTo(57, 64);
    cvsCtx.lineTo(72, 66.5);
    cvsCtx.lineTo(61, 77);
    cvsCtx.lineTo(64, 93);
    cvsCtx.lineTo(50, 85);
    cvsCtx.lineTo(36, 93);
    cvsCtx.lineTo(39, 77.5);
    cvsCtx.lineTo(28, 66.5);
    cvsCtx.lineTo(43, 64);
    cvsCtx.lineTo(50, 50);
    cvsCtx.fillStyle = "#e6a23c";
    cvsCtx.moveTo(100, 50);
    cvsCtx.lineTo(107, 64);
    cvsCtx.lineTo(122, 66.5);
    cvsCtx.lineTo(111, 77);
    cvsCtx.lineTo(114, 93);
    cvsCtx.lineTo(100, 85);
    cvsCtx.lineTo(86, 93);
    cvsCtx.lineTo(89, 77.5);
    cvsCtx.lineTo(78, 66.5);
    cvsCtx.lineTo(93, 64);
    cvsCtx.lineTo(100, 50);
    cvsCtx.fill();
  }

}(window, document))