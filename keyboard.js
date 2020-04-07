"use strict"
let step = 0;
let language;
let capsLockDown = 'NO';

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
infArea.innerHTML = `<pre class="pre">CapsLock: <p> ${capsLockDown}</p>     Language (Ctrl+Shift):<p> ${language.toUpperCase()}</p></pre>`;
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
    ['MetaLeft', 57],
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
    ['Backspace', {keyShift: 'backSpace', key: 'backSpace' }, 0],
    ['Tab', {keyShift: 'Tab', key: 'Tab' }, 0],
    ['Enter', {keyShift: 'Enter', key: 'Enter' }, 0] ,
    ['ShiftLeft', {keyShift: 'Shift', key:'Shift'}, 0],
    ['ShiftRight', {keyShift: 'Shift', key:'Shift'}, 0],
    ['ControlLeft',{keyShift: 'Ctrl', key:'Ctrl'}, 0],
    ['ControlRight', {keyShift: 'Ctrl', key:'Ctrl'}, 0],
    ['AltLeft', {keyShift: 'Alt', key:'Alt'}, 0],
    ['AltRight', {keyShift: 'Alt', key:'Alt'}, 0],
    ['CapsLock', {keyShift: 'Caps Lock', key:'Caps Lock'}, 0],
    ['Escape', {keyShift: 'Esc', key:'Esc'}, 0],
    ['Space', {keyShift: 'Space', key:'Space'}, 0],
    ['ArrowLeft', {keyShift: 'Left', key:'Left'}, 0],
    ['ArrowUp', {keyShift: 'Up', key:'Up'}, 0],
    ['ArrowRight', {keyShift: 'Right', key:"Right"}, 0],
    ['ArrowDown', {keyShift: 'Down', key:'Down'}, 0],
    ['Delete', {keyShift: 'Del', key:'Del'}, 0],
    ['Digit0', {keyShift: ')', key: '0'}, 0],
    ['Digit1', {keyShift: '!', key: '1'}, 0],
    ['Digit2', {keyShift: '@', key: '2'}, 0],
    ['Digit3', {keyShift: '#', key: '3'}, 0],
    ['Digit4', {keyShift: '$', key: '4'}, 0],
    ['Digit5', {keyShift: '%', key: '5'}, 0],
    ['Digit6', {keyShift: '^', key: '6'}, 0],
    ['Digit7', {keyShift: '&', key: '7'}, 0],
    ['Digit8', {keyShift: '*', key: '8'}, 0],
    ['Digit9', {keyShift: '(', key: '9'}, 0],
    ['KeyA', {keyShift: 'A', key: 'a'}, 1],
    ['KeyB', {keyShift: 'B', key: 'b'}, 1],
    ['KeyC', {keyShift: 'C', key: 'c'}, 1],
    ['KeyD', {keyShift: 'D', key: 'd'}, 1],
    ['KeyE', {keyShift: 'E', key: 'e'}, 1],
    ['KeyF', {keyShift: 'F', key: 'f'}, 1],
    ['KeyG', {keyShift: 'G', key: 'g'}, 1],
    ['KeyH', {keyShift: 'H', key: 'h'}, 1],
    ['KeyI', {keyShift: 'I', key: 'i'}, 1],
    ['KeyJ', {keyShift: 'J', key: 'j'}, 1],
    ['KeyK', {keyShift: 'K', key: 'k'}, 1],
    ['KeyL', {keyShift: 'L', key: 'l'}, 1],
    ['KeyM', {keyShift: 'M', key: 'm'}, 1],
    ['KeyN', {keyShift: 'N', key: 'n'}, 1],
    ['KeyO', {keyShift: 'O', key: 'o'}, 1],
    ['KeyP', {keyShift: 'P', key: 'p'}, 1],
    ['KeyQ', {keyShift: 'Q', key: 'q'}, 1],
    ['KeyR', {keyShift: 'R', key: 'r'}, 1],
    ['KeyS', {keyShift: 'S', key: 's'}, 1],
    ['KeyT', {keyShift: 'T', key: 't'}, 1],
    ['KeyU', {keyShift: 'U', key: 'u'}, 1],
    ['KeyV', {keyShift: 'V', key: 'v'}, 1],
    ['KeyW', {keyShift: 'W', key: 'w'}, 1],
    ['KeyX', {keyShift: 'X', key: 'x'}, 1],
    ['KeyY', {keyShift: 'Y', key: 'y'}, 1],
    ['KeyZ', {keyShift: 'Z', key: 'z'}, 1],
    ['MetaLeft', {keyShift: 'Win', key: 'Win'}, 0],
    ['Semicolon', {keyShift: ':', key: ';'}, 0],
    ['Equal', {keyShift: '+', key: '='}, 0],
    ['Comma', {keyShift: '<', key: ','}, 0],
    ['Minus', {keyShift: '_', key: '-'}, 0],
    ['Period', {keyShift: '>', key: '.'}, 0],
    ['Slash', {keyShift: '?', key: '/'}, 0],
    ['Backquote', {keyShift: '~', key: '`'}, 0],
    ['BracketLeft', {keyShift: '{', key: '['}, 0],
    ['Backslash', {keyShift: '|', key: '\\'}, 0],
    ['BracketRight', {keyShift: '}', key: ']'}, 0],
    ['Quote', {keyShift: '"', key: '\''}, 0],
];
const arrKeyCyrillic = [
    ['Backspace', {keyShift: 'backSpace', key: 'backSpace' }, 0],
    ['Tab', {keyShift: 'Tab', key: 'Tab' }, 0],
    ['Enter', {keyShift: 'Enter', key: 'Enter' }, 0] ,
    ['ShiftLeft', {keyShift: 'Shift', key:'Shift'}, 0],
    ['ShiftRight', {keyShift: 'Shift', key:'Shift'}, 0],
    ['ControlLeft',{keyShift: 'Ctrl', key:'Ctrl'}, 0],
    ['ControlRight', {keyShift: 'Ctrl', key:'Ctrl'}, 0],
    ['AltLeft', {keyShift: 'Alt', key:'Alt'}, 0],
    ['AltRight', {keyShift: 'Alt', key:'Alt'}, 0],
    ['CapsLock', {keyShift: 'Caps Lock', key:'Caps Lock'}, 0],
    ['Escape', {keyShift: 'Esc', key:'Esc'}, 0],
    ['Space', {keyShift: 'Space', key:'Space'}, 0],
    ['ArrowLeft', {keyShift: 'Left', key:'Left'}, 0],
    ['ArrowUp', {keyShift: 'Up', key:'Up'}, 0],
    ['ArrowRight', {keyShift: 'Right', key:"Right"}, 0],
    ['ArrowDown', {keyShift: 'Down', key:'Down'}, 0],
    ['Delete', {keyShift: 'Del', key:'Del'}, 0],
    ['Digit0', {keyShift: ')', key:'0'}, 0],
    ['Digit1', {keyShift: '!', key:'1'}, 0],
    ['Digit2', {keyShift: '"', key:'2'}, 0],
    ['Digit3', {keyShift: '№', key:'3'}, 0],
    ['Digit4', {keyShift: ';', key:'4'}, 0],
    ['Digit5', {keyShift: '%', key:'5'}, 0],
    ['Digit6', {keyShift: ':', key:'6'}, 0],
    ['Digit7', {keyShift: '?', key:'7'}, 0],
    ['Digit8', {keyShift: '*', key:'8'}, 0],
    ['Digit9', {keyShift: '(', key:'9'}, 0],
    ['KeyA', {keyShift: 'Ф', key:'ф'}, 1],
    ['KeyB', {keyShift: 'И', key:'и'}, 1],
    ['KeyC', {keyShift: 'С', key:'с'}, 1],
    ['KeyD', {keyShift: 'В', key:'в'}, 1],
    ['KeyE', {keyShift: 'У', key:'у'}, 1],
    ['KeyF', {keyShift: 'А', key:'а'}, 1],
    ['KeyG', {keyShift: 'П', key:'п'}, 1],
    ['KeyH', {keyShift: 'Р', key:'р'}, 1],
    ['KeyI', {keyShift: 'Ш', key:'ш'}, 1],
    ['KeyJ', {keyShift: 'О', key:'о'}, 1],
    ['KeyK', {keyShift: 'Л', key:'л'}, 1],
    ['KeyL', {keyShift: 'Д', key:'д'}, 1],
    ['KeyM', {keyShift: 'Ь', key:'ь'}, 1],
    ['KeyN', {keyShift: 'Т', key:'т'}, 1],
    ['KeyO', {keyShift: 'Щ', key:'щ'}, 1],
    ['KeyP', {keyShift: 'З', key:'з'}, 1],
    ['KeyQ', {keyShift: 'Й', key:'й'}, 1],
    ['KeyR', {keyShift: 'К', key:'к'}, 1],
    ['KeyS', {keyShift: 'Ы', key:'ы'}, 1],
    ['KeyT', {keyShift: 'Е', key:'е'}, 1],
    ['KeyU', {keyShift: 'Г', key:'г'}, 1],
    ['KeyV', {keyShift: 'М', key:'м'}, 1],
    ['KeyW', {keyShift: 'Ц', key:'ц'}, 1],
    ['KeyX', {keyShift: 'Ч', key:'ч'}, 1],
    ['KeyY', {keyShift: 'Н', key:'н'}, 1],
    ['KeyZ', {keyShift: 'Я', key:'я'}, 1],
    ['MetaLeft', {keyShift: 'Win', key:'Win'}, 0],
    ['Semicolon', {keyShift: 'Ж', key:'ж'}, 1],
    ['Equal', {keyShift: '+', key:'='}, 0],
    ['Comma', {keyShift: 'Б', key:'б'}, 1],
    ['Minus', {keyShift: '_', key:'-'}, 0],
    ['Period', {keyShift:'Ю', key:'ю'}, 1],
    ['Slash', {keyShift: ',', key:'.'}, 0],
    ['Backquote', {keyShift: 'Ё', key:'ё'}, 1],
    ['BracketLeft', {keyShift: 'Х', key:'х'}, 1],
    ['Backslash', {keyShift: '/', key:'\\'}, 0],
    ['BracketRight', {keyShift: 'Ъ', key:'ъ'}, 1],
    ['Quote', {keyShift: 'Э', key:'э'}, 1],
];
const arrSpecKey = ['Backspace', 'Tab', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight', 'CapsLock', 'Escape', 'MetaLeft', 'Space', 'ArrowLeft', 'ArrowUp', 'ArrowRight', 'ArrowDown', 'Delete'];

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
    for (let [id, {keyShift, key}, index] of arr){
        let elemKeyboard = document.getElementById(id);
        elemKeyboard.innerHTML = `<p class = "shift">${keyShift}</p><p class = "unshift">${key}</p>`;
        if(index == 1){
            elemKeyboard.innerHTML = `<p class = "shift capslock">${keyShift}</p><p class = "unshift capslock">${key}</p>`;
        } else {
            elemKeyboard.innerHTML = `<p class = "shift">${keyShift}</p><p class = "unshift">${key}</p>`;
        }
        //document.querySelectorAll("body > section.container> button > p").forEach(p => p.classList.add('alphabet');         
    }    
}
let inner = createInnerHTML(arr);

