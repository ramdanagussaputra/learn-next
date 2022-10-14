import Head from 'next/head';
import { getPost, getAllPost } from '../../lib/post-lib';
import PostContent from '../../components/post/post-detail/PostContent';

const PostDetailPage = ({ post }) => {
    return (
        <>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.excerpt} />
            </Head>
            <PostContent post={post} />
        </>
    );
};

export async function getStaticPaths() {
    const posts = await getAllPost();
    const paths = posts.map((p) => ({
        params: {
            slug: p.slug,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const post = await getPost(`${params.slug}.md`);
    console.log(post);

    return {
        props: {
            post,
        },
    };
}

export default PostDetailPage;
