import { useEffect, useState} from "react";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import jollof from "../assets/jollof.jpeg";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import TestimonialSlider from "../components/TestimonialSlider";
import MotionWrapper from "../components/MotionWrapper";
import { Link } from "react-router-dom";


export default function Home() {
    const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            url: "bg-[url(./assets/jollof2.jpg)]",
            title: "Jollof Rice",
            description: "Original recipe simmered in a rich tomato and pepper sauce, served with tender Grilled Chicken, Sweet Fried Plantains, and a side of Spicy Slaw for that perfect crunch.",
        },
        {
            url: "bg-[url(./assets/egusi.jpg)]",
            title: "Egusi Soup",
            description: "Original recipe made with ground melon seeds, slow-cooked in a savory blend of spices, peppers, and palm oil. Served with tender pieces of meat and fish, and paired perfectly with pounded yam or fufu for a hearty, traditional meal.",
        },
        {
            url: "bg-[url(./assets/fried.jpg)]",
            title: "Fried Rice",
            description: "Fried Rice stir-fried with mixed vegetables, seasoned to perfection with curry and thyme for a vibrant, savory flavor. Served with succulent grilled chicken and a fresh side of salad for a balanced, delicious West African classic.",
        },
    ]

    const testimonials = [
        {
            name: "John Doe",
            description: "Original recipe simmered in a rich tomato and pepper sauce, served with tender Grilled Chicken, Sweet Fried Plantains, and a side of Spicy Slaw for that perfect crunch.",
            image: girl,
        },
        {
            name: "Janet Abowale",
            description: "Original recipe simmered in a rich tomato and pepper sauce, served with tender Grilled Chicken, Sweet Fried Plantains, and a side of Spicy Slaw for that perfect crunch.",
            image: boy,
        },
        {
            name: "James Carioke",
            description: "Original recipe simmered in a rich tomato and pepper sauce, served with tender Grilled Chicken, Sweet Fried Plantains, and a side of Spicy Slaw for that perfect crunch.",
            image: girl,
        },
        {
            name: "Blah blah",
            description: "Original recipe simmered in a rich tomato and pepper sauce, served with tender Grilled Chicken, Sweet Fried Plantains, and a side of Spicy Slaw for that perfect crunch.",
            image: boy,
        },
    ]

    useEffect(() => {
        const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        }, 7000);

        return () => clearInterval(timer);
    }, []);

  return (
    <>
        <NavBar activeLink="Home" onToggleMobileNavBar={() => setMobileNavBarVisible(!mobileNavBarVisible)}/>
        
        <MobileNavBar isVisible={mobileNavBarVisible} activeLink="Home" onClose={() => setMobileNavBarVisible(false)} className="md:col-span-1 pt-7"/>
        <div>
            <main>
                <section className="relative bg-[url(./assets/background6.jpg)] h-screen bg-center bg-cover">
                    <div className="absolute inset-0 h-screen opacity-70 bg-black" />
                    <div className="relative flex items-center justify-center h-full">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
                            <div className="p-10 text-center text-white mt-10 ">
                                <h2 className="font-display font-bold text-4xl">Welcome to <br /> Ada’s Kitchen </h2>
                                <h3 className="font-semibold text-2xl pt-5"> A Taste of Nigeria’s <br /> Finest Flavors</h3>
                                <h4 className="pt-2">Savor Authentic Nigerian Cuisine, Crafted with Love & Tradition</h4>

                                <Link to="/Menu">
                                    <button className="bg-own-2 mt-14 text-black text-lg font-semibold p-4 rounded-md">Order Now</button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
                <section className=" w-full  bg-white mx-auto overflow-hidden h-[90vh] py-10 px-6 flex flex-col items-center justify-center">
                    <div className="mb-5">
                        <h2 className="animate-bounce text-2xl font-semibold text-center text-black font-display">Featured Dishes</h2>
                    </div>
                    <motion.div className="relative w-full h-full" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.15 }}>
                        {slides.map((slide, index) => (
                            <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"}`}>
                                <div className={`relative h-[60vh] min-w-full bg-left bg-cover ${slide.url}`}>
                                    <div className="absolute inset-0 opacity-70 bg-black" />
                                    <div className="relative flex items-center justify-center h-full">
                                        <div className="p-5 text-center text-white ">
                                            <h2 className="font-display font-bold text-3xl">{slide.title}</h2>
                                            <h3 className="font-semibold pt-6">{slide.description}</h3>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/Menu">
                                    <div className="pt-5">
                                        <button className="bg-own-2 text-black text-sm px-7 py-4 rounded-md flex items-center justify-center gap-3 tracking-wide">Order Now <FontAwesomeIcon className="text-xs" icon={faArrowRight}/></button>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </motion.div>

                </section>
                <section className="flex flex-col-reverse px-6 py-10 bg-own-2 text-black">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.15 }}>
                        <h2 className="text-2xl font-semibold pt-10 font-display2">Our Story</h2>
                        <p className="text-sm py-4 tracking-wide text-justify">
                            At Ada’s Kitchen, our journey began with a simple yet powerful idea: to create delicious, wholesome meals that honor tradition while embracing modern tastes. Named after the matriarch of our family, Ada, whose love for cooking brought people together, we strive to keep her spirit alive in every dish we serve. <br /> <br />

                            Ada’s recipes were more than just food. They were a celebration of culture, warmth, and connection. From her cozy home kitchen to yours, we’ve preserved her timeless flavors while adding our own creative twist. Every bite tells a story of heritage, passion, and the joy of sharing good food with good company. <br /> <br />

                            Whether you’re joining us for a comforting classic or an exciting new creation, we invite you to be part of Ada’s Kitchen; where every meal is made with love.
                        </p>
                        <Link to="/Our Story">
                            <button className="bg-black text-own-2 text-sm px-6 py-4 rounded-md tracking-wide">Learn More</button>
                        </Link>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.3 }}className="md:w-1/2">
                        <img src={jollof} alt="Jollof Rice" className="rounded-lg" />
                    </motion.div>
                </section>
                <section className="py-10 px-4 md:px-6 bg-white">
                    <MotionWrapper direction="up">
                        <h2 className="text-2xl font-semibold text-center text-black font-display mb-5">Testimonials</h2>
                    </MotionWrapper>

                    <MotionWrapper direction="up" delay={0.3}>
                        <TestimonialSlider testimonials={testimonials} />
                    </MotionWrapper>
                </section>
            </main>
        </div>
    </>
  );
}