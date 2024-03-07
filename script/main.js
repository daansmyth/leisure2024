const swiper = new Swiper('.swiper', {
	spaceBetween: 20,
 	slidesPerView: 3,
	loop: false,
	pagination: {
	  el: '.swiper-pagination',
	},
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

const swiperDestaques = new Swiper('.swiperDestaques', {
	spaceBetween: 20,
 	slidesPerView: 2,
	loop: true,
	pagination: {
	  el: '.swiper-pagination',
	},
  
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

const cabecalho = document.querySelector('.cabecalho');
cabecalho.innerHTML = `
<div class="cabecalho__container">
	<div class="container_hamburguer">
		<input type="checkbox" id="menu">
		<label for="menu">
			<span class="container__rotulo">
				<i class="fa-light fa-bars fa-2xl"></i>
			</span>
		</label>
		<ul class="lista-menu">
			<li class="lista-menu__item">
				<a class="container__link" href="index.html">Home</a>
			</li>
			<li class="lista-menu__titulo">Categorias<i class="fa-light fa-sm fa-chevron-right"></i></li>
			<li class="lista-menu__item">
				<a class="container__link" href="#">Sobre</a>
			</li>
			<li class="lista-menu__item">
				<a class="container__link" href="#">Serviços</a>
			</li>
			<li class="lista-menu__item">
				<a class="container__link" href="#">Time</a>
			</li>
			<li class="lista-menu__item">
				<a class="container__link" href="premium.html">Premium</a>
			</li>
			<li class="lista-menu__item">
				<a class="container__link" href="#">Anunciar</a>
			</li>
			<li class="lista-menu__item">
				<a class="container__link" href="#">Contatos</a>
			</li>
			<li class="lista-menu__item">
				<a class="container__link" href="duvidas.html">Dúvidas</a>
			</li>
			<li class="lista-menu__item">
				<a class="container__link" href="#">Download<i class="fa-light fa-sm fa-chevron-right"></i></a>
			</li>
		</ul>
	</div>
</div>
<div class="container__pesquisa">
	<input class="container__pesquisa-barra" type="search" name="pesquisa" id="pesquisa" placeholder="Digite sua pesquisa">
</div>
<nav class="cabecalho__navegacao">
	<span class="container__rotulo">
		<i class="fa-light fa-circle-user fa-2xl"></i>
	</span>
</nav>`

const rodape = document.querySelector('.rodape');
rodape.innerHTML = `
<div class="rodape__conteudo">
	<ul class="rodape__conteudo-lista">
		<h3 class="titulo__terciario">Sessões</h3>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Home</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Serviços</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Sobre</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Time</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Dúvidas</a>
		</li>
	</ul>
	<ul class="rodape__conteudo-lista">
		<h3 class="titulo__terciario">Categorias</h3>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Apartamentos</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Casas</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Sitios</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Terrenos</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Corretores</a>
		</li>
	</ul>
	<ul class="rodape__conteudo-lista">
		<h3 class="titulo__terciario">Contato</h3>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">E-mail</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">X</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">instagram</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Facebook</a>
		</li>
		<li class="rodape__conteudo-item">
			<a href="" class="rodape__conteudo-link">Whatsapp</a>
		</li>
	</ul>
</div>
<hr class="rodape__hr"/>
<p class="rodape__conteudo-texto">&copy 2024 DEEM Apps. Development.</p>`

document.body.onload = function menuPerfil(){
	if(window.location.href.endsWith('perfil.html') || window.location.href.endsWith('perfil.html#')){
		cabecalho.innerHTML = `
		<div class="cabecalho__container">
			<div class="container_hamburguer">
				<input type="checkbox" id="menu">
				<label for="menu">
					<span class="container__rotulo">
						<i class="fa-light fa-bars fa-2xl"></i>
					</span>
				</label>
				<ul class="lista-menu">
					<li class="lista-menu__item">
						<a class="container__link" href="index.html">Home</a>
					</li>
					<li class="lista-menu__titulo">Meu perfil</li>
					<li class="lista-menu__item">
						<a class="container__link" href="#">Anunciar</a>
					</li>
					<li class="lista-menu__item">
						<a class="container__link" href="#">Meus Anúncios</a>
					</li>
					<li class="lista-menu__item">
						<a class="container__link" href="#">Meus Dados</a>
					</li>
					<li class="lista-menu__item">
						<a class="container__link" href="#">Sair</a>
					</li>
					<li class="lista-menu__item">
						<a class="container__link" href="#">Download<i class="fa-light fa-sm fa-chevron-right"></i></a>
					</li>
				</ul>
			</div>
		</div>
		<div class="container__pesquisa">
			<input class="container__pesquisa-barra" type="search" name="pesquisa" id="pesquisa" placeholder="Digite sua pesquisa">
		</div>
		<nav class="cabecalho__navegacao">
			<span class="container__rotulo">
				<i class="fa-light fa-circle-user fa-2xl"></i>
			</span>
		</nav>`
	}
}

// NOVA FUNCAO DE PROXIMO/ANTERIOR

const listaBtnAnterior = document.querySelectorAll('.anunciar__conteudo__botao-anterior');
const listaBtnProximo = document.querySelectorAll('.anunciar__conteudo__botao-proximo');
const formBox = document.querySelectorAll('.anunciar__conteudo__box');
// const form1 = document.querySelector('#form1')
// const form2 = document.querySelector('#form2')
var i = 0;


listaBtnProximo.forEach(function (botao){
	botao.addEventListener('click', function (){
		const index = Array.from(listaBtnProximo).indexOf(this);
		console.log('botao', index);
		i = index;
		function proximoForm (){
			formBox[i].style.left = '-450px';
			i = i+1;
			formBox[i].style.left = '40px';
			barra.style.width = '240px';
		}		
		if(index == i){
			proximoForm();
		}
	})
})
listaBtnAnterior.forEach(function (botao){
	botao.addEventListener('click', function (){
		const index = Array.from(listaBtnAnterior).indexOf(this);
		i = index;
		console.log('botao', i);
		
		function anteriorForm (){
			i =  i-1;
			console.log('teste', i);
			formBox[i].style.left = '40px';
			// i = i+1;
			i = index;
			formBox[i].style.left = '450px';
			// form1.style.left = '40px';
			// form2.style.left = '450px';
			barra.style.width = '120px';
		}
		if(index){
			anteriorForm();
		}
	})
})

// var form1 = document.querySelector('#form1')
// var form2 = document.querySelector('#form2')
// var form3 = document.querySelector('#form3')
// var form4 = document.querySelector('#form4')
// var form5 = document.querySelector('#form5')
// var form6 = document.querySelector('#form6')
// var form7 = document.querySelector('#form7')
// var form8 = document.querySelector('#form8')
// var form9 = document.querySelector('#form9')
// var form10 = document.querySelector('#form10')
// var form11 = document.querySelector('#form11')
// var form12 = document.querySelector('#form12')
// var form13 = document.querySelector('#form13')

// var proximo1 = document.querySelector('.proximo1');

// var anterior1 = document.querySelector('.anterior1');
// var proximo2 = document.querySelector('.proximo2');

// var anterior2 = document.querySelector('.anterior2');
// var proximo3 = document.querySelector('.proximo3');

// var anterior3 = document.querySelector('.anterior3');
// var proximo4 = document.querySelector('.proximo4');

// var anterior4 = document.querySelector('.anterior4');
// var proximo5 = document.querySelector('.proximo5');

// var anterior5 = document.querySelector('.anterior5');
// var proximo6 = document.querySelector('.proximo6');

// var anterior6 = document.querySelector('.anterior6');
// var proximo7 = document.querySelector('.proximo7');

// var anterior7 = document.querySelector('.anterior7');
// var proximo8 = document.querySelector('.proximo8');

// var anterior8 = document.querySelector('.anterior8');
// var proximo9 = document.querySelector('.proximo9');

// var anterior9 = document.querySelector('.anterior9');
// var proximo10 = document.querySelector('.proximo10');

// var anterior10 = document.querySelector('.anterior10');
// var proximo11 = document.querySelector('.proximo11');

// var anterior11 = document.querySelector('.anterior11');
// var proximo12 = document.querySelector('.proximo12');

// var anterior12 = document.querySelector('.anterior12');
// var proximo13 = document.querySelector('.proximo13');

var barra = document.querySelector('.anunciar__conteudo__progresso-barra')

// proximo1.onclick = function (){
// 	form1.style.left = '-450px';
// 	form2.style.left = '40px';
// 	// barra.style.width = '240px'
// }


// anterior1.onclick = function (){
// 	form1.style.left = '40px';
// 	form2.style.left = '450px';
// 	barra.style.width = '120px'
// }

// proximo2.onclick = function (){
// 	form2.style.left = '-450px';
// 	form3.style.left = '40px';
	
// }

// anterior2.onclick = function (){
// 	form2.style.left = '40px';
// 	form3.style.left = '450px';
// }


// proximo3.onclick = function (){
// 	form3.style.left = '-450px';
// 	form4.style.left = '40px';
// 	barra.style.width = '240px'
// }

// anterior3.onclick = function (){
// 	form3.style.left = '40px';
// 	form4.style.left = '450px';
// 	barra.style.width = '120px'
// }

// proximo4.onclick = function (){
// 	form4.style.left = '-450px';
// 	form5.style.left = '40px';

// }
// anterior4.onclick = function (){
// 	form4.style.left = '40px';
// 	form5.style.left = '450px';

// }

// proximo5.onclick = function (){
// 	form5.style.left = '-450px';
// 	form6.style.left = '40px';

// }

// anterior5.onclick = function (){
// 	form5.style.left = '40px';
// 	form6.style.left = '450px';

// }

// proximo6.onclick = function (){
// 	form6.style.left = '-450px';
// 	form7.style.left = '40px';

// }

// anterior6.onclick = function (){
// 	form6.style.left = '40px';
// 	form7.style.left = '450px';

// }

// proximo7.onclick = function (){
// 	form7.style.left = '-450px';
// 	form8.style.left = '40px';

// }

// anterior7.onclick = function (){
// 	form7.style.left = '40px';
// 	form8.style.left = '450px';

// }

// proximo8.onclick = function (){
// 	form8.style.left = '-450px';
// 	form9.style.left = '40px';

// }

// anterior8.onclick = function (){
// 	form8.style.left = '40px';
// 	form9.style.left = '450px';

// }

// proximo9.onclick = function (){
// 	form9.style.left = '-450px';
// 	form10.style.left = '40px';

// }

// anterior9.onclick = function (){
// 	form9.style.left = '40px';
// 	form10.style.left = '450px';

// }

// proximo10.onclick = function (){
// 	form10.style.left = '-450px';
// 	form11.style.left = '40px';
// }

// anterior10.onclick = function (){
// 	form10.style.left = '40px';
// 	form11.style.left = '450px';
// }

// proximo11.onclick = function (){
// 	form11.style.left = '-450px';
// 	form12.style.left = '40px';
// 	barra.style.width = '360px'
// }

// anterior11.onclick = function (){
// 	form11.style.left = '40px';
// 	form12.style.left = '450px';
// 	barra.style.width = '240px'
// }