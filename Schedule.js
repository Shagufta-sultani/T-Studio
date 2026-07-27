const ScheduleSection = document.querySelectorAll(".scheduleSec");
const tableCont = document.querySelectorAll(".tableCont");

document.addEventListener("DOMContentLoaded", () =>{
    if(ScheduleSection){
        ScheduleSection[0].click();
    }
});

ScheduleSection.forEach((scheduleSec) =>{

    scheduleSec.addEventListener("click", (e) =>{
        e.preventDefault();

        ScheduleSection.forEach((a) =>{
            a.classList.remove("active");
        })
        scheduleSec.classList.add("active");

        tableCont.forEach((c) =>{
            c.classList.remove("active");
        });

        const activeSched =  scheduleSec.dataset.section;
        document.getElementById(activeSched).classList.add("active");

        if(activeSched === "day1"){
           const schData = document.querySelector(".tableContent1");

           const schList = [
            {
                data:"Fitness Class",
                data1:"10:00AM - 11:30AM",
                data2:"Zain Mailk",
                data3:"Muscle Training",
                data4:"Usman Siddiqui",
                data5:"Body Building",
                data6:"2:00PM - 3:30PM",
                data7:"Ali Khan",
                data8:"Yoga Training Class",
                data9:"Hamza Qureshi",
                data10:"Advanced Training",
                data11:"Ahmed Raza",
                data12:"03:30PM - 05:30PM"

            }];

            const schContent = schList.map((ele) =>{
                return `
                <table>
                        <tr>
                            <td>${ele.data}</td>
                            <td>${ele.data1}</td>
                            <td>-</td>
                            <td>${ele.data2}</td>
                        </tr>
                        <tr>
                            <td>${ele.data3}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>${ele.data4}</td>
                            
                        </tr>
                        <tr>
                            <td>${ele.data5}</td>
                            <td>-</td>
                            <td>${ele.data6}</td>
                            <td>${ele.data7}</td>
                        </tr>
                        <tr>
                            <td>${ele.data8}</td>
                            <td>-</td>
                            <td>-</</td>
                            <td>${ele.data9}</td>
                        </tr>
                        <tr>
                            <td>${ele.data10}</td>
                            <td>-</td>
                            <td>${ele.data12}</td>
                            <td>${ele.data11}</td>
                        </tr>
                    </table>
                `;
            }).join("");
            if(schData){
                schData.innerHTML =  schContent;
            }
        }else if(activeSched === "day2"){
            const schData1 = document.querySelector(".tableContent2");

           const schList1 = [
            {
                data:"Fitness Class",
                data1:"10:00AM - 12:00PM",
                data2:"Zain Mailk",
                data3:"Muscle Training",
                data4:"Usman Siddiqui",
                data5:"Body Building",
                data6:"03:30PM - 05:30PM",
                data7:"Ali Khan",
                data8:"Yoga Training Class",
                data9:"Hamza Qureshi",
                data10:"Advanced Training",
                data11:"Ahmed Raza",
                data12:" 2:00PM - 3:30PM"
            }];

            const schContent1 = schList1.map((ele) =>{
                return `
                <table>
                        <tr>
                        <td>${ele.data}</td>
                        <td>-</td>
                        <td>-</td>
                            <td>${ele.data2}</td>
                        </tr>
                        <tr>
                            <td>${ele.data3}</td>
                            <td>${ele.data1}</td>
                            <td>-</td>
                            <td>${ele.data4}</td>
                            
                        </tr>
                        <tr>
                            <td>${ele.data5}</td>
                            <td>-</td>
                            <td>${ele.data12}</td>
                            <td>${ele.data7}</td>
                        </tr>
                        <tr>
                            <td>${ele.data8}</td>
                            <td>-</td>
                            <td>${ele.data6}</td>
                            <td>${ele.data9}</td>
                        </tr>
                        <tr>
                            <td>${ele.data10}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>${ele.data11}</td>
                        </tr>
                    </table>
                `;
            }).join("");
            if(schData1){
                schData1.innerHTML =  schContent1;
            }
        }else if(activeSched === "day3"){
            const schData1 = document.querySelector(".tableContent3");

           const schList1 = [
            {
                data:"Fitness Class",
                data1:"2:00PM - 3:30PM",
                data2:"Zain Mailk",
                data3:"Muscle Training",
                data4:"Usman Siddiqui",
                data5:"Body Building",
                data6:"03:30PM - 05:30PM",
                data7:"Ali Khan",
                data8:"Yoga Training Class",
                data9:"Hamza Qureshi",
                data10:"Advanced Training",
                data11:"Ahmed Raza",
                data12:"09:00AM - 11:00AM"

            }];

            const schContent1 = schList1.map((ele) =>{
                return `
                <table>
                        <tr>
                            <td>${ele.data}</td>
                            <td>-</td>
                            <td>${ele.data1}</td>
                            <td>${ele.data2}</td>
                        </tr>
                        <tr>
                            <td>${ele.data3}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>${ele.data4}</td>
                            
                        </tr>
                        <tr>
                            <td>${ele.data5}</td>
                            <td>-</td>
                            <td>${ele.data6}</td>
                            <td>${ele.data7}</td>
                        </tr>
                        <tr>
                            <td>${ele.data8}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>${ele.data9}</td>
                        </tr>
                        <tr>
                            <td>${ele.data10}</td>
                            <td>${ele.data12}</td>
                            <td>-</td>
                            <td>${ele.data11}</td>
                        </tr>
                    </table>
                `;
            }).join("");
            if(schData1){
                schData1.innerHTML =  schContent1;
            }
        }else if(activeSched === "day4"){
            const schData1 = document.querySelector(".tableContent4");

           const schList1 = [
            {
                data:"Fitness Class",
                data1:"10:00AM - 12:30AM",
                data2:"Zain Mailk",
                data3:"Muscle Training",
                data4:"Usman Siddiqui",
                data5:"Body Building",
                data6:"2:00PM - 03:30PM",
                data7:"Ali Khan",
                data8:"Yoga Training Class",
                data9:"Hamza Qureshi",
                data10:"Advanced Training",
                data11:"Ahmed Raza",
                data12:"03:30PM - 05:30PM",
            }];

            const schContent1 = schList1.map((ele) =>{
                return `
                <table>
                        <tr>
                            <td>${ele.data}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>${ele.data2}</td>
                        </tr>
                        <tr>
                            <td>${ele.data3}</td>
                            <td>${ele.data1}</td>
                            <td>-</td>
                            <td>${ele.data4}</td>
                            
                        </tr>
                        <tr>
                            <td>${ele.data5}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>${ele.data7}</td>
                        </tr>
                        <tr>
                            <td>${ele.data8}</td>
                            <td>-</td>
                            <td>${ele.data6}</td>
                            <td>${ele.data9}</td>
                        </tr>
                        <tr>
                            <td>${ele.data10}</td>
                            <td>-</td>
                            <td>${ele.data12}</td>
                            <td>${ele.data11}</td>
                        </tr>
                    </table>
                `;
            }).join("");
            if(schData1){
                schData1.innerHTML =  schContent1;
            }
        }
        else if(activeSched === "day5"){
            const schData1 = document.querySelector(".tableContent5");

           const schList1 = [
            {
                data:"Fitness Class",
                data1:"09:00AM - 10:30AM",
                data2:"Zain Mailk",
                data3:"Muscle Training",
                data4:"Usman Siddiqui",
                data5:"Body Building",
                data6:"2:00PM - 3:30PM",
                data7:"Ali Khan",
                data8:"Yoga Training Class",
                data9:"Hamza Qureshi",
                data10:"Advanced Training",
                data11:"Ahmed Raza",
                data12:"10:30AM - 12:00PM",
                data13:"03:30PM - 05:30PM"
            }];

            const schContent1 = schList1.map((ele) =>{
                return `
                <table>
                        <tr>
                            <td>${ele.data}</td>
                            <td>${ele.data1}</td>
                            <td>-</td>
                            <td>${ele.data2}</td>
                        </tr>
                        <tr>
                            <td>${ele.data3}</td>
                            <td>${ele.data12}</td>
                            <td>-</td>
                            <td>${ele.data4}</td>
                            
                        </tr>
                        <tr>
                            <td>${ele.data5}</td>
                            <td>-</td>
                            <td>${ele.data6}</td>
                            <td>${ele.data7}</td>
                        </tr>
                        <tr>
                            <td>${ele.data8}</td>
                            <td>-</td>
                            <td>${ele.data13}</td>
                            <td>${ele.data9}</td>
                        </tr>
                        <tr>
                            <td>${ele.data10}</td>
                            <td>-</td>
                            <td>-</td>
                            <td>${ele.data11}</td>
                        </tr>
                    </table>
                `;
            }).join("");
            if(schData1){
                schData1.innerHTML =  schContent1;
            }
        };
    });
});