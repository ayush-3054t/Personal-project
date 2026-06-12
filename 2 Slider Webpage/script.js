let items=document.querySelectorAll('.slider .list .item');
let prev = document.getElementById('prev');
let next = document.getElementById('next');
let thumbnail = document.querySelectorAll('.thumbnail .item');

let countItem=items.length;
let activeItem=0;

next.onclick = function(){
    activeItem = activeItem +1;
    
    if(activeItem==countItem){
        activeItem = 0;
    }
    showSlider();
}
prev.onclick = function(){
    activeItem=activeItem-1;
    if(activeItem<0){
        activeItem=countItem-1;
    }
    showSlider();
}
let refresh=setInterval(()=>{
    next.click();
},5000);
function showSlider(){
    let activeItemOld = document.querySelector('.slider .list .item.active');
    let activeThumbnailOld = document.querySelector('.thumbnail .item.active');
    activeItemOld.classList.remove('active');
    activeThumbnailOld.classList.remove('active');

    items[activeItem].classList.add('active');
    thumbnail[activeItem].classList.add('active');

    clearInterval(refresh);
    refresh=setInterval(()=>{
        next.click();
    },5000);
}

thumbnail.forEach((xyz,index) => {
    xyz.addEventListener('click' , () =>{
        activeItem=index;
        showSlider();
    })
});