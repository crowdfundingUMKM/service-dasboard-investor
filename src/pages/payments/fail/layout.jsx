import Head from 'next/head'

export default function PaymentFailLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Gagal | Investor Mode</title>
            <meta name="description" content="Pembayaran Gagal"/>
        </Head>
        {children}
      </>
    );
  }
  