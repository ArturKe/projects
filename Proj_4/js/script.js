burger = document.querySelector('.burger')
menu = document.querySelector('.menu')

console.log(burger);
burger.addEventListener('click',(e)=>{
    console.log()
    if (e.target.classList.contains('burger') || e.target.classList.contains('burger__item')){
        console.log('Yes')
        console.log(menu)
        if(menu.classList.contains('active')){
            menu.style.left = '100%'
            setTimeout(()=>{menu.classList.remove('active')},500);
            setTimeout(()=>{menu.style.left = ''},500);
            document.body.style.overflow=''
        } else{
            menu.classList.add('active');
            menu.style.left = '100%'
            document.body.style.overflow='hidden';
            setTimeout(()=>{menu.style.left = '0'},20);
        }

        // burger.classList.add ('hide')
    } else{
        console.log('No00000')
    }
})

// if(menu.style.left === '100%'){
//     menu.style.left='0'
//     document.body.style.overflow='hidden'
// } else{
//     menu.style.left='100%';
//     document.body.style.overflow=''

// }
