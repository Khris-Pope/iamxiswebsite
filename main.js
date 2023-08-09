function whatsapp(){
   var product = document.getElementById("product").value;
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var phone = document.getElementById("phone").value;
   var message = document.getElementById("message").value;

   var url = "https://wa.me/2347080054074?text="
   +"*Product :* "+product+"%0a"
   +"*Name :* "+name+"%0a"
   +"*Email :* "+email+"%0a"
   +"*Phone :* "+phone+"%0a"
   +"*Message :* "+message;

   window.open(url, '_parent');
   window.focus();


}

/* ACCORDION */
var acc =document.getElementsByClassName("legalaccordion");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function (){
      this.classList.toggle("opened");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
         panel.style.maxHeight = null;
      } else{
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}

var acc =document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function (){
      this.classList.toggle("opened");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
         panel.style.maxHeight = null;
      } else{
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}

var acc =document.getElementsByClassName("footer-accordion");
var i;

for (i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function (){
      this.classList.toggle("opened");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
         panel.style.maxHeight = null;
      } else{
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}

const fullpageEl = document.getElementById('fullpage')
const menuBtn = document.querySelector('.menu__btn')
const navigation = document.querySelector('.navigation')
const navCloseBtn = document.querySelector('.navigation__close__btn')

const blurOverlay = document.querySelector('.blur__overlay')

const IS_ACTIVE = 'is--active'

const toggleNavigation = () => {
	navigation.classList.toggle(IS_ACTIVE)
	blurOverlay.classList.toggle(IS_ACTIVE)
	fullpageEl.classList.toggle('no-scroll')
}

const CLICK = 'click'

menuBtn.addEventListener(CLICK, toggleNavigation)
navCloseBtn.addEventListener(CLICK, toggleNavigation)
blurOverlay.addEventListener(CLICK, toggleNavigation)

new fullpage('#fullpage', {
	autoScrolling: true,
	scrollBar: true,
})