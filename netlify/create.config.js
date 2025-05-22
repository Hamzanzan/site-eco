export default {
  name: 'hugo-site',
  type: 'hugo',
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
      ],
      permissions: {
        create: ['admin', 'editor'],
        read: ['admin', 'editor'],
        update: ['admin', 'editor'],
        delete: ['admin'],
        publish: ['admin', 'editor']
      }
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
      ],
      permissions: {
        create: ['admin', 'editor'],
        read: ['admin', 'editor'],
        update: ['admin', 'editor'],
        delete: ['admin'],
        publish: ['admin', 'editor']
      }
    },
    home: {
      label: 'Home Page',
      path: 'content',
      file: '_index.md',
      fields: [
        { name: 'title', type: 'string', required: true },
        { name: 'layout', type: 'string', default: 'home' },
        { name: 'body', type: 'markdown' }
      ],
      permissions: {
        create: ['admin'],
        read: ['admin', 'editor'],
        update: ['admin'],
        delete: ['admin'],
        publish: ['admin']
      }
    }
  },
  assets: {
    images: {
      path: 'static/images',
      permissions: {
        create: ['admin', 'editor'],
        read: ['admin', 'editor'],
        update: ['admin', 'editor'],
        delete: ['admin']
      }
    }
  }
} 