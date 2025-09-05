class MyHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<header id="main-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <nav class="navbar navbar-expand-lg navbar-light">
                        <a class="navbar-brand" href="index.html">
                            <img class="img-fluid rounded-image" src="images/favicon.png" alt="#">
                            <span class="iq-tw-7 text-uppercase iq-mt-25 iq-mb-15 txt-clr mrgn-lf-12">Jitendra Sahu</span>
                            </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="ion-navicon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto w-100 justify-content-end">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#iq-home">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#how-it-works">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#software-features">Service</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#great-screenshots">Screenshots</a>
                                </li>
                                <!-- <li class="nav-item"> blog-list-1.html for blog page.
                                    <a class="nav-link" href="#pricing">Pricing</a>
                                </li> -->
                                <li class="nav-item">
                                    <a class="nav-link" href="#team">Team</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#blog">Blog</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact-us">Contact</a>
                                </li>
                            </ul>
                            <a href="my-resume.html" target="_blank" class="button bt-black pull-right">Hire</a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>`
	}
}

customElements.define('my-header', MyHeader);

class MyFooter extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<footer id="footer" class="iq-footer">
        <div class="footer-top overview-block-pt iq-pb-40">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="iq-contact">
                            <h4 class="iq-tw-6 iq-mb-20 iq-font-white">Contact Us</h4>
                            <div class="contact-block iq-mb-10"><i class="ion-ios-telephone-outline"></i>
                                <div class="content"> +91 9598542444
                                    <br>+91 9455226920</div>
                            </div><br>
                            <div class="contact-block iq-mb-10"><i class="ion-ios-email-outline"></i>
                                <div class="content"> jeetendrasahu105@gmail.com
                                    <br>jeetendrasahu106@gmail.com</div>
                            </div>
                            <div class="contact-block iq-mb-20"><i class="ion-ios-location-outline"></i>
                                <div class="content"> 1234 North Luke Lane, South Bend, IN 360001</div>
                            </div>
                            <ul class="info-share">
                            <li>
                                <a href="https://www.linkedin.com/in/jitendra-sahu-77336016a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/share/1aocTctZFK/" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://x.com/Jitendra_Sahu_9?t=Hq647-A5r8uP1sfu38xK0A&s=09" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/Jitendrasahu999" target="_blank" rel="noopener noreferrer">
                                <i class="fa fa-github"></i></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 r4-mt-40">
                        <h4 class="iq-tw-6 iq-mb-20 iq-font-white">Popular Posts</h4>
                        <ul class="iq-post">
                            <li>
                                <div class="post-img"> <img src="images/blog/06.jpg" alt="#"> </div>
                                <div class="post-blog"> <a href="#">7 Awesome and Free AI Tools You Should Know.</a>
                                    <div class="iq-font-white iq-date"><i class="fa fa-calendar"></i> Aug 10, 2025</div>
                                </div>
                            </li>
                            <li>
                                <div class="post-img"> <img src="images/blog/07.jpg" alt="#"> </div>
                                <div class="post-blog"> <a href="#">How to Grow Your LinkedIn Profile.</a>
                                    <div class="iq-font-white iq-date"><i class="fa fa-calendar"></i> July 1, 2025</div>
                                </div>
                            </li>
                            <li>
                                <div class="post-img"> <img src="images/blog/08.jpg" alt="#"> </div>
                                <div class="post-blog"> <a href="#">Crafting the Perfect Resume for Developer.</a>
                                    <div class="iq-font-white iq-date"><i class="fa fa-calendar"></i> June 5, 2025</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="col-lg-3 col-md-6 r-mt-40">
                        <div class="footer-menu">
                            <h4 class="iq-tw-6 iq-mb-20 iq-font-white">Useful Links</h4>
                            <ul class="iq-pl-0">
                                <li><a href="https://jeetendrasahu.in/">Home</a></li>
                                <li><a href="https://jeetendrasahu.in/">About Us</a></li>
                                <li><a href="https://jeetendrasahu.in/">Services</a></li>
                                <li><a href="https://jeetendrasahu.in/">Faqs</a></li>
                                <li><a href="https://jeetendrasahu.in/">Contact Us</a></li>
                                <li><a href="https://jeetendrasahu.in/">Blogs</a></li>
                                <li><a href="https://jeetendrasahu.in/">Teams</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 r-mt-40">
                        <h4 class="iq-tw-6 iq-mb-20 iq-font-white">Newsletter</h4>
                        <p class="iq-font-white">Over 7+ years of experience in software development, I specialize in creating high-performance, user-friendly mobile applications for both Android and iOS platforms.</p>

                        <p class="iq-font-white">My expertise lies in developing robust, scalable solutions that enhance user experience and meet client requirements effectively.</p>
                        <form class="newsletter-form">
                            <div class="input-group">
                                <input type="email" class="form-control placeholder" placeholder="Enter your Email">
                                <span class="input-group-addon btn-group"><button  name="submit"type="submit"value="Send"class="button">Go</button></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 iq-mtb-20">
                        <div class="iq-copyright iq-mt-10 text-center">Copyright @ 2025 <a href="https://jeetendrasahu.in/"><span class="iq-font-yellow">www.jeetendrasahu.in</span> </a> All Rights Reserved </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>`
	}
}

customElements.define('my-footer', MyFooter);