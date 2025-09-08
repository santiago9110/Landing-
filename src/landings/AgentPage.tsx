import { AGENTS, AgentSlug } from '@/data/agents';
import MetaHead from '@/lib/MetaHead';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Services from '@/components/Services/Services';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import styles from './AgentPage.module.css';

interface Props {
  slug: AgentSlug;
}

export default function AgentPage({ slug }: Props) {
  const cfg = AGENTS[slug];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: cfg.name,
    image: cfg.hero.avatar,
    email: cfg.email,
    telephone: cfg.whatsapp,
    url: window.location.href
  };

  return (
    <>
      <MetaHead {...cfg.meta} />
      <Navbar />
      <main className={styles.main} id="main">
        <Hero
          headline={cfg.hero.headline}
          sub={cfg.hero.sub}
          avatar={cfg.hero.avatar}
          badges={cfg.badges}
          whatsapp={cfg.whatsapp}
        />
        <Services />
        {cfg.testimonials?.length > 0 && <Testimonials items={cfg.testimonials} />}
        <Contact email={cfg.email} whatsapp={cfg.whatsapp} agentName={cfg.name} />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}