const buttons = document.querySelectorAll('.navegacion ul li');
const dropbtn_Create = document.querySelector("#dropbtn_Create");

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    buttons.forEach(function(btn) {
      btn.classList.remove('buttonColor');
      dropbtn_Create.classList.remove('buttonColor');
    });
    button.classList.toggle('buttonColor', onclick);
  });
});

dropbtn_Create.addEventListener('click', function(){
  buttons.forEach(function(btn) {
  btn.classList.remove('buttonColor');
  });
  dropbtn_Create.classList.toggle('buttonColor');
})

const header= document.querySelector(".header");
const li= document.querySelectorAll(".li");
const drop= document.querySelectorAll(".dropbtn")
window.addEventListener("scroll", function(){
    header.classList.toggle('active', window.scrollY >0)
    if(header.classList.toggle('active', window.scrollY >0)){
      drop[0].style.color= "white"; drop[1].style.color= "white";
    }else{
      drop[0].style.color= "initial"; 
      drop[1].style.color= "initial"; 
    }
})

function mostrar1() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function mostrar2(){
  document.getElementById("options").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const home = document.querySelector(".navegacion");
const create = document.querySelector(".create");
var nav = document.querySelector("nav");
var footer= document.querySelector("footer");
function ajustarNavegacion() {
  const width = window.innerWidth;
  if (width <= 1100) {
    footer.style.display="initial";
    header.style.display="none";
    home.style.display= "none";
    create.style.display="none";
  } else {
    footer.style.display="none"
    header.style.display="initial"
    home.style.display="initial";
    create.style.display="initial";
  }
}

window.addEventListener('resize', ajustarNavegacion);
ajustarNavegacion();

function randomImg(){
  var alto = Math.floor(Math.random() * 272) + 200;
  return 'https://picsum.photos/200/' + alto;
}

window.onload = function() {
  const boxPinterest= document.querySelector(".img-random"); 
  
  for(var i=0; i<=35; i++){

    "Aquí se encuentra todo el código de la generación de las imagenes"

    const repeatCode='<div class="card-image"><div class="button-save"><button class="rounded-pill">Save</button></div><div class="button-container"><button class="rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-arrow-up-right" viewBox="0 0 16 16" style="margin-right: 6px;"><path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"/></svg>imagenpng</button><button class="upload rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16" style="margin-top: 5px;"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/></svg></button><button class="dots rounded-pill"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16"><path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg></button></div><img src="'+ randomImg() +'"alt="" class="random"></div>';
    boxPinterest.innerHTML += repeatCode;
  }
}
