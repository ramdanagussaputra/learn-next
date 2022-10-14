import PostGrid from '../post/PostGrid';

import styles from './FeaturedPost.module.css';

const FeaturedPost = ({ posts }) => {
    return (
        <section className={styles.latest}>
            <h2>Feature Post</h2>

            <PostGrid posts={posts} />
        </section>
    );
};

export default FeaturedPost;
