import Head from 'next/head'

export default function PaymentSuccessLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Berhasil| Investor Mode</title>
            <meta name="description" content="Pembayaran Berhasil"/>
        </Head>
        {children}
      </>
    );
  }
  