import { useState } from 'react';
import logo from '../../assets/logo.svg';
import styles from './index.module.css';
import Container from '../Container/Container';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <header>
      <Container>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <img
              src={logo}
              alt="Logo"
              width="100"
              height="100"
              style={{ backgroundColor: '#053527', borderRadius: '50%' }}
            />
          </div>

          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#about">О Нас</a>
            </li>
            <li className={styles.navItem}>
              <a href="#catalog">Каталог</a>
            </li>
            <li className={styles.navItem}>
              <a href="#partners">Партнеры</a>
            </li>
            <li className={styles.navItem}>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>

          {/* Burger Menu Icon */}
          <div className={styles.burgerIcon} onClick={toggleModal}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* Mobile Modal Menu */}
          {isModalOpen && (
            <div className={styles.modalOverlay} onClick={toggleModal}>
              <div
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
              >
                <ul className={styles.modalNavList}>
                  <li className={styles.navItem} onClick={toggleModal}>
                    <a href="#about">О Нас</a>
                  </li>
                  <li className={styles.navItem} onClick={toggleModal}>
                    <a href="#catalog">Каталог</a>
                  </li>
                  <li className={styles.navItem} onClick={toggleModal}>
                    <a href="#partners">Партнеры</a>
                  </li>
                  <li className={styles.navItem} onClick={toggleModal}>
                    <a href="#contacts">Контакты</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
