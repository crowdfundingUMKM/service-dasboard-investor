import Head from 'next/head'

export default function ReportAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Kontak Admin | Investor Mode</title>
        </Head>
        {children}
      </>
    );
  }
  