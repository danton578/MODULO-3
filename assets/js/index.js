/*funcion para buscar el search form  y darle la condicion de activo */
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cartbtn.classList.remove('active'); 
    loginbtn.classList.remove('active');  
    navbar.classList.remove('active');  
}

/*funcion para buscar el carrito de compra  y darle la condicion de activo */
let cartbtn = document.querySelector('.cart-btn');

document.querySelector('#cart-btn').onclick = () =>{
    cartbtn.classList.toggle('active');
    searchForm.classList.remove('active');
    loginbtn.classList.remove('active');  
    navbar.classList.remove('active');   
}

/*funcion para buscar el usuario y darle la condicion de activo */
let loginbtn = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginbtn.classList.toggle('active');
    searchForm.classList.remove('active');
    cartbtn.classList.remove('active');  
    navbar.classList.remove('active');    
}

/*funcion para desplegar el navbar en menu y darle la condicion de activo */
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartbtn.classList.remove('active'); 
    loginbtn.classList.remove('active');  
}

/*funcion para remover menus */
window.onscroll = () =>{
    searchForm.classList.remove('active');
    cartbtn.classList.remove('active'); 
    loginbtn.classList.remove('active');  
    navbar.classList.remove('active');
}

/*funcion swiper para slider */
var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    
    autoplay:{
        delay: 7500,
        disableOnInteraction: false,
    },
    
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});
