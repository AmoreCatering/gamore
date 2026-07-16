import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import gelatoImg from '@/public/vegan-gelato-display-hero-img.webp';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gamore.se'),
  title: 'Vegansk Gelato Stockholm | Vegansk Glass | Gelateria Amore',
  description:
    'Vegansk gelato i Stockholm gjord på vatten och frukter. Lär dig mer om vår veganska glass utan mjölk. Smakämnena är 100% veganska.',
  keywords: [
    'vegansk gelato',
    'vegansk glass Stockholm',
    'vegan gelato',
    'vegansk glass',
    'gelato utan mjölk',
    'fruktgelato',
    'vegansk choklad gelato',
    'fruktbaserad gelato',
    'vegetariska sorbet',
  ],
  openGraph: {
    title: 'Vegansk Gelato Stockholm - Äkta vegansk glass',
    description:
      'Vegansk gelato gjord på vatten och frukter. 100% veganska smakämnen utan mjölk eller ägg.',
    url: 'https://www.gamore.se/vegansk-gelato',
    siteName: 'Gelateria Amore',
    images: [
      {
        url: '/gelato.jpg',
        width: 1200,
        height: 630,
        alt: 'Vegansk gelato från Gelateria Amore i Stockholm',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.gamore.se/vegansk-gelato',
  },
};

export default function VeganGelatoPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Vegansk Gelato Stockholm | Vegansk Glass | Gelateria Amore',
      description:
        'Vegansk gelato i Stockholm gjord på vatten och frukter. Lär dig mer om vår veganska glass utan mjölk. Smakämnena är 100% veganska.',
      image: 'https://www.gamore.se/gelato.jpg',
      author: {
        '@type': 'Organization',
        name: 'Gelateria Amore',
        url: 'https://www.gamore.se',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Gelateria Amore',
        url: 'https://www.gamore.se',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.gamore.se/logo.png',
        },
      },
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString().split('T')[0],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Startsida',
          item: 'https://www.gamore.se',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Vegansk Gelato',
          item: 'https://www.gamore.se/vegansk-gelato',
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div
        className="w-full relative overflow-hidden"
        style={{ minHeight: '550px' }}
      >
        <Image
          src={gelatoImg}
          alt="Vegansk gelato - färsk vegansk glass gjord på vatten och frukter från Gelateria Amore"
          fill
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/20 to-black/10" />

        <section className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 md:items-end md:justify-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-3 leading-tight tracking-tight text-right">
              Vegansk Gelato
            </h1>
            <p className="text-xl md:text-2xl text-amber-300 font-light mb-2 tracking-wide text-right">
              100% vegansk njutning
            </p>
            <p className="bg-background/20 backdrop-blur-sm rounded pr-2 md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed font-light text-right">
              Handgjord gelato med frukt och vattenbas utan mjölk. Alla
              smakämnen är 100% veganska. Lär dig mer om hur vi tillverkar vår
              veganska gelato.
            </p>
          </div>
        </section>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-0 left-0 right-0 w-full"
          style={{
            height: '12px',
            fill: 'white',
          }}
        >
          <defs>
            <pattern
              id="spike-pattern"
              x="0"
              y="0"
              width="11"
              height="12"
              patternUnits="userSpaceOnUse"
            >
              <path d="M0 12L5.5 1l5.5 11z" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spike-pattern)" />
        </svg>
      </div>

      <section className="py-12 flex flex-col gap-8 bg-cream">
        <h2 className="text-3xl md:text-5xl text-amber-900 font-light md:w-[70%] mx-auto">
          Vegansk Gelato Stockholm
        </h2>

        <p className="md:w-[70%] w-full mx-auto px-4 md:px-0 space-y-6 text-gray-700 leading-relaxed text-lg">
          Under en längre tid har våra kunder efterfrågat en vegansk gelato
          istället för den traditionella mjölkbaserade och självklart har vi
          utvecklat ett recept som vi vet kommer att tillfredsställa alla. Hos
          oss på Gelateria hittar ni ett bra utbud av vegansk gelato Stockholm,
          som smakar minst lika gott som traditionell gelato tillverkad på
          mjölk. Vanligtvis tillverkas vegansk gelato med kokosmjölk eller mjölk
          producerad av nötter som bas, men hos oss är vegansk gelato en sorbet
          som är tillverkad med vatten och frukter som bas, då det finns många
          som är allergiska mot nötter. Undantaget är vår mycket omtyckta och
          populär veganska choklad gelato är gjort på premium råchokladbas.
          Förutom detta är tillverkningssättet detsamma när vi gör vår gelato.
        </p>

        <div className="w-[90%] md:w-[70%] mx-auto h-px bg-linear-to-r from-transparent via-black/40 to-transparent" />

        <article className="md:w-[70%] w-full mx-auto px-4 md:px-0">
          <h3 className="text-3xl md:text-5xl text-amber-900 mb-8 font-light">
            Vår Veganska Gelato
          </h3>

          <p className="space-y-6 text-gray-700 leading-relaxed text-lg">
            Självklart är även alla smakämnena och de andra råvarorna som vi
            använder till denna gelato 100 % veganska. Om ni är intresserade av
            vilka smaker vi erbjuder just nu, så föreslår vi att ni ringer oss.
            Du är alltid välkommen in att testa vår veganska gelato i Stockholm
            i vårt cafe på Långholmsgatan 5. Klicka{' '}
            <Link
              href="https://www.google.com/maps/place/Gelateria+Amore/@59.3177426,18.0279998,16z/data=!3m1!4b1!4m6!3m5!1s0x465f77c51132f8b1:0xb2ff7b2f1441e768!8m2!3d59.31774!4d18.0328707!16s%2Fg%2F11c46cd7z2?entry=ttu&g_ep=EgoyMDI2MDEyMS4wIKXMDSoKLDEwMDc5MjA3MUgBUAM%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-900 underline font-semibold hover:text-amber-800 transition-colors"
            >
              här
            </Link>{' '}
            för att få vägbeskrivning.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/vegan-gelato-lemon.webp"
              alt="Vegansk gelato - färsk handgjord glass från Gelateria Amore Stockholm"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full aspect-square"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image
              src="/vegan-gelato-chocolate.webp"
              alt="Vegansk gelato - italiensk glass i Stockholm"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover object-top w-full aspect-square"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </article>

        <div className="w-[90%] md:w-[70%] mx-auto h-px bg-linear-to-r from-transparent via-black/40 to-transparent" />

        <article className="md:w-[70%] w-full mx-auto px-4 md:px-0">
          <h3 className="text-3xl md:text-5xl text-amber-900 mb-8 font-light">
            Vill du testa vår veganska gelato?
          </h3>
          <div className="space-y-6 text-gray-700 leading-relaxed [&>p]:text-lg">
            <p>
              Besök oss på Långholmsgatan 5 i Stockholm eller beställ hem din
              favorit veganska gelato idag. Vi erbjuder också traditionell
              mjölkbaserad gelato för de som föredrar det.
            </p>
            <p>
              Om ni istället för vegansk gelato föredrar traditionell gelato
              hittar ni information om det{' '}
              <Link
                href="/gelato"
                className="text-amber-900 underline font-semibold hover:text-amber-800 transition-colors"
              >
                här
              </Link>
              .
            </p>
          </div>
        </article>
      </section>
    </>
  );
}
