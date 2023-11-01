import Head from 'next/head'


export default function LoginLayout({ children }) {
    return (
      <>
        <Head>
            <title>Login Akun | Investor Mode</title>
        </Head>
        {children}
      </>
    );
  }
  
  