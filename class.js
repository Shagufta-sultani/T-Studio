const ClasCon1 = document.querySelectorAll(".clascont");
const ClasCon2 = document.querySelectorAll(".clas-conts");

document.addEventListener("DOMContentLoaded", () =>{
    if(ClasCon1){
        ClasCon1[0].click();
    }
});

ClasCon1.forEach((clascont) =>{

    clascont.addEventListener("click", (e) =>{
        e.preventDefault();

        ClasCon1.forEach((a) =>{
            a.classList.remove("active");
        })
        clascont.classList.add("active");

        ClasCon2.forEach((c) =>{
            c.classList.remove("active");
        });

        const activeClas = clascont.dataset.section;
        document.getElementById(activeClas).classList.add("active");
        
        if(activeClas === "first"){
           const classConts = document.querySelector(".clas1")

            const clasLists = [
                {
                    id:1,
                    img:"./img/cast-iron-dumbbell-weights.jpg",
                    h2: "First Training Class",
                    para: "Starts with the basics and build real strength. This class focuses on proper form, core stability, and compound movements like squats and deadlifts. Perfect for beginners who wants a strong foundation before to advanced training.",
                    butt: "BOOK THIS CLASS"
                }
            ];
            const clasContent = clasLists.map((ele) =>{
                return ` 
                     <img src="${ele.img}" alt="">
                     <h2>${ele.h2}</h2>
                     <p class="para">${ele.para}</p>
                     <button class="btn4">${ele.butt}</button>
                `;
            }).join("");
            if(classConts){

                classConts.innerHTML = clasContent;
            }
        }else if (activeClas === "second"){
            const clas2 = document.querySelector(".clas2");
            const clas1List =[
                {
                    img:"./img/muscular-young-man-working-out-gym-doing-exercises-with-dumbbells-biceps.jpg",
                    h2:"Second Training Class",
                    para: "Sweat it out and burn more in less time. High-intensity circuits, cardio intervals, and functional training designed to torch fat fast. Improve stamina while building lean muscle. Ideal if your goal is weight loss + energy.",
                    butt:"BOOK THIS CLASS"
                }
            ];
            const clas2Content = clas1List.map((ele) =>{
                return `
                  <img src="${ele.img}" alt="">
                     <h2>${ele.h2}</h2>
                     <p class="para">${ele.para}</p>
                     <button class="btn4">${ele.butt}</button>
                `;
            }).join("");
            if(clas2){
                clas2.innerHTML =  clas2Content;
            }
        }else if(activeClas === "third"){
        const clas3 = document.querySelector(".clas3");
        const clas3List =[ 
                {
                    img:"./img/cast-iron-dumbbell-weights.jpg",
                    h2:"Third Training Class",
                    para: "Time to level up. Heavy lifts, progressive overload, and power-focused trainiging for serious muscle gain. Targeted workouts for chest,back, legs and arms with expert form correction. For those ready to push past plateaus.",
                    butt:"BOOK THIS CLASS"
                }
            ];
            const clas3Content = clas3List.map((ele) =>{
                return `
                  <img src="${ele.img}" alt="">
                     <h2>${ele.h2}</h2>
                     <p class="para">${ele.para}</p>
                     <button class="btn4">${ele.butt}</button>
                `;
            }).join("");
            if(clas3){
                clas3.innerHTML =  clas3Content;
            }
        }else if( activeClas === "four"){
        const clas4 = document.querySelector(".clas4");
        const clas4List =[ 
                {
                    img:"./img/health-club-without-people-with-exercise-equipment.jpg",
                    h2:"Fourth Training Class",
                    para: "Strength needs flexibility too. This class Blends stretching, mobility drills, and recovery techniques to prevent injury and impove range of motion. End your week strong, loose, and pain-free. Every althelte needs this. ",
                    butt:"BOOK THIS CLASS"
                }
            ];
            const clas4Content = clas4List.map((ele) =>{
                return `
                  <img src="${ele.img}" alt="">
                     <h2>${ele.h2}</h2>
                     <p class="para">${ele.para}</p>
                     <button class="btn4">${ele.butt}</button>
                `;
            }).join("");
            if(clas4){
                clas4.innerHTML =  clas4Content;
            }
        }

 });
});