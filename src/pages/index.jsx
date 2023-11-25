// pages/index.jsx
// Halaman ini tidak memiliki konten dan langsung mengarahkan ke /dashboard
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to /dashboard
    router.push('/dashboard');
  });

  return null; // Null atau komponen kosong, karena tidak ada konten yang perlu ditampilkan
}

export default Home;
