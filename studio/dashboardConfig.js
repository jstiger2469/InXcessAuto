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
                  buildHookId: '6363ed547f0df10092d969a9',
                  title: 'Sanity Studio',
                  name: 'inxcessauto-studio',
                  apiId: '164b419e-3b12-45c0-b71f-0bb163745b3a'
                },
                {
                  buildHookId: '6363ed541ed4030076670704',
                  title: 'Landing pages Website',
                  name: 'inxcessauto',
                  apiId: '2bb9e15e-7a76-4cc5-a43a-1ebc9ed63c10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jstiger2469/InXcessAuto',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://inxcessauto.netlify.app', category: 'apps' }
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
