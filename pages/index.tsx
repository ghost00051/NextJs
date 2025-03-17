import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Главная - Мой проект</title>
        <meta name="description" content="Описание проекта и его целей." />
      </Head>
      <h1 className="text-4xl">Добро пожаловать в проект на основе NextJS!</h1>
      <p>Здесь вы найдете мощное и современное решение для создания веб-приложений с высокой производительностью и отличной пользовательской опытностью. Next.js предлагает множество возможностей, включая серверный рендеринг, статическую генерацию и автоматическую оптимизацию, что позволяет создавать быстрые и отзывчивые сайты. В этом проекте мы стремимся продемонстрировать все преимущества Next.js, а также поделиться полезными ресурсами и практическими примерами. Присоединяйтесь к нам в этом увлекательном путешествии в мир современных веб-технологий!</p>
    </Layout>
  );
};

export default Home;