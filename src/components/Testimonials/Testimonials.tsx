import styles from './Testimonials.module.css';

interface Testimonial {
  author: string;
  text: string;
}

interface Props {
  items: readonly Testimonial[];
}

export default function Testimonials({ items }: Props) {
  if (!items.length) return null;
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <h2 className={styles.title}>Testimonios</h2>
        <div className={styles.grid}>
          {items.map((t, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.text}>&quot;{t.text}&quot;</p>
              <p className={styles.author}>- {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}