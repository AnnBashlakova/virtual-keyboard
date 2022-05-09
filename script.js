
const block = document.createElement('div');
block.classList.add('block');
document.body.append(block);

const title = document.createElement('h1');
title.innerHTML = "RSS Virtual keyboard - en";
block.append(title);

let input = document.createElement('textarea');
block.append(input);
input.focus();

let keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
block.append(keyboard);



let descr = document.createElement('div');
descr.classList.add('descr');
descr.innerHTML = "Клавиатура создана в Mac OS, переключение языка не реализовано";
block.append(descr);


const Allbtn = ['§', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Bakspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']','Enter', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';',"'", '\\','Shift','`', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.','/','↑' ,'Shift','fn', 'control', 'option', 'command', 'Space', 'command','option', '←','↓','→',];



function CreateBtn(){
    for (let i = 0; i <= Allbtn.length-1; i++){        
        keyboard.append(document.createElement('div'));
    }
    let btns = keyboard.querySelectorAll('div');
        btns.forEach(element => element.classList.add('k-key'));
        btns.forEach((el, i) => el.innerHTML=`${Allbtn[i]}`)
}
CreateBtn();

document.addEventListener('keypress', (target) =>{

    
    let press = keyboard.querySelectorAll('div');
    press.forEach(element => {
        if (element.textContent == target.key){
            element.classList.add('active');
        }
        if (element.textContent !== target.key){
            element.classList.remove('active');
        }
    });
});



let press = keyboard.querySelectorAll('div');

press.forEach(el =>el.addEventListener('click', ()=>{
    let inputs = input.value;
    console.log(el.textContent);
    if (el.textContent.length == 1){
        input.value += el.textContent;
        input.focus();
    }

    if (el.textContent == 'Tab'){
        input.value += '   ';
        input.focus();
    }
    if (el.textContent == 'Enter'){
        input.value += '\n';
        input.focus();
        // console.log(input.value.split(''))
    }
    if (el.textContent == 'Space'){
        input.value += ' ';
        input.focus();        
    }
    if (el.textContent == 'Bakspace'){
        input.value = inputs.slice(0, -1);
        input.focus();        
    }
    
    if (el.textContent=='CapsLock'){
        
        for (let i = 0; i < Allbtn.length-1; i++){        
            if (!el.classList.contains('active') && press[i].textContent.length == 1 && press[i].textContent == press[i].textContent.toLowerCase()){
            press[i].innerHTML = press[i].textContent.toUpperCase();
            }
            if (el.classList.contains('active') && press[i].textContent.length == 1 && press[i].textContent == press[i].textContent.toUpperCase()){
                press[i].innerHTML = press[i].textContent.toLowerCase();
            }
        }    
        el.classList.toggle('active');
    }  
        
}));



