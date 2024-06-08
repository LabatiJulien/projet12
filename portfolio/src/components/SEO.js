import React from 'react';

const SEO = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Portfolio de Julien Labati - Développeur Web</title>
      <meta name="description" content="Découvrez le portfolio de Julien Labati, développeur web passionné par la création d'applications web modernes et performantes." />
      <meta name="keywords" content="portfolio, développeur web, web design, développement front-end, développement back-end" />
      
      {/* Google Snippet */}
      <meta name="google-site-verification" content="qjJEQsoMznEFNOeBYyoztDriEbWspTq5ponbE-SaGGo" />
      
      {/* Balises Open Graph pour Facebook */}
      <meta property="og:title" content="Portfolio de Julien Labati - Développeur Web" />
      <meta property="og:description" content="Découvrez le portfolio de Julien Labati, développeur web passionné par la création d'applications web modernes et performantes." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://github.com/LabatiJulien/projet12.git" />
      <meta property="og:image" content="URL_DE_L_IMAGE_POUR_L_APERCU" />
      
      {/* Balises Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Portfolio de Julien Labati - Développeur Web" />
      <meta name="twitter:description" content="Découvrez le portfolio de Julien Labati, développeur web passionné par la création d'applications web modernes et performantes." />
      <meta name="twitter:image" content="URL_DE_L_IMAGE_POUR_L_APERCU" />
      
    </>
  );
};

export default SEO;
