"use client"
import React, { createContext, useContext, useState } from 'react';

const CategoryContext = createContext({ category: 0, setCategory: (value: number) => {} });

export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [category, setCategory] = useState(0);

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};