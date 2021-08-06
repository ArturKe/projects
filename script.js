console.log('Hello!')

const btn = document.querySelector('.button_wrap')
const ru_btn = document.querySelector('.ru_btn')
const en_btn = document.querySelector('.en_btn')

const eng_desc =document.querySelector('.eng_desc')
const ru_desc =document.querySelector('.ru_desc')

const list = document.querySelector('.proj_list')

const projList = [
    {title: 'JS Gallery', desc: 'Image gallery like Instagram', link:'p5_gallery/index.html',img:'img/Gallery.JPG'},
    {title: 'LemonVibe', desc: 'JS game, catch all lemons', link:'LemonVibe/dist/index.html',img:'img/screen_lemon.jpg'},
    {title: '3D Tour', desc: 'Three JS game. Expore 3D world!', link:'JoyStick/index.html',img:'img/Venus.JPG'},
	{title: 'Venus 3D', desc: 'Sculpture of Venus de Milo. Made by using ThreeJS', link:'Venus/dist/index.html',img:'img/Venus.JPG'},
	{title: 'Landing page Uber', desc: 'Uber landing page for PC', link:'Proj_4/index.html',img:'img/LandingUber.JPG'},
    {title: 'Landing page Wordpress', desc: 'Wordpress landing page for PC', link:'Proj_1/index.html',img:'img/Landing.JPG'},
    
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


list.innerHTML = ''


for(let value of projList){
	console.log(`Title: ${value.title} and Desc:${value.desc}`)
}


for(let value of projList){
list.innerHTML += `<div class="proj_item">
                    <div>
                        <a href="${value.link}">
                            <div class="item_img" style="background: url(${value.img})  top/cover no-repeat"> </div>
                        </a>
                    </div>
                    <div class="item_second_block">   
                        <a href="${value.link}"> 
                            <div class="item_link"> ${value.title} </div> 
                        </a>
                        

                        <div class="item_desc">${value.desc}</div>
                        <a href="https://github.com/ArturKe/"> 
                            <div class="item_link_git"> Git Link </div> 
                        </a>
                    </div>           
                </div>`
}

