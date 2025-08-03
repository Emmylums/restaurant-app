import {
  faClose,
  faHome,
  faUtensils,
  faPlusCircle,
  faInfoCircle,
  faThLarge,
  faShoppingCart,
  faFileInvoiceDollar,
  faUsers,
  faTags,
  faChartBar,
  faCog,
  faChevronRight,
  faChevronDown,
  faUserTie,
  faUserPlus,
  faListAlt,
  faClipboardList,
  faFileCirclePlus,
  faFileInvoice,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AdminSideBar = ({ isOpen, activeLink, closeSidebar, className }) => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (itemName) => {
    setExpanded(expanded === itemName ? null : itemName);
  };

  const menuItems = [
    { name: "Dashboard", icon: faHome, path: "/dashboard" },

    {
      name: "Menu Item",
      icon: faUtensils,
      children: [
        { name: "Add to Menu", path: "/menu/add", icon: faPlusCircle },
        { name: "Menu Detail", path: "/menu/detail", icon: faInfoCircle },
        { name: "All Menu", path: "/menu/all", icon: faThLarge },
      ],
    },

    {
      name: "Employees",
      icon: faUserTie,
      children: [
        { name: "All Employees", path: "/employees/all", icon: faUsers },
        { name: "Add Employee", path: "/employees/add", icon: faUserPlus },
      ],
    },

    { name: "Orders", icon: faShoppingCart, path: "/orders" },
    { name: "Invoice",
      icon: faFileInvoiceDollar,
      children: [
        { name: "All Invoices", path: "/employees/all", icon: faFileInvoice },
        { name: "New Invoice", path: "/employees/add", icon: faFileCirclePlus },
      ],
    },
    { name: "Offers",
      icon: faTags,
      children: [
        { name: "New Offers", path: "/employees/all", icon: faPlusCircle },
        { name: "Existing Offers", path: "/employees/add", icon: faClipboardList },
        { name: "All Offers", path: "/employees/add", icon: faListAlt },
      ],
    },
    { name: "Reports", icon: faChartBar, path: "/reports" },
    { name: "Settings", icon: faCog, path: "/settings" },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        onClick={closeSidebar}
        className={`${
          isOpen ? "bg-black/50 backdrop-blur-sm md:hidden z-50 fixed top-0 w-full h-screen" : ""
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 w-64  md:w-[30%] lg:w-[25%] h-screen bg-own-1 md:bg-black text-[#dfe3e7] transform ${
          isOpen ? "translate-x-0" : "translate-x-[-320px]"
        } transition-transform duration-500 z-50 ${className}`}
      >
        <div className="flex justify-between pt-10 pb-5 px-5 items-center bg-own-1">
          <h2 className="text-xl font-bold">Ada's Kitchen</h2>
          <button className="text-xl md:hidden" onClick={closeSidebar}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        <ul className="md:pt-7 px-5">
          {menuItems.map((item) => (
            <li key={item.name} className="mb-2">
              {item.children ? (
                <>
                  {/* Parent collapsible link */}
                  <button
                    onClick={() => handleExpand(item.name)}
                    className={`w-full flex justify-between items-center py-2 px-4 rounded ${
                      expanded === item.name ? "bg-own-2 text-black" : ""
                    }`}
                  >
                    {/* Icon + Text */}
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={item.icon} />
                      {item.name}
                    </span>

                    {/* Chevron */}
                    <FontAwesomeIcon
                      icon={expanded === item.name ? faChevronDown : faChevronRight}
                      className="text-sm"
                    />
                  </button>

                  {/* Submenu with animation */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expanded === item.name ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <ul className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link to={child.path}>
                            <div
                              className={`py-2 px-4 rounded text-sm flex items-center gap-2 ${
                                location.pathname === child.path
                                  ? "bg-own-2 text-black"
                                  : "hover:bg-own-2 hover:text-black"
                              }`}
                            >
                              <FontAwesomeIcon icon={child.icon} />
                              {child.name}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <Link to={item.path}>
                  <button
                    className={`w-full flex items-center gap-2 py-2 px-4 rounded ${
                      activeLink === item.name ? "bg-own-2 text-black" : ""
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                    {item.name}
                  </button>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AdminSideBar;
