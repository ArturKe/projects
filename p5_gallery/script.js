//--------------------------TapGallery----

const glrImg =[
    {link:'./img/g4haiwkwu7jqrhh65c804phjt-q.jpeg' },
    {link:'./img/mothman-frank-frazetta.jpg' },
    {link:'./img/The-Art-of-Frank-Frazetta-9.jpeg' }
  ]
  let curentStep = 0
  
  
  const glr = document.querySelector('.gallery__item')
  const counter = document.querySelector('.gallery__counter')
  glr.addEventListener('click', glrAction)
  glrImgRender()
  // glrCounter()
  glrCheckLength()
  glrCheckUpdate()
  
  
  function glrAction (e){
    // console.log(e.target)
    // console.log(e.target.classList.value)
    // console.log(e)
    if (e.target.classList.contains('item__right')){
      glrForward()
    } else if (e.target.classList.contains('item__left')){
      glrBackward()
    }
  }  // Обрабатывает события, вызывает обновление кадра в зависимости от направления
  
  function glrForward(){
    if (curentStep >= (glrImg.length-1)){
      curentStep = 0
    } else { 
      curentStep++
    } 
    
    glrImgRender()
    // glrCounter()
    glrCheckUpdate()
  } //Обрабатывае событие вперед
  
  function glrBackward(){
    if (curentStep == 0){
      curentStep = glrImg.length-1
    } else { 
      curentStep--
      }
    
    glrImgRender()
    // glrCounter()
    glrCheckUpdate()
  } //Обрабатывае событие назад
  
  function glrImgRender(){
    glr.style.background = `url('${glrImg[curentStep].link}') center/cover no-repeat`
  } //Обновляет изображение
  
  function glrCounter(){
    counter.innerHTML =`<div class="gallery__style"> ${curentStep+1} из ${glrImg.length} </div>`
  } //Обрабатывае значение счетчика
  
  function glrCheckLength(){
    if(glrImg.length <= 5){
      for(let i=0; i < glrImg.length; i++){
        counter.innerHTML +=`<div class="gallery__dots"></div>`
  
      }
    } else {
        glrCounter()
      }
  
    } // Проверяет длинну массива изображений, если меньше 5 отрисовывает точки, если больше цифровой счетчик
  
    function glrCheckUpdate(){
      if(glrImg.length <= 5){
        glrDotsUpdate()
      } else {
        glrCounter()
      }
    }  //Проверяет длинну массива изображений в зависимости от нее вызывает апдейт Счетчика или Дотера
  
    function glrDotsUpdate() {
      console.log('DotsUpdate')
      const allDots = counter.querySelectorAll('.gallery__dots')
      allDots.forEach((dot)=>{
        dot.style.background = "grey"
        dot.style.transform = "scale(1)"
      
      }) // Сбрасывает стили у всех точек
      
      allDots[curentStep].style.background = "red"
      allDots[curentStep].style.transform = "scale(1.5)"
    } // Берёт все точки и обновляет цвет и размер в соответствии с текущим номером изображения


//-----------------------------Listener---DragbleCube

const lis = document.querySelector('.listener__block')
let triger = false
let offset = 0
const moveBox = document.querySelector('.listener__box')

lis.addEventListener("mousemove",(e)=>{
  // console.log('Down')
  document.querySelector('.listener_info').innerHTML =`<div>X: ${e.x}  Y:${e.y}</div>
  <div>X: ${e.layerX}  Y:${e.layerY}</div>
  <div>X: ${e.movementX}  Y:${e.movementY}</div>`
  // lis.addEventListener("mousemove",(e)=>{
  //   console.log('Moviing')})
 
   
  if (triger && e.x >= 200 && e.x <=500){
    console.log(triger)
    console.log(offset)
     lis.style.left = `${e.x - offset}px`
   }
  
})

// let x = 10;

lis.addEventListener("mousedown",(e)=>{
  lis.style.background="red"
  triger = true
  // console.log(e)
  offset = e.layerX 
})

lis.addEventListener("mouseup",(e)=>{
  lis.style.background="rgba(100, 148, 237, 0.843)"
  triger = false  
})

lis.addEventListener("mouseout",(e)=>{
  lis.style.background="rgba(100, 148, 237, 0.843)"
  triger = false  
})
//-------------------Touch events
let startX = 0, endX = 0

lis.addEventListener("touchmove",(e)=>{
  // console.log('Down')
  document.querySelector('.listener_info').innerHTML =`<div>X: ${e.x}  Y:${e.y}</div>
  <div>clientX: ${Math.floor(e.touches[0].clientX)}  Y:${Math.floor(e.touches[0].clientY)}</div>
  <div>screenX: ${Math.floor(e.touches[0].screenX)}  Y:${Math.floor(e.touches[0].screenY)}</div>
  <div>pageX: ${Math.floor(e.touches[0].pageX)}  pageY:${Math.floor(e.touches[0].pageY)}</div>
  <div>X: ${window.getComputedStyle(lis).width}  Y:${window.getComputedStyle(lis).height}</div>
  <div>radX: ${Math.floor(e.touches[0].radiusX)}  radY:${Math.floor(e.touches[0].radiusY)}</div>`
  
  console.log('Touch Moviing')

  
  
  moveBox.style.transform =`translate(${(Math.floor(e.touches[0].clientX))-30}px, 150px)`
 
 
   
  if (triger && e.x >= 200 && e.x <=500){
    console.log(triger)
    console.log(offset)
     lis.style.left = `${e.x - offset}px`
   }
  
})

lis.addEventListener("touchstart",(e)=>{
  lis.style.background="red"
  triger = true
  // console.log(e)
  console.log('Touch Start')
  startX = Math.floor(e.touches[0].clientX)

})

lis.addEventListener("touchend",(e)=>{
  lis.style.background="rgba(100, 148, 237, 0.843)"
  triger = false 
  // console.log(e.changedTouches[0].clientX) 
  endX = Math.floor(e.changedTouches[0].clientX)
  swipeInfo()
})

function swipeInfo(){
  let state
if(Math.abs(startX-endX) >= 80){
  if(startX > endX){
    state = "<<<<"
  } else {
    state = ">>>>"
  }
} else { state = "Stay" }
 
  document.querySelector('.listener_info').innerHTML +=`<div>Direction: ${state} ${Math.abs(startX-endX)} </div>`
  
}


  
  