const keydownActiv = (event) => {
    /*if (event.code === 'MetaLeft'){
        event.stopPropagation();
    }*/
    //event.preventDefault();

    document.getElementById(event.code).classList.add('active');        
}

const keyupActiv = (event) => { 
    //event.preventDefault();
    document.getElementById(event.code).classList.remove('active'); 
}

const mousedownActiv = (event) => {
    if (event.target.parentElement.tagName === 'BUTTON'){
        event.target.parentElement.classList.add('active');          
    } /*else {
        if (event.target.tagName === 'BUTTON'){
            event.target.classList.add('active');             
        }
    }*/
}

const mouseupActiv = (event) => {       
    event.target.classList.remove('active');            
    event.target.parentElement.classList.remove('active'); 
}

const changeLanguage = (event)=>{    
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
    document.querySelector("body > section.inf-area > pre > p:nth-child(2)").innerHTML = ` ${language.toUpperCase()}`;
    
    createInnerHTML(arr);
    visualKeyLayout (); 
};

function visualKeyLayout (){
    if (capsLockDown != 'CapsLock'){
        document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.add('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.remove('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.add('visual'));    
    } else {
        document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.add('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.shift").forEach(shift => shift.classList.remove('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift").forEach(shift => shift.classList.add('visual'));
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.add('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.add('hidden'));
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.remove('visual'));
    }
}
visualKeyLayout ();

const keydownOnHidden = (event)=>{
    if (event.shiftKey === true && event.ctrlKey === false){
        document.querySelectorAll("body > section.container> button > p:nth-child(1)").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p:nth-child(2)").forEach(unshift => unshift.classList.add('hidden')); 
        document.querySelectorAll("body > section.container> button > p:nth-child(1)").forEach(shift => shift.classList.add('visual'));
        document.querySelectorAll("body > section.container> button > p:nth-child(2)").forEach(unshift => unshift.classList.remove('visual'));       
    } 
};

const keyupOnHidden = (event)=>{
    if (event.key === "Shift" && event.ctrlKey === false){
        document.querySelectorAll("body > section.container> button > p:nth-child(1)").forEach(shift => shift.classList.add('hidden'));
        document.querySelectorAll("body > section.container> button > p:nth-child(2)").forEach(unshift => unshift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p:nth-child(1)").forEach(shift => shift.classList.remove('visual'));
        document.querySelectorAll("body > section.container> button > p:nth-child(2)").forEach(unshift => unshift.classList.add('visual'));       
    }
};

let count;
const keydownOnCapsLock = (event) => {    
        if (event.code === "CapsLock" && capsLockDown === 'NO' ){
            console.log(event);
            console.log(capsLockDown);
            capsLockDown = 'CapsLock';
            document.querySelector("body > section.inf-area > pre > p:nth-child(1)").innerHTML = ` ${capsLockDown}`;
            document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.add('visual'));
            document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.remove('visual'));
            document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.remove('hidden'));
            document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.add('hidden'));
            
        }
        if (event.code != "CapsLock" && capsLockDown === 'CapsLock' ){
            console.log(event);
            console.log(capsLockDown);
            //capsLockDown = 'CapsLock';
            //document.querySelector("body > section.inf-area > pre > p:nth-child(1)").innerHTML = ` ${capsLockDown}`;
            document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.add('visual'));
            document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.remove('visual'));
            document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.remove('hidden'));
            document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.add('hidden'));
        } 
        count +=1;
};

