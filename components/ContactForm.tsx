import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name">Имя</label>
        <input {...register('name', { required: true })} id="name" className="border" />
        {errors.name && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email', { required: true })} id="email" className="border" />
        {errors.email && <span>Это поле обязательно для заполнения</span>}
      </div>
      <div>
        <label htmlFor="message">Сообщение</label>
        <textarea {...register('message', { required: true })} id="message" className="border" />
        {errors.message && <span>Это поле обязательно для заполнения</span>}
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2">Отправить</button>
    </form>
  );
};

export default ContactForm;