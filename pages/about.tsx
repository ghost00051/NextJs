import Head from 'next/head';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <Head>
        <title>О проекте</title>
        <meta name="description" content="Информация о целях проекта." />
      </Head>
      <h1 className="text-4xl">О проекте</h1>
      <p>Здесь вы найдете информацию о целях проекта.</p>
    </Layout>
  );
};

export default About;