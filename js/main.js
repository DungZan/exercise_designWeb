// icon dropdown
const bodyWidth = document.querySelector('body');
var headerTop = document.querySelector('.header-top');
var activeIcon = document.querySelector('.header__icon');
        activeIcon.onclick = function (){
            if (headerTop.offsetHeight == '50' && bodyWidth.offsetWidth <=800) {
                headerTop.style="animation: zoomin 1.5s; animation-fill-mode: forwards;"
            } else if(headerTop.offsetHeight != '50' && bodyWidth.offsetWidth <=800){
                headerTop.style="animation: zoomout 1.5s; animation-fill-mode: forwards;"
            }
            
        }
//text dropdown 
var activeTextMac = document.querySelectorAll('.dropbtn')[1];
var activeTextIpad =document.querySelectorAll('.dropbtn')[2];
var activeTextIphone =document.querySelectorAll('.dropbtn')[3];
var dropMac = document.querySelector('.dropdown-content-mac');
var dropIpad = document.querySelector('.dropdown-content-ipad');
var dropIphone = document.querySelector('.dropdown-content-iphone');
activeTextMac.onclick = function (){
    if (headerTop.offsetHeight == '50' && bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        dropMac.style="visibility:visible;"
        dropIpad.style="visibility:hidden;"
        dropIphone.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        dropMac.style="visibility:hidden;"
    }
    
}
activeTextIpad.onclick = function (){
    if (headerTop.offsetHeight == '50'&& bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        dropIpad.style="visibility:visible;"
        dropMac.style="visibility:hidden;"
        dropIphone.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'&& bodyWidth.offsetWidth >=800){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        dropIpad.style="visibility:hidden;"
    }
    
}
activeTextIphone.onclick = function (){
    if (headerTop.offsetHeight == '50'&& bodyWidth.offsetWidth >=800) {
        headerTop.style="animation: zoomin1 1.5s; animation-fill-mode: forwards;"
        dropIphone.style="visibility:visible;"
        dropMac.style="visibility:hidden;"
        dropIpad.style="visibility:hidden;"
    } else if(headerTop.offsetHeight = '450'&& bodyWidth.offsetWidth >=800){
        headerTop.style="animation: zoomout1 1.5s; animation-fill-mode: forwards;"
        dropIphone.style="visibility:hidden;"
    }
    
}

        