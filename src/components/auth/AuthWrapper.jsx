// Lokasi: components/AuthWrapper.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const AuthWrapper = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    // Cek apakah token tersedia dalam cookie atau penyimpanan lokal lainnya
    const token = Cookies.get('token');

    // Jika tidak ada token, arahkan pengguna ke halaman login
    if (!token) {
      router.push('/@auth/login');
    }
  }, [router]);

  return <>{children}</>; // Render anak-anak komponen di dalam AuthWrapper
};

export default AuthWrapper;
