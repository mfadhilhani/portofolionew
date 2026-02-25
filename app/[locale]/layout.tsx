import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';

const locales = ['id', 'en'];

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: t('title'),
    description: t('description'),
    keywords: [
      'Muhammad Fadhil Hani',
      'Network Engineer',
      'IT Security',
      'BNSP',
      'Junior Network Administrator',
      'Routing',
      'Switching',
      'Subnetting',
    ],
    authors: [{ name: 'Muhammad Fadhil Hani' }],
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: locale === 'id' ? 'id_ID' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Muhammad Fadhil Hani',
    jobTitle: locale === 'id' ? 'Staf Jaringan & Keamanan TI' : 'Network & IT Security Staff',
    description:
      locale === 'id'
        ? 'Junior Network Administrator Bersertifikat BNSP'
        : 'BNSP Certified Junior Network Administrator',
    url: `https://fadhilhani.vercel.app/${locale}`,
    sameAs: [
      'https://linkedin.com/in/fadhilhani',
      'https://github.com/fadhilhani',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universitas Negeri Makassar',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Junior Network Administrator',
        credentialCategory: 'Professional Certification',
        recognizedBy: { '@type': 'Organization', name: 'BNSP' },
      },
    ],
    knowsAbout: [
      'Network Administration',
      'IP Addressing',
      'Routing Configuration',
      'Switch Configuration',
      'Network Security',
      'VLAN',
      'OSPF',
    ],
  };

  return (
    <html lang={locale} className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-navy-900 text-slate-200 antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
