const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges in',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: " 2020",
    keywords: [ 
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin"></i>'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fab fa-twitter-square"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
       
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        
      }
    ]
};

document.body.style.fontFamily = 'Arial, Helvetica, sans-serif';

let a = document.createElement('div');
let b = document.createElement('h1');
let c = document.createElement('span');

b.innerText = asabenehChallenges2020.challengeTitle;
c.innerText = asabenehChallenges2020.challengeYear;
c.style.fontSize = '65px';
c.style.fontWeight = '500';
c.style.color = 'green';

setInterval(() => {
    let getRandom = '#' + Math.random().toString(16).substring(2,8);
    c.style.color = getRandom;
}, 1000);

a.appendChild(b);
a.appendChild(c);

a.style.display = 'flex';
a.style.justifyContent = 'center';
a.style.alignItems = 'baseline';

document.body.appendChild(a);

let d = document.createElement('span');
let e = document.createElement('div');
d.innerText = asabenehChallenges2020.challengeSubtitle;
d.style.fontSize = '20px';
d.style.textDecoration = 'underline';
e.style.display = 'flex';
e.style.justifyContent = 'center';
e.appendChild(d);
document.body.appendChild(e);

let date = new Date();
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

switch(month){
    case 1:
        month = 'January';
        break;
    case 2:
        month = 'February';
        break;
    case 3:
        month = 'March';
        break;
    case 4:
        month = 'April';
        break;
    case 5:
        month = 'May';
        break;
    case 6:
        month = 'June';
        break;
    case 7:
        month = 'July';
        break;
    case 8:
        month = 'August';
        break;
    case 9:
        month = 'September';
        break;
    case 10:
        month = 'October';
        break;
    case 11:
        month = 'November';
        break;
    case 12:
        month = 'December';
        break;
};

let f = document.createElement('div');
let g = document.createElement('div');
let h = document.createElement('span');

h.innerText = month + ' ' + day + ',' + year + ' ' + hour + ':' + minute + ':' + second;

g.style.padding = '10px 15px';
g.style.margin = '15px';
g.style.backgroundColor = 'red';

setInterval(() => {
    let getRandom = '#' + Math.random().toString(16).substring(2,8);
    g.style.backgroundColor = getRandom;
}, 1000);

f.style.display = 'flex';
f.style.justifyContent = 'center';

g.appendChild(h);
f.appendChild(g);
document.body.appendChild(f);

let l = document.createElement('div');
let m = document.createElement('div');
l.style.display = 'flex';
l.style.justifyContent = 'center';
m.style.width = '650px';

for(challenge of asabenehChallenges2020.challenges){
    let n = document.createElement('div');
    let o = document.createElement('span');
    let p = document.createElement('span');
    let q = document.createElement('details');
    let r = document.createElement('summary');
    
    for(let i = 0;i < challenge.topics.length;i++){
        let s = document.createElement('span');
        s.style.display = 'block';
        s.innerText = challenge.topics[i];
        q.appendChild(s);
    };
    
    p.innerText = challenge.status;
    o.innerText = challenge.name;
    n.style.margin = '11px 0px';
    n.style.padding = '21px 15px';
    
    if (challenge.status == 'Done'){
        n.style.backgroundColor = 'green';
    } else if (challenge.status == 'Ongoing'){
        n.style.backgroundColor = 'yellow';
    }else{
        n.style.backgroundColor = 'red';
    };

    n.style.display = 'flex';
    n.style.justifyContent = 'space-between';
    n.style.alignItems = 'center';
    o.style.textDecoration = 'underline';
    o.style.width = '200px';
    p.style.width = '56px';
    p.style.textAlign = 'end';
    r.innerText = challenge.topics[0];
    r.style.width = '96px';

    q.appendChild(r);
    n.appendChild(o);
    n.appendChild(q);
    n.appendChild(p);  
    m.appendChild(n);
};

l.appendChild(m);
document.body.appendChild(l);

let t = document.createElement('div');
let x = document.createElement('div');
let u = document.createElement('h1');
let v = document.createElement('div');

let w = document.createElement('div');

