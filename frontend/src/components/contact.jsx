
function Contact() {
    return (
        <footer>
        <div class="container">
            <div class="left box">
                <h2>about blog</h2>
                <div class="content">
                    <p>bla bla bla</p>
                    <div class="social">
                        <a href="#"><span class="#"></span></a>
                        <a href="#"><span class="#"></span></a>
                        <a href="#"><span class="#"></span></a>
                    </div>
                </div>
            </div>
            <div class="center box">
                <h2>info</h2>
                <div class="content">
                    <div class="phone">
                        <span class="phone-num"></span>
                        <span class="text">+55 1923618274</span>
                    </div>
                    <div class="email">
                        <span class="email-icon"></span>
                        <span class="email-ad">me@gmail.com</span>
                    </div>
                </div>
            </div>
            <div class="right box">
                <h2>contact-me</h2>
                <div class="content">
                    <form action="#">
                        <div class="email">
                            <div class="text">email</div>
                            <input type="email" required></input>
                        </div>
                        <div class="msg">
                            <div class="text">message</div>
                            <textarea name="name" rows="2" cols="25" required></textarea>
                        </div>
                        <div class="btn">
                            <button type="submit"> send </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
</footer>
    )
}

export default Contact