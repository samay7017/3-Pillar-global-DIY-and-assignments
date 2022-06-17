

let addBtn = document.querySelector('.add-btn');
let input1 = document.querySelector('.input1');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let input4 = document.querySelector('.input4');
let notiBox = document.querySelector('.noti-box');
let outputBox = document.querySelector('.output-box');

let temp1 = [];
let temp2 = [];

let date = new Date();

let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();

switch(true){
    case month == 1:
        month = 'January';
        break;
    case month == 2:
        month = 'February';
        break;
    case month == 3:
        month = 'March';
        break;
    case month == 4:
        month = 'April';
        break;
    case month == 5:
        month = 'May';
        break;
    case month == 6:
        month = 'June';
        break;
    case month == 7:
        month = 'July';
        break;
    case month == 8:
        month = 'August';
        break;
    case month == 9:
        month = 'September';
        break;
    case month == 10:
        month = 'October';
        break;
    case month == 11:
        month = 'November';
        break;
    case month == 12:
        month = 'December';
        break;
}



function bb(name,date,country,score){
    let a = document.createElement('div');
    let b = document.createElement('div');
    let c = document.createElement('span');
    let d = document.createElement('span');
    let e = document.createElement('div');
    let f = document.createElement('div');
    let g = document.createElement('div');
    let h = document.createElement('div');
    let l = document.createElement('div');
    let m = document.createElement('div');

    a.classList.add('output');
    b.classList.add('name-box');
    c.classList.add('name-text');
    c.innerText = name;
    d.classList.add('date-text');
    d.innerText =date;
    e.classList.add('country-box');
    e.innerText = country;
    f.classList.add('score-box');
    f.innerText = score;
    g.classList.add('edit-box');
    h.classList.add('btn');
    h.classList.add('btn1');
    h.innerHTML = '<i class="fa-solid fa-trash-can del-icon"></i>';
    l.classList.add('btn');
    l.classList.add('btn2');
    l.innerText = '+5';
    m.classList.add('btn');
    m.classList.add('btn3');
    m.innerText = '-5';

    b.appendChild(c);
    b.appendChild(d);
    a.appendChild(b);
    a.appendChild(e);
    a.appendChild(f);
    g.appendChild(h);
    g.appendChild(l);
    g.appendChild(m);
    a.appendChild(g);
    outputBox.appendChild(a);
}

function getInfo(){
        temp1 = [];
    let bb = 0;
    console.log(outputBox.innerText);
   
    for(let i = 0;i < outputBox.innerText.split('\n').length / 6;i++){  
            console.log(outputBox.innerText.split('\n').slice(bb));     
        temp1.push(outputBox.innerText.split('\n').slice(bb));
        bb += 6;
    };
}

function storedetails(){                    //arrb
    temp2 = [];
    for(x of temp1){
        temp2.push({
            name : x[0],
            date : x[1],
            country : x[2],
            score : x[3],
        })
    }
}

function findingTop(){           
    outputBox.innerHTML = '';
    for(let i = 0;i < temp1.length;i++){
        let a = 0;
        for(x of temp2){
            if(x.score > a){
                a = x.score;
            };
        }
        let b = temp2.filter( el => el.score == a);
        for(let j = 0;j < b.length;j++){
            bb(b[j].name,b[j].date,b[j].country,b[j].score);
        }
        let c = temp2.filter( el => el.score !== a);
        temp2 = c;
    }
}

let arrs = [
    {
        name : 'SANJAY YOHANES',
        country : 'China',
        score : 85
    },
    {
        name : 'David khan',
        country : 'UAE',
        score : 80
    },
    {
        name : 'John kumar',
        country : 'Finland',
        score : 75
    },
    {
        name : 'Monsa carlo',
        country : 'Afghanistan',
        score : 70
    },
]

