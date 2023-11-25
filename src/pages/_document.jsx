import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <link href="/assets/img/favicon.png" rel="icon" />
          <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/assets/vendor/boxicons/css/boxicons.min.css" rel="stylesheet"/>
          <link href="/assets/vendor/remixicon/remixicon.css"  rel="stylesheet"/>
          <link href="/assets/vendor/bootstrap/css/bootstrap.min.css"  rel="stylesheet"/>
          <link href="/assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
          <link href="/assets/vendor/quill/quill.snow.css" rel="stylesheet"/>
          <link href="/assets/vendor/quill/quill.bubble.css" rel="stylesheet"/>
          <link href="/assets/vendor/simple-datatables/style.css" rel="stylesheet"/>
          <link href="/assets/css/style.css"  rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet" />
          {/* <link rel="stylesheet" type="text/css" href="node_modules/notiflix/dist/notiflix-3.2.6.min.css" /> */}

          {/* <link href="/assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" /> */}
          {/* <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" /> */}
        
        </Head>
        <body>
          <Main />
          <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument;
