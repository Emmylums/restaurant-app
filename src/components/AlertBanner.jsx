// src/components/AlertBanner.jsx
import React, { useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

export default function AlertBanner({ message, type, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);  // auto dismiss after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = type === "success" ? faCheckCircle : faTimesCircle;

  return (
    <div className={`fixed top-16 right-5 z-50 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 transition-all duration-300`}>
      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
      <span className="font-semibold">{message}</span>
    </div>
  );
}