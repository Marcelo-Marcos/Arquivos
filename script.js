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

function abrirPagina (Valor) {
    let link = document.getElementById('paginaPrincipal');
    let formulario = document.querySelector('.formularios');
    formulario.style.display = "flex";

    if (Valor === 1) {
        link.src = "https://docs.google.com/forms/d/1aTdBbv2l8ZMT3B1PiIkJevYe_qB41_HtbqSHEewMw9o/viewform";
    } else if (Valor === 2) {
        link.src = "https://docs.google.com/forms/d/1cQ0D1ZvDEv0wTZUJAw_INdFhEVCnj04Lf_WO0L6RGkQ/viewform";
    } else if (Valor === 3) {
        link.src = "https://docs.google.com/forms/d/1bvhHmg4IpnRgIXZDSQ9DE2NLpMZTLhlOH-zCjk0stOY/viewform";
    } else if (Valor === 4) {
        link.src = "https://docs.google.com/forms/d/11E1aRR36XpDFgbAuQW66pLqkXctZ2E3H3bbJv9KusGA/viewform";
    }
}

    let btLink = document.getElementById("btLink");
        btLink.addEventListener("click", function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            abrirPagina(1);
        });

    let btLink2 = document.getElementById("btLink2");
    btLink2.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        abrirPagina(2);
    });

    let btLink3 = document.getElementById("btLink3");
    btLink3.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        abrirPagina(3);
    });

    let btLink4 = document.getElementById("btLink4");
    btLink4.addEventListener("click", function(event) {
        event.preventDefault(); // Evita o comportamento padrão do link
        abrirPagina(4);
    });
    
