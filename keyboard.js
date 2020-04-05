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

/*function arr(){  
    let arr = [];
    const event = 'keydown';
    
     for (let keycode = 48; keycode < 58 || keycode >= 65 & keycode < 91; keycode++){
        let key = String.fromCodePoint(keycode).toLowerCase();
       arr.push([keycode, key]);
     };
     return arr;
    }  */ 

function arr(){  
    let arr = [];
    const event = 'keydown';
    
     for (let keycode = 48; keycode < 91; keycode++){
        let key = String.fromCodePoint(keycode).toLowerCase();
       arr.push([keycode, key]);
     };
     return arr;
    }  
    
function CreateElement(arr){
    for (let i of arr){
        let button = document.createElement('button');    
        button.id = i[0];
        button.className = "container key alphabet latin";    
        button.innerText = `${i[1]}`;          
        document.body.append(button);
        
    }
    
}

let keybutton = new CreateElement(arr());

/*function CreateElement(nameL, nameK, eventwhich){
    let button = document.createElement('button');    
    button.id = eventwhich;
    button.className = "container key alphabet latin";    
    button.innerText = `${nameL} ${nameK}`;    
    document.body.append(button);  
    
}

let keybutton = CreateElement('a', 'ф', 65);*/

