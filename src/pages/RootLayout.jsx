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
          <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"/>
            <meta name="keywords" content="crowdfunding, UMKM, Indonesia, crowdfunding UMKM, crowdfunding Indonesia, crowdfunding UMKM Indonesia, crowdfunding UMKM, Investor, Penanam Modal, Modal"/>
            <meta name="theme-name" content="CrowdfundingUMKM" />
          </Head>
            {/* Komponent Start */}
          <Header />
          <SidebarDynamic />
          {children}
          <Footer />
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>
    </>
  );
}
