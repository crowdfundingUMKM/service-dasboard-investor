import Head from 'next/head'


export default function LoginLayout({ children }) {
    return (
      <>
        <Head>
            <title>Login Akun | Investor Mode</title>
            <meta name="description" content="Silahkan Login sebagai Investor Crowdfunding UMKM"/>
        </Head>
        {children}
      </>
    );
  }
  
  