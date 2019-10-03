import React from 'react'
import { Helmet } from 'react-helmet'
// import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
// import { withPrefix } from "gatsby"

import './all.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

        {/* FAVICON */}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon-16x16.png"
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href="/img/safari-pinned-tab.svg"
          color="#ff4400"
        />
        {/* FONTS */}
        <link href="https://fonts.googleapis.com/css?family=Alegreya:400&display=swap" rel="stylesheet"/>
        <script src="https://kit.fontawesome.com/0a4ee8d3e4.js"></script>

        {/* PLUGINS */}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
        {/* <script src="https://cdn.jsdelivr.net/npm/typeit@VERSION_NUMBER/dist/typeit.min.js" /> */}

        

        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />

      </Helmet>
      <Navbar />
      
      {children}
    </div>
  )
}

export default TemplateWrapper
