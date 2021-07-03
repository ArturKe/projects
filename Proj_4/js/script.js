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

//-------------------------------------------------------------------PopUp
const popupBtnCls = document.querySelector('.popup__close')
document.querySelector('.subheader_button').addEventListener("click",openPopup);
document.querySelector('.promo_button').addEventListener("click",openPopup);
document.querySelector('.popup__back').addEventListener("click",closePopup);

popupBtnCls.addEventListener('click',(e)=>{
  console.log('PopUp');
  e.preventDefault();
  closePopup();
})

function closePopup (){
  document.querySelector('.popup').classList.remove('popup_open');
  document.body.style.overflow=""
}

function openPopup (){
  document.querySelector('.popup').classList.add('popup_open'); 
  document.body.style.overflow="hidden";
}
