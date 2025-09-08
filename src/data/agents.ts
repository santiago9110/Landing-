export const AGENTS = {
  norma: {
    name: 'Norma',
    role: 'Agente Inmobiliaria',
    whatsapp: 'https://wa.me/5491111111111',
    email: 'norma@example.com',
    hero: {
      headline: 'Tu hogar ideal con Norma',
      sub: 'Asesoría personalizada para comprar o vender tu propiedad.',
      avatar: '/assets/avatars/ella.jpg'
    },
    meta: {
      title: 'Norma | Agente Inmobiliaria',
      description: 'Compra y venta de propiedades con Norma.',
      ogImage: '/assets/og/og-ella.jpg'
    },
    badges: ['Confianza', 'Experiencia', 'Atención 24/7'],
    testimonials: [
      { author: 'Juan Pérez', text: 'Norma nos ayudó a encontrar la casa perfecta.' }
    ]
  },
  roberto: {
    name: 'Roberto',
    role: 'Agente Inmobiliario',
    whatsapp: 'https://wa.me/5491222222222',
    email: 'roberto@example.com',
    hero: {
      headline: 'Invertí seguro con Roberto',
      sub: 'Oportunidades únicas en real estate.',
      avatar: '/assets/avatars/el.jpg'
    },
    meta: {
      title: 'Roberto | Agente Inmobiliario',
      description: 'Asesoramiento en inversiones inmobiliarias.',
      ogImage: '/assets/og/og-el.jpg'
    },
    badges: ['Rentabilidad', 'Transparencia', 'Red extensa'],
    testimonials: [
      { author: 'Ana García', text: 'La inversión con Roberto superó mis expectativas.' }
    ]
  }
} as const;

export type AgentSlug = keyof typeof AGENTS;