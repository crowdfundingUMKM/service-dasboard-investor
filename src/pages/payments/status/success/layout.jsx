import Head from 'next/head'

export default function StatusSuccessLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Berhasil</title>
            <meta name="description" content="Pembayaran berhasil pada campaign."/>
        </Head>
        {children}
      </>
    );
  }
  