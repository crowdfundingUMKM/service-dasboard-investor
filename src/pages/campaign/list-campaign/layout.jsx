import Head from 'next/head'

export default function ListCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Campign UMKM / Investor Mode</title>
            <meta name="description" content="Daftar Campaign UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  