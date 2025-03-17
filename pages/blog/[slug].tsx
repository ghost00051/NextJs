import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { Post } from '../../types';
import posts from '../../data/posts.json';

interface PostProps {
    post: Post;
}

const PostPage = ({ post }: PostProps) => {
    return (
        <Layout>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.description} />
            </Head>
            <h1 className="text-4xl">{post.title}</h1>
            <p>{post.content}</p>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }));

    return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const post = posts.find((p) => p.slug === params?.slug);

    return {
        props: {
            post,
        },
    };
};

export default PostPage;