let fullName = asabenehChallenges2020.author.firstName + ' ' + asabenehChallenges2020.author.lastName;
u.innerText = fullName;
t.style.display = 'flex';
t.style.justifyContent = 'center';
v.style.display = 'flex';
v.style.justifyContent = 'center';
t.style.margin = '0px 0px 50px 0px';

for(socialLink of asabenehChallenges2020.author.socialLinks){
        let w = document.createElement('div');     
        w.innerHTML = socialLink.fontawesomeIcon;
        w.classList.add('fa-2x');
        w.style.margin = '0px 10px';
        v.appendChild(w);
};

x.appendChild(u);
x.appendChild(v);
t.appendChild(x);
document.body.appendChild(t);

let aa = document.createElement('div');
let bb = document.createElement('div');
bb.innerText = asabenehChallenges2020.author.bio;
aa.style.display = 'flex';
aa.style.justifyContent = 'center';
bb.style.width = '660px';
bb.style.textAlign = 'center';
aa.appendChild(bb);
document.body.appendChild(aa);



let cc = document.createElement('div');
let dd = document.createElement('div');

cc.style.display = 'flex';
cc.style.justifyContent = 'center';
cc.style.margin = '50px 0px';
dd.style.display = 'flex';
dd.style.justifyContent = 'space-between';
dd.style.width = '702px';

// Titles box start
let ee = document.createElement('div');
let ss = document.createElement('div');
let ff = document.createElement('span');
ff.innerText = 'Titles';
ff.style.fontSize = '20px';
ff.style.fontWeight = 'bold';
ee.appendChild(ff);

for(title of asabenehChallenges2020.author.titles){
  let gg = document.createElement('span');
  gg.innerText = title[0] + title[1];
  gg.style.display = 'block';
  ss.appendChild(gg);
}

ss.style.margin = '5px 0px';
ee.appendChild(ss);
dd.appendChild(ee);
// Titles box end

// skills box start
let mm = document.createElement('div');
let tt = document.createElement('div');
let oo = document.createElement('span');
oo.innerText = 'Skills';
oo.style.fontSize = '20px';
oo.style.fontWeight = 'bold';
mm.appendChild(oo);

for(skill of asabenehChallenges2020.author.skills){
  let pp = document.createElement('span');
  pp.innerText = skill;
  pp.style.display = 'block';
  tt.appendChild(pp);
}

tt.style.margin = '5px 0px';
mm.appendChild(tt);
dd.appendChild(mm);
// skills box end

// Qualifications box start
let nn = document.createElement('div');
let uu = document.createElement('div');
let qq = document.createElement('span');
qq.innerText = 'Qualifications';
qq.style.fontSize = '20px';
qq.style.fontWeight = 'bold';
nn.appendChild(qq);

for(qualification of asabenehChallenges2020.author.qualifications){
  let rr = document.createElement('span');
  rr.innerText = qualification;
  rr.style.display = 'block';
  uu.appendChild(rr);
}

uu.style.margin = '5px 0px';
nn.appendChild(uu);
dd.appendChild(nn);


cc.appendChild(dd);
document.body.appendChild(cc);

// Keywords

let vv = document.createElement('div');
let ww = document.createElement('div');

vv.style.display = 'flex';
vv.style.justifyContent = 'center';
ww.style.width = '700px';

// keywords title start
let xx = document.createElement('span');
xx.innerText = 'Keywords';
xx.style.fontSize = '20px';
xx.style.fontWeight = 'bold';
xx.style.display = 'block';
ww.appendChild(xx);
// keywords title end

// keywords box start
let yy = document.createElement('div');
yy.style.display = 'flex';
yy.style.width = '700px';
yy.style.flexWrap = 'wrap';
yy.style.margin = '10px 0px 50px 0px'

for(keyword of asabenehChallenges2020.keywords){
  let zz = document.createElement('div');
  let aaa = document.createElement('span');

  aaa.innerText = '#' + keyword;
  let bbb = '#' + Math.random().toString(16).substring(2,8);
  zz.style.backgroundColor = bbb;
  zz.style.padding = '10px 20px';
  zz.style.borderRadius = '50px';
  zz.style.margin = '3px 5px';

  zz.appendChild(aaa);
  yy.appendChild(zz);
}

ww.appendChild(yy);
// keywords box end

vv.appendChild(ww);
document.body.appendChild(vv);
