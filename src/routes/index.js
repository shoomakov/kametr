/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./home').default,
    require('./contact').default,
    require('./login').default,
    require('./register').default,
    require('./admin').default,
    require('./appointment').default,
    require('./services').default,
    require('./portfolio').default,
    require('./blog').default,

    // Services
    require('./services/ehlektromontazh').default,
    require('./services/sanuzel').default,
    require('./services/remont-i-otdelka').default,
    require('./services/remont-i-otdelka/subpaths/steny').default,
    require('./services/remont-i-otdelka/subpaths/floors').default,
    require('./services/conditioning').default,
    require('./services/ventilation').default,
    require('./services/glazing').default,
    require('./services/stretchCeiling').default,
    require('./services/furniture').default,
    require('./services/civilWorks').default,

    // Posts in Blog
    // -------------
    // 18-12-2016
    require('./blog/posts/2016/12/18').default,
    // 19-12-2016
    require('./blog/posts/2016/12/klimalan-luchshij-uteplitel-dlya-sruba').default,
    // 07-01-2017
    require('./blog/posts/2017/01/laminat-ili-plitka-pvh').default,
    // 12-01-2017
    require('./blog/posts/2017/01/raznovidnosti-otdelki-kuhonnogo-potolka').default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./content').default,
    require('./notFound').default,
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'} - Компания "Каждый Метр"`;
    route.description = route.description || '';

    return route;
  },

};
