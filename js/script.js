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

let z = 0;

// bottone forward
const forward = document.getElementById('forward')
forward.addEventListener('click' , fx)

// funzione forward
function fx() {
    z++;
    if (z==5) {
        z = 0;
     }
    if (z==0) {
        let img0 = document.getElementById('0')
         img0.className = "img-fluid rov d-flex"
     }
     else{
         let img0 = document.getElementById('0')
         img0.className = "img-fluid rov d-none"
     }

        if (z==1) {
           let img1 = document.getElementById('1')
            img1.className = "img-fluid rov d-flex"
        }
        else{
            let img1 = document.getElementById('1')
            img1.className = "img-fluid rov d-none"
        }

        if (z==2) {
            let img2 = document.getElementById('2')
             img2.className = "img-fluid rov d-flex"
         }
         else{
            let img2 = document.getElementById('2')
             img2.className = "img-fluid rov d-none"
         }

         if (z==3) {
            let img3 = document.getElementById('3')
             img3.className = "img-fluid rov d-flex"
         }
         else{
            let img3 = document.getElementById('3')
            img3.className = "img-fluid rov d-none"
         }
         if (z==4) {
            let img4 = document.getElementById('4')
             img4.className = "img-fluid rov d-flex"
         }
         else{
            let img4 = document.getElementById('4')
             img4.className = "img-fluid rov d-none"
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
    if (z==0) {
        let img0 = document.getElementById('0')
         img0.className = "img-fluid rov d-flex"
     }
     else{
         let img0 = document.getElementById('0')
         img0.className = "img-fluid rov d-none"
     }

        if (z==1) {
           let img1 = document.getElementById('1')
            img1.className = "img-fluid rov d-flex"
        }
        else{
            let img1 = document.getElementById('1')
            img1.className = "img-fluid rov d-none"
        }

        if (z==2) {
            let img2 = document.getElementById('2')
             img2.className = "img-fluid rov d-flex"
         }
         else{
            let img2 = document.getElementById('2')
             img2.className = "img-fluid rov d-none"
         }

         if (z==3) {
            let img3 = document.getElementById('3')
             img3.className = "img-fluid rov d-flex"
         }
         else{
            let img3 = document.getElementById('3')
            img3.className = "img-fluid rov d-none"
         }
         if (z==4) {
            let img4 = document.getElementById('4')
             img4.className = "img-fluid rov d-flex"
         }
         else{
            let img4 = document.getElementById('4')
             img4.className = "img-fluid rov d-none"
         }

         
         console.log(z);
}






















    // images.forEach(element => {
    //     console.log(element.title);
    // });