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

    switch (Valor) {
       /* case 4:
            link.src = "https://docs.google.com/forms/d/1aTdBbv2l8ZMT3B1PiIkJevYe_qB41_HtbqSHEewMw9o/viewform";
        break;*/
        case 4:
            link.src = "https://drive.google.com/file/d/1QIEE-N4LRsO_DR9upue0t012udM7HRtH/view";
        break;
        case 5:
            link.src = "https://docs.google.com/forms/d/1cQ0D1ZvDEv0wTZUJAw_INdFhEVCnj04Lf_WO0L6RGkQ/viewform";
        break;
        case 6:      
            link.src = "https://docs.google.com/forms/d/1bvhHmg4IpnRgIXZDSQ9DE2NLpMZTLhlOH-zCjk0stOY/viewform";
        break;
        case 7:      
            link.src = "https://docs.google.com/forms/d/11E1aRR36XpDFgbAuQW66pLqkXctZ2E3H3bbJv9KusGA/viewform";
        break;
        default:
            alert('Página não encontrada');
        break;
    }
}

const btLink = document.querySelectorAll('.navegador');  // Seleciona todos os elementos <a> com a classe 'navegador'

btLink.forEach((link, index) => {  // Itera sobre todos os links
  link.addEventListener('click', event => {  // Adiciona o ouvinte de evento para o clique
    const valorDoLink = index;  // Obtém o índice do link clicado
    event.preventDefault();  // Impede que o link siga seu comportamento padrão (navegação)
    abrirPagina(valorDoLink);  // Chama a função para abrir a página, passando o índice
  });
});
