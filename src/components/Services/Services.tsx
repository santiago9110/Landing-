import styles from './Services.module.css';

const SERVICES = [
  { title: 'Compra', text: 'Encontrá la propiedad ideal.' },
  { title: 'Venta', text: 'Vendé rápido y al mejor precio.' },
  { title: 'Alquiler', text: 'Gestionamos tu alquiler de forma segura.' },
  { title: 'Tasación', text: 'Valoramos tu inmueble con precisión.' }
];

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h2 className={styles.title}>Servicios</h2>
        <div className={styles.grid}>
          {SERVICES.map(s => (
            <div key={s.title} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardText}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}