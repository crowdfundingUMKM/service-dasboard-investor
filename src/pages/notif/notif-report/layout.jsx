import Head from 'next/head'

export default function ReportAdminLayout({ children }) {
    return (
      <>
        <Head>
            <title>Kontak Admin | Investor Mode</title>
            <meta name="description" content="Buat report untuk admin."/>
        </Head>
        {children}
      </>
    );
  }
  