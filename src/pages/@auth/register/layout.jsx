import Head from 'next/head'


export default function RegisterLayout({ children }) {
    return (
      <>
        <Head>
            <title>Register Akun | Investor Mode</title>
            <meta name="description" content="Silahkan Register sebagai Investor Crowdfunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }


  
  