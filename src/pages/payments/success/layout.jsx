import Head from 'next/head'

export default function PaymentSuccessLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Berhasil| Investor Mode</title>
        </Head>
        {children}
      </>
    );
  }
  