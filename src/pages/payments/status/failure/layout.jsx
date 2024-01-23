import Head from 'next/head'

export default function StatusFailureLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Gagal</title>
            <meta name="description" content="Pembayaran Gagal"/>
        </Head>
        {children}
      </>
    );
  }
  