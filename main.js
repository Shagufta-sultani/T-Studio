const Hamburger = document.querySelector(".hamburger");
const Menu = document.querySelector(".mobile-menu");

const headerSec = document.querySelector(".header-sec");

const aboutContent = document.querySelector(".Content");
const aboutContents = document.querySelector(".Contents");

Hamburger.addEventListener('click', () =>{
    Hamburger.classList.toggle("active");
    Menu.classList.toggle("active");
});


window.addEventListener('scroll', function(){

    if(window.pageYOffset > 100 ){
        headerSec.style.backgroundColor = '#1b1515ea';
        headerSec.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
    } else{
        headerSec.style.backgroundColor = '';
        headerSec.style.boxShadow = '';
    }
});
const ConList = [
    {
        id: 1,
        h3: "Basic Fitness",
        para: "Build your fitness foundation here. Perfect course for weight loss, stamina, and daily activity.",
        p: "Discover more",
       
    },
    {
        id: 2,
        h3: "New Gym Training",
        para: "Get familiar with the gym environment and machines. Safe and effective workouts under trainer supervision.",
        p: "Discover more",
       
    },
    {
        id: 3,
        h3: "Basic Muscle Course",
        para: "Start muscle building from the basics. Includes proper form, diet tips, and progressive training.",
        p: "Discover more",
        
    }
];

const contentList = ConList.map((ele) => {
 return `
 <div class="PART1">    
            <div class="icons">
           <span><i class="fa-solid fa-dumbbell"></i></span>
            </div>
            <div class="muscle-con">
                <h3> ${ele.h3}</h3>
                <p class="para"> ${ele.para}</p>
                <p class="para2"> ${ele.p}</p>
                
            </div>
        </div>
 `;
}).join("");
aboutContent.innerHTML = contentList;


const ConLists = [
    {
        id: 1,
        h3: "Advanced Muscle Course",
        para: "Advanced techniques for muscle gain and strength training. Ideal porgram for serious bodybuilders",
        p: "Discover more"
        
    },
    {
        id: 2,
        h3: "Yoga Training",
        para: "Bring peace to your mind along with your body. Yoga sessions for flexibility, balance, and mental peace.",
        p: "Discover more"
       
    },
    {
        id: 3,
        h3: "Body Building Course",
        para: "Complete plan to build a stage-ready physique. Everything in one place - bulk, cut, and completition prep.",
        p: "Discover more"
       
    }
];

const contentLists = ConLists.map((ele) => {
 return `
 <div class="PART1">
            <div class="icons">
            <span><i class="fa-solid fa-dumbbell"></i></span>
            </div>
            <div class="muscle-con">
                <h3> ${ele.h3}</h3>
                <p class="para" > ${ele.para}</p>
                <p class="para2"> ${ele.p}</p>
            </div>
        </div>
 `;
}).join("");
aboutContents.innerHTML = contentLists;