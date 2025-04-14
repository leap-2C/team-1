import React from 'react';
import DashBoard from '@/components/DashBoard'; 
import HomePage from '@/components/home_page/HomePage';


export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <DashBoard/>
      <HomePage/>
    </div>
  );
}