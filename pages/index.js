import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import styles from '../styles/index.module.css'; 

const IndexPage = () => {
  return (
    <>
      <Header /> 
      <main className={styles.main}> 
        <section className={styles.purpose}> 
          <h2>Наші Цілі</h2>
          <p>Ми прагнемо надавати найкращі ветеринарні послуги для ваших домашніх улюбленців.</p>
        </section>

        <section className={styles['info-block']}> 
          <h3>Інформація про нас</h3>
          <p>Наші лікарі мають великий досвід у догляді за тваринами.</p>
        </section>

        <table className={styles.table}> 
          <caption className={styles.caption}>Наші Послуги</caption>
          <thead>
            <tr>
              <th className={styles.th}>Послуга</th>
              <th className={styles.th}>Ціна</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Консультація</td>
              <td>500 грн</td>
            </tr>
            <tr>
              <td>Вакцинація</td>
              <td>300 грн</td>
            </tr>            
          </tbody>
        </table>

        <address className={styles.address}> 
          <p>Адреса: вул. Центральна 10, Київ</p>
          <p>Телефон: (044) 123-45-67</p>
          <p>Email: info@animalclinik.ua</p>
        </address>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
