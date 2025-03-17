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
      <p>Наш проект на основе Next.js создан с целью продемонстрировать возможности и преимущества этой мощной платформы для разработки веб-приложений. Мы стремимся создать интуитивно понятный и функциональный интерфейс, который будет легко адаптироваться под различные нужды пользователей.</p>
    </Layout>
  );
};

export default About;