/*=================== MENU SHOW Y HIDDEN ======================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*====== MENU SHOW ========*/
/* validata if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () =>{

        navMenu.classList.add('show-menu')
    });
}  

/*====== MENU HIDDEN ========*/
/* validate if constant exists */
if(navClose){
    navClose.addEventListener('click', ()=>{

        navMenu.classList.remove('show-menu');

    });
}
// ====================== Active Nave Link ======================

var btnContainer = document.getElementById("nav-menu");

var Item = btnContainer.getElementsByClassName("nav_link");

var currentLocation = location.href;

for (var i = 0; i < Item.length; i++) {
   if(Item[i].href === currentLocation)
   {
       Item[i].className = "nav_link active";
   }
}


/*==================== Change Background Header=============*/
 function scrollHeader()
 {
     const nav = document.getElementById('header');
     // when the scroll is greater than 200 viewport height , add the scroll- headr class to the header tag
     if(this.scrollY >= 80){
        nav.classList.add('scroll-header');
     } 
     else{
        nav.classList.remove('scroll-header');
     }
 }
 window.addEventListener('scroll', scrollHeader);

 /*================= SHOW SCROLL UP ====================*/
 function scrollUp(){
     const scrollUp =document.getElementById('scroll-up');
     if(this.scrollY >= 560){
         scrollUp.classList.add('show-scroll');
     }
     else{
         scrollUp.classList.remove('show-scroll');
     }
 }
 window.addEventListener('scroll', scrollUp);




 