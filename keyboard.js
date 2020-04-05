/*let textarea = {
    
	name : "textwindow",
    id : "text",
    cols : 30,
    rows : 10,
    className : "areatext",
    create(){

        document.createElement('textarea');
    }
}*/

let textarea = document.createElement('textarea');
textarea.className = "areatext";
document.body.append(textarea);

let keyboard = document.createElement('section');
keyboard.className = "container";
document.body.append(keyboard);

const arr = [
[8, { keyLatinShift: 'undefine', keyLatin: 'backSpace' }, { keyCyrillicShift: 'undefine', keyCyrillic: 'backSpace' }, 15],
[9, { keyLatinShift: 'undefine', keyLatin: 'Tab' }, { keyCyrillicShift: 'undefine', keyCyrillic: 'Tab' }, 16],
[13, { keyLatinShift: 'undefine', keyLatin: 'Enter' }, { keyCyrillicShift: 'undefine', keyCyrillic: 'Enter' }, 42] ,
[16, {keyLatinShift: 'undefine', keyLatin: 'Shift'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Shift'}, 43],
[16, {keyLatinShift: 'undefine', keyLatin: 'Shift'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Shift'}, 55],
[17, {keyLatinShift: 'undefine', keyLatin: 'Ctrl'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ctrl'}, 56],
[17, {keyLatinShift: 'undefine', keyLatin: 'Ctrl'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ctrl'}, 64],
[18, {keyLatinShift: 'undefine', keyLatin: 'Alt'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Alt'}, 58],
[18, {keyLatinShift: 'undefine', keyLatin: 'Alt'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Alt'}, 60],
[20, {keyLatinShift: 'undefine', keyLatin: 'Caps Lock'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Caps Lock'}, 30],
[27, {keyLatinShift: 'undefine', keyLatin: 'Esc'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Esc'}, 0],
[32, {keyLatinShift: 'undefine', keyLatin: 'Space'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Space '}, 59],
[37, {keyLatinShift: 'undefine', keyLatin: 'Left'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Left'}, 61],
[38, {keyLatinShift: 'undefine', keyLatin: 'Up'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Up'}, 54],
[39, {keyLatinShift: 'undefine', keyLatin: "Right"}, {keyCyrillicShift: 'undefine', keyCyrillic:"Right"}, 63],
[40, {keyLatinShift: 'undefine', keyLatin: 'Down'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Down'}, 62],
[46, {keyLatinShift: 'undefine', keyLatin: 'Del'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Del'}, 29],
[48, {keyLatinShift: ')', keyLatin: '0'}, {keyCyrillicShift: ')', keyCyrillic:'0'}, 11],
[49, {keyLatinShift: '!', keyLatin: '1'}, {keyCyrillicShift: '!', keyCyrillic:'1'}, 2],
[50, {keyLatinShift: '@', keyLatin: '2'}, {keyCyrillicShift: '"', keyCyrillic:'2'}, 3],
[51, {keyLatinShift: '#', keyLatin: '3'}, {keyCyrillicShift: '№', keyCyrillic:'3'}, 4],
[52, {keyLatinShift: '$', keyLatin: '4'}, {keyCyrillicShift: ';', keyCyrillic:'4'}, 5],
[53, {keyLatinShift: '%', keyLatin: '5'}, {keyCyrillicShift: '%', keyCyrillic:'5'}, 6],
[54, {keyLatinShift: '^', keyLatin: '6'}, {keyCyrillicShift: ':', keyCyrillic:'6'}, 7],
[55, {keyLatinShift: '&', keyLatin: '7'}, {keyCyrillicShift: '?', keyCyrillic:'7'}, 8],
[56, {keyLatinShift: '*', keyLatin: '8'}, {keyCyrillicShift: '*', keyCyrillic:'8'}, 9],
[57, {keyLatinShift: '(', keyLatin: '9'}, {keyCyrillicShift: '(', keyCyrillic:'9'}, 10],
[65, {keyLatinShift: 'undefine', keyLatin: 'A'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ф'}, 31],
[66, {keyLatinShift: 'undefine', keyLatin: 'B'}, {keyCyrillicShift: 'undefine', keyCyrillic:'И'}, 48],
[67, {keyLatinShift: 'undefine', keyLatin: 'C'}, {keyCyrillicShift: 'undefine', keyCyrillic:'С'}, 46],
[68, {keyLatinShift: 'undefine', keyLatin: 'D'}, {keyCyrillicShift: 'undefine', keyCyrillic:'В'}, 33],
[69, {keyLatinShift: 'undefine', keyLatin: 'E'}, {keyCyrillicShift: 'undefine', keyCyrillic:'У'}, 19],
[70, {keyLatinShift: 'undefine', keyLatin: 'F'}, {keyCyrillicShift: 'undefine', keyCyrillic:'А'}, 34],
[71, {keyLatinShift: 'undefine', keyLatin: 'G'}, {keyCyrillicShift: 'undefine', keyCyrillic:'П'}, 35],
[72, {keyLatinShift: 'undefine', keyLatin: 'H'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Р'}, 36],
[73, {keyLatinShift: 'undefine', keyLatin: 'I'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ш'}, 24],
[74, {keyLatinShift: 'undefine', keyLatin: 'J'}, {keyCyrillicShift: 'undefine', keyCyrillic:'О'}, 37],
[75, {keyLatinShift: 'undefine', keyLatin: 'K'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Л'}, 38],
[76, {keyLatinShift: 'undefine', keyLatin: 'L'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Д'}, 39],
[77, {keyLatinShift: 'undefine', keyLatin: 'M'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ь'}, 50],
[78, {keyLatinShift: 'undefine', keyLatin: 'N'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Т'}, 49],
[79, {keyLatinShift: 'undefine', keyLatin: 'O'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Щ'}, 25],
[80, {keyLatinShift: 'undefine', keyLatin: 'P'}, {keyCyrillicShift: 'undefine', keyCyrillic:'З'}, 26],
[81, {keyLatinShift: 'undefine', keyLatin: 'Q'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Й'}, 17],
[82, {keyLatinShift: 'undefine', keyLatin: 'R'}, {keyCyrillicShift: 'undefine', keyCyrillic:'К'}, 20],
[83, {keyLatinShift: 'undefine', keyLatin: 'S'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ы'}, 32],
[84, {keyLatinShift: 'undefine', keyLatin: 'T'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Е'}, 21],
[85, {keyLatinShift: 'undefine', keyLatin: 'U'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Г'}, 23],
[86, {keyLatinShift: 'undefine', keyLatin: 'V'}, {keyCyrillicShift: 'undefine', keyCyrillic:'М'}, 47],
[87, {keyLatinShift: 'undefine', keyLatin: 'W'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ц'}, 18],
[88, {keyLatinShift: 'undefine', keyLatin: 'X'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ч'}, 45],
[89, {keyLatinShift: 'undefine', keyLatin: 'Y'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Н'}, 22],
[90, {keyLatinShift: 'undefine', keyLatin: 'Z'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Я'}, 44],
[91, {keyLatinShift: 'undefine', keyLatin: 'Win'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Win'}, 57],
[186, {keyLatinShift: ':', keyLatin: ';'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ж'}, 40],
[187, {keyLatinShift: '+', keyLatin: '='}, {keyCyrillicShift: '+', keyCyrillic:'='}, 13],
[188, {keyLatinShift: '<', keyLatin: ','}, {keyCyrillicShift: 'undefine', keyCyrillic:'Б'}, 51],
[189, {keyLatinShift: '_', keyLatin: '-'}, {keyCyrillicShift: '_', keyCyrillic:'-'}, 12],
[190, {keyLatinShift: '>', keyLatin: '.'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ю'}, 52],
[191, {keyLatinShift: '?', keyLatin: '/'}, {keyCyrillicShift: ',', keyCyrillic:'.'}, 53],
[192, {keyLatinShift: '~', keyLatin: '`'}, {keyCyrillicShift: 'undefine', keyCyrillic:'ё'}, 1],
[219, {keyLatinShift: '[', keyLatin: '{'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Х'}, 27],
[220, {keyLatinShift: '|', keyLatin: '\\'}, {keyCyrillicShift: '/', keyCyrillic:'\\'}, 14],
[221, {keyLatinShift: '}', keyLatin: ']'}, {keyCyrillicShift: 'undefine', keyCyrillic:'Ъ'}, 28],
[222, {keyLatinShift: '"', keyLatin: '\''}, {keyCyrillicShift: 'undefine', keyCyrillic:'Э'}, 41],
]; 
    
function CreateElement(arr){
    for (let i of arr){
        
        let elemKeyboard = document.createElement('button');    
        [elemKeyboard.id, , ,elemKeyboard.style.order] = i;
        
        //elemKeyboard.id = i[0];
        elemKeyboard.className = "key alphabet latin";    
        elemKeyboard.innerText = i[1].keyLatin;
        //elemKeyboard.style.order = i[3];*/
        document.querySelector("body > section").append(elemKeyboard);
    }
    
}

let keybutton = new CreateElement(arr);

/*function CreateElement(nameL, nameK, eventwhich){
    let button = document.createElement('button');    
    button.id = eventwhich;
    button.className = "container key alphabet latin";    
    button.innerText = `${nameL} ${nameK}`;    
    document.body.append(button);  
    
}

let keybutton = CreateElement('a', 'ф', 65);*/

