import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Главная - Мой проект</title>
        <meta name="description" content="Описание проекта и его целей." />
      </Head>
      <h1 className="text-4xl">Добро пожаловать в мой проект!</h1>
      <p>Здесь вы найдете информацию о технологиях, которые я использую.</p>
    </Layout>
  );
};

export default Home;