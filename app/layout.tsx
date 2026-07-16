import './globals.css';
import { Source_Sans_3, Birthstone } from 'next/font/google';
import { Metadata } from 'next';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent';
import AnalyticsWrapper from '@/components/AnalyticsWrapper';
import { SidebarProvider } from '@/components/ui/sidebar';
import NavSidebar from '@/components/NavSideBar';

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const birthstone = Birthstone({
  display: 'swap',
  preload: true,
  weight: '400',
});
export const metadata: Metadata = {
  metadataBase: new URL('https://www.gamore.se'),
  title: {
    default: 'Gelateria Amore - Pizza & Gelato i Stockholm',
    template: '%s | Gelateria Amore',
  },
  description: 'Äkta napolitansk pizza och italiensk gelato på Hornstull',
  icons: 'icon.png',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={`${sourceSans3.className} flex min-h-screen`}>
        <SidebarProvider defaultOpen={false}>
          <NavSidebar />
          <div className="flex flex-col flex-1">
            <Nav />
            <main className="flex-1 flex flex-col bg-background min-h-dvh">
              {children}
              <AnalyticsWrapper />
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </SidebarProvider>
      </body>
    </html>
  );
}
