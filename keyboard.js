"use strict"
let step = 0;
let language;

let header = document.createElement('h1');
header.className = "header";
header.innerHTML = 'Keyboard QWERTY. Windows OS';
document.body.append(header);

let textarea = document.createElement('textarea');
textarea.setAttribute('autofocus', '');
textarea.setAttribute('name', 'inputetext');
/*textarea.focus();
textarea.selectionStart = textarea.value.length;*/

textarea.className = "areatext";
document.body.append(textarea);
/*let textarea = {
    'autofocus': ' ',
    'class':"areatext",
    let textar = document.createElement('textarea'),
    //appendElem() {document.body.append(textarea)},
}
document.body.append(textarea);*/
 

let identifyLanguage = () => {
    let lang = localStorage.getItem('language');
    console.log('!' + lang);
    if (lang == null){
        lang = 'en';
        localStorage.setItem('language', lang);        
    } 
    return lang;      
}
language = identifyLanguage();

let infArea = document.createElement('section');
infArea.className = "inf-area";
infArea.innerHTML = `<pre class="pre">CapsLock: next.     Language (Ctrl+Shift):<p> ${language.toUpperCase()}.</p></pre>`;
document.body.append(infArea);

let keyboard = document.createElement('section');
keyboard.className = "container";
document.body.append(keyboard);

let arr =[];
const arrKeyCode = [
    ['Backspace', 15],
    ['Tab', 16],
    ['Enter', 42] ,
    ['ShiftLeft', 43],
    ['ShiftRight', 55],
    ['ControlRight', 64],
    ['ControlLeft', 56],
    ['AltLeft', 58],
    ['AltRight', 60],
    ['CapsLock', 30],
    ['Escape', 0],
    ['Space', 59],
    ['ArrowLeft', 61],
    ['ArrowUp', 54],
    ['ArrowRight', 63],
    ['ArrowDown', 62],
    ['Delete', 29],
    ['Digit0', 11],
    ['Digit1', 2],
    ['Digit2', 3],
    ['Digit3', 4],
    ['Digit4', 5],
    ['Digit5', 6],
    ['Digit6', 7],
    ['Digit7', 8],
    ['Digit8', 9],
    ['Digit9', 10],
    ['KeyA', 31],
    ['KeyB', 48],
    ['KeyC', 46],
    ['KeyD', 33],
    ['KeyE', 19],
    ['KeyF', 34],
    ['KeyG', 35],
    ['KeyH', 36],
    ['KeyI', 24],
    ['KeyJ', 37],
    ['KeyK', 38],
    ['KeyL', 39],
    ['KeyM', 50],
    ['KeyN', 49],
    ['KeyO', 25],
    ['KeyP', 26],
    ['KeyQ', 17],
    ['KeyR', 20],
    ['KeyS', 32],
    ['KeyT', 21],
    ['KeyU', 23],
    ['KeyV', 47],
    ['KeyW', 18],
    ['KeyX', 45],
    ['KeyY', 22],
    ['KeyZ', 44],
    ['OSLeft', 57],
    ['Semicolon', 40],
    ['Equal', 13],
    ['Comma', 51],
    ['Minus', 12],
    ['Period', 52],
    ['Slash', 53],
    ['Backquote', 1],
    ['BracketLeft', 27],
    ['Backslash',  14],
    ['BracketRight', 28],
    ['Quote', 41],
]; 

