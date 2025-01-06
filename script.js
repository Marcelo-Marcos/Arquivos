function validar () {
    let link2 = document.getElementById('menu-marcador2');
    let menu2 = document.getElementById('menu-2');
    let link1 = document.getElementById('menu-marcador');
    let menu1 = document.getElementById('menu-1');

    if (link1.checked) {
        console.log('True');
        menu1.style.display = 'block';

            link2.checked = false;
            menu2.style.display = 'none';
    } else {
        console.log('false');
        menu1.style.display = 'none';
    }
}

function validar2 () {
    let link2 = document.getElementById('menu-marcador2');
    let menu2 = document.getElementById('menu-2');
    let link1 = document.getElementById('menu-marcador');
    let menu1 = document.getElementById('menu-1');

    if (link2.checked) {
        console.log('True');
        menu2.style.display = 'block';

            link1.checked = false;
            menu1.style.display = 'none';
    } else {
        menu2.style.display = 'none';
    }
}
