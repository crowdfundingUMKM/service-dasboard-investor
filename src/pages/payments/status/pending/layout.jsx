import Head from 'next/head'

export default function StatusPendingLayout({ children }) {
    return (
      <>
        <Head>
            <title>Pembayaran Pending</title>
            <meta name="description" content="Pembayaran ditunda."/>
        </Head>
        {children}
      </>
    );
  }
  