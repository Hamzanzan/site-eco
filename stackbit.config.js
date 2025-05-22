module.exports = {
  stackbitVersion: '~0.6.0',
  ssgName: 'hugo',
  buildCommand: 'hugo --minify',
  publishDir: 'public',
  contentTypes: {
    pages: {
      label: 'Pages',
      path: 'content',
      file: '{slug}.md',
      fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'layout', type: 'string', default: 'single' },
        { name: 'date', type: 'date' },
        { name: 'draft', type: 'boolean', default: false },
        { name: 'body', type: 'markdown' }
      ]
    },
    articles: {
      label: 'Articles',
      path: 'content/articles',
      file: '{slug}.md',
      fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'layout', type: 'string', default: 'single' },
        { name: 'date', type: 'date' },
        { name: 'draft', type: 'boolean', default: false },
        { name: 'thumbnail', type: 'image' },
        { name: 'body', type: 'markdown' }
      ]
    },
    home: {
      label: 'Home Page',
      path: 'content',
      file: '_index.md',
      fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'layout', type: 'string', default: 'home' },
        { name: 'body', type: 'markdown' }
      ]
    }
  },
  assets: {
    images: {
      path: 'static/images'
    }
  },
  preview: {
    enabled: true,
    url: 'https://numeriqueresponsable.netlify.app'
  },
  permissions: {
    create: ['admin', 'editor'],
    read: ['admin', 'editor'],
    update: ['admin', 'editor'],
    delete: ['admin'],
    publish: ['admin', 'editor']
  }
}; 