
function Footer() {
    return (
        
        <footer>
            
            <div class="footer">
                <div className="row">
                    <img
                        //src="./assets/linkedin.png"
                        alt="My LinkedIn profile"
                        class="icon"
                        onclick="location.href='https://www.linkedin.com/in/ianpasquali'"
                    />
                    <img
                        //src="./assets/github.png"
                        alt="My Github profile"
                        class="icon"
                        onclick="location.href='https://github.com/bearsyker'"
                    />
                </div>

                <div class="row">
                    <ul>
                        <li><a href="#">Contact me</a></li>
                        <li><a href="#">Our Services</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Career</a></li>
                    </ul>
                </div>

                <p className="row">&copy; {new Date().getFullYear()} blog website</p>
            </div>
        </footer>
       
            
        
    )
}

export default Footer