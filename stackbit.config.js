import { GitContentSource } from '@stackbit/cms-git'

export default {
  stackbitVersion: '~0.6.0',
  ssgName: 'hugo',
  nodeVersion: '18',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: {
        page: {
          type: 'page',
          urlPath: '/{slug}',
          file: 'content/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'layout', type: 'string', default: 'single' },
            { name: 'date', type: 'date' },
            { name: 'draft', type: 'boolean', default: false },
            { name: 'body', type: 'markdown' },
          ],
          permissions: {
            create: true,
            update: true,
            delete: true
          }
        },
        article: {
          type: 'page',
          urlPath: '/articles/{slug}',
          file: 'content/articles/{slug}.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'layout', type: 'string', default: 'single' },
            { name: 'date', type: 'date' },
            { name: 'draft', type: 'boolean', default: false },
            { name: 'thumbnail', type: 'image' },
            { name: 'body', type: 'markdown' }
          ],
          permissions: {
            create: true,
            update: true,
            delete: true
          }
        },
        home: {
          type: 'page',
          urlPath: '/',
          file: 'content/_index.md',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'layout', type: 'string', default: 'home' },
            { name: 'body', type: 'markdown' }
          ],
          permissions: {
            create: true,
            update: true,
            delete: true
          }
        }
      }
    })
  ],
  assetSources: [
    {
      name: 'images',
      path: 'static/images',
      permissions: {
        create: true,
        update: true,
        delete: true
      }
    }
  ],
  presetSource: {
    name: 'default',
    presetDir: 'stackbit-presets'
  }
} 