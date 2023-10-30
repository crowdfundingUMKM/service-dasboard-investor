import Head from 'next/head'

export default function MyCampaignLayout({ children }) {
    return (
      <>
        <Head>
            <title>Daftar Campaign Donasi Saya  / Investor Mode</title>
        </Head>
        {children}
      </>
    );
  }
  