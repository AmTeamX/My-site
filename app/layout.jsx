

import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import '../public/main.scss';



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>PWTeam | Pannawit Krutnak | Professional Portfolio & Blog</title>
        <meta name="description" content="Welcome to PWTeam and Pannawit Krutnak's site, a professional portfolio and blog showcasing projects, experience, and contact information for PWTeam and Pannawit Krutnak." />
        <meta name="keywords" content="pwteam, pannawit krutnak, portfolio, blog, resume, contact, web developer, designer, projects, AmTeamX" />
        <meta name="author" content="AmTeamX, PWTeam, Pannawit Krutnak" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph tags */}
        <meta property="og:title" content="PWTeam | Pannawit Krutnak | Professional Portfolio & Blog" />
        <meta property="og:description" content="Showcasing projects, experience, and contact information for PWTeam and Pannawit Krutnak." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pwteam.site/" />
        <meta property="og:image" content="/public/assets/img/parsonal-info/parson-img-1.png" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PWTeam | Pannawit Krutnak | Professional Portfolio & Blog" />
        <meta name="twitter:description" content="Showcasing projects, experience, and contact information for PWTeam and Pannawit Krutnak." />
        <meta name="twitter:image" content="/public/assets/img/parsonal-info/parson-img-1.png" />
        {/* Canonical URL */}
        <link rel="canonical" href="https://pwteam.site/" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@300;400;500;600;700;800;900&display=swap"/>
        {/* Structured Data for Google Search */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Pannawit Krutnak",
              "alternateName": "PWTeam",
              "url": "https://pwteam.site/",
              "image": "https://pwteam.site/public/assets/img/parsonal-info/parson-img-1.png",
              "sameAs": [
                "https://www.linkedin.com/in/pannawitkrutnak/",
                "https://github.com/pwteam"
              ],
              "jobTitle": "Web Developer, Designer",
              "worksFor": {
                "@type": "Organization",
                "name": "PWTeam"
              }
            }
          `}
        </script>
      </Head>
      <body className=''>
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {children}
      </body>
    </html>
  )
}
