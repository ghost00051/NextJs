import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface LayoutProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{title ? `${title} - Мой проект` : 'Мой проект'}</title>
        <meta name="description" content={description || 'Описание проекта'} />
        <meta property="og:title" content={title || 'Мой проект'} />
        <meta property="og:description" content={description || 'Описание проекта'} />
      </Head>
      <header className="bg-pink-500 text-white p-4">
        <nav>
        <ul className="flex space-x-4">
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/blog">Блог</Link></li>
            <li><Link href="/about">О проекте</Link></li>
            <li><Link href="/contact">Контакты</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} Мой проект. Все права защищены.</p>
      </footer>
    </div>
  );
};

export default Layout;