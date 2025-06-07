import React from 'react'
import Header from '../components/Header'
import Homepage from '../components/Homepage/Homepage'
import { Helmet } from 'react-helmet'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | Himanshu Sharma</title>
        <meta
          name="description"
          content="Welcome to the portfolio of Himanshu Sharma, a Front-End Developer skilled in React, responsive design, and OTT/TV app development."
        />
         <link rel="canonical" href="https://himanshusharma-portfolio.netlify.app/" />
         <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Himanshu Sharma",
      "url": "https://himanshusharma-portfolio.netlify.app/",
      "sameAs": [
        "https://github.com/hsharma123",
        "https://linkedin.com/in/himanshu-sharma-3281b9191",
        "https://twitter.com/Himansh35588752"
      ],
      "jobTitle": "Front-End Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Planetcast Media Service Pvt.ltd"
      }
    }
    `}
        </script>
      </Helmet>

      <Header />
      <main>
        <Homepage />
      </main>
    </>
  )
}

export default Home
