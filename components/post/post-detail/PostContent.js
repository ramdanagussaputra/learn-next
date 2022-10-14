import Image from 'next/image';
import styles from './PostContent.module.css';
import PostHeader from './PostHeader';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = ({ post }) => {
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const renderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName !== 'img') return <p>{paragraph.children}</p>;
            const image = node.children[0].properties;

            return (
                <Image
                    src={`/images/posts/getting-started-with-nextjs/${image.src}`}
                    alt={image.alt}
                    width={600}
                    height={300}
                />
            );
        },

        code(code) {
            const { className } = code;
            console.log(code);
            const language = className.split('-')[1];
            return (
                <SyntaxHighlighter language={language} style={atomDark}>
                    {code.children}
                </SyntaxHighlighter>
            );
        },
    };

    return (
        <article className={styles.content}>
            <PostHeader image={imagePath} title={post.title} />
            <ReactMarkdown components={renderers}>{post.content}</ReactMarkdown>
        </article>
    );
};

export default PostContent;
