// UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUser } from '@/service/investor/member';
import Cookies from 'js-cookie';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    // Lakukan pengambilan data dari API saat komponen dimuat
    const fetchData = async () => {
      try {
        const token = Cookies.get('token');
        const response = await getUser(token);
        const userData = response.data;
        // console.log('userData: ', userData);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchData();
  }, []); // [] agar useEffect hanya dijalankan sekali saat komponen dimuat

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
