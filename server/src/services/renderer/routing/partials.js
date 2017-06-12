const ASSET_HOSTS = {
  deployment: 'http://deploy.human.space',
  development: '',
  production: 'http://human.space'
};

const partials = {
  '404': {
    path: 'partials/404.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/404.css`],
      scripts: {}
    },
    partials: ['head']
  },
  error: {
    path: 'partials/error.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/404.css`],
      scripts: {}
    },
    partials: ['head']
  },
  '500': {
    path: 'static/500.html',
    assets: {
      styles: [],
      scripts: {}
    },
    partials: []
  },
  index: {
    path: 'partials/index.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/main.css`],
      scripts: {foot: [`${ASSET_HOSTS[__ENV__]}/{{bundle}}`]}
    },
    partials: ['head', 'foot', 'navbar']
  },
  team: {
    path: 'partials/theCrew.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/theCrewNIGHT.css`],
      scripts: {foot: [`${ASSET_HOSTS[__ENV__]}{{bundle}}`]}
    },
    partials: ['head', 'footer_marketing', 'navbar']
  },
  vision: {
    type: 'body',
    path: 'partials/wayOfLife.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/wayOfLife.css`],
      scripts: {foot: [`${ASSET_HOSTS[__ENV__]}{{bundle}}`]}
    },
    partials: ['head', 'footer_marketing', 'navbar']
  },
  'already-subscribed': {
    path: 'partials/emailAlreadyDatabase.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/joinedNewsletterNIGHT.css`],
      scripts: {}
    },
    partials: ['head']
  },
  subscribed: {
    path: 'partials/joinedNewsletter.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/joinedNewsletterNIGHT.css`],
      scripts: {}
    },
    partials: ['head']
  },
  weeklydose: {
    path: 'partials/subscribe.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/subscribe.css`],
      scripts: {foot: [`${ASSET_HOSTS[__ENV__]}{{bundle}}`]}
    },
    partials: ['head', 'foot']
  },
  feed: {
    type: 'body',
    path: 'partials/feed.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/blogNIGHT.css`],
      scripts: {foot: [`${ASSET_HOSTS[__ENV__]}{{bundle}}`]}
    },
    partials: ['head', 'footer_bare', 'navbar']
  },
  article: {
    type: 'body',
    path: 'partials/article.html',
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/contentNIGHT.css`],
      scripts: {foot: [`${ASSET_HOSTS[__ENV__]}{{bundle}}`]}
    },
    partials: ['head', 'navbar', 'article_content', 'foot']
  },
  head: {
    type: 'head',
    path: 'partials/header.html',
    javascript: [],
    assets: {
      styles: [`${ASSET_HOSTS[__ENV__]}/assets/css/fonts.css`, `${ASSET_HOSTS[__ENV__]}/assets/css/normalize.css`],
      scripts: {head: ['https://use.typekit.net/rer0env.js']}
    },
    partials: []
  },
  foot: {
    type: 'foot',
    path: 'partials/footer.html',
    assets: {
      styles: [],
      scripts: {}
    },
    partials: []
  },
  footer_bare: {
    type: 'foot',
    path: 'partials/footerBare.html',
    assets: {
      styles: [],
      scripts: {}
    },
    partials: []
  },
  footer_article: {
    type: 'foot',
    path: 'partials/footerContent.html',
    assets: {
      styles: [],
      scripts: {}
    },
    partials: []
  },
  footer_marketing: {
    type: 'foot',
    path: 'partials/footerMarketing.html',
    assets: {
      styles: [],
      scripts: {}
    },
    partials: []
  },
  navbar: {
    type: 'body',
    path: 'partials/navbar.html',
    assets: {
      styles: [],
      scripts: {}
    },
    partials: []
  },
  article_content: {
    type: 'body',
    path: 'articles/{{hash}}/index.html',
    assets: {
      styles: [],
      scripts: {}
    },
    partials: []
  },
  feed_article: {
    type: 'body',
    path: 'partials/feed_article.html',
    assets: {
      styles: [],
      scripts: {}
    },
    partials: []
  }
};

export default partials;
