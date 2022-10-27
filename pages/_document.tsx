import {Html, Head, Main, NextScript} from 'next/document'


export default function Document() {
    return (
        <Html>
            <Head>
                <meta property="og:title" content="Portfolio"/>
                <meta property="og:image" content="https://portfolio-maxelkin.vercel.app/img/works/portfolio.png"/>
                <meta property="og:url" content="https://portfolio-maxelkin.vercel.app"/>

                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""}/>
                <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;600&display=swap"
                      rel="stylesheet"/>

                <script src="/js/script.js" async/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}