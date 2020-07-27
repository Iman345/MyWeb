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