const arrKeyLatin = [
    ['Backspace', {keyShift: 'backSpace', key: 'backSpace' }],
    ['Tab', {keyShift: 'Tab', key: 'Tab' }],
    ['Enter', {keyShift: 'Enter', key: 'Enter' }] ,
    ['ShiftLeft', {keyShift: 'Shift', key:'Shift'}],
    ['ShiftRight', {keyShift: 'Shift', key:'Shift'}],
    ['ControlLeft',{keyShift: 'Ctrl', key:'Ctrl'}],
    ['ControlRight', {keyShift: 'Ctrl', key:'Ctrl'}],
    ['AltLeft', {keyShift: 'Alt', key:'Alt'}],
    ['AltRight', {keyShift: 'Alt', key:'Alt'}],
    ['CapsLock', {keyShift: 'Caps Lock', key:'Caps Lock'}],
    ['Escape', {keyShift: 'Esc', key:'Esc'}],
    ['Space', {keyShift: 'Space', key:'Space'}],
    ['ArrowLeft', {keyShift: 'Left', key:'Left'}],
    ['ArrowUp', {keyShift: 'Up', key:'Up'}],
    ['ArrowRight', {keyShift: 'Right', key:"Right"}],
    ['ArrowDown', {keyShift: 'Down', key:'Down'}],
    ['Delete', {keyShift: 'Del', key:'Del'}],
    ['Digit0', {keyShift: ')', key: '0'}],
    ['Digit1', {keyShift: '!', key: '1'}],
    ['Digit2', {keyShift: '@', key: '2'}],
    ['Digit3', {keyShift: '#', key: '3'}],
    ['Digit4', {keyShift: '$', key: '4'}],
    ['Digit5', {keyShift: '%', key: '5'}],
    ['Digit6', {keyShift: '^', key: '6'}],
    ['Digit7', {keyShift: '&', key: '7'}],
    ['Digit8', {keyShift: '*', key: '8'}],
    ['Digit9', {keyShift: '(', key: '9'}],
    ['KeyA', {keyShift: 'A', key: 'a'}],
    ['KeyB', {keyShift: 'B', key: 'b'}],
    ['KeyC', {keyShift: 'C', key: 'c'}],
    ['KeyD', {keyShift: 'D', key: 'd'}],
    ['KeyE', {keyShift: 'E', key: 'e'}],
    ['KeyF', {keyShift: 'F', key: 'f'}],
    ['KeyG', {keyShift: 'G', key: 'g'}],
    ['KeyH', {keyShift: 'H', key: 'h'}],
    ['KeyI', {keyShift: 'I', key: 'i'}],
    ['KeyJ', {keyShift: 'J', key: 'j'}],
    ['KeyK', {keyShift: 'K', key: 'k'}],
    ['KeyL', {keyShift: 'L', key: 'l'}],
    ['KeyM', {keyShift: 'M', key: 'm'}],
    ['KeyN', {keyShift: 'N', key: 'n'}],
    ['KeyO', {keyShift: 'O', key: 'o'}],
    ['KeyP', {keyShift: 'P', key: 'p'}],
    ['KeyQ', {keyShift: 'Q', key: 'q'}],
    ['KeyR', {keyShift: 'R', key: 'r'}],
    ['KeyS', {keyShift: 'S', key: 's'}],
    ['KeyT', {keyShift: 'T', key: 't'}],
    ['KeyU', {keyShift: 'U', key: 'u'}],
    ['KeyV', {keyShift: 'V', key: 'v'}],
    ['KeyW', {keyShift: 'W', key: 'w'}],
    ['KeyX', {keyShift: 'X', key: 'x'}],
    ['KeyY', {keyShift: 'Y', key: 'y'}],
    ['KeyZ', {keyShift: 'Z', key: 'z'}],
    ['OSLeft', {keyShift: 'Win', key: 'Win'}],
    ['Semicolon', {keyShift: ':', key: ';'}],
    ['Equal', {keyShift: '+', key: '='}],
    ['Comma', {keyShift: '<', key: ','}],
    ['Minus', {keyShift: '_', key: '-'}],
    ['Period', {keyShift: '>', key: '.'}],
    ['Slash', {keyShift: '?', key: '/'}],
    ['Backquote', {keyShift: '~', key: '`'}],
    ['BracketLeft', {keyShift: '{', key: '['}],
    ['Backslash', {keyShift: '|', key: '\\'}],
    ['BracketRight', {keyShift: '}', key: ']'}],
    ['Quote', {keyShift: '"', key: '\''}],
];
const arrKeyCyrillic = [
    ['Backspace', {keyShift: 'backSpace', key: 'backSpace' }],
    ['Tab', {keyShift: 'Tab', key: 'Tab' }],
    ['Enter', {keyShift: 'Enter', key: 'Enter' }] ,
    ['ShiftLeft', {keyShift: 'Shift', key:'Shift'}],
    ['ShiftRight', {keyShift: 'Shift', key:'Shift'}],
    ['ControlLeft',{keyShift: 'Ctrl', key:'Ctrl'}],
    ['ControlRight', {keyShift: 'Ctrl', key:'Ctrl'}],
    ['AltLeft', {keyShift: 'Alt', key:'Alt'}],
    ['AltRight', {keyShift: 'Alt', key:'Alt'}],
    ['CapsLock', {keyShift: 'Caps Lock', key:'Caps Lock'}],
    ['Escape', {keyShift: 'Esc', key:'Esc'}],
    ['Space', {keyShift: 'Space', key:'Space'}],
    ['ArrowLeft', {keyShift: 'Left', key:'Left'}],
    ['ArrowUp', {keyShift: 'Up', key:'Up'}],
    ['ArrowRight', {keyShift: 'Right', key:"Right"}],
    ['ArrowDown', {keyShift: 'Down', key:'Down'}],
    ['Delete', {keyShift: 'Del', key:'Del'}],
    ['Digit0', {keyShift: ')', key:'0'}],
    ['Digit1', {keyShift: '!', key:'1'}],
    ['Digit2', {keyShift: '"', key:'2'}],
    ['Digit3', {keyShift: '№', key:'3'}],
    ['Digit4', {keyShift: ';', key:'4'}],
    ['Digit5', {keyShift: '%', key:'5'}],
    ['Digit6', {keyShift: ':', key:'6'}],
    ['Digit7', {keyShift: '?', key:'7'}],
    ['Digit8', {keyShift: '*', key:'8'}],
    ['Digit9', {keyShift: '(', key:'9'}],
    ['KeyA', {keyShift: 'Ф', key:'ф'}],
    ['KeyB', {keyShift: 'И', key:'и'}],
    ['KeyC', {keyShift: 'С', key:'с'}],
    ['KeyD', {keyShift: 'В', key:'в'}],
    ['KeyE', {keyShift: 'У', key:'у'}],
    ['KeyF', {keyShift: 'А', key:'а'}],
    ['KeyG', {keyShift: 'П', key:'п'}],
    ['KeyH', {keyShift: 'Р', key:'р'}],
    ['KeyI', {keyShift: 'Ш', key:'ш'}],
    ['KeyJ', {keyShift: 'О', key:'о'}],
    ['KeyK', {keyShift: 'Л', key:'л'}],
    ['KeyL', {keyShift: 'Д', key:'д'}],
    ['KeyM', {keyShift: 'Ь', key:'ь'}],
    ['KeyN', {keyShift: 'Т', key:'т'}],
    ['KeyO', {keyShift: 'Щ', key:'щ'}],
    ['KeyP', {keyShift: 'З', key:'з'}],
    ['KeyQ', {keyShift: 'Й', key:'й'}],
    ['KeyR', {keyShift: 'К', key:'к'}],
    ['KeyS', {keyShift: 'Ы', key:'ы'}],
    ['KeyT', {keyShift: 'Е', key:'е'}],
    ['KeyU', {keyShift: 'Г', key:'г'}],
    ['KeyV', {keyShift: 'М', key:'м'}],
    ['KeyW', {keyShift: 'Ц', key:'ц'}],
    ['KeyX', {keyShift: 'Ч', key:'ч'}],
    ['KeyY', {keyShift: 'Н', key:'н'}],
    ['KeyZ', {keyShift: 'Я', key:'я'}],
    ['OSLeft', {keyShift: 'Win', key:'Win'}],
    ['Semicolon', {keyShift: 'Ж', key:'ж'}],
    ['Equal', {keyShift: '+', key:'='}],
    ['Comma', {keyShift: 'Б', key:'б'}],
    ['Minus', {keyShift: '_', key:'-'}],
    ['Period', {keyShift:'Ю', key:'ю'}],
    ['Slash', {keyShift: ',', key:'.'}],
    ['Backquote', {keyShift: 'Ё', key:'ё'}],
    ['BracketLeft', {keyShift: 'Х', key:'х'}],
    ['Backslash', {keyShift: '/', key:'\\'}],
    ['BracketRight', {keyShift: 'Ъ', key:'ъ'}],
    ['Quote', {keyShift: 'Э', key:'э'}],
];
const arrSpecKey = ['Backspace', 'Tab', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'CapsLock', 'Escape', 'OSLeft', 'Space', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Delete'];

function CreateElement(arrKeyCode){
    for (let [id, order] of arrKeyCode){
        let elemKeyboard = document.createElement('button');
        [elemKeyboard.id, elemKeyboard.style.order] = [id,order];
        elemKeyboard.className = "key alphabet latin";
        document.querySelector("body > .container").append(elemKeyboard);         
    }
}
let keybutton = new CreateElement(arrKeyCode);

function createInnerHTML(arr){
    if (language == 'en'){
        arr = arrKeyLatin;
    } else {
        arr = arrKeyCyrillic;
    }
    for (let [id, {keyShift, key}] of arr){
        let elemKeyboard = document.getElementById(id);
        elemKeyboard.innerHTML = `<p class = "shift">${keyShift}</p><p class = "unshift">${key}</p>`;
        //document.querySelectorAll("body > section.container> button > p").forEach(p => p.classList.add('alphabet');         
    }    
}
let inner = createInnerHTML(arr);

const keydownActiv = (event) => {
    event.preventDefault();   
    document.getElementById(event.code).classList.add('active');        
}

const keyupActiv = (event) => { 
    event.preventDefault();
    document.getElementById(event.code).classList.remove('active'); 
}

document.addEventListener('keydown', keydownActiv);
document.addEventListener('keyup', keyupActiv);

const mousedownActiv = (event) => {
    if (event.target.parentElement.tagName === 'BUTTON'){
        event.target.parentElement.classList.add('active');          
    } else {
        if (event.target.tagName === 'BUTTON'){
            event.target.classList.add('active');             
        }
    }
}

const mouseupActiv = (event) => {       
    event.target.classList.remove('active');            
    event.target.parentElement.classList.remove('active'); 
}

document.addEventListener('mousedown', mousedownActiv);
document.addEventListener('mouseup', mouseupActiv);

document.addEventListener('keydown', (event)=>{    
    if (event.ctrlKey && event.key === "Shift"){        
        console.log('!!' +language);
        if (language == 'en'){
            language = 'ru';
        } else {
            language = 'en';
        }
        localStorage.setItem('language', language);
    }
    console.log(language);
    document.querySelector("body > section.inf-area > pre > p").innerHTML = ` ${language.toUpperCase()}.`;
    createInnerHTML(arr);
    visualKeyLayout (); 
});

function visualKeyLayout (){
    document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.add('hidden'));
    document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.add('visual'));    
}
visualKeyLayout ();

