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


