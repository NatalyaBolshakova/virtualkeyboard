"use strict"
let step = 0;
let language;

let header = document.createElement('h1');
header.className = "header";
header.innerHTML = 'Keyboard QWERTY. Windows OS';
document.body.append(header);

let textarea = document.createElement('textarea');
textarea.className = "areatext";
document.body.append(textarea);


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

const arr = [
['Backspace', { keyLatinShift: 'undefine', keyLatin: 'backSpace' }, { keyCyrillicShift: 'undefine', keyCyrillic: 'backSpace' }, 15],
['Tab', { keyLatinShift: 'undefine', keyLatin: 'Tab' }, { keyCyrillicShift: 'undefine', keyCyrillic: 'Tab' }, 16],
['Enter', { keyLatinShift: 'undefine', keyLatin: 'Enter' }, { keyCyrillicShift: 'undefine', keyCyrillic: 'Enter' }, 42] ,
['ShiftLeft', {keyLatinShift: 'undefine', keyLatin: 'Shift'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Shift'}, 43],
['ShiftRight', {keyLatinShift: 'undefine', keyLatin: 'Shift'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Shift'}, 55],
['ControlLeft', {keyLatinShift: 'undefine', keyLatin: 'Ctrl'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ctrl'}, 56],
['ControlRight', {keyLatinShift: 'undefine', keyLatin: 'Ctrl'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ctrl'}, 64],
['AltLeft', {keyLatinShift: 'undefine', keyLatin: 'Alt'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Alt'}, 58],
['AltRight', {keyLatinShift: 'undefine', keyLatin: 'Alt'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Alt'}, 60],
['CapsLock', {keyLatinShift: 'undefine', keyLatin: 'Caps Lock'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Caps Lock'}, 30],
['Escape', {keyLatinShift: 'undefine', keyLatin: 'Esc'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Esc'}, 0],
['Space', {keyLatinShift: 'undefine', keyLatin: 'Space'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Space '}, 59],
['ArrowLeft', {keyLatinShift: 'undefine', keyLatin: 'Left'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Left'}, 61],
['ArrowUp', {keyLatinShift: 'undefine', keyLatin: 'Up'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Up'}, 54],
['ArrowRight', {keyLatinShift: 'undefine', keyLatin: "Right"}, {keyCyrillicShift: 'undefine', keyCyrillic:"Right"}, 63],
['ArrowDown', {keyLatinShift: 'undefine', keyLatin: 'Down'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Down'}, 62],
['Delete', {keyLatinShift: 'undefine', keyLatin: 'Del'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Del'}, 29],
['Digit0', {keyLatinShift: ')', keyLatin: '0'}, {keyCyrillicShift: ')', keyCyrillic:'0'}, 11],
['Digit1', {keyLatinShift: '!', keyLatin: '1'}, {keyCyrillicShift: '!', keyCyrillic:'1'}, 2],
['Digit2', {keyLatinShift: '@', keyLatin: '2'}, {keyCyrillicShift: '"', keyCyrillic:'2'}, 3],
['Digit3', {keyLatinShift: '#', keyLatin: '3'}, {keyCyrillicShift: '№', keyCyrillic:'3'}, 4],
['Digit4', {keyLatinShift: '$', keyLatin: '4'}, {keyCyrillicShift: ';', keyCyrillic:'4'}, 5],
['Digit5', {keyLatinShift: '%', keyLatin: '5'}, {keyCyrillicShift: '%', keyCyrillic:'5'}, 6],
['Digit6', {keyLatinShift: '^', keyLatin: '6'}, {keyCyrillicShift: ':', keyCyrillic:'6'}, 7],
['Digit7', {keyLatinShift: '&', keyLatin: '7'}, {keyCyrillicShift: '?', keyCyrillic:'7'}, 8],
['Digit8', {keyLatinShift: '*', keyLatin: '8'}, {keyCyrillicShift: '*', keyCyrillic:'8'}, 9],
['Digit9', {keyLatinShift: '(', keyLatin: '9'}, {keyCyrillicShift: '(', keyCyrillic:'9'}, 10],
['KeyA', {keyLatinShift: 'undefine', keyLatin: 'A'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ф'}, 31],
['KeyB', {keyLatinShift: 'undefine', keyLatin: 'B'}, {keyCyrillicShift: 'undefine', keyCyrillic:'И'}, 48],
['KeyC', {keyLatinShift: 'undefine', keyLatin: 'C'}, {keyCyrillicShift: 'undefine', keyCyrillic:'С'}, 46],
['KeyD', {keyLatinShift: 'undefine', keyLatin: 'D'}, {keyCyrillicShift: 'undefine', keyCyrillic:'В'}, 33],
['KeyE', {keyLatinShift: 'undefine', keyLatin: 'E'}, {keyCyrillicShift: 'undefine', keyCyrillic:'У'}, 19],
['KeyF', {keyLatinShift: 'undefine', keyLatin: 'F'}, {keyCyrillicShift: 'undefine', keyCyrillic:'А'}, 34],
['KeyG', {keyLatinShift: 'undefine', keyLatin: 'G'}, {keyCyrillicShift: 'undefine', keyCyrillic:'П'}, 35],
['KeyH', {keyLatinShift: 'undefine', keyLatin: 'H'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Р'}, 36],
['KeyI', {keyLatinShift: 'undefine', keyLatin: 'I'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ш'}, 24],
['KeyJ', {keyLatinShift: 'undefine', keyLatin: 'J'}, {keyCyrillicShift: 'undefine', keyCyrillic:'О'}, 37],
['KeyK', {keyLatinShift: 'undefine', keyLatin: 'K'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Л'}, 38],
['KeyL', {keyLatinShift: 'undefine', keyLatin: 'L'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Д'}, 39],
['KeyM', {keyLatinShift: 'undefine', keyLatin: 'M'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ь'}, 50],
['KeyN', {keyLatinShift: 'undefine', keyLatin: 'N'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Т'}, 49],
['KeyO', {keyLatinShift: 'undefine', keyLatin: 'O'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Щ'}, 25],
['KeyP', {keyLatinShift: 'undefine', keyLatin: 'P'}, {keyCyrillicShift: 'undefine', keyCyrillic:'З'}, 26],
['KeyQ', {keyLatinShift: 'undefine', keyLatin: 'Q'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Й'}, 17],
['KeyR', {keyLatinShift: 'undefine', keyLatin: 'R'}, {keyCyrillicShift: 'undefine', keyCyrillic:'К'}, 20],
['KeyS', {keyLatinShift: 'undefine', keyLatin: 'S'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ы'}, 32],
['KeyT', {keyLatinShift: 'undefine', keyLatin: 'T'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Е'}, 21],
['KeyU', {keyLatinShift: 'undefine', keyLatin: 'U'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Г'}, 23],
['KeyV', {keyLatinShift: 'undefine', keyLatin: 'V'}, {keyCyrillicShift: 'undefine', keyCyrillic:'М'}, 47],
['KeyW', {keyLatinShift: 'undefine', keyLatin: 'W'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ц'}, 18],
['KeyX', {keyLatinShift: 'undefine', keyLatin: 'X'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ч'}, 45],
['KeyY', {keyLatinShift: 'undefine', keyLatin: 'Y'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Н'}, 22],
['KeyZ', {keyLatinShift: 'undefine', keyLatin: 'Z'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Я'}, 44],
['OSLeft', {keyLatinShift: 'undefine', keyLatin: 'Win'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Win'}, 57],
['Semicolon', {keyLatinShift: ':', keyLatin: ';'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ж'}, 40],
['Equal', {keyLatinShift: '+', keyLatin: '='}, {keyCyrillicShift: '+', keyCyrillic:'='}, 13],
['Comma', {keyLatinShift: '<', keyLatin: ','}, {keyCyrillicShift: 'undefine', keyCyrillic:'Б'}, 51],
['Minus', {keyLatinShift: '_', keyLatin: '-'}, {keyCyrillicShift: '_', keyCyrillic:'-'}, 12],
['Period', {keyLatinShift: '>', keyLatin: '.'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ю'}, 52],
['Slash', {keyLatinShift: '?', keyLatin: '/'}, {keyCyrillicShift: ',', keyCyrillic:'.'}, 53],
['Backquote', {keyLatinShift: '~', keyLatin: '`'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ё'}, 1],
['BracketLeft', {keyLatinShift: '{', keyLatin: '['}, {keyCyrillicShift: 'undefine', keyCyrillic:'Х'}, 27],
['Backslash', {keyLatinShift: '|', keyLatin: '\\'}, {keyCyrillicShift: '/', keyCyrillic:'\\'}, 14],
['BracketRight', {keyLatinShift: '}', keyLatin: ']'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ъ'}, 28],
['Quote', {keyLatinShift: '"', keyLatin: '\''}, {keyCyrillicShift: 'undefine', keyCyrillic:'Э'}, 41],
]; 

function CreateElement(arr){
    for (let [id, , , order] of arr){
        let elemKeyboard = document.createElement('button');
        [elemKeyboard.id, elemKeyboard.style.order] = [id,order];
        elemKeyboard.className = "key alphabet latin";
        document.querySelector("body > .container").append(elemKeyboard);         
    }
}
let keybutton = new CreateElement(arr);

function createInnerHTML(arr){
    for (let [id, {keyLatinShift, keyLatin}, {keyCyrillicShift, keyCyrillic}, ] of arr){
        let elemKeyboard = document.getElementById(id);
        if (language == 'en') {
            if (keyLatinShift == 'undefine') {
                elemKeyboard.innerHTML = keyLatin;
            } else{
                elemKeyboard.classList.add("key_container");
                elemKeyboard.innerHTML = `<p>${keyLatinShift}</p><p>${keyLatin}</p>`;
            }   
        } else {
            if (keyCyrillicShift == 'undefine') {
                elemKeyboard.classList.remove("key_container");
                elemKeyboard.innerHTML = keyCyrillic;
            } else{
                elemKeyboard.classList.add("key_container");
                elemKeyboard.innerHTML = `<p>${keyCyrillicShift}</p><p>${keyCyrillic}</p>`;
            }
        }            
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
});

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


/*function CreateElement(nameL, nameK, eventwhich){
    let button = document.createElement('button');    
    button.id = eventwhich;
    button.className = "container key alphabet latin";    
    button.innerText = `${nameL} ${nameK}`;    
    document.body.append(button);  
    
}

let keybutton = CreateElement('a', 'ф', 65);*/

