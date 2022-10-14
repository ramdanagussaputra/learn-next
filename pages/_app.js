import Head from 'next/head';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <title>RASBlog</title>
                <meta name="description" content="Explore all event you never had" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            </Head>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
