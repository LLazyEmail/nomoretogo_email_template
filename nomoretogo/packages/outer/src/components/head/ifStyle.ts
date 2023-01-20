const mediaStyle = () => {
  return `<style type="text/css">
  @media only screen and (max-width: 640px){#logoBlock-4 {max-width: 560px!important;width: 100%!important;}}
  @media only screen and (max-width: 640px){#imageBlock-14 img {max-width: 400px!important;width: 100%!important;}}
  @media only screen and (max-width: 640px){#imageBlock-15 img {max-width: 400px!important;width: 100%!important;}}
  @media only screen and (max-width: 640px){#imageBlock-20 img {max-width: 400px!important;width: 100%!important;}}
  @media only screen and (max-width: 640px){#imageBlock-21 img {max-width: 400px!important;width: 100%!important;}}
  @media only screen and (max-width: 640px){#imageBlock-26 img {max-width: 400px!important;width: 100%!important;}}
  @media only screen and (max-width: 640px){#imageBlock-27 img {max-width: 400px!important;width: 100%!important;}}
  @media only screen and (max-width: 640px){#imageBlock-40 img {max-width: 200px!important;width: 100%!important;}}
  </style>`;
};

const font2 = () => {
  return `<style type="text/css"> @font-face {font-weight: 400;font-style: normal;font-family: "Circular-Loom";src: url("https://cdn.loom.com/assets/fonts/circular/CircularXXWeb-Book-cd7d2bcec649b1243839a15d5eb8f0a3.woff2") format("woff2");}@font-face {font-weight: 500;font-style: normal;font-family: "Circular-Loom";src: url("https://cdn.loom.com/assets/fonts/circular/CircularXXWeb-Medium-d74eac43c78bd5852478998ce63dceb3.woff2") format("woff2");}@font-face {font-weight: 700;font-style: normal;font-family: "Circular-Loom";src: url("https://cdn.loom.com/assets/fonts/circular/CircularXXWeb-Bold-83b8ceaf77f49c7cffa44107561909e4.woff2") format("woff2");}@font-face {font-weight: 900;font-style: normal;font-family: "Circular-Loom";src: url("https://cdn.loom.com/assets/fonts/circular/CircularXXWeb-Black-bf067ecb8aa777ceb6df7d72226febca.woff2") format("woff2");}</style>`;
};

const font1 = () => {
  return `<style type="text/css">@import url("https://static.mailerlite.com/assets/plugins/groot/modules includes/groot_fonts/import.css?version=1650444");</style>`;
};



const ifStyle = () => {
  return `<!-- RSS STYLE STARTS -->
  <!--[if mso]><style type="text/css">.content-MS .content img { width: 560px; }</style><![endif]-->
  <!-- WINDOWS 10 HACKS FOR LINK AND BG COLOR -->
  <!--[if (mso)|(mso 16)]><style type="text/css">.mlContentButton a { text-decoration: none; }<style[endif]--><!--[if !mso]><!-- --><!--<![endif]-->
  <!--[if (lt mso 16)]><style type="text/css" if="variable.bodyBackgroundImage.value">.mlBodyBackgroundImage { background-image: none; }</style><![endif]-->`;
};

export {
  ifStyle,
  mediaStyle,
  font1,
  font2
}
