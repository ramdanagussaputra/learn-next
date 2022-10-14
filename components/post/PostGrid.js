import PostItem from '../post/PostItem';

import styles from './PostGrid.module.css';

const PostGrid = ({ posts }) => {
    return (
        <ul className={styles.grid}>
            {posts.map((p) => (
                <PostItem
                    key={p.slug}
                    date={p.date}
                    excerpt={p.excerpt}
                    title={p.title}
                    image={p.image}
                    slug={p.slug}
                />
            ))}
        </ul>
    );
};

export default PostGrid;
