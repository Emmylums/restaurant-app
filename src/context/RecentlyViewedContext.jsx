import React, { createContext, useContext, useEffect, useState } from "react";

const RecentlyViewedContext = createContext();

export function RecentlyViewedProvider({ children }) {
  const [recentlyViewed, setRecentlyViewed] = useState(() => {
    const stored = localStorage.getItem("recentlyViewed");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("recentlyViewed", JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  const addToRecentlyViewed = (item) => {
    setRecentlyViewed((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      let newList = exists
        ? prev.filter((i) => i.id !== item.id) // remove old occurrence
        : prev;

      // Add new item to end
      newList = [...newList, item];

      // Trim to 10 max
      if (newList.length > 10) {
        newList = newList.slice(newList.length - 10); // keep last 10
      }

      return newList;
    });
  };

  return (
    <RecentlyViewedContext.Provider value={{ recentlyViewed, addToRecentlyViewed }}>
      {children}
    </RecentlyViewedContext.Provider>
  );
}

export function useRecentlyViewed() {
  return useContext(RecentlyViewedContext);
}
