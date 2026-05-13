import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Aceleradora Veterinária`,
    template: `%s — ${SITE_NAME}`,
  },
  description:
    "Aceleradora especializada exclusivamente em clínicas e hospitais veterinários. Metodologia Altus para posicionamento premium, conversão e escala via WhatsApp.",
  applicationName: SITE_NAME,
  keywords: [
    "marketing veterinário",
    "aceleradora veterinária",
    "clínica veterinária",
    "hospital veterinário",
    "google ads veterinário",
    "tráfego pago veterinário",
    "posicionamento premium",
    "branding veterinário",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${SITE_NAME} — Aceleradora Veterinária`,
    description: SITE_TAGLINE,
    siteName: SITE_NAME,
    locale: "pt_BR",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Aceleradora Veterinária`,
    description: SITE_TAGLINE,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#F2F4F6] font-sans text-[#0b1d26]"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              description: SITE_TAGLINE,
              sameAs: [],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
