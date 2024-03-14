
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

const btnSubmenuIndex = document.querySelector('.btn-submenu');
const btnSubmenuDownload = document.querySelector('.btn-download');
const btnListaCategoria = document.querySelector('.lista-menu__sublista-categoria');
const btnListaDownload = document.querySelector('.lista-menu__sublista-download');
const btnArrowReplaceCategoria = document.querySelector('.arrow-replace-categoria');
const btnArrowReplaceDownload = document.querySelector('.arrow-replace-download');
const btnLoginCadastro = document.querySelector('.container__usuario');

btnLoginCadastro.addEventListener('click', () =>{

})

btnSubmenuIndex.addEventListener('click', () => {
	btnListaCategoria.classList.toggle('hidden');
	btnArrowReplaceCategoria.classList.toggle('fa-chevron-right');
	btnArrowReplaceCategoria.classList.toggle('fa-chevron-down');
})
btnSubmenuDownload.addEventListener('click', () => {
	btnListaDownload.classList.toggle('hidden');
	btnArrowReplaceDownload.classList.toggle('fa-chevron-right');
	btnArrowReplaceDownload.classList.toggle('fa-chevron-down');
})

// const conteudoModal = document.querySelector('.modal-content');
const modalCadastrar = document.querySelector('.modal-cadastrar');
const modalLogin = document.querySelector('.modal-login');
const btnLogin = document.querySelector('.btn-login');
const btnCadastrar = document.querySelector('.btn-cadastrar');

btnLogin.addEventListener('click', () =>{
	modalCadastrar.classList.toggle('hidden')
	modalLogin.classList.toggle('hidden')
})
btnCadastrar.addEventListener('click', () =>{
	modalCadastrar.classList.toggle('hidden')
	modalLogin.classList.toggle('hidden')
})
