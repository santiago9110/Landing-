import styles from './Hero.module.css';

interface Props {
  headline: string;
  sub: string;
  avatar: string;
  badges: readonly string[];
  whatsapp: string;
}

export default function Hero({ headline, sub, avatar, badges, whatsapp }: Props) {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.wrap}>
          <div className={styles.content}>
            <h1 className={styles.headline}>{headline}</h1>
            <p className={styles.sub}>{sub}</p>
            <ul className={styles.badges}>
              {badges.map(b => (
                <li key={b} className={styles.badge}>{b}</li>
              ))}
            </ul>
            <div className={styles.ctaRow}>
              <a href={whatsapp} className={styles.primaryCta}>Contactar por WhatsApp</a>
              <a href="#contact" className={styles.secondaryCta}>Escribime</a>
            </div>
          </div>
          <img src={avatar} alt="" className={styles.avatar} />
        </div>
      </div>
    </section>
  );
}