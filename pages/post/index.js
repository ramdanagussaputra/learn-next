import Head from 'next/head';
import { getAllPost } from '../../lib/post-lib';
import AllPost from '../../components/post/AllPost';

const AllPostPage = ({ posts }) => {
    return (
        <>
            <Head>
                <title>All Events</title>
                <meta name="description" content="All event of RAS event" />
            </Head>
            <AllPost posts={posts} />
        </>
    );
};

export async function getStaticProps() {
    const posts = await getAllPost();

    return {
        props: {
            posts,
        },
    };
}

export default AllPostPage;
