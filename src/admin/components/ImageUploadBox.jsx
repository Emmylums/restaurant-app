import React, { useRef, useState } from 'react';
import { faCloudUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ImageUploadBox = ({ onImageSelect }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const handleImageChange = (file) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        onImageSelect(reader.result); // Pass image data to parent
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    handleImageChange(file);
  };

  const handleBoxClick = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  };

  return (
    <div className="flex flex-col w-full md:w-[50%] mb-14">
      <h2 className='text-left w-full text-2xl mb-5 font-semibold font-display2'>Product Photo</h2>
      <div
        onClick={handleBoxClick}
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`w-full h-96 border-4 border-dotted rounded-lg cursor-pointer flex items-center justify-center transition duration-300 ${
          isDragging ? 'border-white' : 'border-gray-300 p-2.5 hover:border-own-2'
        }`}
      >
        {imagePreview ? (
          <img
            src={imagePreview}
            alt="Selected"
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <div className="flex flex-col items-center px-5 text-center">
            <FontAwesomeIcon icon={faCloudUpload} className="text-5xl mb-5 text-own-2" />
            <h3 className="text-3xl font-light font-display2 my-4">
              Drop your image here, or <span className="text-own-2 font-medium">click to browse</span>
            </h3>
            <p className="text-sm text-gray-500 mt-2">1600 x 1200 (4:3) recommended. PNG, JPG, GIF files are allowed.</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileInputChange}
        />
      </div>
    </div>
  );
};

export default ImageUploadBox;
