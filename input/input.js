;(function(window, document){
  window.onload = function(){
    var i = document.querySelector(".clear i");
    i.onclick = function(){
      this.previousSibling.previousSibling.value = "";
    }
    var i = document.querySelector(".password i");
    var isPassword = true;
    i.onclick = function(){
      if(isPassword){
        this.previousSibling.previousSibling.type = "text";
        isPassword = false;
        this.className = "icon-novisibled";
      }else{
        isPassword = true;
        this.className = "icon-visibled";
        this.previousSibling.previousSibling.type = "password";
      }
    }
  }
})(window, document)