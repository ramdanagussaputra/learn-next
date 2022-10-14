import Head from 'next/head';
import FeaturedPost from '../components/homepage/FeaturedPost';
import Hero from '../components/homepage/Hero';
import { getFeaturedPosts } from '../lib/post-lib';

export default function HomePage({ posts }) {
    return (
        <>
            <Hero />
            <FeaturedPost posts={posts} />
        </>
    );
}

export async function getStaticProps() {
    const posts = await getFeaturedPosts();
    return {
        props: {
            posts,
        },
    };
}
