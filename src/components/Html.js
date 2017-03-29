/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { analytics, metrika } from '../config';
// import Scripts from './Scripts';
import Head from './Head';


class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    script: PropTypes.string,
    chunk: PropTypes.string,
    children: PropTypes.string,
    status: PropTypes.number,
    note: PropTypes.string,
  };

  render() {
    const { title, description, script, children, note } = this.props;
    switch (note) {
      case 'Home':
        return (
          <html lang="ru">
            <head>
              <title>{title}</title>
              <meta name="description" content={description} />
              <meta name="google-site-verification" content="8HqqwS9imFM9n4IlRDkLiOosOx9w7eAX8QVDL80wvR4" />
              <Head />
              {/* Offer Call */}
              <link rel="stylesheet" type="text/css" href="css/morph/component.css" />
              <link rel="stylesheet" type="text/css" href="css/morph/normalize.css" />
              <link rel="stylesheet" type="text/css" href="css/morph/content.css" />
            </head>
            <body id="index" className="wide_layout">
              <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
              <script src="js/jquery-2.1.0.min.js" />
              <script src="js/jquery-ui.min.js" />
              <script src="plugins/jquery.queryloader2.min.js" />
              <script src="plugins/owl.carousel.min.js" />
              <script src="plugins/retina.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="plugins/jquery.fancybox.js" />
              <script src="plugins/instafeed.min.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="js/plugins.js" />
              <script src="js/script.js" />
              <script src="plugins/jquery.modernizr.js" />
              {/* Blog */}
              <script src="plugins/isotope.pkgd.min.js" />
              {/* Offer Call */}
              <script src="js/morph/uiMorphingButton_fixed.js" />
              <script src="js/morph/modernizr.custom.js" />
              <script src="js/morph/classie.js" />
              <script src="js/morph/script.js" />
              {/* Map */}
              <script src="http://maps.googleapis.com/maps/api/js" />
              {/* Metrika */}
              <script
                dangerouslySetInnerHTML={{ __html:
                '(function (d, w, c) { (w[c] = w[c] || []).push(function()' +
                '{ try { w.yaCounter41942969 = new Ya.Metrika({ id:41942969, clickmap:true,' +
                'trackLinks:true, accurateTrackBounce:true, webvisor:true });' +
                '} catch(e) { } }); var n = d.getElementsByTagName("script")[0],' +
                's = d.createElement("script"), f = function ()' +
                '{ n.parentNode.insertBefore(s, n); };' +
                's.type = "text/javascript"; s.async = true;' +
                's.src = "https://mc.yandex.ru/metrika/watch.js";' +
                'if (w.opera == "[object Opera]")' +
                '{ d.addEventListener("DOMContentLoaded", f, false);' +
                '} else { f(); } })(document, window, "yandex_metrika_callbacks");' }}
              />
              {/* analytics */}
              {analytics.google.trackingId &&
                <script
                  dangerouslySetInnerHTML={{ __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
                />
              }
              {analytics.google.trackingId &&
                <script src="https://www.google-analytics.com/analytics.js" async defer />
              }
            </body>
          </html>
        );
      break;
      case 'Contact':
        return (
          <html lang="ru">
            <head>
              <title>{title}</title>
              <meta name="description" content={description} />
              <Head />
              {/* Offer Call */}
              <link rel="stylesheet" type="text/css" href="css/morph/component.css" />
              <link rel="stylesheet" type="text/css" href="css/morph/normalize.css" />
              <link rel="stylesheet" type="text/css" href="css/morph/content.css" />
            </head>
            <body className="wide_layout">
              <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
              <script src="js/jquery-2.1.0.min.js" />
              <script src="js/jquery-ui.min.js" />
              <script src="plugins/jquery.queryloader2.min.js" />
              <script src="plugins/owl.carousel.min.js" />
              <script src="plugins/retina.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="plugins/jquery.fancybox.js" />
              <script src="plugins/instafeed.min.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="js/plugins.js" />
              <script src="js/script.js" />
              <script src="plugins/jquery.modernizr.js" />
              {/* Blog */}
              <script src="plugins/isotope.pkgd.min.js" />
              {/* Offer Call */}
              <script src="js/morph/uiMorphingButton_fixed.js" />
              <script src="js/morph/modernizr.custom.js" />
              <script src="js/morph/classie.js" />
              <script src="js/morph/script.js" />
              {/* Map */}
              <script src="http://maps.googleapis.com/maps/api/js" />
              {/* Metrika */}
              <script
                dangerouslySetInnerHTML={{ __html:
                '(function (d, w, c) { (w[c] = w[c] || []).push(function()' +
                '{ try { w.yaCounter41942969 = new Ya.Metrika({ id:41942969, clickmap:true,' +
                'trackLinks:true, accurateTrackBounce:true, webvisor:true });' +
                '} catch(e) { } }); var n = d.getElementsByTagName("script")[0],' +
                's = d.createElement("script"), f = function ()' +
                '{ n.parentNode.insertBefore(s, n); };' +
                's.type = "text/javascript"; s.async = true;' +
                's.src = "https://mc.yandex.ru/metrika/watch.js";' +
                'if (w.opera == "[object Opera]")' +
                '{ d.addEventListener("DOMContentLoaded", f, false);' +
                '} else { f(); } })(document, window, "yandex_metrika_callbacks");' }}
              />
              {/* analytics */}
              {analytics.google.trackingId &&
                <script
                  dangerouslySetInnerHTML={{ __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
                />
              }
              {analytics.google.trackingId &&
                <script src="https://www.google-analytics.com/analytics.js" async defer />
              }
            </body>
          </html>
        );
        break;
      case 'Services':
        return (
          <html lang="ru">
            <head>
              <title>{title}</title>
              <meta name="description" content={description} />
              <Head />
              {/* Offer Call */}
              <link rel="stylesheet" type="text/css" href="css/morph/component.css" />
              <link rel="stylesheet" type="text/css" href="css/morph/normalize.css" />
              <link rel="stylesheet" type="text/css" href="css/morph/content.css" />
            </head>
            <body className="wide_layout">
              <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
              <script src="js/jquery-2.1.0.min.js" />
              <script src="js/jquery-ui.min.js" />
              <script src="plugins/jquery.queryloader2.min.js" />
              <script src="plugins/owl.carousel.min.js" />
              <script src="plugins/retina.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="plugins/jquery.fancybox.js" />
              <script src="plugins/instafeed.min.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="js/plugins.js" />
              <script src="js/script.js" />
              <script src="plugins/jquery.modernizr.js" />
              {/* Blog */}
              <script src="plugins/isotope.pkgd.min.js" />
              {/* Services */}
              <script src="plugins/stickyfloat.js" />
              <script src="plugins/smoothScroll.js" />
              {/* Offer Call */}
              <script src="js/morph/uiMorphingButton_fixed.js" />
              <script src="js/morph/modernizr.custom.js" />
              <script src="js/morph/classie.js" />
              <script src="js/morph/script.js" />
              {/* Metrika */}
              <script
                dangerouslySetInnerHTML={{ __html:
                '(function (d, w, c) { (w[c] = w[c] || []).push(function()' +
                '{ try { w.yaCounter41942969 = new Ya.Metrika({ id:41942969, clickmap:true,' +
                'trackLinks:true, accurateTrackBounce:true, webvisor:true });' +
                '} catch(e) { } }); var n = d.getElementsByTagName("script")[0],' +
                's = d.createElement("script"), f = function ()' +
                '{ n.parentNode.insertBefore(s, n); };' +
                's.type = "text/javascript"; s.async = true;' +
                's.src = "https://mc.yandex.ru/metrika/watch.js";' +
                'if (w.opera == "[object Opera]")' +
                '{ d.addEventListener("DOMContentLoaded", f, false);' +
                '} else { f(); } })(document, window, "yandex_metrika_callbacks");' }}
              />
              {/* analytics */}
              {analytics.google.trackingId &&
                <script
                  dangerouslySetInnerHTML={{ __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
                />
              }
              {analytics.google.trackingId &&
                <script src="https://www.google-analytics.com/analytics.js" async defer />
              }
            </body>
          </html>
        );
        break;
      case '404':
        return (
          <html lang="ru">
            <head>
              <title>{title}</title>
              <meta name="description" content={description} />
              <Head />
            </head>
            <body className="wide_layout">
              <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
              <script src="js/jquery-2.1.0.min.js" />
              <script src="js/jquery-ui.min.js" />
              <script src="plugins/jquery.queryloader2.min.js" />
              <script src="plugins/owl.carousel.min.js" />
              <script src="plugins/retina.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="plugins/jquery.fancybox.js" />
              <script src="plugins/instafeed.min.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="js/plugins.js" />
              <script src="js/script.js" />
              <script src="plugins/jquery.modernizr.js" />
              {/* Blog */}
              <script src="plugins/isotope.pkgd.min.js" />
              {/* Metrika */}
              <script
                dangerouslySetInnerHTML={{ __html:
                '(function (d, w, c) { (w[c] = w[c] || []).push(function()' +
                '{ try { w.yaCounter41942969 = new Ya.Metrika({ id:41942969, clickmap:true,' +
                'trackLinks:true, accurateTrackBounce:true, webvisor:true });' +
                '} catch(e) { } }); var n = d.getElementsByTagName("script")[0],' +
                's = d.createElement("script"), f = function ()' +
                '{ n.parentNode.insertBefore(s, n); };' +
                's.type = "text/javascript"; s.async = true;' +
                's.src = "https://mc.yandex.ru/metrika/watch.js";' +
                'if (w.opera == "[object Opera]")' +
                '{ d.addEventListener("DOMContentLoaded", f, false);' +
                '} else { f(); } })(document, window, "yandex_metrika_callbacks");' }}
              />
              {/* analytics */}
              {analytics.google.trackingId &&
                <script
                  dangerouslySetInnerHTML={{ __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
                />
              }
              {analytics.google.trackingId &&
                <script src="https://www.google-analytics.com/analytics.js" async defer />
              }
            </body>
          </html>
        );
        break;
      default:
        return (
          <html lang="ru">
            <head>
              <title>{title}</title>
              <meta name="description" content={description} />
              <Head />
              {/* Offer Call */}
              <link rel="stylesheet" type="text/css" href="css/morph/component.css" />
              <link rel="stylesheet" type="text/css" href="css/morph/normalize.css" />
              <link rel="stylesheet" type="text/css" href="css/morph/content.css" />
            </head>
            <body className="wide_layout">
              <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
              <script src="js/jquery-2.1.0.min.js" />
              <script src="js/jquery-ui.min.js" />
              <script src="plugins/jquery.queryloader2.min.js" />
              <script src="plugins/owl.carousel.min.js" />
              <script src="plugins/retina.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="plugins/jquery.fancybox.js" />
              <script src="plugins/instafeed.min.js" />
              <script src="plugins/twitter/jquery.tweet.js" />
              <script src="js/plugins.js" />
              <script src="js/script.js" />
              <script src="plugins/jquery.modernizr.js" />
              {/* Blog */}
              <script src="plugins/isotope.pkgd.min.js" />
              {/* Metrika */}
              <script
                dangerouslySetInnerHTML={{ __html:
                '(function (d, w, c) { (w[c] = w[c] || []).push(function()' +
                '{ try { w.yaCounter41942969 = new Ya.Metrika({ id:41942969, clickmap:true,' +
                'trackLinks:true, accurateTrackBounce:true, webvisor:true });' +
                '} catch(e) { } }); var n = d.getElementsByTagName("script")[0],' +
                's = d.createElement("script"), f = function ()' +
                '{ n.parentNode.insertBefore(s, n); };' +
                's.type = "text/javascript"; s.async = true;' +
                's.src = "https://mc.yandex.ru/metrika/watch.js";' +
                'if (w.opera == "[object Opera]")' +
                '{ d.addEventListener("DOMContentLoaded", f, false);' +
                '} else { f(); } })(document, window, "yandex_metrika_callbacks");' }}
              />
              {/* analytics */}
              {analytics.google.trackingId &&
                <script
                  dangerouslySetInnerHTML={{ __html:
                  'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
                  `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')` }}
                />
              }
              {analytics.google.trackingId &&
                <script src="https://www.google-analytics.com/analytics.js" async defer />
              }
            </body>
          </html>
        );
    }
  }
}

export default Html;
