import ContactHome from "@/components/home/ContactHome";
import Header from "@/components/home/Header";
import Map from "@/components/home/Map";
import MarqueeService from "@/components/home/MarqueeService";
import OurFounders from "@/components/home/OurFounders";
import OurServices from "@/components/home/OurServices";
import OverView from "@/components/home/OverView";
import Why from "@/components/home/Why";

export const metadata = {
  title: "Home - Professional Accounting & Tax Services in Scotland",
  description:
    "Orimson Ltd provides comprehensive accounting, tax advisory, and R&D consulting services in Scotland. Expert guidance for businesses of all sizes with personalized financial solutions.",
  keywords: [
    "accounting services Scotland",
    "tax advisory Dumfries",
    "R&D tax credits UK",
    "bookkeeping services Scotland",
    "financial consulting",
    "business consultancy",
    "VAT compliance Scotland",
    "PAYE services UK",
  ],
  openGraph: {
    title: "Orimson Ltd - Professional Accounting & Tax Services in Scotland",
    description:
      "Leading accounting and tax advisory firm in Scotland, specializing in accounting & bookkeeping, tax compliance, R&D tax credits, financial strategy, and business consultancy.",
    url: "https://orimsonltd.com",
    images: [
      {
        url: "/header-image.jpg",
        width: 1200,
        height: 630,
        alt: "Orimson Ltd - Professional Accounting Services Scotland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Orimson Ltd - Professional Accounting & Tax Services in Scotland",
    description:
      "Leading accounting and tax advisory firm in Scotland, specializing in accounting & bookkeeping, tax compliance, R&D tax credits, financial strategy, and business consultancy.",
    images: ["/header-image.jpg"],
  },
  alternates: {
    canonical: "https://orimsonltd.com",
  },
};

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] ">
      <Header />
      <MarqueeService />
      <OverView />
      <OurServices />
      <Why />
      <OurFounders />
      <MarqueeService />
      <ContactHome />
      <Map />
    </div>
  );
}
