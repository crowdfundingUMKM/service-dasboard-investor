// import Script from 'next/script';
import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';


const SidebarDynamic = dynamic(() => import('@/components/Sidebar'), {
  ssr: false // Ini akan memuat komponen hanya di sisi klien     
});      

export default function RootLayout({ children }) {
  return (
    <>
          <Head/>
            {/* Komponent Start */}
          <Header />
          <SidebarDynamic />
          {children}
          <Footer />
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}
