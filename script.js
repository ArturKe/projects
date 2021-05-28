console.log('Hello!')

const btn = document.querySelector('.button_wrap')
const ru_btn = document.querySelector('.ru_btn')
const en_btn = document.querySelector('.en_btn')

const eng_desc =document.querySelector('.eng_desc')
const ru_desc =document.querySelector('.ru_desc')

btn.addEventListener('click',function(event){
    // console.log(event.target.classList.value)
    if(event.target.classList.contains('ru_btn')){
        console.log('RU_button')
        eng_desc.classList.add('nonactive_desc')
        ru_desc.classList.remove('nonactive_desc')

        if (!event.target.classList.contains('active_btn')){
            ru_btn.classList.add('active_btn')
            en_btn.classList.remove('active_btn')
        }
    } 

    if(event.target.classList.contains('en_btn')){
        console.log('EN_button')
        ru_desc.classList.add('nonactive_desc')
        eng_desc.classList.remove('nonactive_desc')
        if (!event.target.classList.contains('active_btn')){
            en_btn.classList.add('active_btn')
            ru_btn.classList.remove('active_btn')
        }

    } 

    
})