import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
  useLoaderData,
  useRouteLoaderData,
} from "react-router";
import type { LinksFunction } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import "../src/index.css";
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import ContactModal from "../src/components/ContactModal/ContactModal";
import { ContactModalProvider } from "../src/context/ContactModalContext";
import { getSanitySiteSettings } from "../src/sanity/queries";
import type { SanitySiteSettings } from "../src/sanity/types";
import { ThemeProvider } from "../src/context/ThemeContext";
import { CookieConsentProvider } from "../src/context/CookieConsentContext";
import CookieBanner from "../src/components/CookieBanner/CookieBanner";
import ScrollToTop from "../src/components/ScrollToTop/ScrollToTop";

const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Dancing+Script:wght@700&family=Inter:wght@400;500;600;700;800&display=swap";

export const links: LinksFunction = () => [
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", type: "image/png", href: "/logo/Leap-soft-01.png" },
  { rel: "apple-touch-icon", href: "/logo/Leap-soft-01.png" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "preload",
    as: "style",
    href: GOOGLE_FONTS_URL,
  },
  {
    rel: "stylesheet",
    href: GOOGLE_FONTS_URL,
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
      var functionalAllowed = true;
      var cookieMatch = document.cookie.match(/(?:^|;\\s*)leapsofts_consent=([^;]*)/);
      if (cookieMatch) {
        try {
          var parsed = JSON.parse(decodeURIComponent(cookieMatch[1]));
          if (parsed && parsed.functional === false) {
            functionalAllowed = false;
          }
        } catch (e) {}
      }
      if (functionalAllowed) {
        try {
          var storedConsent = localStorage.getItem('leapsofts_cookie_consent');
          if (storedConsent) {
            var parsedStorage = JSON.parse(storedConsent);
            if (parsedStorage && parsedStorage.functional === false) {
              functionalAllowed = false;
            }
          }
        } catch (e) {}
      }

      if (!functionalAllowed) {
        try { localStorage.removeItem('leapsofts-theme'); } catch (e) {}
        document.documentElement.setAttribute('data-theme', 'light');
        return;
      }

      var saved = localStorage.getItem('leapsofts-theme');
      var theme = saved || 'light';
      document.documentElement.setAttribute('data-theme', theme);
    } catch (e) {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  })();
`;

export function Layout({ children }: { children: React.ReactNode }) {
  const rootData = useRouteLoaderData<{ siteSettings?: SanitySiteSettings | null }>("root");
  const siteSettings = rootData?.siteSettings;
  const activeEmail = siteSettings?.contactEmail || "contact@leapsofts.com";
  const activePhone = siteSettings?.contactPhone || "+971 56 830 9734";
  const activeSocials = (siteSettings?.socialLinks && siteSettings.socialLinks.length > 0)
    ? siteSettings.socialLinks.map((s) => s.url)
    : [
        "https://www.linkedin.com/company/leapsofts",
        "https://twitter.com/leapsofts",
        "https://github.com/leapsofts",
      ];

  const dynamicGlobalSchema = {
    ...globalSchema,
    "@graph": [
      {
        ...globalSchema["@graph"][0],
        sameAs: activeSocials,
        contactPoint: {
          ...globalSchema["@graph"][0].contactPoint,
          email: activeEmail,
          telephone: activePhone,
        },
      },
      globalSchema["@graph"][1],
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#ffffff" />
        {/* Publisher / author for E-E-A-T */}
        <meta name="author" content="Leapsofts Engineering" />
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Meta />
        <Links />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dynamicGlobalSchema) }}
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

export async function loader() {
  const siteSettings = await getSanitySiteSettings();
  return { siteSettings };
}

export default function App() {
  const location = useLocation();
  const loaderData = useLoaderData<typeof loader>();
  const isStudio = location.pathname.startsWith("/studio");

  return (
    <ThemeProvider>
      <CookieConsentProvider>
        <ContactModalProvider>
          <div className="app">
            <ScrollToTop />
            {!isStudio && <Navbar />}
            <main className={isStudio ? "" : "main-content"}>
              <Outlet />
            </main>
            {!isStudio && <ContactModal />}
            {!isStudio && <CookieBanner />}
            {!isStudio && <Footer siteSettings={loaderData?.siteSettings} />}
            {!isStudio && <Analytics />}
          </div>
        </ContactModalProvider>
      </CookieConsentProvider>
    </ThemeProvider>
  );
}

