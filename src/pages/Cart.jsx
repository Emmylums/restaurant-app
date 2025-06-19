import React, { useState } from "react";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import { motion } from 'framer-motion';
import { useCart } from "../context/CartContext"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import allDishes from "../data/allDishes.js";
import AlertBanner from "../components/AlertBanner";
import { Link } from "react-router-dom";

export default function Cart() {
  const [mobileNavBarVisible, setMobileNavBarVisible] = useState(false);
  const { cart, getTotalQuantity, updateQuantity, removeFromCart, addToCart } = useCart();
  const [alert, setAlert] = useState(null);

  const handleQuantityChange = (id, newQuantity) => {
    updateQuantity(id, newQuantity);
    setAlert({ message: 'Quantity updated', type: 'success' });
  };

  const handleAddToCart = (dish) => {
    addToCart(dish);
    setAlert({ message: `${dish.name} added to cart`, type: 'success' });
  };

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
    setAlert({ message: 'Item removed from cart', type: 'success' });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const relatedDishes = allDishes
    .filter(dish => !cart.some(cartItem => cartItem.id === dish.id))
    .slice(0, 10);

  return (
    <>
      {alert && <AlertBanner message={alert.message} type={alert.type} onClose={() => setAlert(null)} />}

      <NavBar activeLink="Cart" onToggleMobileNavBar={() => setMobileNavBarVisible(!mobileNavBarVisible)} />
      <MobileNavBar isVisible={mobileNavBarVisible} activeLink="Cart" onClose={() => setMobileNavBarVisible(false)} className="md:col-span-1 pt-7" />

      <section className="relative bg-[url(./assets/background4.jpg)] h-[50vh] bg-center bg-cover">
        <div className="absolute inset-0 h-[50vh] opacity-70 bg-black" />
        <div className="relative flex items-center justify-center h-full">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.0 }}>
            <div className="p-10 text-center text-white mt-10">
              <h2 className="font-display tracking-widest font-black text-4xl drop-shadow-lg drop-shadow-black">Your Cart</h2>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {cart.length === 0 ? (
          <>
            <div className="px-5">
              <div className="text-center"><FontAwesomeIcon icon={faCartShopping} className="text-own-2 text-6xl animate-pulse"/></div>
              <div className="text-center text-2xl pt-3">Your cart is empty</div>
              <div className="text-center mt-4 pt-7 animate-bounce">Browse our mouthwatering dishes and treat yourself to something special!</div>
              <div className="text-center pt-10"><button className="px-4 py-5 bg-own-2 rounded-lg font-bold ">Add items <FontAwesomeIcon icon={faPlus} className="text-sm pl-1 font-bold"/></button></div>
            </div>
          </>
        ) : (
          <>
            <div className="pb-5 pl-3">CART ({getTotalQuantity()})</div>
            <div className="grid grid-cols-1 gap-8">
              {cart.map(item => (
                <div key={item.id} className="flex-row items-center bg-gray-100 rounded-3xl shadow-md py-6 px-7 gap-6">
                  <div className="flex">
                    <div>
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-2xl border-4 border-own-2" />
                    </div>
                    <div className="flex-1 pl-5">
                      <h3 className="text-lg font-bold text-own-2 mb-1">{item.name}</h3>
                      <p className="text-gray-700">₦{item.price.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="text-gray-700 flex flex-col items-end pr-1.5 gap-3 mt-4 md:mt-0">
                    <p className="text-lg font-semibold mb-4">
                      ₦{(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                  <div className="w-full">
                    <div className="flex justify-between">
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-red-500 hover:underline"
                      >
                        <FontAwesomeIcon icon={faTrashCan} className="pr-1 text-sm"/> Remove
                      </button>

                      <div className="flex items-center overflow-hidden">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          disabled={item.quantity === 1}
                          className={`px-3 py-1.5 transition font-bold rounded-md ${
                            item.quantity === 1
                              ? "bg-gray-400 text-white cursor-not-allowed"
                              : "bg-own-2 text-white hover:bg-own-2/80"
                          }`}
                        >
                          −
                        </button>

                        <span className="px-4 py-1 text-black font-semibold">{item.quantity}</span>

                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          disabled={item.quantity === item.stock}
                          className={`px-3 py-1.5 transition font-bold rounded-md ${
                            item.quantity === item.stock
                              ? "bg-gray-400 text-white cursor-not-allowed"
                              : "bg-own-2 text-white hover:bg-own-2/80"
                          }`}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-end">
              <div className="bg-gray-100 text-own-2 p-8 rounded-3xl shadow-lg w-full md:w-1/3">
                <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
                <div className="flex justify-between text-lg mb-6">
                  <span>Total:</span>
                  <span>₦{calculateTotal().toLocaleString()}</span>
                </div>
                <Link to="/checkout">
                  <button className="w-full py-4 bg-own-2 text-gray-100 font-bold rounded-full hover:bg-gray-100 hover:text-own-2 transition">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>

            {/* Related Dishes */}
            <div className="mt-20">
              <h3 className="text-2xl font-bold mb-6 text-own-2">Related Dishes</h3>
              <div className="flex overflow-x-auto space-x-6">
                {relatedDishes.map(dish => (
                  <div key={dish.id} className="min-w-[200px] bg-white shadow-md rounded-2xl p-4 border border-gray-200">
                    <img src={dish.image} alt={dish.name} className="w-full h-32 object-cover rounded-xl mb-3" />
                    <h4 className="font-semibold text-own-2 text-lg mb-1">{dish.name}</h4>
                    <p className="text-gray-600 text-sm mb-2">₦{dish.price.toLocaleString()}</p>
                    <button
                      onClick={() => handleAddToCart(dish)}
                      className="mt-auto text-sm font-bold text-white bg-own-2 px-3 py-2 rounded-full hover:bg-own-2/90"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
