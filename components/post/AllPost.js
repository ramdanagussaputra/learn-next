import PostGrid from './PostGrid';

import styles from './AllPost.module.css';

const AllPost = ({ posts }) => {
    return (
        <section className={styles.posts}>
            <h1>All Post</h1>
            <PostGrid posts={posts} />
        </section>
    );
};

export default AllPost;
