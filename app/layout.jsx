import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import '../public/main.scss';



export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <Head>
        <title>PWTeam | Pannawit Krutnak (ทีม) | ปัณณวิชญ์ ครุฑนาค | Professional Portfolio & Blog</title>
        <meta name="description" content="Welcome to PWTeam and Pannawit Krutnak (ทีม, Team), ปัณณวิชญ์ ครุฑนาค's site. Explore a professional portfolio and blog showcasing web, mobile, AI/ML projects, experience, resume, and contact information for PWTeam, Pannawit Krutnak, and Team." />
        <meta name="keywords" content="pwteam, pannawit krutnak, ปัณณวิชญ์ ครุฑนาค, team, ทีม, portfolio, blog, resume, contact, web developer, designer, projects, AmTeamX, ai, ml, mobile app, hackathon, nsc, tedx, openhouse, ict, muict, thailand, thai developer" />
        <meta name="author" content="AmTeamX, PWTeam, Pannawit Krutnak, ปัณณวิชญ์ ครุฑนาค, Team, ทีม" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        {/* Open Graph tags */}
        <meta property="og:title" content="PWTeam | Pannawit Krutnak (Team, ทีม) | ปัณณวิชญ์ ครุฑนาค | Professional Portfolio & Blog" />
        <meta property="og:description" content="Showcasing web, mobile, AI/ML projects, experience, resume, and contact information for PWTeam, Pannawit Krutnak (Team, ทีม), ปัณณวิชญ์ ครุฑนาค." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pwteam.site/" />
        <meta property="og:image" content="/assets/img/parsonal-info/parson-img-1.png" />
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PWTeam | Pannawit Krutnak (Team, ทีม) | ปัณณวิชญ์ ครุฑนาค | Professional Portfolio & Blog" />
        <meta name="twitter:description" content="Showcasing web, mobile, AI/ML projects, experience, resume, and contact information for PWTeam, Pannawit Krutnak (Team, ทีม), ปัณณวิชญ์ ครุฑนาค." />
        <meta name="twitter:image" content="/assets/img/parsonal-info/parson-img-1.png" />
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
              "alternateName": ["PWTeam", "Team", "ทีม", "ปัณณวิชญ์ ครุฑนาค"],
              "additionalName": "ทีม",
              "url": "https://pwteam.site/",
              "image": "https://pwteam.site/assets/img/parsonal-info/parson-img-1.png",
              "sameAs": [
                "https://www.linkedin.com/in/pannawitkrutnak/",
                "https://github.com/pwteam"
              ],
              "jobTitle": "Web Developer, Designer, AI/ML Engineer",
              "worksFor": {
                "@type": "Organization",
                "name": "PWTeam"
              },
              "nationality": "Thai",
              "description": "ปัณณวิชญ์ ครุฑนาค (Pannawit Krutnak, Team, ทีม) is a Thai developer specializing in web, mobile, and AI/ML projects."
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
