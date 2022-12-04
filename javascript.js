
var navbar_highlight = document.getElementById("navbar_highlight");
var homevar = document.getElementById("home");
homevar.style.color="#198754";
var aboutvar = document.getElementById("about");
var resumevar = document.getElementById("resume");
var portfoliovar = document.getElementById("portfolio");
var contactvar = document.getElementById("contact");
var bottomlinevar = document.getElementById("navbar_links_bottonm_line");
bottomlinevar.style.marginLeft="35px";
  
window.addEventListener("scroll", function(){  
  if (this.window.scrollY > 0) {
    navbar_highlight.style.backgroundColor="#161616"
    navbar_highlight.style.boxShadow="0px 0px 10px 0px black"
    navbar_highlight.style.transition="300ms"
  }
  else{
    navbar_highlight.style.backgroundColor=""
    navbar_highlight.style.boxShadow=""
  }
  if (this.window.scrollY >= 0 && this.window.scrollY < 560) {
    homevar.style.color="#198754";
    bottomlinevar.style.marginLeft="35px";
  } 
  else{
    homevar.style.color="white"
  }
  if (this.window.scrollY > 560 && this.window.scrollY < 1580) {
    aboutvar.style.color="#198754";
    bottomlinevar.style.marginLeft="130px";
  }
  else{
    aboutvar.style.color="white"
  }
  if (this.window.scrollY > 1580 && this.window.scrollY < 2300) {
    resumevar.style.color="#198754";
    bottomlinevar.style.marginLeft="230px";
  }
  else{
    resumevar.style.color="white"
  }
  if (this.window.scrollY > 2300 && this.window.scrollY < 3400) {
    portfoliovar.style.color="#198754";
    bottomlinevar.style.marginLeft="340px";
  }
  else{
    portfoliovar.style.color="white"
  }
  if (this.window.scrollY > 3400) {
    contactvar.style.color="#198754";
    bottomlinevar.style.marginLeft="450px";
  }
  else{
    contactvar.style.color="white"
  }
  })

 
  var toggle_div = document.getElementById('toggle_links_div_id');
  var toggle_open = document.getElementById('open_toggle_id');
  var toggle_close = document.getElementById('close_toggle_id');

 function opentoggle(){
   toggle_div.style.display="block";
   toggle_open.style.display="none";
   toggle_close.style.display="block";
  }

 function closetoggle(){
   toggle_div.style.display="none";
   toggle_open.style.display="block";
   toggle_close.style.display="none";
  }

  function togglelinksfun(){
    toggle_div.style.display="none";
    toggle_open.style.display="block";
    toggle_close.style.display="none";
  }



// porfoilio sectio start
  var all = document.getElementById('all');
  var landingpage = document.getElementById('landingpage');
  var ecomerced = document.getElementById('ecommerce');
  var angular = document.getElementById('angular');

  var allrow = document.getElementById('allrow');
  var landingpagerow = document.getElementById('landingpagerow');
  var ecommercerow = document.getElementById('ecommercerow');
  var angularrow = document.getElementById('angularrow');

  function allfun() {
    all.style.color ="#198754";
    landingpage.style.color ="";
    ecomerced.style.color ="";
    angular.style.color ="";
    allrow.style.display ="block";
    landingpagerow.style.display ="none";
    ecommercerow.style.display ="none";
    angularrow.style.display ="none";
  }
  function landingpagefun() {
    all.style.color ="";
    landingpage.style.color ="#198754";
    ecomerced.style.color ="";
    angular.style.color ="";
    allrow.style.display ="none";
    landingpagerow.style.display ="block";
    ecommercerow.style.display ="none";
    angularrow.style.display ="none";
  }
  function ecommercefun() {
    all.style.color ="";
    landingpage.style.color ="";
    ecomerced.style.color ="#198754";
    angular.style.color ="";
    allrow.style.display ="none";
    landingpagerow.style.display ="none";
    ecommercerow.style.display ="block";
    angularrow.style.display ="none";
  }
  function angularfun() {
    all.style.color ="";
    landingpage.style.color ="";
    ecomerced.style.color ="";
    angular.style.color ="#198754";
    allrow.style.display ="none";
    landingpagerow.style.display ="none";
    ecommercerow.style.display ="none";
    angularrow.style.display ="block";
  }

  function linkunable(){
    alert('link is not available')
  }
// porfoilio section end


// contact section start
function submite(){
  var name = document.getElementById('name');
  var email = document.getElementById('email');
  var subject = document.getElementById('subject');
  var message = document.getElementById('message');
  var name_error = document.getElementById('name_error');
  var email_error = document.getElementById('email_error');
  var subject_error = document.getElementById('subject_error');
  var message_error = document.getElementById('message_error');

  if(name.value == ""){
    name_error.style.display="block"
  }
  else if(email.value == ""){
    email_error.style.display="block"
  }
  else if(subject.value == ""){
    subject_error.style.display="block"
  }
  else if(message.value == ""){
    message_error.style.display="block"
  }
  else{
    name_error.style.display="none"
    email_error.style.display="none"
    subject_error.style.display="none"
    message_error.style.display="none"
    name.value ="";
    email.value ="";
    subject.value ="";
    message.value ="";
    alert('submitted successfully')
  }
}
// contact section end

