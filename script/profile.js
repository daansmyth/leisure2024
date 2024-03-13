const frameAnuncio = document.querySelector('.anuncio');
const btnMeusAnuncios = document.querySelector('.btnMeusAnuncios');
const frameAnunciar = document.querySelector('.anunciar')
const btnAnunciar = document.querySelector('.btnAnunciar');
const notCheckedBox = document.querySelector('#menu');
const frameDados = document.querySelector('.dados');
const btnMeusDados = document.querySelector('.btnMeusDados');



btnMeusAnuncios.addEventListener('click', ()=>{
    notCheckedBox.checked = false;
    if(frameAnuncio.classList.contains('hidden')){
        frameAnunciar.classList.add('hidden');
        frameDados.classList.add('hidden');
        frameAnuncio.classList.remove('hidden');
    }else{
        frameAnuncio.classList.add('hidden');
    }
});
btnAnunciar.addEventListener('click', ()=>{
    notCheckedBox.checked = false;
    if(frameAnunciar.classList.contains('hidden')){
        frameAnuncio.classList.add('hidden');
        frameDados.classList.add('hidden');
        frameAnunciar.classList.remove('hidden');
    }else{
        frameAnunciar.classList.add('hidden');
    }
});
btnMeusDados.addEventListener('click', ()=>{
    notCheckedBox.checked = false;
    if(frameDados.classList.contains('hidden')){
        frameAnuncio.classList.add('hidden');
        frameAnunciar.classList.add('hidden');
        frameDados.classList.remove('hidden');
    }else{
        frameDados.classList.add('hidden');
    }
})

// NOVA FUNCAO DE PROXIMO/ANTERIOR

var barra = document.querySelector('.anunciar__conteudo__progresso-barra')

const listaBtnAnterior = document.querySelectorAll('.anunciar__conteudo__botao-anterior');
const listaBtnProximo = document.querySelectorAll('.anunciar__conteudo__botao-proximo');
const formBox = document.querySelectorAll('.anunciar__conteudo__box');
var progresso = 0;

var i = 0;

listaBtnProximo.forEach(function (botao){
	botao.addEventListener('click', function (){
		const index = Array.from(listaBtnProximo).indexOf(this);
		i = index;
		function proximoForm (){
			formBox[i].style.left = '-450px';
			i = i+1;
			progresso += 30;
			formBox[i].style.left = '40px';
			barra.style.width = `${progresso}px`;

		}
		if(index < formBox.length){
			proximoForm();
		}		
	})
})
listaBtnAnterior.forEach(function (botao){
	botao.addEventListener('click', function (){
		const index = Array.from(listaBtnAnterior).indexOf(this);
		i = index;

		
		function anteriorForm (){
			i =  i-1;
			formBox[i].style.left = '40px';
			i = index;
			formBox[i].style.left = '450px';
			progresso -= 30;
			barra.style.width = `${progresso}px`;
		}
		if(index){
			anteriorForm();
		}
	})
})

// listaBtnProximo.forEach(function (botao){
// 	botao.addEventListener('click', function (){
// 		const index = Array.from(listaBtnProximo).indexOf(this);
// 		// console.log('botao', index);
// 		i = index;
// 		function proximoForm (){
// 			formBox[i].style.left = '-450px';
// 			i = i+1;
// 			progresso += 30;
// 			formBox[i].style.left = '40px';
// 			barra.style.width = `${progresso}px`;

// 		}
// 		if(index < formBox.length){
// 			proximoForm();
// 		}		
// 	})
// })
// listaBtnAnterior.forEach(function (botao){
// 	botao.addEventListener('click', function (){
// 		const index = Array.from(listaBtnAnterior).indexOf(this);
// 		i = index;

		
// 		function anteriorForm (){
// 			i =  i-1;
// 			formBox[i].style.left = '40px';
// 			i = index;
// 			formBox[i].style.left = '450px';
// 			progresso -= 30;
// 			barra.style.width = `${progresso}px`;
// 		}
// 		if(index){
// 			anteriorForm();
// 		}
// 	})
// })