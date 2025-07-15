import React from "react";

const LineChartCard = () => {
  return (
    <div className="">
      <div className="">
        {/* SVG Line Chart with Fill */}
        <div className="w-full h-24 relative overflow-hidden bg-transparent">
          <svg
            viewBox="10 -3 70 40"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 w-full h-full"
          >
            {/* Fill under the line */}
            <path
              d="M0,30 
                 L10,10 
                 L20,30 
                 L30,15 
                 L40,30 
                 L50,20 
                 L60,30 
                 L70,10 
                 L80,25 
                 L90,10 
                 L100,30 
                 L100,40 
                 L0,40 Z"
              fill="#2c2c2c"  /* Tailwind blue-200 */
            />

            {/* Actual line */}
            <path
              d="M0,30 
                 L10,10 
                 L20,30 
                 L30,15 
                 L40,30 
                 L50,20 
                 L60,30 
                 L70,10 
                 L80,25 
                 L90,10 
                 L100,30"
              fill="none"
              stroke="#000" /* Tailwind blue-500 */
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LineChartCard;