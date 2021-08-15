console.log('Hello!')

const btn = document.querySelector('.button_wrap')
const ru_btn = document.querySelector('.ru_btn')
const en_btn = document.querySelector('.en_btn')

const eng_desc =document.querySelector('.eng_desc')
const ru_desc =document.querySelector('.ru_desc')

const list = document.querySelector('.proj_list')

const projList = [
    {title: 'JS Gallery', en_desc: 'Image gallery like Instagram', ru_desc:'Галлерея изображения как в Инстаграмм, пролистывание осуществляется свайпами влево/вправо',
    link:'p5_gallery/index.html',img:'img/Gallery.JPG', gitLink: 'https://github.com/ArturKe/JS-Swipe-Gallery'},
    
    {title: 'Lemon Vibe', en_desc: 'JS game, catch all lemons', ru_desc:'Простая игра, где надо собирать лемоны. Написана на чистом JavaScript',
    link:'LemonVibe/dist/index.html',img:'img/screen_lemon.jpg', gitLink: 'https://github.com/ArturKe/LemonVibe'},
    
    {title: '3D Tour', en_desc: 'Three JS game. Expore 3D world!', ru_desc:'Демонстрация работы виртуальных джойстиков, передвигайтесь в 3D мире используя их. ThreeJS',
    link:'JoyStick/index.html',img:'img/Venus.JPG', gitLink: 'https://github.com/ArturKe/3D-Tour'},
	
    {title: 'Venus 3D', en_desc: 'Sculpture of Venus de Milo. Made by using ThreeJS', ru_desc:'Скульптура Венеры Милосской. Создано с применением библиотеки ThreeJS',
    link:'Venus/dist/index.html',img:'img/Venus.JPG', gitLink: 'https://github.com/ArturKe'},
	
    {title: 'Landing page Uber', en_desc: 'Uber landing page for PC', ru_desc:'Посадочная страница Uber, создана в рамках изучения CSS',
    link:'Proj_4/index.html',img:'img/LandingUber.JPG', gitLink: 'https://github.com/ArturKe'},

    {title: 'Landing page Wordpress', en_desc: 'Wordpress landing page for PC', ru_desc:'Посадочная страница Wordpress, создана в рамках изучения CSS',
     link:'Proj_1/index.html',img:'img/Landing.JPG', gitLink: 'https://github.com/ArturKe'},

     {title: 'WebXR Lessons', en_desc: 'WebXR Lessons', ru_desc:'Уроки по WebXR',
     link:'https://twindl.github.io/',img:'img/Venus.JPG', gitLink: 'https://github.com/ArturKe'},
    
] 

btn.addEventListener('click',function(event){
    // console.log(event.target.classList.value)
    if(event.target.classList.contains('ru_btn')){
        console.log('RU_button')
        eng_desc.classList.add('nonactive_desc')
        ru_desc.classList.remove('nonactive_desc')

        if (!event.target.classList.contains('active_btn')){
            ru_btn.classList.add('active_btn')
            en_btn.classList.remove('active_btn')
            drawList('ru')
        }
    } 

    if(event.target.classList.contains('en_btn')){
        console.log('EN_button')
        ru_desc.classList.add('nonactive_desc')
        eng_desc.classList.remove('nonactive_desc')
        if (!event.target.classList.contains('active_btn')){
            en_btn.classList.add('active_btn')
            ru_btn.classList.remove('active_btn')
            drawList('en')
        }

    } 

    
})

function drawList(language='en'){
    list.innerHTML = ''
    let counter = 0
    

    for(let value of projList){
        counter++
        let lang

        if(language === 'en'){
            lang = value.en_desc
        } else if (language === 'ru'){
            lang = value.ru_desc
        }

        list.innerHTML += `
        <div class="proj_item">
            <div class="item_first_block">
                <a href="${value.link}"> 
                    <div class="item_link"> Project #${counter} </div> 
                </a>
                <a href="${value.gitLink}"> 
                        <div class="item_link_git"> Git Link </div> 
                </a>
            </div>
            <div class="item_second_block"> 
    
                <a href="${value.link}">
                    <div class="item_img" style="background: url(${value.img})  center/cover no-repeat"> </div>
                </a> 
                
                <div class="item_desc">
                    
                    <div>
                    <a href="${value.link}"> 
                        <div class="item_title"> ${value.title} </div> 
                    </a>
                    <div class="item_desc_text">${lang}</div>
                    
                    </div>
                    
                </div>
                
            </div>           
        </div>`
    }

}

drawList()




