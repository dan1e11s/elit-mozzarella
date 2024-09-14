import Container from '../Container/Container';

import logo from '../../assets/logo.svg';
import phone from '../../assets/phone.svg';
import instagram from '../../assets/instagram.svg';

import styles from './index.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer} id="contacts">
      <Container>
        <div className={styles.footerWrapper}>
          <div className={styles.logo}>
            <img src={logo} alt="Logo" width="100" height="100" />
          </div>
          <div className={styles.contacts}>
            <h2>Контакты</h2>
            <div className={styles.contact}>
              <img src={phone} alt="Phone" />
              <a href="tel:+996997771111">+996 997 77 11 11</a>
            </div>
            <div className={styles.contact}>
              <img src={instagram} alt="Instagram" />
              <a
                href="https://www.instagram.com/elit_mozzarella/"
                target="_blank"
              >
                Instagram
              </a>
            </div>
            <div className={styles.contact}>
              <p>Кыргызская Республика, г.Токмок, промзона</p>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.copyright}>
        <p>© 2024 Elit Mozzarella. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;
