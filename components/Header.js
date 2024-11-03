// components/Header.js
import styles from '../styles/header.module.css'; 
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  useEffect(() => {
    const header = document.querySelector('header');

    function createSnowflake() {
      const snowflake = document.createElement('div');
      snowflake.innerHTML = '❄️';
      snowflake.style.position = 'absolute';
      snowflake.style.color = '#FFF';

      const headerText = header.querySelector('h1');
      const headerFontSize = window.getComputedStyle(headerText).fontSize;
      const snowflakeSize = parseFloat(headerFontSize) * 2;

      snowflake.style.fontSize = `${snowflakeSize}px`;
      snowflake.style.top = `${Math.random() * 100}%`;
      snowflake.style.left = `-${snowflakeSize}px`;
      header.appendChild(snowflake);

      const duration = 5000 + Math.random() * 3000;
      const startTime = Date.now();

      function animate() {
        const elapsed = Date.now() - startTime;
        const progress = elapsed / duration;

        snowflake.style.left = `${progress * 100}%`;

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          snowflake.remove();
        }
      }
      animate();
    }

    function startSnowfall() {
      setInterval(createSnowflake, 1000);
    }

    // Start snowfall when component mounts
    startSnowfall();
  }, []);

  return (
    <header className={styles.header}>
      <Image src="/images/logo.png" alt="Логотип Animal Clinik" width={150} height={150} />
      <h1>Animal Clinik</h1>
      <nav>
        <ul>
          <li>
            <Link href="/services">Послуги</Link>
          </li>
          <li>
            <Link href="/contact">Зворотній зв’язок</Link>
          </li>
          <li>
            <Link href="#login">
              <button className={styles.btn}>Перейти у власний кабінет</button>
            </Link>
          </li>
          <li>
            <Link href="/register">
              <button className={styles.btn}>Зареєструватись</button>
            </Link>                             
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
