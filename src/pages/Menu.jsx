import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import AlertBanner from "../components/AlertBanner";
import { useCart } from "../context/CartContext";
import allDishes from "../data/alldishes";
import Footer from "../components/Footer";

export default function Menu() {
  const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [alert, setAlert] = useState({ message: "", type: "", visible: false });

  const { addToCart, getTotalItems } = useCart();

  const filteredItems = searchTerm.trim()
    ? allDishes.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allDishes;

  const [quantities, setQuantities] = useState(
    allDishes.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const showAlert = (message, type) => {
    setAlert({ message, type, visible: true });
    setTimeout(() => setAlert({ message: "", type: "", visible: false }), 3000);
  };

  const increaseQuantity = (id, stock) => {
    setQuantities(prev => ({ ...prev, [id]: Math.min(prev[id] + 1, stock) }));
  };

  const decreaseQuantity = (id) => {
    setQuantities(prev => ({ ...prev, [id]: Math.max(prev[id] - 1, 1) }));
  };

  const handleInputChange = (e, id, stock) => {
    const value = e.target.value;
    if (value === "") {
      setQuantities(prev => ({ ...prev, [id]: "" }));
      return;
    }
    const parsedValue = parseInt(value, 10);
    if (!isNaN(parsedValue)) {
      setQuantities(prev => ({ ...prev, [id]: Math.min(Math.max(parsedValue, 1), stock) }));
    }
  };

  const handleInputBlur = (id) => {
    setQuantities(prev => ({
      ...prev,
      [id]: prev[id] === "" || prev[id] < 1 ? 1 : prev[id]
    }));
  };

  const handleAddToCart = (item) => {
    const quantity = quantities[item.id];
    addToCart(item, quantity);
    showAlert(`${quantity} ${item.name} added to cart!`, "success");

    setQuantities(prev => ({ ...prev, [item.id]: 1 }));
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.24 3.826a1 1 0 00.95.69h4.016c.969 0 1.371 1.24.588 1.81l-3.248 2.357a1 1 0 00-.364 1.118l1.24 3.826c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.248 2.357c-.785.57-1.84-.197-1.54-1.118l1.24-3.826a1 1 0 00-.364-1.118L2.84 9.253c-.783-.57-.38-1.81.588-1.81h4.016a1 1 0 00.95-.69l1.24-3.826z" />
      </svg>
    ));
  };

  const columns = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
  const rows = [];
  for (let i = 0; i < filteredItems.length; i += columns) {
    rows.push(filteredItems.slice(i, i + columns));
  }

  return (
    <div>
      {alert.visible && (
        <AlertBanner message={alert.message} type={alert.type} onClose={() => setAlert({ ...alert, visible: false })} />
      )}

      <NavBar activeLink="Menu" onToggleMobileNavBar={() => setMobileNavBarVisible(!mobileNavBarVisible)} />
      <MobileNavBar isVisible={mobileNavBarVisible} activeLink="Menu" onClose={() => setMobileNavBarVisible(false)} className="md:col-span-1 pt-7" />

      {/* Floating Cart Icon */}
      <div className="fixed bottom-28 right-5 z-50">
        <Link to="/cart" className="relative bg-own-2 p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300">
          <FontAwesomeIcon icon={faShoppingCart} />
          {getTotalItems() > 0 && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold shadow-lg">
              {getTotalItems()}
            </div>
          )}
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative bg-[url(./assets/background4.jpg)] h-[50vh] bg-center bg-cover">
        <div className="absolute inset-0 h-[50vh] opacity-70 bg-black" />
        <div className="relative flex items-center justify-center h-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
            <div className="p-10 text-center text-white mt-10">
              <h2 className="font-display tracking-widest font-black text-4xl drop-shadow-lg drop-shadow-black">MENU</h2>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto pt-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex justify-center">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search for dishes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pr-14 rounded-full border border-own-2 focus:ring-own-2 focus:ring-2 text-lg shadow-md placeholder:text-white"
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {rows.map((row, index) => (
          <RowWithAnimation
            key={index}
            row={row}
            quantities={quantities}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
            handleAddToCart={handleAddToCart}
            renderStars={renderStars}
          />
        ))}
      </div>
    </div>
  );
}

function RowWithAnimation({
  row,
  quantities,
  increaseQuantity,
  decreaseQuantity,
  handleInputChange,
  handleInputBlur,
  handleAddToCart,
  renderStars
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="grid gap-10 pt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
    >
      {row.map((item, itemIndex) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: itemIndex * 0.2, duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <img src={item.image} alt={item.name} className="w-full h-60 object-cover" />
          <div className="p-6">
            <h3 className="text-xl font-bold text-own-2 mb-2">{item.name}</h3>
            <p className="text-gray-700 mb-2">{item.description}</p>
            <div className="flex items-center mb-2">{renderStars(item.rating)}</div>
            <p className="text-sm text-gray-600 mb-4">In stock: {item.stock - (quantities[item.id] ?? 0)}</p>
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <button onClick={() => decreaseQuantity(item.id)} className="bg-own-2 text-white p-2 rounded-full z-30">
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <input
                  type="number"
                  min="1"
                  value={quantities[item.id]}
                  onChange={(e) => handleInputChange(e, item.id, item.stock)}
                  onBlur={() => handleInputBlur(item.id)}
                  className="w-16 text-center z-30 text-black p-2 border rounded-lg font-bold text-lg"
                />
                <button
                  onClick={() => increaseQuantity(item.id, item.stock)}
                  className={`p-2 rounded-full z-30 text-white ${quantities[item.id] >= item.stock ? 'bg-gray-400 cursor-not-allowed' : 'bg-own-2'}`}
                  disabled={quantities[item.id] >= item.stock}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
              <span className="text-lg font-semibold text-gray-800">₦{item.price.toLocaleString()}</span>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => handleAddToCart(item)}
                className="w-full py-3 bg-own-2 text-white rounded-full font-semibold hover:bg-own-2/90 transition z-30"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
    <Footer/>
    </>
  );
}
