import RootLayout from '@/pages/RootLayout';

import '@/styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'notiflix/dist/notiflix-3.2.6.min.css'

/* styles.css atau styles.scss */
import Script from 'next/script';
import { useEffect, useState } from 'react';

import ServiceChecker from '@/components/utils/ServiceChecker';

import AuthWrapper from '@/components/auth/AuthWrapper';

// This default export is required in a new `pages/_app.js` file.



function MyApp({ Component, pageProps }) {
    const Layout = Component.layout || RootLayout;
    const [areAllServicesAvailable, setAreAllServicesAvailable] = useState(true);
  
    const serviceUrls = [
      process.env.NEXT_PUBLIC_SERVICE_INVESTOR + '/api/v1/service_start',
      // Tambahkan URL layanan lainnya sesuai kebutuhan
    ].filter((url) => url); // Filter agar URL yang undefined tidak ikut
  
    useEffect(() => {
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
      };
  
      checkServiceStatus();
    }, [serviceUrls]);
  
    return (
  <AuthWrapper>

      <Layout Layout>
        {areAllServicesAvailable ? (
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
        ) : (
          <ServiceChecker serviceUrls={serviceUrls} />
        )}
      </Layout>
      </AuthWrapper>
    );
  }

export default MyApp;