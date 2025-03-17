import { useForm } from 'react-hook-form';
import Head from 'next/head';
import Layout from '../components/Layout';
import { ContactFormData } from '../types'; // Импортируем тип

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>(); // Указываем тип

    const onSubmit = (data: ContactFormData) => { // Используем тип
        console.log(data);
    };

    return (
        <Layout>
            <Head>
                <title>Контакты</title>
                <meta name="description" content="Форма обратной связи" />
            </Head>
            <h1 className="text-4xl">Контакты</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block">Имя</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Имя обязательно' })}
                        className="border p-2 w-full"
                    />
                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>
                <div>
                    <label htmlFor="email" className="block">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email обязателен' })}
                        className="border p-2 w-full"
                    />
                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="message" className="block">Сообщение</label>
                    <textarea
                        id="message"
                        {...register('message', { required: 'Сообщение обязательно' })}
                        className="border p-2 w-full"
                    />
                    {errors.message && <span className="text-red-500">{errors.message.message}</span>}
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2">Отправить</button>
            </form>
        </Layout>
    );
};

export default Contact;