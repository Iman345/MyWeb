const menuOpen=()=>{
    const menubtn=document.querySelector('.mobile-menu');
    const menulinks= document.querySelector('.links');
menubtn.addEventListener('click',()=>{

    menulinks.classList.toggle('nav-active');

});



}
menuOpen();