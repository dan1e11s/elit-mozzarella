import Container from '../Container/Container';
import Navbar from '../Navbar/Navbar';

import styles from './index.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Navbar />
      <Container>
        <div className={styles.headerInfo}>
          <h1>Elit Mozzarella</h1>
          <p>Элитный сыр из натуральных продуктов</p>
        </div>
      </Container>
    </header>
  );
};

export default Header;
