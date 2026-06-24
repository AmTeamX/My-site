import { Poppins, Roboto_Slab } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://profile.teampk.site"),
  title: "PWTeam | Pannawit Krutnak",
  description:
    "Pannawit Krutnak (Team) — Full-Stack Developer. Web, Mobile, AI/ML projects. Portfolio, resume, and contact.",
  openGraph: {
    title: "PWTeam | Pannawit Krutnak",
    description:
      "Full-Stack Developer portfolio showcasing web, mobile, and AI/ML projects.",
    url: "https://profile.teampk.site/",
    images: ["/assets/img/parsonal-info/parson-img-1.png"],
  },
  alternates: { canonical: "https://profile.teampk.site/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${poppins.className}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Pannawit Krutnak",
              alternateName: ["PWTeam", "Team", "ทีม"],
              url: "https://profile.teampk.site/",
              sameAs: [
                "https://github.com/pwteam",
                "https://www.linkedin.com/in/pannawitkrutnak/",
              ],
              jobTitle: "Full-Stack Developer",
              nationality: "Thai",
            }),
          }}
        />
      </head>
      <body>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          closeOnClick
          pauseOnHover
        />
        {children}
      </body>
    </html>
  );
}
