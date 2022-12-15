const ifStyle = () => {
  return `<!-- RSS STYLE STARTS -->
  <!--[if mso]><style type="text/css">.content-MS .content img { width: 560px; }</style><![endif]-->
  <!-- WINDOWS 10 HACKS FOR LINK AND BG COLOR -->
  <!--[if (mso)|(mso 16)]><style type="text/css">.mlContentButton a { text-decoration: none; }<style[endif]--><!--[if !mso]><!-- --><!--<![endif]-->
  <!--[if (lt mso 16)]><style type="text/css" if="variable.bodyBackgroundImage.value">.mlBodyBackgroundImage { background-image: none; }</style><![endif]-->`;
};

export default ifStyle;



