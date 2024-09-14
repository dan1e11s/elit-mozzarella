import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Container from '../Container/Container';

import mozzarella from '../../assets/mozzarella.jpeg';
import mozzarellDr from '../../assets/mozzarella-dr.jpg';
import mozzarellDr1 from '../../assets/mozzarella-dr-1.jpg';
import mozzarellDr2 from '../../assets/mozzarella-dr-2.jpg';
import mozzarellDr3 from '../../assets/mozzarella-dr-3.jpg';
import kashar from '../../assets/kashar.jpeg';

import styles from './index.module.css';

const data = [
  {
    id: 1,
    title: 'Сыр Моцарелла целый',
    price: '600 сомов за 1кг',
    images: [mozzarella, mozzarella],
  },
  {
    id: 2,
    title: 'Сыр Моцарелла дробленный',
    price: '600 сомов за упаковку',
    images: [mozzarellDr, mozzarellDr1, mozzarellDr2, mozzarellDr3],
  },
  {
    id: 3,
    title: 'Сыр Кашар',
    price: '600 сомов за 1кг',
    images: [kashar, kashar],
  },
  {
    id: 4,
    title: 'Сливочное масло 82%',
    price: '600 сомов за 1кг',
    images: [mozzarella, mozzarella],
  },
  {
    id: 5,
    title: 'Сары май +90%',
    price: '600 сомов за 1кг',
    images: [mozzarellDr, mozzarellDr],
  },
];

const Catalog = () => {
  return (
    <div className={styles.catalog} id="catalog">
      <Container>
        <div className={styles.catalogWrapper}>
          <h2>Каталог</h2>
          <div className={styles.productList}>
            {data.map((item) => (
              <div key={item.id} className={styles.card}>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  navigation={{
                    nextEl: `.${styles.nextButton}`,
                    prevEl: `.${styles.prevButton}`,
                  }}
                  modules={[Navigation]}
                  className={styles.mySwiper}
                >
                  {item.images.map((image) => (
                    <SwiperSlide key={image}>
                      <img
                        className={styles.sliderImage}
                        src={image}
                        alt="Image"
                      />
                    </SwiperSlide>
                  ))}
                  <div className={styles.navigationButtons}>
                    <button className={styles.prevButton}>←</button>
                    <button className={styles.nextButton}>→</button>
                  </div>
                </Swiper>
                <div className={styles.cardInfo}>
                  <h3>{item.title}</h3>
                  <p>{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Catalog;
