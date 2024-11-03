// components/Footer.js
import styles from '../styles/footer.module.css'; // Importing styles

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Контакти:</p>
      <address>
        <p>Адреса: вул. Центральна 10, Київ</p>
        <p>Телефон: (044) 123-45-67</p>
        <p>Email: info@animalclinik.ua</p>
      </address>
      <p>© 2024 VetClinik</p>
    </footer>
  );
};

export default Footer;
