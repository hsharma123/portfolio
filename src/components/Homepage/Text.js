import React from 'react'
import Typewriter from 'typewriter-effect'

const Text = () => {
  return (
      <Typewriter options={
        {
            strings: [
              "React Js Developer",
              "Front End Developer",
              "Freelancer",
              "WordPress & Shopify Devloper"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }
      }>
          
    </Typewriter>
  )
}

export default Text