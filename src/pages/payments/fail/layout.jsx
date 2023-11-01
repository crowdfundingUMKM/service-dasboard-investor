import Head from 'next/head'

export default function PaymentFailLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Gagal | Investor Mode</title>
        </Head>
        {children}
      </>
    );
  }
  