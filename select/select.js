;(function(window, document){
  window.onload = function(){
    var input = document.querySelector(".l-select-input");
    var option = document.querySelector(".l-option");
    var ul = document.querySelector(".l-option-list");
    var show = false;
    var li = ul.querySelectorAll("li");
    ul.onclick = function(e){
      for(let i = 0; i < li.length; i++){
        li[i].style.color = "#000000"
      }
      input.value = e.target.innerText;
      e.target.style.color = "#2a86db";
    }
    console.log(ul);
    var li = ul.querySelectorAll("li");
    input.onclick = function(){
      if(!show){
        show = visibleAnimation(option, ul, show)
        // option.style.display = "block";
        // var height = ul.scrollHeight;
        // option.style.animation = "fadeIn .1s forwards";
        // document.styleSheets[1].insertRule("@keyframes fadeIn{from{height: 0;opacity: 0;} to{height: " + height + "px;opacity: 1;}}")
        // show = true;
      }else{
        show = noVisibleAnimation(option, ul, show);
        // var height = ul.scrollHeight;
        // option.style.animation = "fadeOut .1s forwards";
        // document.styleSheets[1].insertRule("@keyframes fadeOut{from{height: "+ height + "px;opacity: 1;} to{height: 0;opacity: 0;}}")
        // setTimeout(() => {
        //   option.style.display = "none";
        // }, 100);
        // show = false;
      }
    }
    input.onblur = function(){
      setTimeout(() => {
        show = noVisibleAnimation(option, ul, show);
      }, 100);
      // if(show){
      //   var height = ul.scrollHeight;
      //   option.style.animation = "fadeOut .1s forwards";
      //   document.styleSheets[1].insertRule("@keyframes fadeOut{from{height: "+ height + "px;opacity: 1;} to{height: 0;opacity: 0;}}")
      //   setTimeout(() => {
      //     option.style.display = "none";
      //   }, 100);
      //   show = false;
      // }
    }
  }
}(window, document))

function visibleAnimation(option, ul, show){
  option.style.display = "block";
  var height = ul.scrollHeight;
  option.style.animation = "fadeIn .1s forwards";
  document.styleSheets[1].insertRule("@keyframes fadeIn{from{height: 0;opacity: 0;} to{height: " + height + "px;opacity: 1;}}")
  return show = show ? false : true;
}
function noVisibleAnimation(option, ul, show){
  var height = ul.scrollHeight;
  option.style.animation = "fadeOut .1s forwards";
  document.styleSheets[1].insertRule("@keyframes fadeOut{from{height: "+ height + "px;opacity: 1;} to{height: 0;opacity: 0;}}")
  setTimeout(() => {
    option.style.display = "none";
  }, 100);
  return show = show ? false : true;
}