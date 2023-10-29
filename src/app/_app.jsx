
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '/public/assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RootLayout from '@/app/layout';

import dynamic from 'next/dynamic';

// Menggunakan dynamic untuk memuat skrip Bootstrap hanya di sisi klien
const BootstrapScripts = dynamic(() => import('bootstrap/dist/js/bootstrap.bundle.min.js'), {
    ssr: true,
    loading: () => <><p>Loading Css</p></>, // Anda bisa menambahkan komponen loading di sini jika Anda mau
});

function MyApp({ Component, pageProps }) {

    return(
        <>
            <RootLayout>
                <BootstrapScripts />
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}

export default MyApp;