const keydownUpCapsLock = (event) => {    
    if (event.code === "CapsLock" && capsLockDown === 'CapsLock'){
        console.log(event);
        console.log(capsLockDown);
        capsLockDown = 'NO';        
        document.querySelector("body > section.inf-area > pre > p:nth-child(1)").innerHTML = ` ${capsLockDown}`;
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.add('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.remove('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.add('visual'));
    }
    /*if (event.code != "CapsLock" && capsLockDown === 'CapsLock' ){
        console.log(event);
        console.log(capsLockDown);
        //capsLockDown = 'CapsLock';
        //document.querySelector("body > section.inf-area > pre > p:nth-child(1)").innerHTML = ` ${capsLockDown}`;
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.add('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.remove('visual'));
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.add('hidden'));
    }
    if (event.code === "CapsLock" && capsLockDown === 'CapsLock' ){
        console.log(capsLockDown);
        capsLockDown = 'NO';
        console.log(event);
        document.querySelector("body > section.inf-area > pre > p:nth-child(1)").innerHTML = ` ${capsLockDown}`;
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.add('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.remove('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.add('visual'));
    }
    /*if (event.code != "CapsLock" && capsLockDown === 'NO' && event.ctrlKey === false && event.key != "Shift"){
        console.log(`1${event}`);*/
        
        /*
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.add('visual'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.remove('visual'));
        document.querySelectorAll("body > section.container> button > p.shift.capslock").forEach(shift => shift.classList.remove('hidden'));
        document.querySelectorAll("body > section.container> button > p.unshift.capslock").forEach(shift => shift.classList.add('hidden'));*/
   // }


    
};

