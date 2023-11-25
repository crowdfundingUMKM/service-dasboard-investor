import Head from 'next/head'

export default function PaymentPendingLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Pending | Investor Mode</title>
            <meta name="description" content="Pembayaran Pending"/>
        </Head>
        {children}
      </>
    );
  }
  