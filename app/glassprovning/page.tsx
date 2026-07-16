import Link from 'next/link';
import Image from 'next/image';
import gelatoImage from '@/public/gelato-banner.webp';
import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gamore.se'),
  title: 'Glassprovning Stockholm - Boka Gelato-upplevelse | Gelateria Amore',
  description:
    'Boka unik glassprovning i Stockholm. Prova 12 smaker äkta italiensk gelato. Perfekt för företagsevent och privatfester. Bokning öppnar mars 2026!',
  keywords: [
    'glassprovning Stockholm',
    'gelato tasting',
    'företagsevent Stockholm',
    'teambuilding Stockholm',
    'privatfest Stockholm',
    'aktiviteter Stockholm',
    'mat upplevelser Stockholm',
    'italiensk glass Stockholm',
    'gruppaktivitet Stockholm',
    'kickoff aktivitet',
  ],
  openGraph: {
    title: 'Glassprovning Stockholm - Upplev Äkta Italiensk Gelato',
    description:
      'Prova 12 smaker färsk gelato i en guidad provning. Perfekt för företag och glassälskare.',
    url: 'https://www.gamore.se/glassprovning',
    images: ['/gelato-banner.webp'],
    locale: 'sv_SE',
  },
  alternates: {
    canonical: 'https://www.gamore.se/glassprovning',
  },
};

