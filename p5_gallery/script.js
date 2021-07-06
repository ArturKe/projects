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


//-----------------------------Listener---DragbleCube-----------------------------------------------------------------------------------------------//

const lis = document.querySelector('.listener__block')
let triger = false
let offset = 0
let curentStepTouch = 0
// const moveBox = document.querySelector('.listener__box')
initBoxes('.listener__block',3)
renderImg('.listener__box',1)


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
  document.body.style.overflow = "hidden"
})

lis.addEventListener("mouseup",(e)=>{
  lis.style.background="rgba(100, 148, 237, 0.843)"
  triger = false  
  document.body.style.overflow = ""
  // moveBox.style.transition =""

  allBoxesStyle('.listener__box',true)
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
  // все что выше, сервиная информация

  let curentPosX = Math.floor(e.touches[0].clientX)
  moveAllBoxes(curentPosX, startX)
  // moveBox.style.transform =`translate(${()-30}px, 170px)`
 
 
  //двигает большой куб от событий мыши
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

  allBoxesStyle('.listener__box',false)
  console.log('Touch Start')
  // 
  startX = Math.floor(e.touches[0].clientX)
  document.body.style.overflow = "hidden"
  // moveBox.style.transition =""

})

lis.addEventListener("touchend",(e)=>{
  lis.style.background="rgba(100, 148, 237, 0.843)"
  triger = false 
  // console.log(e.changedTouches[0].clientX) 
  endX = Math.floor(e.changedTouches[0].clientX)
  swipeInfo()
  


  document.body.style.overflow = ""
  // moveBox.style.transition ="all 0.3s"
  // moveBox.style.transform =`translate(150px, 170px)` //start position
})

function swipeInfo(){
  let state
if(Math.abs(startX-endX) >= 80){
  if(startX > endX){
    state = "<<<<"
    curentStepTouch --
    moveAllBoxes(30,0)
    allBoxesStyle('.listener__box',true)

  } else {
    state = ">>>>"
    
    moveForward(50)
    allBoxesStyle('.listener__box',true)
        
  }
} else { 
  state = "Stay"
  moveAllBoxes(0,0)
  allBoxesStyle('.listener__box',true)
}
 
  document.querySelector('.listener_info').innerHTML +=`<div>Direction: ${state} ${Math.abs(startX-endX)} </div>`
  
}
////----------------------------------new iter

function initBoxes(target,amount){
  for(let i=0; i < amount; i++){
    document.querySelector(target).innerHTML += `<div class="listener__box"></div>`
  } 
  const allBoxes = document.querySelectorAll('.listener__box')
  let offsetPosX = 0
  allBoxes.forEach(item=>{
    item.style.transform=`translate(${offsetPosX}px, 150px)`
    offsetPosX += 20
  })
} //отрисовывает указанное количсетво боксов, с заданным интервалом по Х

function moveAllBoxes(positionX,startTouch){
  const allBoxes = document.querySelectorAll('.listener__box')
  let offsetPosX = 0
  allBoxes.forEach(item=>{
    item.style.transform =`translate(${positionX-20 + offsetPosX - startTouch}px, 150px)`
    offsetPosX += 20
  }) 
} // двигает все боксы относительно их начала кооринат

function allBoxesStyle(target,state){
  if(state){
    document.querySelectorAll(target).forEach(item=>{
      item.style.transition ="all 0.3s"
    })
  } else {
    document.querySelectorAll(target).forEach(item=>{
      item.style.transition =""
    })
  }
} //добавляет и убирает свойство транзишн

function renderImg(target,index){
  document.querySelectorAll(target).forEach(item=>{item.style.background="yellow"})
  document.querySelectorAll(target)[index].style.background="violet"
  
}

function moveForward(gap){
  moveAllBoxes(gap,0)
  addBox('.listener__block')
  renderImg('.listener__box',1)
  removeBox('.listener__block')

  // document.querySelectorAll(target).forEach(item=>{

  // })
}

