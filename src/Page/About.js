import React from "react";
import Header from "../components/Header";
import Aboutpage from "../components/Aboutpage/Aboutpage";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About | Himanshu Sharma</title>
        <meta
          name="description"
          content="Learn more about Himanshu Sharma, a Front-End Developer specializing in React, responsive design, and OTT/TV app development for platforms like LG and Samsung."
        />
        <link
          rel="canonical"
          href="https://himanshusharma-portfolio.netlify.app/about"
        />
        <Helmet>
          <script type="application/ld+json">
            {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Himanshu Sharma",
      "url": "https://himanshusharma-portfolio.netlify.app/about",
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
      </Helmet>

      <Header />

      <main>
        <Aboutpage />
      </main>
    </>
  );
};

export default About;
