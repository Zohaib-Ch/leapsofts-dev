import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";
import type { LinksFunction } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import "../src/index.css";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import ContactModal from "../src/components/ContactModal/ContactModal";
import { ContactModalProvider } from "../src/context/ContactModalContext";
import { ThemeProvider } from "../src/context/ThemeContext";
import { CookieConsentProvider } from "../src/context/CookieConsentContext";
import CookieBanner from "../src/components/CookieBanner/CookieBanner";
import * as HelmetPkg from "react-helmet-async";

const HelmetProviderComponent: any = (HelmetPkg as any).HelmetProvider || (HelmetPkg as any).default?.HelmetProvider || (HelmetPkg as any).default;
const HelmetProvider = HelmetProviderComponent;

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Dancing+Script:wght@700&family=Inter:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap",
  },
];

const globalSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.leapsofts.com/#organization",
      "name": "Leapsofts",
      "legalName": "Leapsofts Enterprise Software LLC",
      "url": "https://www.leapsofts.com",
      "logo": "https://www.leapsofts.com/logo/Leap-soft-01.png",
      "description": "Global custom software development company specializing in enterprise software engineering, cloud architecture, AI & data science, web apps, and mobile solutions.",
      "sameAs": [
        "https://www.linkedin.com/company/leapsofts",
        "https://twitter.com/leapsofts",
        "https://github.com/leapsofts"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "contact@leapsofts.com",
        "availableLanguage": ["English"]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.leapsofts.com/#website",
      "url": "https://www.leapsofts.com",
      "name": "Leapsofts",
      "publisher": {
        "@id": "https://www.leapsofts.com/#organization"
      }
    }
  ]
};

// Zero-FOUC Theme Script: executes synchronously before body renders
const themeInitScript = `
  (function() {
    try {
      var saved = localStorage.getItem('leapsofts-theme');
      var theme = saved || 'light';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();
`;

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="google-site-verification" content="googlef44f90a97e88d97b" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
        {/* Publisher / author for E-E-A-T */}
        <meta name="author" content="Leapsofts Engineering" />
        <link rel="alternate" hrefLang="en" href="https://www.leapsofts.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.leapsofts.com/" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(globalSchema) }}
        />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const location = useLocation();
  const isStudio = location.pathname.startsWith("/studio");

  return (
    <HelmetProvider>
      <ThemeProvider>
        <CookieConsentProvider>
          <ContactModalProvider>
            <div className="app">
              {!isStudio && <Navbar />}
              <main className={isStudio ? "" : "main-content"}>
                <Outlet />
              </main>
              {!isStudio && <ContactModal />}
              {!isStudio && <CookieBanner />}
              {!isStudio && <Footer />}
              {!isStudio && <Analytics />}
            </div>
          </ContactModalProvider>
        </CookieConsentProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

