import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { LinksFunction } from "react-router";
import "../src/index.css"; // We will pull from src/index.css
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import ContactModal from "../src/components/ContactModal/ContactModal";
import { ContactModalProvider } from "../src/context/ContactModalContext";
import { HelmetProvider } from "react-helmet-async";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:wght@300;400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap",
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

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
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

import { useLocation } from "react-router";

export default function App() {
  const location = useLocation();
  const isStudio = location.pathname.startsWith("/studio");

  return (
    <HelmetProvider>
      <ContactModalProvider>
        <div className="app">
          {!isStudio && <Navbar />}
          <main className={isStudio ? "" : "main-content"}>
            <Outlet />
          </main>
          {!isStudio && <ContactModal />}
          {!isStudio && <Footer />}
        </div>
      </ContactModalProvider>
    </HelmetProvider>
  );
}
