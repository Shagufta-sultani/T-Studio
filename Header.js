const HeaderHTML = `
        <div class="navbar">
            <div class="logo">
                <p>Training <span class="span">studio</span></p>
            </div>
            <nav class="nav-list">
                <ul>
                    <li><a href="index.html"  class="nav-link active ">home</a></li>
                    <li><a href="about.html"  class="nav-link ">about</a></li>
                    <li><a href="classes.html"  class="nav-link ">classes</a></li>
                    <li><a href="schedule.html" class="nav-link ">schedules</a></li>
                    <li><a href="contact.html"  class="nav-link ">contact</a></li>
                    <a href="#" class="btn">sign up</a>
                </ul>
            </nav>
            <a href="#" class="hamburger">
                <i class="fa-solid fa-bars"></i>
            </a>
            <!-- mobile menu -->
            <ul class="mobile-menu">
                <li><a href="index.html" data-target="home" class="nav-link ">home</a></li>
                <li><a href="about.html" data-target="about" class="nav-link ">about</a></li>
                <li><a href="classes.html" data-target="classes" class="nav-link ">classes</a></li>
                <li><a href="schedule.html" data-target="schedule" class="nav-link ">schedules</a></li>
                <li><a href="contact.html" data-target="contact" class="nav-link ">contact</a></li>
                <a href="#" class="btn">sign up</a>
            </ul>
        </div>
    
`;
const navbarElem = document.querySelector(".header-sec");
navbarElem.insertAdjacentHTML("afterbegin", HeaderHTML );