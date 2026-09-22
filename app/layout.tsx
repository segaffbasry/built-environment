import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import { posthogHeadScript } from "@/lib/analytics";
import "./globals.css";

// Source Sans Pro was the original site's typeface; Source Sans 3 is its current release.
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
});

const description =
  "We are independent suppliers and specifiers offering a variety of Mechanical Ventilation with Heat Recovery systems (MVHR) and Central Extract Systems (MEV).";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thebuiltenvironment.co.uk"),
  title: "Welcome to Built Environment Technology Ltd - Built Environment Technology",
  description,
  // Private prospect demo — keep out of search engines.
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Built Environment Technology",
    title: "Welcome to Built Environment Technology Ltd",
    description,
    images: ["/images/ventilation-servicing-flyer.png"],
  },
  twitter: { card: "summary_large_image", site: "@builteuk" },
};

export const viewport: Viewport = { themeColor: "#f7f8f2" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={sourceSans.variable}>
      <head>
        <script id="posthog" dangerouslySetInnerHTML={{ __html: posthogHeadScript }} />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
