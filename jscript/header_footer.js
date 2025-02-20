const body = document.querySelector("body");

/*Cria o HEADER*/
const header = document.createElement("header");
header.innerHTML = `
  <a href="index.html"><img src="img/mogmog_logo-removebg-preview.png" align="left" width="64" id="logo"></a>
  <nav class="menu">
    <ul class="item-menu">
      <li><a href="index.html">In&iacute;cio</a></li>
      <li><a href="./pag_marcia/sobrenos.html">Sobre n&oacute;s</a></li>
      <li><a href="faleconosco.html">Fale conosco</a></li>
      <li><a href="formulario.html">Cadrastre-se</a></li>
      <li><a href="carrinho.html"><img src="img/compras-online.png" width="32" align="right"></a></li>
      <li><a href="formulario.html"><img src="img/do-utilizador.png" width="32" align="right"></a></li>
    </ul>
  </nav>
  <img src="img/cardapio.png" width="32" align="right" id="cardapio">
  `;

  /* Insere o script para o MENU MOBILE */
const menuMobile = document.createElement("script");
menuMobile.src = "jscript/mobilemenu.js";
menuMobile.setAttribute('defer','');

/* Cria o FOOTER */
const footer = document.createElement("footer");
footer.innerHTML = `
        <a href="https://wa.me/5500000000000?text=Oi,%20gostaria%20de%20trocar%20uma%20ideia." target="_blank"><img src="img/whatsapp.png" width="64" class="whatsapp"></a>
        <span class="copy">&copy 2024 - Projeto Integrador</span>
        <nav>
            <a href="#"><img src="img/instagram.png" width="32" align="left"></a>
            <a href="#"><img src="img/youtube.png" width="32" align="left"></a>
            <a href="#"><img src="img/tiktok.png" width="32" align="left"></a>
        </nav>
`;

body.insertAdjacentElement("afterbegin",header);
body.appendChild(menuMobile);    
body.insertAdjacentElement("beforeend",footer);