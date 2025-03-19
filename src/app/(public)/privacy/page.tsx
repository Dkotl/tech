import { generateSEOMetadata } from "@/features/seo/generate_metadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = generateSEOMetadata({
  title: "Политика конфиденциальности",
  description: "Ознакомьтесь с политикой конфиденциальности перед использованием сайта",
  keywords: ["технологии", "смартфоны", "обзоры", "новости", "гаджеты", "мобильные телефоны", "инновации"],
  ogImage: "/logo_opengraf.jpg",
  canonical: "https://tech24view.ru/privacy",
});

export default async function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Общие положения</h2>
        <p className="mb-4">
          Настоящая Политика конфиденциальности (далее — «Политика») регулирует порядок сбора, хранения, использования и
          защиты персональных данных пользователей сайта <strong>tech24view.ru</strong> (далее — «Сайт»).
        </p>
        <p>
          Используя Сайт, Пользователь соглашается с условиями настоящей Политики. Если Пользователь не согласен с
          условиями, он обязан прекратить использование Сайта.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Какие данные мы собираем</h2>
        <p>2.1. Мы можем собирать следующие данные:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Технические данные (IP-адрес, тип браузера, операционная система).</li>
          <li>Данные об использовании Сайта (время посещения, просмотренные страницы).</li>
          <li>Данные, предоставленные Пользователем (например, через формы обратной связи).</li>
        </ul>

        <p>2.2. Мы не собираем и не храним платежные данные, так как на Сайте отсутствуют функции оплаты.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Как мы используем данные</h2>
        <p>3.1. Собранные данные используются для: </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Обеспечения работоспособности и улучшения Сайта.</li>
          <li>Анализа статистики посещений.</li>
          <li>Обратной связи с Пользователями.</li>
        </ul>

        <p>
          3.2. Мы не передаем персональные данные третьим лицам, за исключением случаев, предусмотренных
          законодательством.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Защита данных</h2>
        <p>4.1. Мы принимаем меры для защиты данных Пользователей, включая:</p>
        <ul className="list-disc ml-8 mb-4">
          <li>Использование современных технологий шифрования.</li>
          <li>Регулярное обновление систем безопасности.</li>
        </ul>

        <p>
          4.2. Однако ни один метод передачи данных через Интернет или метод электронного хранения не является абсолютно
          безопасным. Мы не можем гарантировать абсолютную защиту данных.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Cookies и аналитика</h2>
        <p>5.1. Сайт использует файлы cookies для:</p>

        <ul className="list-disc ml-8 mb-4">
          <li>Сбора статистики посещений.</li>
          <li>Улучшения пользовательского опыта.</li>
        </ul>
        <p>
          5.2. Пользователь может отключить cookies в настройках браузера, однако это может повлиять на функциональность
          Сайта.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Права Пользователей</h2>
        <p>6.1. Пользователь имеет право: </p>
        <ul className="list-disc ml-8 mb-4">
          <li>Запросить доступ к своим персональным данным.</li>
          <li>Запросить исправление или удаление данных.</li>
          <li>Отозвать согласие на обработку данных.</li>
        </ul>

        <p>
          6.2. Для реализации своих прав Пользователь может связаться с Администрацией через контактную информацию,
          указанную на Сайте.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Изменения в Политике</h2>
        <p className="mb-4">
          7.1. Мы оставляем за собой право вносить изменения в настоящую Политику. Новая версия Политики вступает в силу
          с момента ее публикации на Сайте.
        </p>
        <p>7.2. Рекомендуем Пользователям регулярно проверять Политику на наличие изменений.</p>
      </section>
    </div>
  );
}
