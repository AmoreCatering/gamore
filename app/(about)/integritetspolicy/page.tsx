import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gamore.se'),
  title: 'Integritetspolicy - Gelateria Amore',
  description:
    'Läs Gelateria Amores integritetspolicy. Vi värnar om dina personuppgifter och följer GDPR.',
  keywords: ['integritetspolicy', 'dataskydd', 'personuppgifter', 'GDPR'],
  openGraph: {
    title: 'Integritetspolicy - Gelateria Amore',
    description: 'Information om hur vi hanterar dina personuppgifter.',
    url: 'https://www.gamore.se/integritetspolicy',
    siteName: 'Gelateria Amore',
    locale: 'sv_SE',
    type: 'website',
  },
  alternates: {
    canonical: '/integritetspolicy',
  },
};

function Page() {
  return (
    <section className="py-6 flex flex-col md:[&>section]:w-[70%] [&>section]:w-[90%] [&>section]:flex [&>section]:flex-col [&>section]:gap-6 items-center gap-6 [&_h2]:text-center [&_h1]:text-4xl [&_h1]:font-medium md:[&_h3]:text-2xl [&_h3]:text-xl md:[&_h2]:text-3xl [&_h2]:text-2xl [&_h3]:font-medium [&_h2]:font-medium [&_p]:text-foreground/80 [&_li]:py-2 md:[&_li]:py-0.5">
      <h1 className="tracking-wide">Integritetspolicy</h1>
      <section>
        <section>
          <h3>Personuppgifter</h3>
          <p>
            Vi på <strong>Amore</strong> hanterar vissa personuppgifter om våra
            kunder och besökare på vår hemsida. Denna data samlas in och sparas
            om dig för att tillhandahålla tjänster, ge dig en bättre upplevelse
            samt erbjuda dig tjänster och produkter som passar dina behov.
          </p>
        </section>

        <h2>Uppgifter vi samlar in:</h2>

        <section>
          <h3>Cookies & Samtycke</h3>
          <p>
            Vid ditt första besök på vår webbplats presenteras du för en
            cookie-banner där du kan välja mellan &quot;Endast nödvändiga&quot;
            och &quot;Acceptera allt&quot;. Ditt val sparas i din webbläsare och
            respekteras vid framtida besök.
          </p>
          <p className="pt-2">
            <strong>Endast nödvändiga cookies:</strong> Dessa är tekniska
            cookies som är helt nödvändiga för att webbplatsen ska fungera, till
            exempel sessioner och säkerhet. De laddas alltid och kräver inget
            samtycke.
          </p>
          <p className="pt-2">
            <strong>Analytics-cookies:</strong> För att förbättra vår webbplats
            använder vi Vercel Analytics och Speed Insights. Dessa laddas ENDAST
            om du accepterar alla cookies via banners eller om du har gjort ett
            tidigare val om att acceptera. Om du väljer &quot;Endast
            nödvändiga&quot; kommer dessa INTE att laddas.
          </p>
          <p className="pt-2">
            <strong>Ändra ditt val:</strong> Du kan när som helst ändra ditt
            cookie-val genom att kontakta oss via info@gamore.se. Du kan också
            aktivera &quot;Do Not Track&quot; i din webbläsares
            sekretessinställningar, så respekteras ditt val automatiskt.
          </p>
        </section>

        <section>
          <h3>Kontaktuppgifter</h3>
          <p>
            När du genomför ett köp på vår webbshop så samlar vi in dina
            kontaktuppgifter: Namn, e-postadress, telefonnummer, adress.
          </p>
        </section>

        <section>
          <h3>Övrig information du anger vid genomfört köp</h3>
          <p>
            I de fall du lämnar ytterligare information vid ett genomfört köp så
            samlar vi även in denna information.
          </p>
        </section>

        <section>
          <h3>Information om produkter du köpt</h3>
          <p>Vi sparar också information om de produkter du köpt.</p>
        </section>

        <section>
          <h3>Support</h3>
          <p>
            Om du kontaktar vår support samlar vi in den information du uppger
            till oss för att kunna erbjuda dig god service och ge dig hjälp.
          </p>
        </section>

        <section>
          <h3>Nyhetsbrev</h3>
          <p>
            Om du anmäler dig till vårt nyhetsbrev så sparar vi dina
            personuppgifter för att kunna skicka dig erbjudanden och
            marknadsföring.
          </p>
        </section>

        <section>
          <h3>På detta sätt samlar vi in personuppgifter:</h3>
          <ul className="list-['-'] *:px-0.5">
            <li>När du genomför ett köp i vår webbshop</li>
            <li>
              När du kontaktar oss via formulär, telefon, e-post eller chatt
            </li>
            <li>När du besöker vår hemsida och loggar in i vår webbshop</li>
            <li>
              När du anmäler dig till vårt nyhetsbrev via formulär och e-post
            </li>
            <li>
              När du besöker vår hemsida via cookies som samlar in information
              på och från din webbläsare
            </li>
          </ul>
          <strong className="pt-1.5 px-0.5 ">
            Beroende på vilken av våra tjänster eller hemsidor du använder så
            samlar vi in olika typer av information.
          </strong>
        </section>

        <section>
          <h3>Detta använder vi personuppgifter till:</h3>

          <ul className="list-['-'] *:px-0.5">
            <li>
              För att fullgöra avtal med dig såsom genomförda beställningar
              <br />
              (Rättslig grund: Fullgörande av avtal)
            </li>
            <li>
              För att ge dig support och service. Behandlingen ligger då i både
              vårt och ditt intresse. Vi kan använda personuppgifter från
              tidigare kontakter för att ge dig bättre hjälp.
              <br />
              (Rättslig grund: Intresseavvägning, samtycke och fullgörande av
              avtal)
            </li>
            <li>
              För att kunna marknadsföra relevanta produkter och tjänster till
              dig
              <br />
              (Rättslig grund: Intresseavvägning och samtycke)
            </li>
          </ul>
        </section>

        <section>
          <h3>Hur lång tid sparar vi personuppgifter:</h3>
          <p>
            Vi sparar uppgifter så länge som det är nödvändigt för att utföra
            våra åtaganden som leverantör, och så länge det krävs enligt
            lagstadgade lagringstider (exempelvis bokföringslagen).
          </p>
        </section>
      </section>

      <section>
        <h2>Dessa myndigheter/företag lämnar vi ut personuppgifter till:</h2>

        <section>
          <h3>Facebook</h3>
          <p>
            Data via tredjepartscookie för reklam/marknadsföring och
            webbanalyser för att förbättra tjänster.
          </p>
        </section>

        <section>
          <h3>Google</h3>
          <p>
            Data via tredjepartscookie för reklam/marknadsföring och
            webbanalyser för att förbättra tjänster.
          </p>
        </section>

        <section>
          <h3>Vercel Analytics och Speed Insights</h3>
          <p>
            Vi använder Vercel Analytics och Vercel Speed Insights för att samla
            in anonymiserad data om hur besökare använder vår webbplats. Denna
            data hjälper oss att förbättra webbplatsens prestanda och
            användarupplevelse.
          </p>
          <p className="pt-2">
            <strong>Data som samlas in:</strong>
          </p>
          <ul className="list-['-'] *:px-0.5 pt-1">
            <li>Antal sidvisningar och besök</li>
            <li>Sidladdningstider och webbplatsens prestanda</li>
            <li>Användarens geografiska region (på landsnivå)</li>
            <li>Webbläsartyp och enhetstyp</li>
            <li>Refererande webbplats eller sökmotor</li>
          </ul>
          <p className="pt-2">
            <strong>Hur du väljer bort Vercel Analytics:</strong>
          </p>
          <ul className="list-['-'] *:px-0.5 pt-1">
            <li>
              <strong>Browser Do Not Track (DNT):</strong> Aktivera &quot;Do Not
              Track&quot; i din webbläsare (finns i sekretessinställningarna)
            </li>
            <li>
              <strong>Ad-blockers/Privacy Extensions:</strong> Använd tillägg
              som uBlock Origin, Privacy Badger eller liknande som blockerar
              spårningsskripten
            </li>
            <li>
              <strong>Kontakta oss:</strong> Skicka ett e-postmeddelande till
              info@gamore.se om du vill begära att dina data raderas ur systemet
            </li>
          </ul>
        </section>

        <section>
          <h3>Mailchimp</h3>
          <p className="pb-2">
            Personuppgiftsdata som används för reklam/marknadsföring
          </p>
          <p>
            Vi använder oss av moderna och sofistikerade säkerhetslösningar för
            att samla in, behandla, lagra och kommunicera personuppgifter och
            lösenord på ett säkert sätt. Exempelvis via SSL/TLS. Vi uppdaterar
            vår webbsida och våra rutiner med jämna mellanrum för att
            säkerställa integritet, tillgänglighet och sekretess.
          </p>
        </section>

        <section>
          <h3>Dina rättigheter</h3>
          <p>
            Du som individ bestämmer själv över dina egna personuppgifter. Du
            avgör själv vilka uppgifter du vill lämna. Du har även rätt att
            kontakta oss om du vill ha ut information om de uppgifter vi har om
            dig, för att begära rättelse, överföring eller för att begära att vi
            begränsar behandlingen, för att göra invändningar eller begära
            radering av dina uppgifter. Vid eventuella klagomål på vår
            behandling av personuppgifter har du som individ även rätt att inge
            klagomål till tillsynsmyndigheten Integritetsskyddsmyndigheten
            (IMY).
          </p>
          <p className="pt-2">
            Vissa personuppgifter behöver vi för att kunna tillhandahålla våra
            tjänster och produkter till dig. Om du vill återkalla samtycke och
            begär ändring/radering av dessa uppgifter kan det därför innebära
            att vi inte kan tillhandahålla alla våra produkter/tjänster till
            dig.
          </p>
        </section>

        <section>
          <h3>Förändringar i denna policy</h3>
          <p>Innehållet i denna policy kan komma att förändras med tiden.</p>
        </section>

        <section>
          <h3>Kontakta oss angående denna policy</h3>
          <p>
            Har du frågor eller synpunkter angående denna policy kan du vända
            dig till oss via e-post på info@gamore.se
          </p>
          <p className="pt-2">
            Vår mailsupport har öppet alla dagar och svarar inom 24 timmar.
          </p>
        </section>

        <address className="text-center not-italic flex flex-col gap-1 *:font-medium">
          <h3>Kontaktuppgifter</h3>
          <a
            href="https://www.google.com/maps/place/Gelateria+Amore/@59.3177426,18.0279998,16z/data=!3m1!4b1!4m6!3m5!1s0x465f77c51132f8b1:0xb2ff7b2f1441e768!8m2!3d59.31774!4d18.0328707!16s%2Fg%2F11c46cd7z2?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Långholmsgatan 5, 117 33 Stockholm
          </a>

          <a href="mailto:info@gamore.se">info@gamore.se</a>
          <a href="tel:+46707961666">070 796 16 66</a>
        </address>
      </section>
    </section>
  );
}

export default Page;
