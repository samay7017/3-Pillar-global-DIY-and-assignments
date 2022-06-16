// Exercises: Level 1

let a = document.querySelector('.container');
a.style.leftMargin ='50px';
let box;
for(let i = 0;i < 102;i++){
    box = document.createElement('div');
    box.style.fontSize = '25px';
    box.innerText = `${i}`;
    if(i % 2 == 0){
        box.style.backgroundColor = '#34eb55';
    }
    if( i % 2 !== 0){
        box.style.backgroundColor = '#dceb34';
    }
    function isPrime(num) {
        for(var i = 2; i < num; i++)
          if(num % i === 0) return false;
        return true;
    }
    if(isPrime(i)){
        box.style.backgroundColor = '#eb6234';
    };
    a.appendChild(box);   
};

