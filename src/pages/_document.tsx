import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
 render() {
  return (
   <Html>
    <Head>
     <link rel="shortcut icon" href="/favicon.png" type="image/png" />
     <link rel="preconnect" href="https://fonts.gstatic.com" />
     <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
     <title>JOHNNYDEV</title>
    </Head>
    <body>
     <Main />
     <NextScript />
    </body>
   </Html>
  );
 }
}