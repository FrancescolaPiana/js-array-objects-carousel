const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];


// funzione che genera le immagini grandi
    let n = 0;

for (const key in images) {
    let maicol = document.getElementById('maicol');
    let divcont = document.createElement('div');
    divcont.setAttribute("id" , `box${n}`)
    divcont.className = 'd-none';
    
    divcont.innerHTML = `
    <h1 id="ti" class="position-absolute zzz" > ${images[key].title} </h1>
    <h3 id="de" class="position-absolute zz2">${images[key].description}</h3>
    <img id="${n}" class="img-fluid rov" src="${images[key].url}" alt="">
    `
    maicol.append(divcont)
    n++
}

crt()
// funzione creazione miniature

function crt() {
    const app = document.getElementById('app')
    images.forEach((value,index)=>{
        let slide = document.createElement('div')
        slide.className = "reef"
        slide.innerHTML = `<img id="${index}a" class="img-fluid rovsml" src="${value.url}" alt="">`
        app.append(slide)
    })
}

z = 0;
// bottone forward
const forward = document.getElementById('forward')
forward.addEventListener('click' , fx)

  //  img0
  if (z==0) { 
    document.getElementById('box0').className = "d-block"
    document.getElementById('0a').classList.add('lghty')
 }
 else{
    document.getElementById('box0').className = "d-none"
     document.getElementById('0a').classList.remove('lghty')
 }

// funzione forward
function fx() {
    z++;
    if (z==5) {
        z = 0;
     }
    //  img0
    if (z==0) { 
        document.getElementById('box0').className = "d-block"
        document.getElementById('0a').classList.add('lghty')
     }
     else{
        document.getElementById('box0').className = "d-none"
         document.getElementById('0a').classList.remove('lghty')
     }


       //  img1
    if (z==1) { 
        document.getElementById('box1').className = "d-block"
        document.getElementById('1a').classList.add('lghty')
     }
     else{
        document.getElementById('box1').className = "d-none"
         document.getElementById('1a').classList.remove('lghty')
     }

        //  img2
    if (z==2) { 
        document.getElementById('box2').className = "d-block"
        document.getElementById('2a').classList.add('lghty')
     }
     else{
        document.getElementById('box2').className = "d-none"
         document.getElementById('2a').classList.remove('lghty')
     }

         //  img3
    if (z==3) { 
        document.getElementById('box3').className = "d-block"
        document.getElementById('3a').classList.add('lghty')
     }
     else{
        document.getElementById('box3').className = "d-none"
         document.getElementById('3a').classList.remove('lghty')
     }

          //  img4
    if (z==4) { 
        document.getElementById('box4').className = "d-block"
        document.getElementById('4a').classList.add('lghty')
     }
     else{
        document.getElementById('box4').className = "d-none"
         document.getElementById('4a').classList.remove('lghty')
     }
    // onclick

const link0 = document.getElementById('0a')
link0.addEventListener('click' , fs0)

const link1 = document.getElementById('1a')
link1.addEventListener('click' , fs1)

const link2 = document.getElementById('2a')
link2.addEventListener('click' , fs2)

const link3 = document.getElementById('3a')
link3.addEventListener('click' , fs3)

const link4 = document.getElementById('4a')
link4.addEventListener('click' , fs4)

function fs0() {
    z = -1;
    console.log(z);

}
function fs1() {
    z = 0;
    console.log(z);
}
function fs2() {
    z = 1;
    console.log(z);
}
function fs3() {
    z = 2;
    console.log(z);
}
function fs4() {
    z = 3;
    console.log(z);
}

        //  console.log(z);
}









// bottone back
const back = document.getElementById('back')
back.addEventListener('click' , fx2)

// funzione back
function fx2() {
    z--;
    if (z== -1) {
        z = 4;
     }

    //  img0
    if (z==0) {
        document.getElementById('box0').className = "d-block"
         document.getElementById('0a').classList.add('lghty')
     }
     else{
        document.getElementById('box0').className = "d-none"
         document.getElementById('0a').classList.remove('lghty')
     }

    //  img1
     if (z==1) {
        document.getElementById('box1').className = "d-block"
         document.getElementById('1a').classList.add('lghty')
     }
     else{
        document.getElementById('box1').className = "d-none"
         document.getElementById('1a').classList.remove('lghty')
     }
      //  img2
      if (z==2) {
        document.getElementById('box2').className = "d-block"
         document.getElementById('2a').classList.add('lghty')
     }
     else{
        document.getElementById('box2').className = "d-none"
         document.getElementById('2a').classList.remove('lghty')
     }
      //  img3
      if (z==3) {
        document.getElementById('box3').className = "d-block"
         document.getElementById('3a').classList.add('lghty')
     }
     else{
        document.getElementById('box3').className = "d-none"
         document.getElementById('3a').classList.remove('lghty')
     }
      //  img4
      if (z==4) {
        document.getElementById('box4').className = "d-block"
         document.getElementById('4a').classList.add('lghty')
     }
     else{
        document.getElementById('box4').className = "d-none"
         document.getElementById('4a').classList.remove('lghty')
     }

       // onclick

const link0 = document.getElementById('0a')
link0.addEventListener('click' , fs0)

const link1 = document.getElementById('1a')
link1.addEventListener('click' , fs1)

const link2 = document.getElementById('2a')
link2.addEventListener('click' , fs2)

const link3 = document.getElementById('3a')
link3.addEventListener('click' , fs3)

const link4 = document.getElementById('4a')
link4.addEventListener('click' , fs4)

function fs0() {
    z = 1;
    console.log(z);

}
function fs1() {
    z = 2;
    console.log(z);
}
function fs2() {
    z = 3;
    console.log(z);
}
function fs3() {
    z = 4;
    console.log(z);
}
function fs4() {
    z = 5;
    console.log(z);
}
  
        //  console.log(z);
}








// funzione play anb pause


// default
fn();
function fn() {
    intervalIdfor = setInterval(fx, 2000);
}

// pause
let pause = document.getElementById('stop')
pause.addEventListener('click' , fn2 )
function fn2() {
    clearInterval(intervalIdfor)
    document.getElementById('play').classList.remove("d-none")
    document.getElementById('stop').classList.add("d-none")
}





// invert revert


// play

let play = document.getElementById('play')
play.addEventListener('click' , fn3 )
function fn3() {
    fn()
    document.getElementById('play').classList.add("d-none")
    document.getElementById('stop').classList.remove("d-none")
}


// funzione invert
let invert = document.getElementById('invert')
invert.addEventListener('click' , fn4 )
function fn4() {
    clearInterval(intervalIdfor)
    intervalIdback = setInterval(fx2, 2000);
    document.getElementById('invert1').classList.remove("d-none")
    document.getElementById('invert').classList.add("d-none")
}

// funzione revert
let invert1 = document.getElementById('invert1')
invert1.addEventListener('click' , fn5 )
function fn5() {
    clearInterval(intervalIdback)
    intervalIdfor = setInterval(fx, 2000);
    document.getElementById('invert1').classList.add("d-none")
    document.getElementById('invert').classList.remove("d-none")
}











   

