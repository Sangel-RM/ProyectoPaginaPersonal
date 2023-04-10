const TankhValorate = document.querySelector('.TankhValorate');
const ValorateProduct = document.querySelector('.ValorateProduct');
const primaryButton = document.querySelector('.primaryButton');
const star1 = document.querySelector('.valor1');
const star2 = document.querySelector('.valor2');
const star3 = document.querySelector('.valor3');
const star4 = document.querySelector('.valor4');
const star5 = document.querySelector('.valor5');
const numberStar = document.querySelector('.numberStar');
primaryButton.addEventListener('click', valorStar);
star1.addEventListener('click', star1_F);
star2.addEventListener('click', star2_F);
star3.addEventListener('click', star3_F);
star4.addEventListener('click', star4_F);
star5.addEventListener('click', star5_F);
let valor;
// para mañana papi soluciona el problema con las clases de para cambiar el 
// background de las star
function star1_F(){
    star1.className += " activeStar";
    valor = 1;
}
function star2_F(){
    star2.className += " activeStar";
    valor = 2;
}
function star3_F(){
    star3.className += " activeStar";
    valor = 3;
}
function star4_F(){
    star4.className += " activeStar";
    valor = 4;
}
function star5_F(){
    star5.className += " activeStar";
    valor = 5;
}
function valorStar(){ 

}