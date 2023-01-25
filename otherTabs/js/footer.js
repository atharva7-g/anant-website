const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML=`
    <div class="content">
            <div class="content-1">
                <div class="content-header">Team Anant</div><br>
                <div class="content-subheader">BITS Pilani</div><br>
                <a href="mailto:anant_coordinator@pilani.bits-pilani.ac.in" target="_blank" 
                    class="footer-email">
                    <i class="fa-regular fa-envelope"></i>
                    anant_coordinator@pilani.bits-pilani.ac.in
                </a>
            </div>
            <!-- <div class="content-2">
                <h1>Contact Details</h1><br>
                <div class="phone-number">
                    <i class="fa-solid fa-phone"></i><br>
                </div>
                <div class="email">
                    <i class="fa-regular fa-envelope"></i>
                    <p></p>
                </div>
            </div> -->
            <div class="content-3">
                <div class="content-header">Our Pages</div><br>
                <div class="content-3links">
                    <a href="https://m.facebook.com/219800068200346/"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://instagram.com/teamanantbits?utm_medium=copy_link">
                        <i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.linkedin.com/company/teamanant-bits">
                        <i class="fa-brands fa-linkedin"></i></a>
                    <a href="https://github.com/team-anant"><i class="fa-brands fa-github"></i></a>
                </div>
            </div>
    </div>
    `
}

createFooter();