function inputeТextKey (event) {
    if (arrSpecKey.find((item) => event.code == item)){        
        switch(event.code) {
            case 'Backspace':
                if (textarea.selectionStart !=0){                    
                    if (textarea.selectionStart != textarea.selectionEnd){
                        textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, "end");
                    } else {
                        textarea.setRangeText('', textarea.selectionStart-1, textarea.selectionEnd, "end");
                    }                    
                }
                break;
            case 'Delete':
                if (textarea.selectionStart != textarea.selectionEnd){
                    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, "end");
                } else {
                    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd+1, "end");
                }
                break;
            case 'Enter': 
                textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, "end");
                break;
            case 'Tab':
                textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, "end");
                break;
            case 'Space': 
                textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, "end");
                break;
            case 'ArrowLeft':
                textarea.selectionStart = textarea.selectionEnd -=1;
                break;
            case 'ArrowRight':
                textarea.selectionStart = textarea.selectionEnd +=1;
                break;
            case 'ArrowDown':
                let pos = textarea.selectionEnd;               
                let prevLine = textarea.value.lastIndexOf('\n', pos);
                let nextLineEnter = textarea.value.indexOf('\n', pos + 1);
                let nextLine = textarea.value.slice(pos + 1, pos + 2);
                console.log('"0"' + textarea.minLength);
                console.log('"0"' + textarea.selectionEnd);
                console.log(`"1" + ${textarea.selectionEnd+1}`);
                console.log(`"2" + ${textarea.selectionEnd+2}`);
                console.log(pos, prevLine, nextLineEnter, nextLine);
                //6 6 10 "ы"
                //5 -1 6 ""
                //if (prevLine)
                if (nextLineEnter != -1 || nextLine != '') {

                    pos = pos - prevLine;
                    console.log(!pos);
                    textarea.selectionStart = textarea.selectionEnd = nextLineEnter + pos;
                    console.log(!!textarea.selectionStart);
                }
                break;
                case 'ArrowUp':
                    let posup = textarea.selectionEnd;
                    let prevLineup = textarea.value.lastIndexOf('\n', posup);
                    let TwoBLine = textarea.value.lastIndexOf('\n', prevLineup - 1);
                    if (prevLineup === -1) return;
                    posup = posup - prevLineup;
                    textarea.selectionStart = textarea.selectionEnd = TwoBLine + posup;
                    break;
        }

    } else { 
        textarea.setRangeText(document.querySelector(`#${event.code} > p.visual`).innerText, textarea.selectionStart, textarea.selectionEnd, "end");        
    } 
}

