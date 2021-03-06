const index = {
  projets: ['site-perso', 'packages-wasm', '3D-gallery', 'home-server'],
  frontend: {
    common: ['web', 'seo', 'javascript', 'webassembly', 'graphQL'],
    react: ['react', 'react-query', 'expo', 'eas', 'redux', 'recoil'],
    gatsby: ['gatsby'],
    design: ['atomic-design']
  },
  backend: {
    common: ['cron', 'crawl', 'scrap'],
    node: ['node', 'rollup', 'tldjs', 'jimp'],
    golang: ['golang'],
    rust: ['rust'],
    'ruby-on-rails': ['ruby', 'rails', 'puma', 'devise', 'nokogiri', 'cancancan'],
    database: {
      sql: ['postgresQL'],
      noSql: ['mongoDB', 'graphQL']
    },
    broker: ['rabbitMQ'],
    tools: ['wasabi']
  },
  misc: ['design-patterns', 'solid', 'polymorphisme', 'compilation', 'théorie-des-langages'],
  devops: {
    reseau: ['basics'],
    docker: ['basics']
  }
}

export default index
