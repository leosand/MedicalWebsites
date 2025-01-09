// Configuration SEO par défaut
export const defaultSEO = {
  title: 'Meddical - Centre Hospitalier de Confiance',
  description: 'Centre hospitalier offrant des soins médicaux de qualité avec une équipe de professionnels dévoués. Services d\'urgence 24/7, consultations spécialisées et équipements modernes.',
  canonical: 'https://www.meddical.fr',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.meddical.fr',
    site_name: 'Meddical',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Meddical - Centre Hospitalier',
      },
    ],
  },
  twitter: {
    handle: '@meddical',
    site: '@meddical',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
    },
    {
      name: 'theme-color',
      content: '#1F2B6C',
    },
    {
      name: 'apple-mobile-web-app-capable',
      content: 'yes',
    },
    {
      name: 'apple-mobile-web-app-status-bar-style',
      content: 'default',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
};

// Générateur de balises meta pour les pages spécifiques
export const generatePageSEO = (pageData) => {
  const { title, description, path, image } = pageData;
  
  return {
    ...defaultSEO,
    title: `${title} | Meddical`,
    description,
    canonical: `${defaultSEO.canonical}${path}`,
    openGraph: {
      ...defaultSEO.openGraph,
      url: `${defaultSEO.canonical}${path}`,
      title: `${title} | Meddical`,
      description,
      images: image ? [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : defaultSEO.openGraph.images,
    },
  };
};

// Configuration des pages principales
export const pageSEO = {
  home: {
    title: 'Accueil',
    description: 'Bienvenue à Meddical, votre centre hospitalier de confiance. Des soins médicaux d\'excellence avec une approche humaine et personnalisée pour votre bien-être.',
    path: '/',
  },
  services: {
    title: 'Nos Services',
    description: 'Découvrez nos services médicaux spécialisés : urgences 24/7, consultations, imagerie médicale, chirurgie et plus encore.',
    path: '/services',
  },
  doctors: {
    title: 'Nos Médecins',
    description: 'Une équipe de médecins spécialistes expérimentés et dévoués pour prendre soin de votre santé.',
    path: '/doctors',
  },
  contact: {
    title: 'Contact',
    description: 'Contactez Meddical pour prendre rendez-vous ou obtenir plus d\'informations sur nos services médicaux.',
    path: '/contact',
  },
};

// Utilitaires pour les données structurées
export const generateStructuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: 'Meddical',
    url: defaultSEO.canonical,
    logo: `${defaultSEO.canonical}/images/logo.svg`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-23-45-67-89',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French', 'English'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Avenue de la Santé',
      addressLocality: 'Paris',
      postalCode: '75000',
      addressCountry: 'FR',
    },
    sameAs: [
      'https://www.facebook.com/meddical',
      'https://twitter.com/meddical',
      'https://www.linkedin.com/company/meddical',
    ],
  },
  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: 'Meddical',
    image: defaultSEO.openGraph.images[0].url,
    '@id': defaultSEO.canonical,
    url: defaultSEO.canonical,
    telephone: '+33-1-23-45-67-89',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Avenue de la Santé',
      addressLocality: 'Paris',
      postalCode: '75000',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 48.8566,
      longitude: 2.3522,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
        ],
        opens: '08:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '18:00',
      },
    ],
    department: [
      {
        '@type': 'MedicalSpecialty',
        name: 'Service des Urgences',
        availableService: 'Soins d\'urgence 24/7',
      },
      {
        '@type': 'MedicalSpecialty',
        name: 'Cardiologie',
      },
      {
        '@type': 'MedicalSpecialty',
        name: 'Pédiatrie',
      },
    ],
  },
}; 