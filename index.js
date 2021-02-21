var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

if (viewportWidth < 640){
    console.log ('small viewport')
    document.querySelector('#img1').style.display="block";
    document.querySelector('#img2').style.display="block";
    document.querySelector('#img3').style.display="block";
    document.querySelector('#img4').style.display="block";
    document.querySelector('#img5').style.display="block";
    document.querySelector('#imgMe').style.display="block";
}


function show(){
    document.getElementById('sidebar').classList.toggle('active');
}

function about(){
    document.getElementById('about-container').style.display= "block";
    document.getElementById('home-container').style.display= "none";
    document.getElementById('contact-container').style.display= "none";
    document.getElementById('work-container').style.display= "none";
}

function contact(){
    document.getElementById('contact-container').style.display= "block";
    document.getElementById('home-container').style.display= "none";
    document.getElementById('about-container').style.display= "none";
    document.getElementById('work-container').style.display= "none";
}

function work(){
    document.getElementById('work-container').style.display= "block";
    document.getElementById('home-container').style.display= "none";
    document.getElementById('about-container').style.display= "none";
    document.getElementById('contact-container').style.display= "none";
}

function home(){
    document.getElementById('home-container').style.display= "block";
    document.getElementById('work-container').style.display= "none";
    document.getElementById('about-container').style.display= "none";
    document.getElementById('contact-container').style.display= "none";
}