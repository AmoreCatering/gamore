import Image from 'next/image';
import { Metadata } from 'next';
import pizzaImg from '@/public/pizza.webp';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gamore.se'),
  title:
    'Napolitansk Pizza Stockholm | Traditionell Italiensk Pizza | Gelateria Amore',
  description:
    'Äkta napolitansk pizza i Stockholm bakad enligt traditionella metoder. Lär dig om pizzans historia och hur vi tillverkar den på Gelateria Amore.',
  keywords: [
    'pizza Stockholm',
    'napolitansk pizza',
    'italiensk pizza',
    'traditionell pizza',
    'pizza tillverkning',
    'pizzeria Stockholm',
    'handgjord pizza',
    'italiano pizza',
    'pizza Hornstull',
  ],
  openGraph: {
    title:
      'Napolitansk Pizza i Stockholm - Äkta italiensk pizza enligt tradition',
    description:
      'Lär dig allt om äkta napolitansk pizza. Vi bakar vår pizza enligt traditionella italienska metoder med de bästa råvarorna.',
    url: 'https://www.gamore.se/pizza',
    siteName: 'Gelateria Amore',
    images: [
      {
        url: '/pizza.jpg',
        width: 1200,
        height: 630,
        alt: 'Napolitansk pizza från Gelateria Amore i Stockholm',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.gamore.se/pizza',
  },
};

export default function PizzaPage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline:
        'Napolitansk Pizza Stockholm | Traditionell Italiensk Pizza | Gelateria Amore',
      description:
        'Äkta napolitansk pizza i Stockholm bakad enligt traditionella metoder. Lär dig om pizzans historia och hur vi tillverkar den på Gelateria Amore.',
      image: 'https://www.gamore.se/pizza.jpg',
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
          name: 'Napolitansk Pizza',
          item: 'https://www.gamore.se/pizza',
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
          src={pizzaImg}
          alt="Napolitansk pizza - traditionell italiensk pizza bakad på Gelateria Amore"
          fill
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/20 to-black/10" />

        <section className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-light text-white mb-3 leading-tight tracking-tight">
              Napolitansk Pizza
            </h1>
            <p className="text-xl md:text-2xl text-amber-300 font-light mb-2 tracking-wide">
              Äkta kärlek i varje tugga
            </p>
            <p className="bg-background/20 backdrop-blur-sm pl-2 rounded md:text-lg text-white/80 mb-8 max-w-xl leading-relaxed font-light">
              Traditionell napolitansk pizza bakad med italienska recept och
              italienska traditioner. Lär dig mer om pizzans historia och hur vi
              bakar den.
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
          Pizzans Historia
        </h2>
        <div className="md:w-[70%] w-full mx-auto px-4 md:px-0 space-y-6 text-gray-700 leading-relaxed [&>p]:text-lg">
          <p>
            Pizzan är den äldsta maträtt som människan har lämnat i arv. Den
            moderna pizzan härstammar från den italienska söderns hjärta –
            Neapel. Legenden säger att skapandet av den klassiska pizzan som vi
            känner till idag inträffade den 9 juni 1879 när Umberto I och hans
            drottning Margherita av Savojen tillkallade den kända neapolitanske
            pizzamakaren Don Raffaele Esposito och hans fru Rosa Brandi. Det
            kungliga paret hade hört mycket gott om den man som hade ryktet
            kring sig om att vara den bästa pizzaiolin i Neapel.
          </p>
          <p>
            Paret bakade tre klassiska pizzor: Pizza Mastunicola med ister, ost
            och basilika, Pizza alla Marinara med tomat, vitlök, olivolja och
            oregano och den sista valde Rosa Brandi att döpa till Pizza
            Margherita till drottningens ära. Pizzan toppades med tomat,
            olivolja, mozzarella och basilika och skulle symbolisera den
            italienska flaggans färger. Från och med den här dagen spreds
            pizzan, med Pizza Margherita i fronten, till länder i Europa och
            övriga världen.
          </p>
        </div>

        <div className="w-[90%] md:w-[70%] mx-auto h-px bg-linear-to-r from-transparent via-black/40 to-transparent" />

        <article className="md:w-[70%] w-full mx-auto px-4 md:px-0">
          <h3 className="text-3xl md:text-5xl text-amber-900 mb-8 font-light">
            Pizza i Sverige
          </h3>
          <div className="space-y-6 text-gray-700 leading-relaxed [&>p]:text-lg">
            <p>
              Till Sverige kom pizzan för första gången år 1947 då det öppnades
              två svenska restauranger, båda med pizza på menyn. I Västerås 1947
              öppnade restaurang Sjöhagen där den första pizzan huvudsakligen
              serverades till de italienska arbetarna som arbetade på Asea.
              Under samma tid introducerade Luciano Frati pizzan på restaurang
              Tre Remmare i Stockholm men succén uteblir.
            </p>
            <p>
              Det är inte förrän Bengt Wedholm den 23 december 1968 inför en
              särskild pizza-del på Östermalmsrestaurangen Östergök som den slår
              igenom stort och mindre än ett år senare öppnade Giuseppe
              Sperandio den första renodlade pizzerian i Sverige, Pizzeria
              Piazza Opera, på Gustav Adolfs torg i Stockholm. Några år senare,
              1973, öppnade Malmös första och numera äldsta pizzabutik,
              Perugina. Än idag, 44 år senare, kan Malmöborna njuta av Peruginas
              pizzor.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image
              src="/pizza-marghareta.jpeg"
              alt="Pizza Margherita - traditionell napolitansk pizza från Gelateria Amore Stockholm"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full aspect-square"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Image
              src="/pizza-capricciosa.jpeg"
              alt="Pizza Capricciosa - italiensk pizza från Gelateria Amore Stockholm"
              width={400}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full aspect-square"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </article>

        <div className="w-[90%] md:w-[70%] mx-auto h-px bg-linear-to-r from-transparent via-black/40 to-transparent" />

        <article className="md:w-[70%] w-full mx-auto px-4 md:px-0">
          <h3 className="text-3xl md:text-5xl text-amber-900 mb-8 font-light">
            Vår Napolitansk Pizza
          </h3>
          <div className="space-y-6 text-gray-700 leading-relaxed [&>p]:text-lg">
            <p>
              Vi på Gelateria Amore gör napolitansk pizza Canotto (uppblåsbar
              båt) med traditionella metoder. Traditionell napolitansk pizza har
              samma fyra ingredienser: vatten, mjöl, salt och jäst. Skillnaden
              är att Canotto har en enorm skorpa.
            </p>
            <p>
              Det som gör skorpan så stor är gasbubblor, som skapas under den
              långa, långsamma och kalla jäsningsprocessen som samtidigt tillför
              massor av smak och gör det lättare att smälta. Dessa gasbubblorna
              som fastnar inuti degen kommer att expandera och blåsa upp skorpan
              under gräddningen vid hög temperatur (450-500°C).
            </p>
            <p>
              Vi på Gelateria Amore är fyllda med kärlek och strävar efter att
              hedra det arvet genom att tillaga pizzor enligt traditionella
              metoder. Vi öppnar upp vår värd för dig, fylld med smaker, aromer
              och ren njutning. Vår passion för matlagning genomsyrar varje
              pizza vi skapar. Varje tugga är en kärleksfull handling som vi
              delar med dig som gäst.
            </p>
            <p>
              Kom och följ med oss på en resa av smakupplevelser och kärlek till
              maten. Gelateria Amore är inte bara en plats att äta, det är en
              plats att känna kärleken i varje tugga och doft. Vi ser fram emot
              att välkomna dig till vår Gelateria, där kärleken till
              traditionell matlagning lever vidare.
            </p>
            <p>Smaka, njut och känn kärleken hos Gelateria Amore!</p>
          </div>
        </article>
      </section>
    </>
  );
}