function addBox(target) {
  document.querySelector(target).insertAdjacentHTML('afterbegin', `<div class="listener__box"></div>`)
  document.querySelectorAll('.listener__box')[0].style.transform = "translate(0px, 150px)"
}  //добавляет один блок

function removeBox(target){
  // const lChild = document.querySelector(target).lastChild
  const lChild = document.querySelectorAll('.listener__box')[2]
  console.log(lChild)
  // lChild.style.background="green"
  document.querySelector(target).removeChild(lChild)

}

//---------------------------------------------

class TouchGallery {
  constructor(target='body', imgArray = ['Hello'], width=300,height=300){
    this.iArray = imgArray;
    this.lenghtArr = this.iArray.length;
    this.width = width;
    this.height = height;
    this.target = target;
    this.startX = 0;
    this.endX = 0;
    this.curentStep = 0;

    this.init();
    this.renderImg();

    this.imgContent = document.querySelector(`${this.target} .glrT__imageContent`) 
    this.imgContent.addEventListener("touchmove",(e)=>{
      console.log('Mooooove')
      
      this.curentPosX = Math.floor(e.touches[0].clientX)
      console.log(this.startX)
      this.moveAllBoxes(this.curentPosX,this.startX)
    })

    this.imgContent.addEventListener("touchstart",(e)=>{
      this.startX = Math.floor(e.touches[0].clientX)
      document.body.style.overflow = "hidden"
      this.allBoxesStyle(false)

    })

    this.imgContent.addEventListener("touchend",(e)=>{
      this.endX = Math.floor(e.changedTouches[0].clientX)
      // this.moveAllBoxes(0,0)
      this.allBoxesStyle(true)
      this.swipeInfo()
      document.body.style.overflow = ""

    })
    this.imgContent.addEventListener("mouseup",(e)=>{
      this.endX = Math.floor(e.changedTouches[0].clientX)
      // this.moveAllBoxes(0,0)
      this.allBoxesStyle(true)
      this.swipeInfo()
      document.body.style.overflow = ""

    })

  }

  init(){
    document.querySelector(this.target).innerHTML+=`
    <div class="glrT">
        <div class="glrT__body">  
            <div class="glrT__content">
                <div class="glrT__imageContent"></div>
                
                <div class="glrT__counter">Counter</div>
                <div class="glrT__desc">Descripstion</div>
            </div>          
      </div>
    </div>`
    this.glrTCounter()
  }

  renderImg(){
    let offsetX = parseInt(`-${this.width}`)

    for(let i=0; i<3; i++){
        this.glrTForward()
        document.querySelector(`${this.target} .glrT__imageContent`).innerHTML+=`<div style="background:url('${this.iArray[this.curentStep].link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px; transform:translateX(${offsetX}px)" class="glrT__imageItem">Image</div>`
        offsetX += this.width
    }




    // for(let i=0; i<3; i++){
    //   if(i === 0){ document.querySelector(`${this.target} .glrT__imageContent`).innerHTML+=`<div style="background:url('${this.iArray[this.lenghtArr-1].link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px; transform:translateX(${offsetX}px)" class="glrT__imageItem">Image</div>`
    //   offsetX += this.width 
    // } else {
    //     document.querySelector(`${this.target} .glrT__imageContent`).innerHTML+=`<div style="background:url('${this.iArray[i-1].link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px; transform:translateX(${offsetX}px)" class="glrT__imageItem">Image</div>`
    //     offsetX += this.width
    //   }
      
    // }  -смещает на одну позицию


    // this.iArray.forEach(item=>{
    //   document.querySelector(`${this.target} .glrT__imageContent`).innerHTML+=`<div style="background:url('${item.link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px; transform:translateX(${offsetX}px)" class="glrT__imageItem">Image</div>`
    //   offsetX += this.width
    // })
  } //Выводит первые 3 изображения из массива

