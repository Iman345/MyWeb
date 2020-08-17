const menuOpen=()=>{
    const menubtn=document.querySelector('.mobile-menu');
    const menulinks= document.querySelector('.links');
    const menuitems=document.querySelectorAll('.links li');
menubtn.addEventListener('click',()=>{

    menulinks.classList.toggle('nav-active');

});

menuitems.forEach((link, index)=> {
    link.style.animation= `linksFade 0.5s ease forwards ${index/7}s` 


});

}
menuOpen();
document.getElementById('backButton').addEventListener('click', () => {
    history.back();
  });
  
  
  Topbutton = document.getElementById("Topbtn");
  
  
  window.onscroll = function() {scrollupFunction()};
  
  function scrollupFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      Topbutton.style.display = "block";
    } else {
      Topbutton.style.display = "none";
    }
  }
  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
  