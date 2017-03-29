import React from 'react';

class Head extends React.Component {
  render() {
    return(
      <div>
        {/* <link href="https://fonts.googleapis.com/css?family=Raleway:400,300,300italic,500,600,700,800" rel="stylesheet" type="text/css" /> */}
        {/* <link href="https://fonts.googleapis.com/css?family=Rochester" rel="stylesheet" type="text/css" /> */}
        {/* <link href="https://fonts.googleapis.com/css?family=Mrs+Saint+Delafield" rel="stylesheet" type="text/css" /> */}

        <meta name="format-detection" content="telephone=no" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="author" content />
        <meta name="keywords" content />

        <link rel="stylesheet" type="text/css" media="all" href="css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/style.css" />
        <link rel="stylesheet" href="css/fontello.css" />
        <link rel="stylesheet" href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/responsive.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/owl.carousel.css" />
        <link rel="stylesheet" type="text/css" media="all" href="css/jquery.fancybox.css" />
        {/* <link rel="stylesheet" type="text/css" href="revolution/css/settings.css" /> */}
      </div>
    )
  }
}

export default Head;
