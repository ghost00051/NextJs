import Head from 'next/head';
import Layout from '../../components/Layout';
import { GetServerSideProps } from 'next';

interface Post {
  slug: string;
  title: string;
}

interface BlogProps {
  posts: Post[];
}

const Blog = ({ posts }: BlogProps) => {
  return (
    <Layout>
      <Head>
        <title>Блог</title>
        <meta name="description" content="Список статей блога." />
      </Head>
      <h1 className="text-4xl">Блог</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/data/posts.json');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;