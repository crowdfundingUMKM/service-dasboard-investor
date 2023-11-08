import Head from 'next/head'

export default function PreviewLayout({ children }) {
    return (
      <>
        <Head>
            <title>Preview Campign UMKM / Investor Mode</title>
        </Head>
        {children}
      </>
    );
  }
  