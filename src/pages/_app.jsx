

import RootLayout from '@/pages/RootLayout';
import '@/styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* styles.css atau styles.scss */
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

    const Layout = Component.layout || RootLayout;

    
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

