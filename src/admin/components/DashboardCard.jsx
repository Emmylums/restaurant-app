// src/components/DashboardCard.jsx
import React from 'react';

export default function DashboardCard({ title, value, icon }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start">
      <span className="text-4xl mb-2">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