document.addEventListener('keydown', (event)=>{
    if (event.shiftKey === true && event.ctrlKey === false){
        document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.add('hidden')); 
        document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.add('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.remove('visual'));       
    } 
});

document.addEventListener('keyup', (event)=>{
    if (event.key === "Shift" && event.ctrlKey === false){
        document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.add('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.remove('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.add('visual'));
    }
});

function inputeТextKey (event) {
    if (arrSpecKey.find((item) => event.code == item)){
        switch(event.key) {
             
        }

    } else {   
        textarea.value += document.querySelector(`#${event.code} > p.visual`).innerText;           
        textarea.selectionStart = textarea.selectionEnd = textarea.value.length; 
    } 
}

function inputeТextMouse (event) {
    if (event.target.parentElement.tagName === 'BUTTON'){
        if (arrSpecKey.find((item) => event.target.parentElement.id == item)){
            switch(event.key) {
                 
            }
        } else {  
            textarea.value += event.target.innerText;           
            textarea.selectionStart = textarea.selectionEnd = textarea.value.length;
        }
    }
}

document.addEventListener('keydown', (event)=>{    
    inputeТextKey (event);
});

document.querySelector("body > section.container").addEventListener('mousedown', (event)=>{    
    inputeТextMouse (event);
});


/*const infoLogger = (event) =>{
    console.log(`step ${step}`, event);
    console.log(`step ${step}`, event.target);
    console.log(`step ${step}`, event.target.value)
    console.log(`step ${step}`, event.type);
    console.log(`step ${step}`, event.code);
    console.log(`step ${step}`, event.which);
    console.log(`step ${step}`, event.key);
}
document.querySelector("body > section.container").addEventListener('click',infoLogger);
document.querySelector("body > section.container").addEventListener('mousedown',infoLogger);
document.querySelector("body > section.container").addEventListener('mouseup',infoLogger);
document.querySelector("body > section.container").addEventListener('keydown',infoLogger);
document.querySelector("body > section.container").addEventListener('keyup',infoLogger);
document.querySelector("body > section.container").addEventListener(Event,infoLogger);
document.querySelector("body > section.container").addEventListener('input',infoLogger);*/

