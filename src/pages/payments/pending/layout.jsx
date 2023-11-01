import Head from 'next/head'

export default function PaymentPendingLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Pending | Investor Mode</title>
        </Head>
        {children}
      </>
    );
  }
  