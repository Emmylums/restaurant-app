import React, { useState } from 'react';
import AdminSideBar from '../components/AdminSidebar';
import AdminNavBar from '../components/AdminNavbar';
import ImageUploadBox from '../components/ImageUploadBox';
import { FaStar } from 'react-icons/fa';

export default function EditMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebars = () => {
  setIsSidebarOpen(prev => {
    const newState = !prev;    return newState;
    });
    };

    const categories = ['Breakfast', 'Lunch', 'Dinner', 'Drinks', 'Snacks', 'Dessert'];
  const [menuImage, setMenuImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    ingredients: '',
    description: '',
    rating: 0,
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRating = (rating) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  const handleReset = () => {
    setFormData({
      name: '',
      quantity: '',
      price: '',
      ingredients: '',
      description: '',
      rating: 0,
      category: '',
    });
    setMenuImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const completeData = {
      ...formData,
      image: menuImage,
    };

    console.log("Submitted Menu Data:", completeData);
    // Send to backend or storage logic goes here
  };



  return (
    <>
      <AdminNavBar toggleSidebar={toggleSidebars} isSideBarOpen={isSidebarOpen}/>
      <AdminSideBar isOpen={isSidebarOpen} closeSidebar={closeSidebar} activeLink="/admin/menu/add"/>
      <div className='md:flex md:justify-end'>
        <form onSubmit={handleSubmit} className={`pt-32 px-5 md:px-10 md:flex md:justify-between md:gap-16 ${isSidebarOpen ? "md:w-[70%] lg:w-[75%]" : "md:w-full"} transition-all duration-500`}>
          <ImageUploadBox onImageSelect={setMenuImage}/>
          <div className='md:w-[50%]'>
            <h2 className='text-left w-full text-2xl mb-3.5 font-semibold font-display2'>General Information</h2>
            <div className='flex flex-col md:flex-row gap-5 justify-between'>
                <div className="mb-6 md:w-[45%]">
                    <fieldset className="relative border border-own-2 rounded-lg px-4 pt-4 pb-4">
                        <legend className=" splay font-light px-2">Name</legend>
                        <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter name of the cuisine"
                        required
                        className="w-full focus:outline-none"
                        />
                    </fieldset>
                </div>

                <div className="mb-6 md:w-[45%]">
                    <fieldset className="relative border border-own-2 rounded-lg px-4 pt-4 pb-4">
                        <legend className="font-display font-light 500 px-2">Quantity</legend>
                        <input
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="Enter quantity"
                        required
                        type="number"
                        className="w-full focus:outline-none"
                        />
                    </fieldset>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-5 justify-between'>
                <div className="mb-6 md:w-[45%]">
                    <fieldset className="relative border border-own-2 rounded-lg px-4 pt-4 pb-4">
                        <legend className="font-display font-light 500 px-2">Price</legend>
                        <input
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        required
                        type="number"
                        className="w-full focus:outline-none"
                        />
                    </fieldset>
                </div>
                <div className="mb-8 md:w-[45%]">
                    <fieldset className="relative border border-own-2 rounded-lg px-4 pt-4 pb-4">
                        <legend className="font-display font-light 500 px-2">Category</legend>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full  bg-own-1 text-white border border-none font-display font-light rounded-lg focus:outline-none">
                            <option value="" disabled hidden>Select Category</option>
                            {categories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
                        </select>
                    </fieldset>
                </div>
            </div>

                <div className="mb-6">
                <fieldset className="relative border border-own-2 rounded-lg px-4 pt-4 pb-4">
                    <legend className="font-display font-light 500 px-2">Ingredients</legend>
                    <textarea
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Ingredients should be separated with a comma (,)"
                    className="w-full focus:outline-none resize-none"
                    ></textarea>
                </fieldset>
                </div>

                <div className="mb-6">
                <fieldset className="relative border border-own-2 rounded-lg px-4 pt-4 pb-4">
                    <legend className="font-display font-light 500 px-2">Description</legend>
                    <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Brief Descripttion"
                    className="w-full focus:outline-none resize-none text-whtie"
                    ></textarea>
                </fieldset>
                </div>


            {/* Buttons */}
            <div className="flex justify-between">
                <button
                type="reset"
                onClick={handleReset}
                className="px-6 py-3 bg-gray-300 rounded-lg text-black font-semibold font-display hover:bg-gray-400 transition"
                >
                Clear
                </button>
                <button
                type="submit"
                className="px-6 py-3 bg-own-2 text-black font-semibold font-display rounded-lg hover:bg-own-2-dark transition"
                >
                Save To Menu
                </button>
                </div>
            </div>
        </form>
      </div>
    </>
  );
}
