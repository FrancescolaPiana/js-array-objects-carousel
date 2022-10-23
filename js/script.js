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



let z = 0;

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
    
         console.log(z);
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





        // if (z==1) {
        //    let img1 = document.getElementById('1')
        //     img1.className = "img-fluid rov d-flex"
        //     document.getElementById('1a').classList.add('lghty')

        // }
        // else{
        //     let img1 = document.getElementById('1')
        //     img1.className = "img-fluid rov d-none"
        //     document.getElementById('1a').classList.remove('lghty')

        // }

        // if (z==2) {
        //     let img2 = document.getElementById('2')
        //      img2.className = "img-fluid rov d-flex"
        //      document.getElementById('2a').classList.add('lghty')

        //  }
        //  else{
        //     let img2 = document.getElementById('2')
        //      img2.className = "img-fluid rov d-none"
        //      document.getElementById('2a').classList.remove('lghty')

        //  }

        //  if (z==3) {
        //     let img3 = document.getElementById('3')
        //      img3.className = "img-fluid rov d-flex"
        //      document.getElementById('3a').classList.add('lghty')

        //  }
        //  else{
        //     let img3 = document.getElementById('3')
        //     img3.className = "img-fluid rov d-none"
        //     document.getElementById('3a').classList.remove('lghty')

        //  }
        //  if (z==4) {
        //     let img4 = document.getElementById('4')
        //      img4.className = "img-fluid rov d-flex"
        //      document.getElementById('4a').classList.add('lghty')

        //  }
        //  else{
        //     let img4 = document.getElementById('4')
        //      img4.className = "img-fluid rov d-none"
        //      document.getElementById('4a').classList.remove('lghty')

        //  }

         
         console.log(z);
}

//  images.forEach(element => {
//         document
        



//     });




















   

    // document.getElementById('0').src="url"
