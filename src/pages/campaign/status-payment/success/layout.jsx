import Head from 'next/head'

export default function StatusSuccesPaymenLayout({ children }) {
    return (
      <>
        <Head>
            <title>Berhasil Melakukan Pembayaran / Investor Mode</title>
            <meta name="description" content="Berhasil Melakukan Pembayaran umkm."/>
        </Head>
        {children}
      </>
    );
  }
  