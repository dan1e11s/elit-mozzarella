import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Container from '../Container/Container';

import mozzarella from '../../assets/mozzarella-1.jpg';
import mozzarella1 from '../../assets/mozzarella.jpg';
import mozzarellaDr from '../../assets/mozzarella-dr.jpg';
import mozzarellaDr1 from '../../assets/mozzarella-dr-2.jpg';
import kashar from '../../assets/kashar.jpeg';
import kashar1 from '../../assets/kashar-1.webp';
import saryMay from '../../assets/sary-may.jpg';
import saryMay1 from '../../assets/sary-may-1.jpg';
import slivochnoe from '../../assets/slivochnoe.jpg';
import slivochnoe1 from '../../assets/slivochnoe-1.jpg';

import styles from './index.module.css';

const data = [
  {
    id: 1,
    title: 'Сыр Моцарелла дробленный',
    price: '600 сомов за 1кг',
    images: [mozzarellaDr, mozzarellaDr1],
  },
  {
    id: 2,
    title: 'Сыр Моцарелла целый',
    price: '600 сомов за 1кг',
    images: [mozzarella, mozzarella1],
  },
  {
    id: 3,
    title: 'Сыр Кашар',
    price: '550 сомов за 1кг',
    images: [kashar, kashar1],
  },
  {
    id: 4,
    title: 'Сары май не менее 99%',
    price: '850 сомов за 1кг',
    images: [saryMay, saryMay1],
  },
  {
    id: 5,
    title: 'Сливочное масло не менее 82%',
    price: '800 сомов за 1кг',
    images: [slivochnoe, slivochnoe1],
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
