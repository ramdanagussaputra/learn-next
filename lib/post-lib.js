import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postDir = path.join(process.cwd(), 'markdown');

export const getPost = async (filename) => {
    const post = await fs.readFile(path.join(postDir, filename));
    const { data, content } = matter(post);

    const slug = data.title
        .replace(/\*.md$/, '')
        .split(' ')
        .join('-')
        .toLowerCase();
    const completePost = {
        ...data,
        slug,
        content,
    };

    return completePost;
};

export const getAllPost = async () => {
    const filenameArr = await fs.readdir(postDir);

    const posts = Promise.all(filenameArr.map((f) => getPost(f)));

    return posts;
};

export const getFeaturedPosts = async () => {
    const posts = await getAllPost();
    const featuredPost = posts.filter((p) => p.isFeatured);

    return featuredPost;
};
