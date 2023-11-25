import RootLayout from '@/pages/RootLayout';

import '@/styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'notiflix/dist/notiflix-3.2.6.min.css'

/* styles.css atau styles.scss */
import Script from 'next/script';

import { useEffect } from 'react';
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {

    const Layout = Component.layout || RootLayout;

    const router = useRouter();

    // redirect to dashboard 
    useEffect(() => {
        // Redirect from pages/index.jsx to pages/dashboard/index.jsx
        if (router.pathname === '/' && typeof window !== 'undefined') {
        router.push('/dashboard');
        }
    }, [router.pathname]);

    
    return (
        <Layout Layout >
            <Component {...pageProps} />
            <Script src="/assets/js/main.js"/>
            <Script src="/assets/vendor/apexcharts/apexcharts.min.js"/>
            <Script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
            <Script src="/assets/vendor/echarts/echarts.min.js"/>
            <Script src="/assets/vendor/quill/quill.min.js"/>
            <Script src="/assets/vendor/simple-datatables/simple-datatables.js"/>
            <Script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"/>
        </Layout>
    );
}

export default MyApp;

