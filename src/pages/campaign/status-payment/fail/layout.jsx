import Head from 'next/head'

export default function StatusFailPaymenLayout({ children }) {
    return (
      <>
        <Head>
            <title>Gagal Melakukan Pembayaran / Investor Mode</title>
            <meta name="description" content="Gagal Melakukan Pembayaran umkm."/>
        </Head>
        {children}
      </>
    );
  }
  