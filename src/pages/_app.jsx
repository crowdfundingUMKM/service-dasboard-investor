

import RootLayout from '@/pages/layout';
import '@/styles/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
/* styles.css atau styles.scss */


function MyApp({ Component, pageProps }) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}

export default MyApp;

