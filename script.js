console.log('Hello!')

const btn = document.querySelector('.button_wrap')
const ru_btn = document.querySelector('.ru_btn')
const en_btn = document.querySelector('.en_btn')

const eng_desc =document.querySelector('.eng_desc')
const ru_desc =document.querySelector('.ru_desc')

const list = document.querySelector('.proj_list')

const projList = [
    {title: 'Venus 3D', 
        en_desc: '3D viewer shows the sculpture of Venus de Milo. Made by using ThreeJS, TypeScript', 
        ru_desc:'Скульптура Венеры Милосской. Создано с применением библиотеки ThreeJS, TypeScript',
        link:'venus-new/index.html',
        img:'img/Venus.JPG', 
        gitLink: 'https://github.com/ArturKe/venus-scene'
    },

    {title: 'JS Gallery', en_desc: 'Image gallery looks like Instagram frames. Customizable size of images and other parameters', ru_desc:'Галлерея изображения как в Инстаграмм, пролистывание осуществляется свайпами влево/вправо',
    link:'p5_gallery/index.html',img:'img/Gallery.JPG', gitLink: 'https://github.com/ArturKe/JS-Swipe-Gallery'},
    
    {title: 'Lemon Vibe', en_desc: 'Simmple game on Vanila JS, catch all lemons', ru_desc:'Простая игра, где надо собирать лемоны. Написана на чистом JavaScript',
    link:'LemonVibe/dist/index.html',img:'img/screen_lemon.jpg', gitLink: 'https://github.com/ArturKe/LemonVibe'},
    
    {title: 'UFO 3D Game', en_desc: 'Three JS game. Expore 3D world on UFO plate!', ru_desc:'Демонстрация работы виртуальных джойстиков, летайте на НЛО в 3D мире используя их. ThreeJS',
    link:'JoyStick/index.html',img:'img/ufo.jpg', gitLink: 'https://github.com/ArturKe/ufo-game'},

    {title: 'Web VR', en_desc: 'VR Template demonstration scene, motion controllers using, best experience in Oculus Quest2', ru_desc:'Демонстрационная сцена Web XR',
    link:'Aurus/index.html',img:'img/vue-logo-small.png', gitLink: 'https://github.com/ArturKe/'},

    {title: 'Three Test', en_desc: 'Three Js stress test, using LOD', ru_desc:'Three JS',
    link:'three/index.html',img:'img/Venus.JPG', gitLink: 'https://github.com/ArturKe'},

    {title: 'Cutom list', en_desc: 'Custom list on VUE JS', ru_desc:'Настраиваемые связанные списки',
    link:'Custom_list/index.html',img:'img/vue-logo-small.png', gitLink: 'https://github.com/ArturKe/'},

    {title: 'Vue test project', en_desc: 'Simple Blog with some features on Vue JS', ru_desc:'Тестовый проект на Vue JS, реализован блог с возможностью добавления, удаления постов.',
    link:'https://vue-blogster.web.app/',img:'img/vue-logo-small.png', gitLink: 'https://github.com/ArturKe/vue_simple_blog'},

    {title: 'Book store', en_desc: 'Book Store on React JS', ru_desc:'Реализация книжного магазина на React JS',
    link:'https://library-crm.firebaseapp.com/',img:'img/book-2.png', gitLink: 'https://github.com/ArturKe/book-store'},

    {title: 'Landing page Uber', en_desc: 'Uber landing page for PC', ru_desc:'Посадочная страница Uber, создана в рамках изучения CSS',
    link:'Proj_4/index.html',img:'img/LandingUber.JPG', gitLink: 'https://github.com/ArturKe'},

    {title: 'Landing page Wordpress', en_desc: 'Wordpress landing page for PC', ru_desc:'Посадочная страница Wordpress, создана в рамках изучения CSS',
     link:'Proj_1/index.html',img:'img/Landing.JPG', gitLink: 'https://github.com/ArturKe'},

    {title: 'WebXR Lessons', en_desc: 'WebXR Lessons', ru_desc:'Уроки по WebXR',
    link:'https://twindl.github.io/',img:'img/Venus.JPG', gitLink: 'https://github.com/ArturKe'}

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
                    
                    <div class="item_desc-buttons">
                        <a href="${value.link}"> 
                            <div class="item_link_git"> Demo </div> 
                        </a>
                        <a href="${value.gitLink}"> 
                            <div class="item_link_git"> Git Link </div> 
                        </a>
                    </div>

                </div>
                
            </div>           
        </div>`
    }

}

drawList()




