(function(window, document){
  window.onload = function(){
    var dialog = document.querySelector(".dialog")
    dataInit(dialog);
    showdialog(dialog);
    var button = document.querySelector(".button");
    var close = document.querySelector("#close");
    //按钮关闭
    button.onclick = function(e){
      e.stopPropagation();
      dialog.classList.remove("dialog-show");
    }
    //右上角关闭
    close.onclick = function(e){
      e.stopPropagation();
      dialog.classList.remove("dialog-show");
    }
  }
}(window, document))

/**
 * 对话框内容初始化
 * @param { 对话框根dom(class = ".dialog") } dialog 
 */
function dataInit(dialog){
  var title = dialog.getAttribute("title");
  var content = dialog.getAttribute("content");
  var span = document.querySelector(".title span");
  var p = document.querySelector(".content p");
  span.innerHTML = title;
  p.innerHTML = content;
}

/**
 * 对话框显示
 * @param { 对话框根dom(class = ".dialog") } dialog 
 */
function showdialog(dialog){
  dialog.classList.add("dialog-show");
}