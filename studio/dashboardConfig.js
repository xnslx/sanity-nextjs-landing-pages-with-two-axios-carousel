export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6241ddaf9568d00728b3fc76',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-with-two-axios-carousel-studio',
                  apiId: '3fec4243-aaf4-45b4-ae69-e9371e8a6567'
                },
                {
                  buildHookId: '6241ddaf8c0cd50099b630f6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-with-two-axios-carousel',
                  apiId: '9549b9ee-f2c0-4c12-bc97-142b80b22239'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/xnslx/sanity-nextjs-landing-pages-with-two-axios-carousel',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-with-two-axios-carousel.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
