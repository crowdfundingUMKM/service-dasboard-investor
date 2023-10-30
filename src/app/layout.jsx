// import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

import '/public/assets/css/style.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Script from 'next/script';

import Head from 'next/head';

const SidebarDynamic = dynamic(() => import('@/components/Sidebar'), {
  ssr: true // Ini akan memuat komponen hanya di sisi klien     
});

const metadata = {
  icon: '/assets/img/favicon.png',
}
      

export default function RootLayout({ children }) {
  return (
    <>
      
      <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="" />
          <meta name="keywords" content="" />
          <link href="/assets/img/favicon.png" rel="icon"/>
          <link href="/assets/img/apple-touch-icon.png"  />
          <link href="/assets/vendor/boxicons/css/boxicons.min.css"  />
          <link href="/assets/vendor/remixicon/remixicon.css"  />
          

          {/* <!-- Vendor CSS Files --> */}
          <link href="assets/vendor/bootstrap/css/bootstrap.min.css" />
          <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" />
          <link href="assets/vendor/boxicons/css/boxicons.min.css" />
          <link href="assets/vendor/quill/quill.snow.css" />
          <link href="assets/vendor/quill/quill.bubble.css" />
          <link href="assets/vendor/simple-datatables/style.css" />

          <link href="/assets/vendor/swiper/swiper-bundle.min.css"  />
          <link href="/assets/css/style.css" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'"/>
          <link href="/assets/css/style.css"  />
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=optional" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i&display=optional" rel="stylesheet"/>

         
        </Head>
        {/* <body> */}
          
      
            {/* Komponent Start */}
          <Header />
          <SidebarDynamic />
          {children}
          <Footer />
          <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a>

          <script src="/assets/js/main.js" ></script>
          <script src="/assets/vendor/apexcharts/apexcharts.min.js"></script>
          <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/assets/vendor/echarts/echarts.min.js"></script>
          <script src="/assets/vendor/quill/quill.min.js"></script>
          <script src="/assets/vendor/simple-datatables/simple-datatables.js"></script>
        
        {/* </body> */}
      
    </>
  );
}

// export default DashboardLayout;