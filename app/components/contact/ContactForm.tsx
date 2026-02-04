'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (connect to API or email service)
    console.log('Form submitted:', formData);
    // TODO: Implement actual submission logic
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">
            Имя *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-colors text-zinc-50"
            placeholder="Ваше имя"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-colors text-zinc-50"
            placeholder="email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-colors text-zinc-50"
          placeholder="+7 (900) 000-00-00"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">
          Сообщение *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-black border border-zinc-700 rounded-lg focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/20 transition-colors text-zinc-50 resize-none"
          placeholder="Расскажите о вашем проекте..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-amber-500/20"
      >
        Отправить сообщение
      </button>
    </form>
  );
}
