const listitems = ["listwerbinich", "listprojekte", "listlebenslauf", "listzertifikate","listblog", "listkontakt",
    "listfooterwerbinich", "listfooterprojekte", "listfooterlebenslauf", "listfooterzertifikate", "listfooterblog", "listfooterkontakt" ];
const listitemsObjects = []

listitems.forEach(function(item){
    listitemsObjects.push(document.getElementById(item));
})

//changes
function mouseClick(event){
    event.target.style.backgroundColor = "var(--logoColor)";
    event.target.style.color = "white";
}

function mouseUp(event){
    event.target.style.backgroundColor = "";
    event.target.style.color = "";
}

function mouseOver(event){
    event.target.style.color = "black";
    event.target.style.backgroundColor = "var(--frameColor)"
    //event.target.style.fontSize = "1.5rem";
}

function mouseOut(event){
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
    //event.target.style.fontSize = "";
}

//eventhandler

function handlerMouseList(obj){
    obj.onmousedown = mouseClick;
    obj.onmouseup = mouseUp;
    obj.onmouseover = mouseOver;
    obj.onmouseout = mouseOut;
}

//a loop for all listitems

listitemsObjects.forEach(handlerMouseList);


//coding darkmode

class CssPropControl{
    constructor(element){
        this.element = element;
    }

    get(varName){
        return getComputedStyle(this.element).getPropertyValue(varName);
    }
    set(varName, val){
        return this.element.style.setProperty(varName, val);
    }
}

const bodyCssProps = new CssPropControl(document.body)

let toggle = document.querySelector('#darkmodetoggle')
toggle.addEventListener("click", () =>{
    let mode = toggle.checked ? 'dark': 'light';

    bodyCssProps.set('--backgroundColor', bodyCssProps.get(`--${mode}BackgroundColor`));
    bodyCssProps.set('--primaryColor', bodyCssProps.get(`--${mode}PrimaryColor`));
    bodyCssProps.set('--bannerColor', bodyCssProps.get(`--${mode}BannerColor`));
    bodyCssProps.set('--titlesColor', bodyCssProps.get(`--${mode}TitlesColor`));
    bodyCssProps.set('--logoColor', bodyCssProps.get(`--${mode}LogoColor`));
    bodyCssProps.set('--frameColor', bodyCssProps.get(`--${mode}FrameColor`));

    
});