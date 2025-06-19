import { faFacebook, faInstagram, faLinkedin, faTiktok, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright, faPalette } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <>
            <footer className="bg-black px-7 pt-10 pb-4 flex flex-col border-t">
                <section className="flex flex-col text-base/loose gap-7 pb-10">
                    <section className="z-30">
                        <h2 className="font-semibold pb-2">Quick Links</h2>
                        <nav className="flex flex-col">
                            <Link to="/AboutUs">About Ada's Kitchen</Link>
                            <Link to="/Services?category=Courses#top">Careers</Link>
                            <Link to="/Services?category=Services#top">Services</Link>
                            <Link to="/Login">Login</Link>
                        </nav>
                    </section>
                    {/* <section className="">
                        <h2 className="font-semibold pb-2">Trending Courses</h2>
                        <nav className="flex flex-col">
                            <Link to={`/Courses/Project Management`}>Project Management</Link>
                            <Link to={`/Courses/Digital Marketing`}>Digital Marketing</Link>
                            <Link to={`/Courses/Product Management`}>Product Management</Link>
                            <Link to={`/Courses/Customer Service Representative`}>Customer Service Representative</Link>
                        </nav>
                    </section> */}
                    <section className="z-30">
                        <h2 className="font-semibold pb-2">Support</h2>
                        <nav className="flex flex-col">
                            <Link to="/ContactUs">Contact Us By Email</Link>
                            <a href="tel:+2349124354006">Phone</a>
                            <a>
                                <button>
                                    Customer Support
                                </button>
                            </a>
                            <Link to="/AboutUs#faq">FAQ</Link>
                        </nav>
                    </section>
                </section>
                <section className="flex flex-col text-base">
                    <section className="flex flex-col z-30">
                        <div>
                            <p>Follow Us On Our Socials Below</p>
                        </div>
                        <div className="flex gap-7 text-2xl pt-4">
                            <a href="https://www.facebook.com/share/1B7PCprqon/" target="_blank"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                            <a href="https://www.instagram.com/grow_16withalerah?igsh=NmtzdXg5cGNuYnp2" target="_blank"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                            <a href="https://www.linkedin.com/company/grow-with-alerah/" target="_blank"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
                            <a href="https://www.tiktok.com/@elite_skillsbyalerah?_t=ZM-8uU2PuA5Lbr&_r=1" target="_blank"><FontAwesomeIcon icon={faTiktok}></FontAwesomeIcon></a>
                            <a href="https://x.com/elite_skills16?t=wVngOvNz3YQjTIYmfI8HfA&s=09" target="_blank"><FontAwesomeIcon icon={faXTwitter}></FontAwesomeIcon></a>
                        </div>
                    </section>
                    <section className="pt-12 flex items-center justify-center text-xs">
                        <p className="text-center ">Copyright <FontAwesomeIcon icon={faCopyright} className="text-xs"/> 2025 | Ada's Kitchen. All Right Reserved</p>
                    </section>
                </section>
            </footer>
        </>
    )
};

export default Footer;