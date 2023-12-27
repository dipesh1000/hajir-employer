'use client';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const template = ({ children }) => {
  const router = useRouter();
  const { setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  useEffect(() => {
    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');
    if (!token) {
      return setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
      setAuthUser(user);
      if (token && user) {
        return router.push('/dashboard');
      }
    }
  }, []);
  return <div>{children}</div>;
};

export default template;
