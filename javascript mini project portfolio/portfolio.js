let highlightBox = document.querySelector('.highlight-box');

let titles = [
    ['🌱', 'Educator'],
    ['💻', 'Programmer'],
    ['🌐', 'Developer'],
    ['🔥', 'Motivator'],
    ['📔', 'Content Creator']
]

let i = 0;

setInterval(function(){
    setTimeout(function(y){
        highlightBox.innerHTML = '';
        let a = document.createElement('span');
        let b = document.createElement('div');
        let c = document.createElement('span');
        
        a.innerText = titles[y][0];
        a.classList.add('highlight1');
        b.classList.add('highlight2');
        c.innerText = titles[y][1];
        
        b.appendChild(c);
        highlightBox.appendChild(a);
        highlightBox.appendChild(b);
        i++;
        if(i >= 5){
            i = 0;
        }
    },0,i)
},1500)
let j=0;
let colorbox = document.querySelector('.colortext');
let techs = ['ReactJs' ,'Python' , 'Django' ,'Javascript'];
setInterval(function(){
    setTimeout(function(){

        colorbox.innerText = techs[j];
        colorbox.style.color= "#"+Math.random().toString(16).substring(2,8);
        j++;
        if(j>3){
            j=0;
        }
      
    },1)
},1500)