// pages/Register.js
import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import styles from '../styles/register.module.css'; 

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Validate inputs
    if (!username || !email || !password || !confirmPassword) {
      setError('Будь ласка, заповніть всі поля.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Паролі не збігаються.');
      return;
    }

    // Here you would typically send the data to your backend for registration
    console.log('Registration data:', { username, email, password });

    // Reset form after successful submission
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <>
      <Header />    
      <main className={styles.main}>
        <Link href="/" className={styles.backButton}>Перейти на Головну сторінку</Link>
        <h2 className={styles.title}>Реєстрація</h2>
        {error && <p className={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="username">Ім'я користувача:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Електронна пошта:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Пароль:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Підтвердження пароля:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.submitButton}>Зареєструватись</button>
        </form>
        <Link href="/login" className={styles.loginLink}>Вже маєте обліковий запис? Увійдіть тут.</Link>
      </main>
      <Footer />
    </>
  );
};

export default Register;
