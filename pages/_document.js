import { Html, Main, Head, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html>
            <Head lang="en" />
            <body>
                <div id="modal-root" />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
