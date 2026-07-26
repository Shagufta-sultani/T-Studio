const FooterHTML = `
            <div class="div1">
                <div class="logo">
                <p>Training <span class="com">studio</span></p>
                </div>
                <p class="com"> Training Studio: Get Fit, Stay Strong. <br> Join us for personlized training in a <br> motivating environment.</p> 
            </div>

                <div class="div3">
                    <p>📍 Location: 123 Fitness Sreet, Islamabad</p>
                    <p>📞 Phone: +92 300 1234567</p>
                    <p>📩 Email: info@trainingstudio.com</p>
                    <p>⌚ Hours: Mon-Fri, 9AM - 6PM</p>
                </div>
           
            <div class="div2">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#">about</a></li>
                    <li><a href="#">classes</a></li>
                    <li><a href="#">schedules</a></li>
                    <li><a href="#">contact</a></li>
                 </ul>
            </div>
                
                <div class="div4">
                <span class="span1"><i class=" fab fa-instagram"></i></span>
                <span class="span1"><i class=" fab fa-facebook"></i></span>
                <span class="span1" ><i class=" fab fa-whatsapp"></i></span>
                </div>              
`;
const footerSec = document.querySelector(".footer-sec");
footerSec.insertAdjacentHTML("afterbegin",FooterHTML);