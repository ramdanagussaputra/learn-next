import Image from 'next/image';
import Link from 'next/link';

import styles from './PostItem.module.css';

const PostItem = ({ image, title, date, excerpt, slug }) => {
    const formatedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
        day: 'numeric',
    });

    const imagePath = `/images/posts/${slug}/${image}`;

    const linkPath = `/post/${slug}`;

    return (
        <li className={styles.post}>
            <Link href={linkPath}>
                <a>
                    <div className={styles.image}>
                        <Image
                            src={imagePath}
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </div>

                    <div className={styles.content}>
                        <h3>{title}</h3>
                        <time>{formatedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
