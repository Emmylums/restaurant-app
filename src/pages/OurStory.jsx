import React from "react";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import cooking from "../assets/cooking.png";
import { useState } from "react";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export default function OurStory() {
    const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);

    return (
        <>
            <NavBar activeLink="Our Story" onToggleMobileNavBar={() => setMobileNavBarVisible(!mobileNavBarVisible)} />
            <MobileNavBar isVisible={mobileNavBarVisible} activeLink="Our Story" onClose={() => setMobileNavBarVisible(false)} className="md:col-span-1 pt-7"/>
            <section className="relative bg-[url(./assets/background4.jpg)] h-[50vh] bg-center bg-cover">
                <div className="absolute inset-0 h-[50vh] opacity-70 bg-black" />
                <div className="relative flex items-center justify-center h-full">
                    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
                        <div className="p-10 text-center text-white mt-10 ">
                            <h2 className="font-display tracking-widest font-black text-4xl drop-shadow-lg drop-shadow-black">Our Story</h2>
                        </div>
                    </motion.div>
                </div>
            </section>
            <div className="max-w-6xl mx-auto pt-10  pb-20 px-6">
                <h2 className="text-4xl font-bold mb-10 text-center text-own-2 font-display2">The Heart Behind Our Kitchen</h2>
                <div className="grid md:grid-cols-2 gap-10 items-center text-white">
                    <div>
                        <p className="text-lg leading-8 mb-6">
                        Ada’s Kitchen was born from a passion for sharing authentic African flavors with the world. Inspired by family recipes passed down through generations, every dish we serve tells a story of tradition, culture, and love.
                        </p>
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.15 }}>
                            <p className="text-lg leading-8 mb-6">
                                Our journey began in a small kitchen where Ada experimented with spices, herbs, and unique cooking methods to create the perfect balance of flavors.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.15 }}>
                            <p className="text-lg leading-8">
                                At Ada’s Kitchen, food is more than sustenance — it’s a celebration of life, community, and culture.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.3 }}className="rounded-3xl overflow-hidden shadow-lg">
                        <img src={cooking} alt="Chef cooking" className="w-full object-cover" />
                    </motion.div>
                </div>
            </div>

            <div className="bg-own-2 py-20 text-black">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.15 }} className="bg-white bg-opacity-10 backdrop-blur-sm p-7 rounded-3xl shadow-lg transition-transform hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4">Fresh Ingredients</h3>
                        <p className="text-md">
                        We hand-pick the freshest produce and finest spices to ensure every meal bursts with authentic flavors.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.15 }} className="bg-white bg-opacity-10 backdrop-blur-sm p-7 rounded-3xl shadow-lg transition-transform hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4">Family Recipes</h3>
                        <p className="text-md">
                        Our menu is inspired by timeless family recipes that honor our African heritage and culinary traditions.
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.15 }} className="bg-white bg-opacity-10 backdrop-blur-sm p-7 rounded-3xl shadow-lg transition-transform hover:scale-105">
                        <h3 className="text-2xl font-bold mb-4">Passion for Service</h3>
                        <p className="text-md">
                        Every guest is family. We are committed to delivering warm hospitality and exceptional dining experiences.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="pb-20 bg-own-2 text-center text-white">
                <h2 className="text-4xl font-bold mb-6">Be Part of Our Story</h2>
                <p className="text-lg mb-8">Order online and taste the passion behind every dish.</p>
                <Link to="/Menu">
                    <button className="px-8 py-4 bg-white text-own-2 font-semibold text-lg rounded-full shadow-lg hover:bg-gray-100 transition">
                        Order Online
                    </button>
                </Link>
            </div>
        </>
    );
}
