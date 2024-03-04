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
