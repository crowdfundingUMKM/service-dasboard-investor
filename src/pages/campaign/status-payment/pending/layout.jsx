import Head from 'next/head'

export default function StatusPendingPaymenLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pending Melakukan Pembayaran / Investor Mode</title>
            <meta name="description" content="Pending Melakukan Pembayaran umkm."/>
        </Head>
        {children}
      </>
    );
  }
  