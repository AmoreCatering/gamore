import Hero from '@/components/Hero';
import Info from '@/components/Info';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gamore.se'),
  title: 'Gelateria Amore - Stockholms Bästa Pizza & Gelato | Hornstull',
  description:
    'Gelateria Amore erbjuder äkta napolitansk pizza och italiensk gelato. Familjedrivet glasscafé på Långholmsgatan 5. Beställ avhämtning eller med leverans.',
  keywords: [
    'gelato Stockholm',
    'italiensk glass Stockholm',
    'pizza Stockholm',
    'vegansk gelato',
    'italiensk glasscafé',
    'Hornstull',
    'smörgåstårta Stockholm',
    'glasstårta',
  ],
  openGraph: {
    title: 'Gelateria Amore - Stockholms Bästa Pizza & Gelato',
    description:
      'Äkta napolitansk pizza och italiensk gelato. Familjedrivet på Hornstull sedan 2016.',
    url: 'https://www.gamore.se',
    siteName: 'Gelateria Amore',
    images: [
      {
        url: '/gelato.jpg',
        width: 1200,
        height: 630,
        alt: 'Gelateria Amore - Färsk italiensk gelato',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  alternates: {
    canonical: '/', // ✅ Sätter automatiskt https://www.gamore.se/
  },
};

export default function Home() {
  // ✅ Rätt sätt att skicka strukturerad data till Google i Next.js:
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': 'https://www.gamore.se',
      name: 'Gelateria Amore',
      description:
        'Napolitansk pizzeria och italiensk glasscafé på Hornstull i Stockholm',

      // Adress
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Långholmsgatan 5',
        addressLocality: 'Hornstull, Stockholm',
        addressRegion: 'Stockholm',
        postalCode: '117 33',
        addressCountry: 'SE',
      },

      // Kontakt
      telephone: ['+46707961666', '+4683042700'],
      email: 'info@gamore.se',

      // Position
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 59.317738,
        longitude: 18.0329,
      },

      // Öppettider
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '13:00',
          closes: '21:00',
        },
      ],

      // Meny
      hasMenu: {
        '@type': 'Menu',
        name: 'Huvudmeny',
        description: 'Napolitansk pizza, pasta, gelato och italienska rätter',
        hasMenuSection: [
          {
            '@type': 'MenuSection',
            name: 'Pizza',
            description: 'Stenugnsbakad napolitansk pizza',
            hasMenuItem: [
              {
                '@type': 'MenuItem',
                name: 'Pizza Margherita',
                description: 'Tomatsås, mozzarella, basilika',
                offers: {
                  '@type': 'Offer',
                  price: '135',
                  priceCurrency: 'SEK',
                },
              },
            ],
          },
        ],
      },

      servesCuisine: ['Italiensk', 'Pizza', 'Gelato'],
      priceRange: '$$',
      url: 'https://www.gamore.se',
      image: 'https://www.gamore.se/pizza.jpg',

      // Sociala medier
      sameAs: [
        'https://www.facebook.com/gelateriaamore/',
        'https://www.instagram.com/gelateriaamore/',
      ],

      paymentAccepted: 'Kontanter, Kort, Swish, Klarna',

      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Närhet till kollektivtrafik',
          value: 'Hornstulls tunnelbana 3 min promenad',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Hem',
          item: 'https://www.gamore.se',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pizzeria Stockholm',
          item: 'https://www.gamore.se/pizza',
        },
      ],
    },
  ];

  return (
    <>
      {/* Det är detta som gör att Google faktiskt kan läsa din data! */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Info />
    </>
  );
}