export default function Page() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: 'Glassprovning Stockholm',
      description:
        'Upplev äkta italiensk gelato med en guidad provning på 12 olika smaker. Perfekt för företag, privatfester och glassälskare.',
      image: 'https://www.gamore.se/gelato-banner.webp',
      eventStatus: 'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      startDate: '2026-03-01',
      location: {
        '@type': 'Place',
        name: 'Gelateria Amore',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Långholmsgatan 5',
          addressLocality: 'Stockholm',
          addressRegion: 'Stockholm',
          postalCode: '117 33',
          addressCountry: 'SE',
        },
      },
      organizer: {
        '@type': 'Organization',
        name: 'Gelateria Amore',
        url: 'https://www.gamore.se',
      },
      offers: {
        '@type': 'Offer',
        url: 'https://order.foodtec.se/gamore-catering/bestall-mat',
        priceCurrency: 'SEK',
        availability: 'https://schema.org/PreOrder',
      },
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
          name: 'Glassprovning',
          item: 'https://www.gamore.se/glassprovning',
        },
      ],
    },
  ];

  return (
    <div className="bg-[#FAF9F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Section */}
      <section className="py-12 md:py-20 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-light text-amber-900 mb-4">
          Glassprovning Stockholm
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold tracking-widest mb-8 text-amber-800">
          UPPTÄCK STOCKHOLMS BÄSTA GELATO
        </h2>
        <Link
          href="https://order.foodtec.se/gamore-catering/bestall-mat"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beställ glassprovning
        </Link>
      </section>

      {/* Feature Cards Section */}
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-light text-amber-900 mb-2">
              Provsmakning av färsk glass
            </h3>
            <p className="text-gray-600">Lär dig mer om Gelato</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-light text-amber-900 mb-2">
              Inga förkunskaper krävs
            </h3>
            <p className="text-gray-600">Passar alla åldrar</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-light text-amber-900 mb-2">
              Perfekt event för företaget
            </h3>
            <p className="text-gray-600">Minnesvärda upplevelser</p>
          </div>
        </div>
      </section>

      <div className="w-full h-120">
        <Image
          src={gelatoImage}
          alt="Bild på olika gelato smaker hos Gelateria Amore"
          width={1200}
          height={80}
          fetchPriority="high"
          sizes="100vw"
          placeholder="blur"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Content Section */}
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2
          className="text-5xl md:text-5xl font-light text-amber-900 mb-8 text-center"
          style={{ fontFamily: 'Birthstone' }}
        >
          GLASSPROVNING & EVENTS
        </h2>

        <div className="space-y-6 text-gray-700 [&>p]:leading-relaxed [&>p]:text-lg">
          <p>
            Glassälskarens dröm är här! Nu har du möjligheten att njuta av olika
            smaker av god färsk gelato och överraska dina smaklökar under en
            härlig glassprovning hos oss.
          </p>

          <p>
            Nu har du möjligheten att komma på en glassprovning hos oss på
            Gelateria Amore som du sent kommer glömma. Under vår glassprovning
            kommer du få prova på en mängd olika smaker av gelato, gjord på
            endast naturliga och närproducerade råvaror direkt i butiken. Vår
            familjedrivna gelateria har serverat vår unika gelato i alla möjliga
            smaker, varianter och ingredienser och nu välkomnar vi dig till vår
            Gelateria i Stockholm. Välkommen in på en glassprovning eller kom
            förbi och njut av vår smarriga gelato!
          </p>

          <p className="text-center text-amber-800 font-semibold">
            Vi är med på Roliga Aktiviteter Stockholm
          </p>
        </div>
      </section>

      {/* Booking Info Section */}
      <section id="bokning" className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2
            className="text-4xl md:text-5xl font-light text-amber-900 mb-8 text-center"
            style={{ fontFamily: 'Birthstone' }}
          >
            Boka glassprovning
          </h2>

          <div className="space-y-6 text-gray-700 [&>p]:leading-relaxed">
            <div>
              <h3 className="text-xl font-semibold text-amber-900 mb-3">
                Hej kära glassälskare!
              </h3>
              <p>
                Tack för ert intresse för våra glassprovningar! Vi är glada att
                kunna meddela att vi kommer att öppna våra tidsbokningar för
                säsongen 2026 i mars, så fort solen börjar lysa över oss igen.
                Denna tidpunkt markerar inte bara början på en ny säsong utan
                också en möjlighet för våra kunder att planera sina besök i god
                tid.
              </p>
            </div>

            <p>
              Genom att öppna bokningarna tidigt ser vi till att ni har goda
              möjligheter att välja datum som passar er bäst. Vi arbetar hårt
              för att skapa en minnesvärd upplevelse för alla våra besökare, och
              vi ser fram emot att välkomna er tillbaka.
            </p>

            <p className="italic text-amber-800">
              Glassiga hälsningar, Gelateria Amore
            </p>
            <p className="font-semibold text-amber-900">
              Hoppas att vi ses SNART!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-amber-900 mb-12 text-center">
            Vad säger våra gäster?
          </h2>

          <div className="space-y-8">
            {/* Testimonial 1 */}
            <div className="border-l-4 border-amber-600 pl-6 py-4">
              <p className="text-gray-700 mb-4 italic">
                "Mycket lyckad glassprovning. Många spännande smakprover (15+)
                presenterade på ett trevligt sätt."
              </p>
              <p className="font-semibold text-amber-800">⭐⭐⭐⭐⭐</p>
              <p className="font-semibold text-gray-800">- Sten</p>
            </div>

            {/* Testimonial 2 */}
            <div className="border-l-4 border-amber-600 pl-6 py-4">
              <p className="text-gray-700 mb-4 italic">
                "Det finns glass ställen och så finns det Gelateria Amore! Här
                gör man glass med stor kunskap, erfarenhet och KÄRLEK. Boka en
                Glassprovning så får ni en upplevelse ni sent ska glömma. Vi
                provade 13 olika sorter makalöst god glass och fick en resa i
                glassmakandets hemligheter."
              </p>
              <p className="font-semibold text-amber-800">⭐⭐⭐⭐⭐</p>
              <p className="font-semibold text-gray-800">- Per M</p>
            </div>

            {/* Testimonial 3 */}
            <div className="border-l-4 border-amber-600 pl-6 py-4">
              <p className="text-gray-700 mb-4 italic">
                "Lugnt o trevligt, fick veta massor av intressanta saker o äta
                massor av underbart god glass!"
              </p>
              <p className="font-semibold text-amber-800">⭐⭐⭐⭐⭐</p>
              <p className="font-semibold text-gray-800">- Ulrika</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl font-light text-amber-900 mb-8 text-center">
          Vanliga frågor om glassprovning
        </h2>

        <div className="space-y-6">
          <article className="border-l-4 border-amber-600 pl-6 py-4">
            <h3 className="font-semibold text-lg text-amber-900 mb-2">
              Hur många personer ryms på en glassprovning?
            </h3>
            <p className="text-gray-700">
              Max 16 personer per glassprovning för att säkerställa en personlig
              och högkvalitativ upplevelse.
            </p>
          </article>

          <article className="border-l-4 border-amber-600 pl-6 py-4">
            <h3 className="font-semibold text-lg text-amber-900 mb-2">
              Hur lång tid tar glassprovningen?
            </h3>
            <p className="text-gray-700">
              Cirka 1 timme där ni får prova 12 olika smaker av vår färska
              gelato.
            </p>
          </article>

          <article className="border-l-4 border-amber-600 pl-6 py-4">
            <h3 className="font-semibold text-lg text-amber-900 mb-2">
              När öppnar bokningarna för 2026?
            </h3>
            <p className="text-gray-700">
              Bokningar öppnar i mars 2026. Ni måste ha Amores glassprovnings
              presentkort.
            </p>
          </article>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="bg-amber-50 py-12 md:py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-amber-900 mb-4">
          Intresserad av glassprovning?
        </h2>
        <Link
          href="https://order.foodtec.se/gamore-catering/bestall-mat"
          className="inline-block bg-amber-700 hover:bg-amber-800 text-white font-semibold py-3 px-8 rounded-lg transition mb-8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Beställ glassprovning
        </Link>
      </section>

      {/* Details Section */}
      <section className="bg-white py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light text-amber-900 mb-8 text-center">
            Om vår glassprovning
          </h2>

          <div className="space-y-6 text-gray-700 [&>p]:leading-relaxed">
            <p>
              Vår glassprovning sker löpande och det sker nästintill en
              glassprovning om dagen. Kontakta oss för att boka in en
              glassprovning på vårt cafe/glass med en timmes upplevelse. Ni
              kommer att vara få vara med och njuta av många av våra smarriga
              smaker.
            </p>

            <p>
              Vår gelato innehåller svenska mejeriprodukter och de finaste
              råvarorna som svensk honung, färska och torkade frukter och bär
              samt reducerad mängd socker och fett för en nyttigare gelato utan
              att kompromissa med smaken. Välkommen att boka en glassprovning
              hos oss!
            </p>

            <div className="bg-amber-50 border-l-4 border-amber-600 p-6 my-8">
              <p className="font-semibold text-amber-900 mb-2">
                ⚠️ Viktigt att observera:
              </p>
              <p>
                Det är viktigt att ni kontaktar oss och gör er bokning minst fem
                (5) dagar innan ni vill besöka oss för en glassprovning. Detta
                är för att säkerställa att det finns platser kvar. Speciellt då
                vi inte kan ta in mer än 16 personer per glassprovning. Ni måste
                också ha Amores glassprovnings presentkort
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
