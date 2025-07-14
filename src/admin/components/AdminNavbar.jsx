import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {Element} from 'react-scroll';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import boy from "../../assets/girl.png";

const AdminNavBar = ({toggleSidebar}) => {
    const [isSticky, setIsSticky] = useState(false);
    const [showBackground, setShowBackground] = useState(false);
    const hideTimerRef = useRef(null);
    
    function action(){
        setActiveTab(activeLink)
    }

    useEffect(() => {
    const handleScroll = () => {
      const shouldBeSticky = window.scrollY >= window.innerHeight;

      if (shouldBeSticky) {
        setIsSticky(true);
        setShowBackground(true);

        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        hideTimerRef.current = setTimeout(() => {
          setShowBackground(false);
        }, 5000);
      } else {
        setIsSticky(false);
        setShowBackground(false);
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);


    return(
            <Element name="top">
                <header className={`select-none w-full flex justify-between items-center transition-all duration-100 ease-in z-40 lg:px-16 px-5 text-white bg-black py-5 shadow-lg fixed "g-transparent"}`}>
                    <div className="">
                        <button className="text-white text-3xl" onClick={toggleSidebar}>
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="w-12 h-12 border-2 rounded-full flex items-center justify-center">
                            <h3>18</h3>
                        </div>
                        <div className="w-12 h-12 bg-own-2 rounded-full p-2">
                            <img src={boy} alt="" className="object-cover rounded-full"/>
                        </div>
                    </div>
                </header>
            </Element>
        );
}

export default AdminNavBar;