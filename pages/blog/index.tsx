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
        <meta name="description" content="Список статей блога" />
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

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  try {
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers.host;
    const baseUrl = `${protocol}://${host}`;

    const res = await fetch(`${baseUrl}/data/posts.json`);
    
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    
    const posts: Post[] = await res.json();
    
    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default Blog;