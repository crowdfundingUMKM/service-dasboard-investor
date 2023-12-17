import Head from 'next/head'


export default function ServiceErrorLayout({ children }) {
    return (
      <>
        <Head>
            <title>Service Unavailable | Investor Mode</title>
            <meta name="description" content="Service Unavailable"/>
        </Head>
        {children}
      </>
    );
  }
  
  