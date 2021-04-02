'use strict'

window.addEventListener('load', function(){
    function btnMenu_xs_sm(){
        const btnMenu = document.getElementById('btnMenu_xs_sm');
        const menu_xs_sm = document.getElementById('menu_xs_sm');

        btnMenu.addEventListener('click', function(){
            let validarClase = menu_xs_sm.classList.contains('hiddenMenu-xs-sm');

            if(validarClase == true){
                menu_xs_sm.classList.remove('hiddenMenu-xs-sm');

            }else{
                menu_xs_sm.classList.add('hiddenMenu-xs-sm');
            }
                
        });
    }

    function buscarSeleccion(){
        const menu_xs_sm = document.getElementById('menu_xs_sm');

        menu_xs_sm.addEventListener('click', function(){
                menu_xs_sm.classList.add('hiddenMenu-xs-sm');
        });

    }

    function positionScroll(){
        window.onscroll = function() {
            let position = window.scrollY;
            const upScroll = document.getElementById('upScroll');

            if(position < 300){
                upScroll.style.display = 'none';
            }else if(position >= 300){
                upScroll.style.display = 'block';
            }
          
        };
    }

    function clickScroll(){
        $('#upScroll').click(function(event){
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0
            }, 500);

            return false;
        });
    }

    function infoPortafolio(){
        const divInfo = document.getElementById("divSubInfo");
        let subInfoImage = document.getElementById("subInfoImage");

        divInfo.addEventListener('mouseover', function(){
            subInfoImage.classList.add('hoverSubInfoImage');
        });

        divInfo.addEventListener('mouseout', function(){
            subInfoImage.classList.remove('hoverSubInfoImage');
        });
    }

    btnMenu_xs_sm();
    buscarSeleccion();
    positionScroll();
    clickScroll();
    infoPortafolio();
});

