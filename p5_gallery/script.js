//--------------------------TapGallery----

const glrImg =[
    {link:'./img/g4haiwkwu7jqrhh65c804phjt-q.jpeg', desc:"Image 1 Kabanchiki" },
    {link:'./img/mothman-frank-frazetta.jpg', desc:'Image 2 "Motman" by Frank Frazetta' },
    {link:'./img/The-Art-of-Frank-Frazetta-9.jpeg', desc:"Image 3 Frank Frazetta" },
    {link:'./img/StudioLightTest_21.jpg', desc:"Image 4 Red sphere" }
    
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

//------------------------------------------------------------------------------------------------------------------------------//


//------------------------------------------------------------------------------------------------------------ Gallery class -----------------------

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
    this.eventBind();

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
    document.querySelector(`${this.target} .glrT__imageContent`).style.width =`${this.width}px`
    document.querySelector(`${this.target} .glrT__imageContent`).style.height =`${this.height}px`
    document.querySelector(`${this.target} .glrT__desc`).style.width =`${this.width}px`
    this.glrTCheckLength()
  } // Отрисовка шаблона

  renderImg(){
    let offsetX = parseInt(`-${this.width}`)
    this.glrTBackward()

    for(let i=0; i<3; i++){
        document.querySelector(`${this.target} .glrT__imageContent`).innerHTML+=`<div style="background:url('${this.iArray[this.curentStep].link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px; transform:translateX(${offsetX}px)" class="glrT__imageItem"></div>`
        offsetX += this.width
        this.glrTForward()
    }
    this.glrTBackward()
    this.glrTBackward()
    this.glrTCheckUpdate()
    this.glrTDescUpdate()




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
  } //Создает 3 блока в шаблоне и выводит в них первые 3 изображения из массива 

  eventBind(){
    this.imgContent = document.querySelector(`${this.target} .glrT__imageContent`) 
    this.imgContent.addEventListener("touchmove",(e)=>{
      // console.log('Mooooove')
      e.stopPropagation()
     
      
      this.curentPosX = Math.floor(e.touches[0].clientX)
     
     
      // console.log(this.startX)
      // console.log(e.touches.length) //------------------------------------
      // console.log(e)
      //---------------------------------------------------------------------
      if(e.touches.length >= 2){
        e.stopPropagation()
        this.curentPosXtouch2 = Math.floor(e.touches[1].clientX)
        this.scalePicture()
      } else {
        this.moveAllBoxes(this.curentPosX,this.startX)
      }


      
    })

    this.imgContent.addEventListener("touchstart",(e)=>{
      this.startX = Math.floor(e.touches[0].clientX)
      document.body.style.overflow = "hidden"
      this.allBoxesStyle(false)

    })

    this.imgContent.addEventListener("touchend",(e)=>{
      this.endX = Math.floor(e.changedTouches[0].clientX)
      this.allBoxesStyle(true)
      this.swipeInfo()
      document.body.style.overflow = ""
     

      

    })
    this.imgContent.addEventListener("mouseup",(e)=>{
      // this.endX = Math.floor(e.changedTouches[0].clientX)
      // console.log(e)
      let MouseEndX = Math.floor(e.layerX)
      console.log(this.endX)
      

      if(MouseEndX <= this.width/2){
        this.actionMoveBackward()
        console.log('Move Backward')
      } 
      
      if(MouseEndX >= this.width/2){
        this.actionMoveForward()
        console.log('Move Forvard')
      }

      this.allBoxesStyle(true)
      this.swipeInfo()
      document.body.style.overflow = ""

    })

  } // Добавляет слушатели на разные элементы

  scalePicture(){
    document.querySelector(`${this.target} .glrT__imageItem`).style.background="red"
    

  }

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
        this.actionMoveBackward()
        
        
        
      } else {
        this.actionMoveForward()
       
  
      }
    } else { 
      console.log("Stay")
      this.moveAllBoxes(0,0)
      }
  } //-----------------------------------------------------------------------------------------------------------------------------Swipe

  actionMoveBackward(){
    console.log("<<<<")
        this.moveAllBoxes(-this.width,0)
        this.glrTForward()

        this.removeBox(true)
        this.addBox(true)
        
        this.glrTCheckUpdate()
        this.glrTDescUpdate()
  }

  actionMoveForward(){
    console.log(">>>>")
    this.moveAllBoxes(this.width,0)
    this.glrTBackward()

    this.removeBox(false)
    this.addBox(false) 
    
    this.glrTCheckUpdate()
    this.glrTDescUpdate()

  }

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
      document.querySelector(`${this.target} .glrT__imageContent`).insertAdjacentHTML('beforeend', `<div style="background:url('${this.iArray[this.curentStep].link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px" class="glrT__imageItem"></div>`)
      document.querySelectorAll(`${this.target} .glrT__imageItem`)[2].style.transform = `translate(${this.width}px, 0px)`
      this.glrTBackward()
    
      
    } else {
      this.glrTBackward()
      document.querySelector(`${this.target} .glrT__imageContent`).insertAdjacentHTML('afterbegin', `<div style="background:url('${this.iArray[this.curentStep].link}') center/cover no-repeat; width:${this.width}px; height:${this.height}px" class="glrT__imageItem"></div>`)
      document.querySelectorAll(`${this.target} .glrT__imageItem`)[0].style.transform = `translate(${-this.width}px, 0px)`
      this.glrTForward()
    }

  }  //добавляет один блок в начало или конец списка в зависимости условия

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

  //------------------------------------------------------------------------Counter

  glrTCheckLength(){
    document.querySelector(`${this.target} .glrT__counter`).innerHTML ='' //очистка содержимого
    if(this.lenghtArr <= 5){
      for(let i=0; i < this.lenghtArr; i++){
        document.querySelector(`${this.target} .glrT__counter`).innerHTML +=`<div class="gallery__dots"></div>`
  
      }
    } else {
        this.glrTCounter()
      }
  
    } // Проверяет длинну массива изображений, если меньше 5 отрисовывает точки, если больше цифровой счетчик
  
  glrTCheckUpdate(){
      if(this.lenghtArr <= 5){
        this.glrTDotsUpdate()
      } else {
        this.glrTCounter()
    }
  }  //Проверяет длинну массива изображений в зависимости от нее вызывает апдейт Счетчика или Дотера
  
  glrTDotsUpdate() {
      // console.log('DotsUpdate')
      const allDots = document.querySelectorAll(`${this.target} .gallery__dots`)
      allDots.forEach((dot)=>{
        dot.style.background = "grey"
        dot.style.transform = "scale(1)"
      
      }) // Сбрасывает стили у всех точек
      
      allDots[this.curentStep].style.background = "red"
      allDots[this.curentStep].style.transform = "scale(1.5)"
    } // Берёт все точки и обновляет цвет и размер в соответствии с текущим номером изображения

  glrTCounter(){
    document.querySelector(`${this.target} .glrT__counter`).innerHTML =`<div class="glrT__counterContent"> ${this.curentStep+1}/${this.lenghtArr} </div>`
  } //Обрабатывае значение счетчика

  glrTDescUpdate(){
    document.querySelector(`${this.target} .glrT__desc`).innerHTML =`<div class="glrT__descText"> ${this.iArray[this.curentStep].desc} </div>`
  } //Обновляет значение Description



}

const a = new TouchGallery('.glwrap', glrImg);
const b = new TouchGallery('.glwrap2', glrImg,350,200);
const c = new TouchGallery('.glwrap3', glrImg,150,150);


//---------------------------------------------------------TestInfo
