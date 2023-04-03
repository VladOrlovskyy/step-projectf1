

const menu = document.querySelector('.header_menu');
const menuButton = document.querySelector('.header_menu_button');
const menuIcon = document.querySelector('#open_icon');

        function changeIconToClose() {

            if (menuIcon.src === "https://github.com/VladOrlovskyy/step-projectf.git/section/images/header/menu-icon.png") {
                menuIcon.src = "https://github.com/VladOrlovskyy/step-projectf.git/section/images/header/close-icon.png";
                console.log(menuIcon.src)

            }
        }


        menuButton.addEventListener('click', function(event) {

            if (!menu.classList.contains('header_menu_hidden')) {

                menu.classList.toggle('header_menu_hidden');
                changeIconToBurger();

            }
            else {

                menu.classList.toggle('header_menu_hidden');
                changeIconToClose();

            }
        })

        document.addEventListener('click', function(event) {

            if (event.target.className !== 'header_menu_section' && event.target.className !== 'header_menu_button' && event.target.className !== 'header_menu_icon') {
                menu.classList.add('header_menu_hidden');
                changeIconToBurger();

            }
        })


                function changeIconToBurger() {
                    if (menuIcon.src === "https://github.com/VladOrlovskyy/step-projectf.git/section/images/header/close-icon.png") {
                        menuIcon.src = "https://github.com/VladOrlovskyy/step-projectf.git/section/images/header/menu-icon.png";
                        console.log(menuIcon.src)
                    }
                }