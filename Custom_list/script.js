const block = document.querySelector('.block')
let openedTags = []
let categories=['Countries', 'Cities']

let base = [
    {tag:'World', key: categories[0], value:'Italy', trunk: true, step: 0},
    {tag:'World', key: categories[0], value:'France', trunk: true, step: 0},
    {tag:'France', key: categories[1], value:'Paris', trunk: true, step: 0},
    {tag:'France', key: categories[1], value:'Marsel', trunk: true, step: 0},
    {tag:'France', key: categories[1], value:'Lion', trunk: true, step: 0},
    {tag:'Italy', key: categories[1], value:'Milan', trunk: true, step: 0},
    {tag:'Italy', key: categories[1], value:'Venice', trunk: true, step: 0},
    {tag:'Paris', key:'Population', value:'2394890', trunk: false, step: 0},
    {tag:'Paris', key:'President', value:'Macrone', trunk: false, step: 0},
    {tag:'Milan', key:'Population', value:'38728723', trunk: false, step: 0},
]

let name1 = 'Hello Hello'
let template = `<div>${ name1 }</div>`



function addItem (){
    let baseItem = {tag:'World', key:'Country', value:'Italy', trunk: true, step: 0}
    base.push(baseItem)
}

function tagView(tagName){

    let templateInfo = []
    let options_list = []
    let originMold 
    
    //let template_s = `<select>${options_list}</select>`
    let flag = false
    const randomNum = Date.now()

    for(let i=0; i< base.length; i++){
       
        if (base[i].tag === tagName){
            
            if(!flag){
                
                templateInfo.push(`<div class='label'>${base[i].key} of ${tagName}<div>`)
                options_list.push(`<option>${base[i].key}</option>`)
                originMold = base[i]
                flag = true
            }
            templateInfo.push(`<div class='item'>${base[i].value}</div>`)
            options_list.push(`<option>${base[i].value}</option>`)
        }
        //console.log(templateInfo)   
    }
    console.log(originMold) 


    if(templateInfo.length > 0){  //Создаетт контейнер если по тегу больше одного значения 

        console.log('Create Block Info')
        console.log(openedTags)

        block.insertAdjacentHTML('beforeend',`
        <div class="blockInfo block${randomNum}">
            <div>${ templateInfo.join(' ') }</div> 
            <select class='mainSelector${randomNum}'>${options_list}</select> 
            <button class='btn${randomNum}'>Close</button>
            ${ter(randomNum)}
        </div>`) //создание контейнера


        document.querySelector(`.mainSelector${randomNum}`).addEventListener('change',(e)=>{
            //console.log(e.target.value)
            
            console.log('Includes')

            if(!openedTags.includes(e.target.value)){ // Проверяет по массиву открытых тегов

                openedTags.push(e.target.value) // Добавляет тег если его нет и открывает новый блок
                tagView(e.target.value)
            }
              
        })


        document.querySelector(`.btnForm${randomNum}`).addEventListener('click',(e)=>{

            let val = document.querySelector(`.input${randomNum}`).value
            if(val.length > 0){
                console.log( val )
                console.log( val.length )

                addData(val, originMold)
                delBlock(randomNum)
                tagView(tagName)

            } else {
                console.log("Foooorm is EMPTY")
            }
           
             
        })

        if(block.children.length>1){  //Добавляет на кнопку обработчик если в блоке больше одного элемента

            document.querySelector(`.btn${randomNum}`).addEventListener('click',(e)=>{
                
                openedTags = openedTags.filter((item) =>{ 
                    return item != tagName
                })
                    
                console.log(openedTags)
                delBlock(randomNum)

            })
    
        } 
            
    }
    
}

let firstTag = 'World'
tagView(firstTag)
openedTags.push(firstTag)


function changeAction(){
    console.log('SomeThimgChange')
    //this.parentNode.removeChild(this)
}

function ter(num){

    // let cat_options = ['<option>first</option>', '<option>second</option>']
    // <select> ${cat_options} </select>

    let formTemplate = `
    <div class='inputForm form${num}'>

        <input class='inputItem input${num}' type="text">
        <button class='btnForm${num}'>Add item</button>
    </div>`

    return formTemplate
}

function delBlock (num){
    const self = document.querySelector(`.block${num}`)
    console.log(self.parentNode)
    self.parentNode.removeChild(self)
}

function addData(value, origin){
   
    let obj = JSON.stringify(origin)
    let obj2 = JSON.parse(obj)
    obj = JSON.parse(obj)

    obj.value = value
    base.push(obj)

    obj2.value='Empty'
    obj2.tag = value
    base.push(obj2)

}