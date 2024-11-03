// pages/Services.js
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header'; // Adjust the path based on your file structure
import Footer from '../components/Footer'; // Assuming you have a Footer component
import styles from '../styles/services.module.css'; // Assuming this is your CSS module for services

const Services = () => {
  const [searchText, setSearchText] = useState('');
  const [openIndex, setOpenIndex] = useState(null); // Track which accordion item is open

  const services = [
    {
      title: 'Анестезія',
      description: 'Анестезія забезпечує безболісне проведення процедур та операцій для ваших улюбленців, використовуючи сучасні безпечні препарати.',
      price: '500 - 3 580 грн',
      image: '/images/service1.jpg',
    },
    {
      title: 'Вакцинації',
      description: 'Регулярні вакцинації допомагають захистити тварин від різних інфекційних хвороб та вірусів, що можуть бути небезпечними для їхнього здоров\'я.',
      price: '585 - 1 550 грн',
      image: '/images/service2.jpeg',
    },
    {
      title: 'Діагностика',
      description: 'Наші діагностичні послуги включають сучасні методи для точного визначення захворювань та їх лікування.',
      price: '1 550 - 15 720 грн',
      image: '/images/service3.jpg',
    },
    {
      title: 'Консультації',
      description: 'Надаємо консультації з питань догляду за тваринами, здоров\'я та профілактики захворювань, а також поради щодо поведінки.',
      price: '750 - 1 950 грн',
      image: '/images/service4.jpg',
    },
    {
      title: 'Стаціонар',
      description: 'Ми надаємо послуги стаціонару для тварин, які потребують тривалого лікування або спостереження під наглядом лікарів.',
      price: '650 - 1 000 грн',
      image: '/images/service5.jpg',
    },
    {
      title: 'Терапія',
      description: 'Терапія включає лікування хронічних і гострих захворювань за допомогою медикаментозного лікування та інших методів.',
      price: '200 - 600 грн',
      image: '/images/service6.jpg',
    },
    {
      title: 'Хірургія для тварин',
      description: 'Ми проводимо хірургічні операції різної складності, використовуючи сучасне обладнання та методики.',
      price: '5 000 - 16 000 грн',
      image: '/images/service7.jpg',
    },
    {
      title: 'Чіпування тварин',
      description: 'Чіпування допомагає ідентифікувати ваших улюбленців у разі втрати або крадіжки, забезпечуючи їх повернення.',
      price: '250 - 600 грн',
      image: '/images/service8.jpg',
    },
  ];

  const filteredServices = services.filter(service => 
    service.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className={styles.main}>
        <Link href="/" className={styles.backButton}>Перейти на Головну сторінку</Link>

        {/* Search Field */}
        <div className={styles.searchField}>
          <label className={styles.searchLabel}>Пошук:</label>
          <input
            type="text"
            placeholder="Введіть назву послуги"
            className={styles.searchInput}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        {/* Accordion for Service Descriptions */}
        <div className={styles.accordion}>
          <h2 className={styles.accordionHeader}>Короткий опис послуг</h2>
          {services.map((service, index) => (
            <div key={index}>
              <button
                className={styles.accordionButton}
                onClick={() => toggleAccordion(index)}
              >
                {service.title}
              </button>
              {openIndex === index && (
                <div className={styles.accordionContent}>
                  {service.description}
                </div>
              )}
            </div>
          ))}
        </div>

        <h2>Наші Послуги</h2>

        {/* Table for Services */}
        <table className={styles.serviceTable}>
          <thead>
            <tr>
              <th>Послуга</th>
              <th>Опис</th>
              <th>Ціна</th>
              <th>Зображення</th>
            </tr>
          </thead>
          <tbody>
            {filteredServices.map((service, index) => (
              <tr key={index}>
                <td>{service.title}</td>
                <td>{service.description}</td>
                <td>{service.price}</td>
                <td>
                  <img src={service.image} alt={service.title} className={styles.serviceImage} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
};

export default Services;
