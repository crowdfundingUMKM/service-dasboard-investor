import Head from 'next/head'

export default function MyCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Campaign Donasi Saya  / Investor Mode</title>
            <meta name="description" content="Daftar campaign donasi yang telah saya berikan"/>
        </Head>
        {children}
      </>
    );
  }
  