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
    // Jika tidak ada token dan bukan halaman register, arahkan pengguna ke halaman login
    if (!token && router.pathname !== '/@auth/register') {
      router.push('/@auth/login');
    } else if (token && router.pathname === '/@auth/login'){
      // Jika ada token, arahkan pengguna ke halaman dashboard
      router.push('/dashboard');
    }
  }, [router]);

  return <>{children}</>; // Render anak-anak komponen di dalam AuthWrapper
};

export default AuthWrapper;
