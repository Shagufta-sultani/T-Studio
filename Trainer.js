const TrainerSec = document.querySelector(".trainerSec");

const TrainerList = [
    {
        id: 1,
        img:"./img/individual-doing-sport-healthy-lifestyle.jpg",
        para: "Strength Trainer",
        h2: "Ali Khan",
        p: "CSCS certifed. 8+ years training athletes & lifters. Specializes in squat, deadlift, bench form + injury prevention. No ego lifting , only smart strength. "
        
    },
    {
        id: 2,
        img:"./img/muscular-young-man-working-out-gym-doing-exercises-with-dumbbells-biceps.jpg",
        para: "Muscle Trainer",
        h2: "Zain Malik",
        p: "Bodybuilding & hypertrophy coach. Helped 200+ clients lean bulk and cut. Focus on progressive overload, nutrition basics, and tracking real progress. ."
        
    },
    {
        id: 3,
        img:"./img/healthy-man-training-gym.jpg",
        para: "Power Trainer",
        h2: "Ahmed Raza",
        p: "Functional + power training expert. Former althete. Builds explosive strength, speed, and conditioning. Perfect if you want performance, not just size."
        
    },
];
const TrainerContent = TrainerList.map((ele) =>{
    return `
     <div class="trainer1">
                <img src="${ele.img}" alt="">
                <p class="p1">${ele.para}</p>
                <h2>${ele.h2}</h2>
                <p class="para">${ele.p}</p>
                <span class="" ><i class=" fab fa-instagram"></i></span>
                <span class="" ><i class=" fab fa-facebook"></i></span>
                <span class=""  ><i class=" fab fa-whatsapp"></i></span>
               
            </div>
    `;
}).join("");
TrainerSec.innerHTML = TrainerContent;
