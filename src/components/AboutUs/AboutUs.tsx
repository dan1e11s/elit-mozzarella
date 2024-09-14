import Container from '../Container/Container';
import styles from './index.module.css';

const AboutUs = () => {
  return (
    <Container>
      <div className={styles.aboutUs} id="about">
        <h2>О Нас</h2>
        <p>
          Мы являемся кыргызско-турецкой компанией по производству элитного
          сыра, а именно моцареллы.
        </p>
        <p>
          Наша компания также занимается изготовлением творога и масла на основе
          только натуральных компонентов.
        </p>
        <p>
          Наш завод оснащен современной технологией по переработке наших
          молочных продукций.
        </p>
        <div className={styles.btn}>
          <a
            href="https://www.instagram.com/elit_mozzarella/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactButton}
          >
            Связаться с нами
          </a>
        </div>
      </div>
    </Container>
  );
};

export default AboutUs;
