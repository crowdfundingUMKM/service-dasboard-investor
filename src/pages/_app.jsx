

import RootLayout from '@/pages/RootLayout';
import '@/styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* styles.css atau styles.scss */


function MyApp({ Component, pageProps }) {

    const Layout = Component.layout || RootLayout;

    
    return (
        <Layout Layout >
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;

