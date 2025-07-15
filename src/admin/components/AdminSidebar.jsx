import { faClose, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";


const AdminSideBar = ({ isOpen, activeLink, closeSidebar, className }) => {
  
  const [activeTab, setActiveTab] = useState(activeLink);

  function action(){
    setActiveTab(activeLink)
  }

  const menuItems = [
      { name: "Dashboard"},
      { name: "Products"},
      { name: "Orders"},
      { name: "Invoice"},
      { name: "Customers"},
      { name: "Offers"},
      { name: "Reports"},
      { name: "Settings"},
  ];

  return (
    <>
      <div onClick={closeSidebar} className={`${isOpen ? "bg-black/50 backdrop-blur-sm z-50 fixed top-0 w-full h-screen" : ""}`}></div>
      <div
        className={`md:hidden landscape:hidden fixed  top-0 w-64 h-screen px-5 bg-own-1 text-[#dfe3e7] transform ${
          isOpen  ? "translate-x-0" : "translate-x-[-320px]"
        } transition-transform duration-500 z-50 ${className}`}
      >
        <div className="flex justify-between pt-10 items-center px-4 mb-8">
          <h2 className="text-xl font-bold">Ada's Kitchen</h2>
          <button className="md:hidden landscape:hidden text-xl" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <ul>
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2"> 
              <Link to={`/${item.name}`}>
                <button
                  onClick={action}
                  className={`w-full text-left py-2 px-4 rounded ${
                    activeTab === item.name
                    ? "bg-own-2 text-black"
                    : ""
                  }`}
                  >
                    {item.name}
                    {item.icon && item.icon}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminSideBar;
