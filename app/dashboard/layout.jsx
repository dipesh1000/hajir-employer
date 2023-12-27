'use client';
import React, { useEffect } from 'react';
import SideNav from '../components/navbar/SideNav';
import { useAuth } from '@/context/AuthContext';

export default function Layout({ children }) {
  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn, 'Froom is Loged in in dashboard');
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
