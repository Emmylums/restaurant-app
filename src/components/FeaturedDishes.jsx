import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeaturedDishes({ slides, interval = 5000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, interval);
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  return (
    <section className="w-full bg-white mx-auto overflow-hidden py-10 px-6 flex flex-col items-center justify-center relative">
      <div className="mb-5">
        <h2 className="animate-bounce text-2xl font-semibold text-center text-black font-display">
          Featured Dishes
        </h2>
      </div>

      <motion.div
        className="relative w-full h-[60vh]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.15 }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <div
              className="relative w-full h-full bg-left bg-cover"
              style={{ backgroundImage: `url(${slide.url})` }}
            >
              <div className="absolute inset-0 opacity-70 bg-black" />
              <div className="relative flex items-center justify-center h-full">
                <div className="p-5 text-center text-white">
                  <h2 className="font-display font-bold text-3xl">{slide.title}</h2>
                  <h3 className="font-semibold pt-6">{slide.description}</h3>
                  <Link to="/Menu">
                    <div className="pt-5">
                      <button className="bg-own-2 text-black text-sm px-7 py-4 rounded-md flex items-center justify-center gap-3 tracking-wide">
                        Order Now{" "}
                        <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}