function inputeТextMouse (event) {
    if (event.target.parentElement.tagName === 'BUTTON'){
        if (arrSpecKey.find((item) => event.target.parentElement.id == item)){            
            switch(event.target.parentElement.id) {
                case 'Backspace':
                    if (textarea.selectionStart !=0){                    
                        if (textarea.selectionStart != textarea.selectionEnd){
                            textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, "end");
                        } else {
                            textarea.setRangeText('', textarea.selectionStart-1, textarea.selectionEnd, "end");
                        }                    
                    }
                    textarea.focus();
                    break;
                case 'Delete':
                    if (textarea.selectionStart != textarea.selectionEnd){
                        textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd, "end");
                    } else {
                        textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd+1, "end");
                    }
                    textarea.focus();
                    break;
                case 'Enter': 
                    textarea.setRangeText('\n', textarea.selectionStart, textarea.selectionEnd, "end");
                    textarea.focus();
                    break;
                case 'Tab':
                    textarea.setRangeText('\t', textarea.selectionStart, textarea.selectionEnd, "end");
                    textarea.focus();
                    break;
                case 'Space': 
                    textarea.setRangeText(' ', textarea.selectionStart, textarea.selectionEnd, "end");
                    textarea.focus();
                    break;
                case 'ArrowLeft':
                    textarea.selectionStart = textarea.selectionEnd -=1;
                    textarea.focus();
                    break;
                case 'ArrowRight':
                    textarea.selectionStart = textarea.selectionEnd +=1;
                    textarea.focus();
                    break;
                case 'ArrowDown':
                    let pos = textarea.selectionEnd;                        
                    let prevLine = textarea.value.lastIndexOf('\n', pos);
                    let nextLineEnter = textarea.value.indexOf('\n', pos + 1);
                    let nextLine = textarea.value.slice(pos + 1, pos + 2);
                    console.log('"0"' + textarea.minLength);
                    console.log('"0"' + textarea.selectionEnd);
                    console.log(`"1" + ${textarea.selectionEnd+1}`);
                    console.log(`"2" + ${textarea.selectionEnd+2}`);
                    console.log(pos, prevLine, nextLineEnter, nextLine);
                    //6 6 10 "ы"
                    //5 -1 6 ""
                    //if (prevLine)
                    if (nextLineEnter != -1 || nextLine != '') {
                                    pos = pos - prevLine;
                        console.log(!pos);
                        textarea.selectionStart = textarea.selectionEnd = nextLineEnter + pos;
                        console.log(!!textarea.selectionStart);
                    }
                    break;
                case 'ArrowUp':
                    let posup = textarea.selectionEnd;
                    let prevLineup = textarea.value.lastIndexOf('\n', posup);
                    let TwoBLine = textarea.value.lastIndexOf('\n', prevLineup - 1);
                    if (prevLineup === -1) return;
                    posup = posup - prevLineup;
                    textarea.selectionStart = textarea.selectionEnd = TwoBLine + posup;
                    break;
                }
        } else {
            textarea.setRangeText(event.target.innerText, textarea.selectionStart, textarea.selectionEnd, "end");            
            textarea.focus();
        }
    }
}

document.addEventListener('keydown', (event)=>{    
    event.preventDefault();
    if (arrKeyCode.find((item) => event.code === item[0,0])){ 
        keydownActiv(event); 
        changeLanguage(event);
        keydownOnHidden(event);
        inputeТextKey (event);
        keydownUpCapsLock(event);
        
    }
});

document.addEventListener('keyup', (event)=>{
    if (arrKeyCode.find((item) => event.code == item[0, 0])){
        keyupActiv(event);
        keyupOnHidden(event);
        keydownOnCapsLock(event);
        
    }
});

/*document.addEventListener('keypress', (event)=>{
    if (arrKeyCode.find((item) => event.code == item[0, 0])){        
        
        
    }
});*/

document.querySelector("body > section.container").addEventListener('mousedown', (event)=>{    
    mousedownActiv(event);
    inputeТextMouse (event);
});

document.querySelector("body > section.container").addEventListener('mouseup', (event) => {
    mouseupActiv(event);
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