/*document.addEventListener('input', (event)=>{
    //console.log()
    console.log(`step ${step}`, event.target);
    console.log(`step ${step}`, event.type);
    console.log(`step ${step}`, event.code);
    console.log(`step ${step}`, event.which);
    console.log(`step ${step}`, event.key);
    document.querySelector("body > textarea").innerHTML = input.value;
});*/



//keyboard.addEventListener('click', keypressActiv);

/*const selectButton = (event) => {     
    const arrPicture = document.querySelectorAll('.container_portfolio>img');    
   if (event.target.classList.contains('button_active') == false & event.target.tagName === 'BUTTON') {
        document.querySelectorAll('.container_button>button').forEach(button => button.classList.remove('button_active'));
        event.target.classList.add('button_active');
        Picture.append(arrPicture[0]);
        //arrPicture[arrPicture.length-1].after(arrPicture[0]);
       // document.querySelectorAll('.container_portfolio>img').forEach(img => img.style.order = Math.floor(Math.random() * document.querySelectorAll('.container_portfolio>img').length));         
    }
}*/
// document.querySelector("body > section")


/*
    step++;
    
    console.log(`step ${step}`, event.type);
    console.log(`step ${step}`, event.code);
    console.log(`step ${step}`, event.which);
    console.log(`step ${step}`, event.key);
    console.log(`step ${step}`, document.getElementById(event.which));
    console.log(`step ${step}`, event.target);
    console.log(`step ${step}`, event.currentTarget);
   console.log(`step ${step}`, event.target.parentElement);
   console.log(`step ${step}`, event.currentTarget.parentElement);
   console.log(event.target.children[0]);
   
*/