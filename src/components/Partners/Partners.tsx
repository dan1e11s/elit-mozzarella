import ajeosea from '../../assets/partners/ajeosea.svg';
import bereket from '../../assets/partners/bereket.svg';
import bilimkana from '../../assets/partners/bilimkana.svg';
import dodo from '../../assets/partners/dodo.svg';
import domino from '../../assets/partners/domino.svg';
import nazarov from '../../assets/partners/nazarov.svg';
import ojak_kebab from '../../assets/partners/ojak_kebab.svg';
import papa_johns from '../../assets/partners/papa_johns.svg';
import positano from '../../assets/partners/positano.svg';
import pronto from '../../assets/partners/pronto.svg';
import provincia from '../../assets/partners/provinsia.svg';
import saksaul from '../../assets/partners/saksaul.svg';
import sheraton from '../../assets/partners/sheraton.svg';
import supara from '../../assets/partners/supara.svg';
import sushi_box from '../../assets/partners/sushi_box.svg';
import techno_cave from '../../assets/partners/techno_cave.svg';
import tubeteyka from '../../assets/partners/tubeteyka.svg';

import styles from './index.module.css';

const partners = [
  ajeosea,
  bereket,
  bilimkana,
  dodo,
  domino,
  nazarov,
  ojak_kebab,
  papa_johns,
  positano,
  pronto,
  provincia,
  saksaul,
  sheraton,
  supara,
  sushi_box,
  techno_cave,
  tubeteyka,
];

const Partners = () => {
  return (
    <div className={styles.partners} id="partners">
      <h2>Партнеры</h2>
      <div className={styles.partnersList}>
        {partners.concat(partners).map((item, index) => (
          <div key={index}>
            <img src={item} alt="Partners Logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
