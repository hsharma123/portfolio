import React from "react";
import Header from "../components/Header";
import Contactpage from "../components/Contactpage/Contactpage";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Himanshu Sharma</title>
        <meta
          name="description"
          content="Get in touch with Himanshu Sharma, Front-End Developer working at Planetcast Media Services and available for freelance and full-time opportunities."
        />
        <link
          rel="canonical"
          href="https://himanshusharma-portfolio.netlify.app/contact"
        />
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Himanshu Sharma",
      "url": "https://himanshusharma-portfolio.netlify.app/contact",
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
        <Contactpage />
      </main>
    </>
  );
};

export default Contact;
