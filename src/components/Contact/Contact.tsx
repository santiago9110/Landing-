import styles from './Contact.module.css';

interface Props {
  email: string;
  whatsapp: string;
  agentName: string;
}

export default function Contact({ email, whatsapp, agentName }: Props) {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <h2 className={styles.title}>Contacto</h2>
        <div className={styles.grid}>
          <form className={styles.form} action="https://formspree.io/f/XXXXXXX" method="POST">
            <label htmlFor="name">Nombre</label>
            <input id="name" name="name" required aria-required="true" />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required aria-required="true" />

            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" required aria-required="true"></textarea>

            <button type="submit" className={styles.submit}>Enviar</button>
          </form>
          <aside className={styles.aside}>
            <p>¿Preferís charlar directo?</p>
            <a href={whatsapp} className={styles.whatsapp}>WhatsApp a {agentName}</a>
          </aside>
        </div>
      </div>
    </section>
  );
}