function a(){
    for(x of arrs){
        let a = document.createElement('div');
        let b = document.createElement('div');
        let c = document.createElement('span');
        let d = document.createElement('span');
        let e = document.createElement('div');
        let f = document.createElement('div');
        let g = document.createElement('div');
        let h = document.createElement('div');
        let l = document.createElement('div');
        let m = document.createElement('div');

        a.classList.add('output');
        b.classList.add('name-box');
        c.classList.add('name-text');
        c.innerText = x.name.toUpperCase();
        d.classList.add('date-text');
        d.style.fontSize = '12px';
        d.style.color = 'gray';
        d.innerText = month.toUpperCase() + ' ' + day + ',' + year + ' ' + hour + ':' + minute;
        e.classList.add('country-box');
        e.innerText = x.country.toUpperCase();
        f.classList.add('score-box');
        f.innerText = x.score;
        g.classList.add('edit-box');
        h.classList.add('btn');
        h.classList.add('btn1');
        h.innerHTML = '<i class="fa-solid fa-trash-can del-icon"></i>';
        l.classList.add('btn');
        l.classList.add('btn2');
        l.innerText = '+5';
        m.classList.add('btn');
        m.classList.add('btn3');
        m.innerText = '-5';

        b.appendChild(c);
        b.appendChild(d);
        a.appendChild(b);
        a.appendChild(e);
        a.appendChild(f);
        g.appendChild(h);
        g.appendChild(l);
        g.appendChild(m);
        a.appendChild(g);
        outputBox.appendChild(a);
    }
};

a();

addBtn.addEventListener('click', () => {

    if(input1.value == '' && input2.value == '' && input3.value == '' && input4.value == ''){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'All fields are required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };

    if(input1.value == '' && input2.value && input3.value && input4.value){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'First Name field is required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };
    
    if(input2.value == '' && input1.value && input3.value && input4.value || input1.value && input2.value == '' && input3.value == '' && input4.value == ''){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'Last Name field is required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };

    if(input3.value == '' && input2.value && input1.value && input4.value || input1.value && input2.value && input3.value == '' && input4.value == ''){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'Country field is required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };

    if(input4.value == '' && input2.value && input3.value && input1.value){
        notiBox.innerHTML = '';
        let a = document.createElement('span');

        a.innerText = 'Player Score field is required';
        a.style.color = 'red';
        a.style.fontWeight = 'bold';

        notiBox.appendChild(a);
    };

    if(input1.value && input2.value && input3.value && input4){
        notiBox.innerHTML = '';
        
        let a = document.createElement('div');
        let b = document.createElement('div');
        let c = document.createElement('span');
        let d = document.createElement('span');
        let e = document.createElement('div');
        let f = document.createElement('div');
        let g = document.createElement('div');
        let h = document.createElement('div');
        let l = document.createElement('div');
        let m = document.createElement('div');

        a.classList.add('output');
        b.classList.add('name-box');
        c.classList.add('name-text');
        c.innerText = input1.value.toUpperCase() + ' ' + input2.value.toUpperCase();
        d.classList.add('date-text');
        d.innerText = month.toUpperCase() + ' ' + day + ',' + year + ' ' + hour + ':' + minute;
        e.classList.add('country-box');
        e.innerText = input3.value.toUpperCase();
        f.classList.add('score-box');
        f.innerText = input4.value;
        g.classList.add('edit-box');
        h.classList.add('btn');
        h.classList.add('btn1');
        h.innerHTML = '<i class="fa-solid fa-trash-can del-icon"></i>';
        l.classList.add('btn');
        l.classList.add('btn2');
        l.innerText = '+5';
        m.classList.add('btn');
        m.classList.add('btn3');
        m.innerText = '-5';

        b.appendChild(c);
        b.appendChild(d);
        a.appendChild(b);
        a.appendChild(e);
        a.appendChild(f);
        g.appendChild(h);
        g.appendChild(l);
        g.appendChild(m);
        a.appendChild(g);
        outputBox.appendChild(a);


        getInfo();
        storedetails();
        findingTop();
    }
});

getInfo();
storedetails();



$('.output-box').delegate('.btn1','click',function(){
    $(this).parentsUntil('.output-box').remove();
});

$('.output-box').delegate('.btn2','click',function(){
    let score = $(this).parentsUntil('.output-box').find('.score-box').text();
    $(this).parentsUntil('.output-box').find('.score-box').html(Number(score) + 5);
    getInfo();
    storedetails();
    findingTop();
});

$('.output-box').delegate('.btn3','click',function(){
    let scoreb = $(this).parentsUntil('.output-box').find('.score-box').text();
    $(this).parentsUntil('.output-box').find('.score-box').html(Number(scoreb) - 5);
    getInfo();
    storedetails();
    findingTop();
});

