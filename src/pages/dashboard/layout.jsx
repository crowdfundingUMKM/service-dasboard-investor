import Head from 'next/head'

export default function DashboardLayout({ children }) {
    return (
      <>
        <Head>
            <title>Dashboard | Investor Mode</title>
            <meta name="description" content="Selamat datang pada dashboard Crowdfunding UMKM sebagai investor"/>

        </Head>
        {children}
      </>
    );
  }
  