console.log('Hello!')

const btn = document.querySelector('.button_wrap')
const ru_btn = document.querySelector('.ru_btn')
const en_btn = document.querySelector('.en_btn')

btn.addEventListener('click',function(event){
    // console.log(event.target.classList.value)
    if(event.target.classList.contains('ru_btn')){
        console.log('RU_button')
        if (!event.target.classList.contains('active_btn')){
            ru_btn.classList.add('active_btn')
            en_btn.classList.remove('active_btn')
        }
    } 

    if(event.target.classList.contains('en_btn')){
        console.log('EN_button')
        if (!event.target.classList.contains('active_btn')){
            en_btn.classList.add('active_btn')
            ru_btn.classList.remove('active_btn')
        }

    } 

    
})