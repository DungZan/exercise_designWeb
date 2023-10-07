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

    

        