  moveAllBoxes(positionX,startTouch){
    const allImg = document.querySelectorAll(`${this.target} .glrT__imageItem`)
    let offsetPosX = 0
    allImg.forEach(item=>{
      item.style.transform =`translate(${positionX - this.width + offsetPosX - startTouch}px, 0px)`
      offsetPosX += this.width
    }) 
  } // двигает все боксы относительно их начала кооринат

  swipeInfo(){
  let state
  if(Math.abs(this.startX-this.endX) >= 80){
      if(this.startX > this.endX){
        console.log("<<<<")
        this.moveAllBoxes(-300,0)
        this.removeBox(true)
        this.addBox(true)
        this.glrTForward()
        this.glrTCounter()
        
        
        
      } else {
        console.log(">>>>")
        this.moveAllBoxes(300,0)
        this.removeBox(false)
        this.addBox(false) 
        this.glrTBackward()
        this.glrTCounter()
       
  
      }
    } else { 
      console.log("Stay")
      this.moveAllBoxes(0,0)
      }
      // document.querySelector('.listener_info').innerHTML +=`<div>Direction: ${state} ${Math.abs(startX-endX)} </div>`  
  } //-----------------------------------------------------------------------------------------------------------------------------Swipe

  allBoxesStyle(state){
    if(state){
      document.querySelectorAll(`${this.target} .glrT__imageItem`).forEach(item=>{
        item.style.transition ="all 0.3s"
      })
    } else {
      document.querySelectorAll(`${this.target} .glrT__imageItem`).forEach(item=>{
        item.style.transition =""
      })
    }
  } //добавляет и убирает свойство транзишн
  
  glrTCounter(){
    document.querySelector(`${this.target} .glrT__counter`).innerHTML =`<div class="glrT__counterContent"> ${this.curentStep+1}/${this.lenghtArr} </div>`
  } //Обрабатывае значение счетчика

  removeBox(first){
    // const lChild = document.querySelector(target).lastChild
    let lChild 
    if(first){
      lChild= document.querySelectorAll(`${this.target} .glrT__imageItem`)[0]
    } else {
      lChild= document.querySelectorAll(`${this.target} .glrT__imageItem`)[2]
    }
    console.log(lChild)
    // lChild.style.background="green"
    document.querySelector(`${this.target} .glrT__imageContent`).removeChild(lChild)
  } //Удаляет первый или последний элемент

  addBox(first){
    if(first){
      this.glrTForward()
      document.querySelector(`${this.target} .glrT__imageContent`).insertAdjacentHTML('beforeend', `<div style="background:url('${this.iArray[this.curentStep].link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px" class="glrT__imageItem">Image</div>`)
      document.querySelectorAll(`${this.target} .glrT__imageItem`)[2].style.transform = `translate(${this.width}px, 0px)`
      this.glrTBackward()
    
      
    } else {
      document.querySelector(`${this.target} .glrT__imageContent`).insertAdjacentHTML('afterbegin', `<div style="background:url('${this.iArray[this.curentStep].link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px" class="glrT__imageItem">Image</div>`)
      document.querySelectorAll(`${this.target} .glrT__imageItem`)[0].style.transform = `translate(${-this.width}px, 0px)`
    }

  }  //добавляет один блок

  //--------------------------------------------------------------------------------------

  glrTForward(){
    if (this.curentStep >= (this.lenghtArr-1)){
      this.curentStep = 0
    } else { 
      this.curentStep++
    } 
    
  } //Обрабатывае событие вперед
  
  glrTBackward(){
    if (this.curentStep == 0){
      this.curentStep = this.lenghtArr-1
    } else { 
      this.curentStep--
      }
    
  } //Обрабатывае событие назад



}

const a = new TouchGallery('.glwrap', glrImg);
const b = new TouchGallery('.glwrap2', glrImg);


  
