// _app.js

import RootLayout from '@/pages/RootLayout';
import '@/styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'notiflix/dist/notiflix-3.2.6.min.css';
import Script from 'next/script';
import { useEffect, useState } from 'react';
import ServiceChecker from '@/components/utils/ServiceChecker';
import AuthWrapper from '@/components/auth/AuthWrapper';

// ContextINvestor
import { UserProvider } from '@/components/Context/userContext';

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || RootLayout;

  const [areAllServicesAvailable, setAreAllServicesAvailable] = useState(true);
  const [hasCheckedService, setHasCheckedService] = useState(false);

  const serviceUrls = [
    process.env.NEXT_PUBLIC_SERVICE_INVESTOR + '/api/v1/service_start',
    // Tambahkan URL layanan lainnya sesuai kebutuhan
  ].filter((url) => url);

  const checkServiceStatus = async () => {
    const statusArray = [];

    for (const url of serviceUrls) {
      try {
        const response = await fetch(url);
        if (response.ok) {
          statusArray.push({ url, status: 'Available' });
        } else {
          statusArray.push({ url, status: 'Not Available' });
        }
      } catch (error) {
        statusArray.push({ url, status: 'Not Available' });
      }
    }

    setAreAllServicesAvailable(statusArray.every((service) => service.status === 'Available'));
    setHasCheckedService(true); // Setelah selesai, tandai bahwa pengambilan data sudah dilakukan
  };

  // Pengecekan pertama kali saat render
  useEffect(() => {
    checkServiceStatus();
  }, []); // Dependensi kosong agar hanya dijalankan saat mount

  // Pengecekan berulang setiap 5 menit
  useEffect(() => {
    const intervalId = setInterval(() => {
      checkServiceStatus();
    }, 5 * 60 * 1000); // 5 menit dalam milidetik

    // Bersihkan interval saat komponen dilepas atau serviceUrls berubah
    return () => clearInterval(intervalId);
  }, [serviceUrls]);

  return (
    <UserProvider>
    <Layout Layout>
      <AuthWrapper>
        <>
          {/* {hasCheckedService && areAllServicesAvailable ? ( */}
            <>
              <Component {...pageProps} />
              <Script src="/assets/js/main.js" />
              <Script src="/assets/vendor/apexcharts/apexcharts.min.js" />
              <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />
              <Script src="/assets/vendor/echarts/echarts.min.js" />
              <Script src="/assets/vendor/quill/quill.min.js" />
              <Script src="/assets/vendor/simple-datatables/simple-datatables.js" />
              <Script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js" />
            </>
          {/* // ) : ( */}
          {/* //   <ServiceChecker serviceUrls={serviceUrls} /> */}
          {/* // )} */}
        </>
        </AuthWrapper>
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
