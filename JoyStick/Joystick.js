class Joystick {
    constructor(target){
        this.className = target;
        this.state = {};
        this.x = 0;
        this.y = 0;
        this.joystikSize = 150
        this.stickSize = 50 
        this.styleButton = `style="height: 20px; width: 100px "`
        this.styleStick = `style="position:absolute; height: ${this.stickSize}px; width: ${this.stickSize}px; background: red; left:${this.joystikSize/2-this.stickSize/2}px; top:${this.joystikSize/2-this.stickSize/2}px;  border: 2px red solid; border-radius: 5px; box-sizing: border-box;"`
        this.styleJoystick = `style="display:block; position:absolute; bottom:0px; height: ${this.joystikSize}px; width: ${this.joystikSize}px; right:100px; display: flex; justify-content: center; align-items: center; border: 2px red solid; border-radius: 5px"`
        this.classJoystick = 'joystick'
        this.classButton = 'joystick_button'
        this.classStick = 'joystick_stick'
        this.isPressed = false;

        this.initDraw()


    }

    initDraw(){
        console.log('Drawing')
        let template = `
        <div class="${this.classJoystick}" ${this.styleJoystick} >
        
        <div class="${this.classStick}"  ${this.styleStick}></div>
        </div>`
        document.querySelector(this.className).innerHTML += template
        
        this.bindEventsMouse()
        this.bindEventsTouch()

        // <button ${this.styleButton} class="${this.classButton}">Rright</button>

    }

    bindEventsMouse(){
        let mouseState = {
            startX: 0,
            startY: 0,
            startOffsetX: 0,
            startOffsetY: 0,
            curentPosX: 0,
            curentPosY: 0
        }
        
        console.log('binding')

        document.querySelector(`.${this.classStick}`).addEventListener('mousedown',(e)=>{
            mouseState.startX = e.clientX
            mouseState.startOffsetX = e.layerX
            mouseState.curentPosX = +document.querySelector(`.${this.classStick}`).style.left.slice(0,2)
            mouseState.startY = e.clientY
            mouseState.startOffsetY = e.layerY
            mouseState.curentPosY = +document.querySelector(`.${this.classStick}`).style.top.slice(0,2)

            console.log("Pressed")
            console.log(mouseState.StartX)
            console.log(e)
            // this.x++
            this.isPressed = true
        })

        document.querySelector(`.${this.classStick}`).addEventListener('mouseup',()=>{
            console.log("Released")
            this.isPressed = false
            this.resetStickPosition()
            this.x = 0
            this.y = 0
        })

        // document.querySelector(`.${this.classStick}`).addEventListener('mouseover',()=>{
        //     if(this.isPressed){
        //         console.log("Mouse Over")
        //         this.isPressed = false
        //         this.resetStickPosition()
        //     }
            
        // })



        document.querySelector(`.${this.classStick}`).addEventListener('mousemove',(e)=>{
            if(this.isPressed){
                this.moveStick(e, mouseState, false)

            }
            
           
        })
    }

    bindEventsTouch(){
        let mouseState = {
            startX: 0,
            startY: 0,
            startOffsetX: 0,
            startOffsetY: 0,
            curentPosX: 0,
            curentPosY: 0
        }
        
        console.log('binding')

        document.querySelector(`.${this.classStick}`).addEventListener('touchstart',(e)=>{
            mouseState.startX = Math.floor(e.touches[0].clientX)
            mouseState.startOffsetX = 0
            mouseState.curentPosX = +document.querySelector(`.${this.classStick}`).style.left.slice(0,2)
            mouseState.startY = Math.floor(e.touches[0].clientY)
            mouseState.startOffsetY = 0
            mouseState.curentPosY = +document.querySelector(`.${this.classStick}`).style.top.slice(0,2)

            console.log("Pressed")
            // console.log(mouseState.StartX)
            // console.log(e)
            // this.x++
            this.isPressed = true
        })

        document.querySelector(`.${this.classStick}`).addEventListener('touchend',()=>{
            console.log("Released")
            this.isPressed = false
            this.resetStickPosition()
            this.x = 0
            this.y = 0
        })



        document.querySelector(`.${this.classStick}`).addEventListener('touchmove',(e)=>{
            if(this.isPressed){
                e.preventDefault()
                this.moveStick(e, mouseState, true)

            }
            
           
        })
    }

    moveStick(e, data, touch){
        // console.log("Moove")
        let curentX,
            curentY,
            touchCurentPosX,
            touchCurentPosY,
            calcX,
            calcY 
        

        if(touch){
           touchCurentPosX  = Math.floor(e.touches[0].clientX)
           touchCurentPosY  = Math.floor(e.touches[0].clientY)
        } 
        
        if(!touch){
            touchCurentPosX = e.clientX
            touchCurentPosY = e.clientY
        }
        curentX = data.curentPosX + touchCurentPosX - data.startX
        curentY = data.curentPosY + touchCurentPosY - data.startY
        // console.log(curentX)
        // console.log(curentY)
        
        let remapX = this.remap(curentX,0,this.joystikSize-this.stickSize,-1,1)
        let remapY = this.remap(curentY,0,this.joystikSize-this.stickSize,-1,1)
        if(remapX >= 1){
            remapX = 1
        } else if(remapX <= -1) {
            remapX = -1}

        if(remapY >= 1){
            remapY = 1
        } else if(remapY <= -1) {
            remapY = -1}

        this.x = remapX
        this.y = remapY

        // console.log("Remap X: " + remapX.toFixed(2))
        // console.log("Remap Y: " + remapY.toFixed(2))

        // console.log("Sin X: " + Math.sin(remapX))
        
       


        if (curentX > 0 && curentX < this.joystikSize-this.stickSize){
            document.querySelector(`.${this.classStick}`).style.transition = ''
            document.querySelector(`.${this.classStick}`).style.left = `${curentX}px`
 
        }

        if(curentY > 0 && curentY < this.joystikSize-this.stickSize){
            document.querySelector(`.${this.classStick}`).style.transition = ''
            document.querySelector(`.${this.classStick}`).style.top = `${curentY}px`

        }
          

    }

    resetStickPosition(){
        let stick = document.querySelector(`.${this.classStick}`)
        stick.style.transition = 'all 0.2s'
        stick.style.left = `${this.joystikSize/2-this.stickSize/2}px`
        stick.style.top = `${this.joystikSize/2-this.stickSize/2}px`


    }

    remap(value, minIn, maxIn, minOut, maxOut){
        return (value - minIn)*(maxOut-minOut)/(maxIn-minIn)+minOut

    }

    main(){
        console.log('I am Joystick')
    }


    get(){
        return {
            x : `${this.x}`,
            y : `${this.y}`
        }
    }


}