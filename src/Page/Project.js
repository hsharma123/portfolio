import React from 'react'
import Header from '../components/Header'
import Projectlist from '../components/Projectpage/Projectlist'
import { Helmet } from 'react-helmet'

const Project = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Himanshu Sharma</title>
        <meta
          name="description"
          content="Explore projects by Himanshu Sharma, a Front-End Developer specializing in React and responsive UI design."
        />
          <link rel="canonical" href="https://himanshusharma-portfolio.netlify.app/project" />
          <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Himanshu Sharma",
      "url": "https://himanshusharma-portfolio.netlify.app/project",
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
        <Projectlist />
      </main>
    </>
  )
}

export default Project
