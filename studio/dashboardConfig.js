export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f365c99837e7a00f336c36b',
                  title: 'Sanity Studio',
                  name: 'eless-website-studio',
                  apiId: '478090e0-9197-42c6-9275-a9f17bd18367'
                },
                {
                  buildHookId: '5f365c99952244d3a6cc6dfc',
                  title: 'Landing pages Website',
                  name: 'eless-website',
                  apiId: '23abeb28-2868-4805-b371-24aca4fb963d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/KacperZi/eless-website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://eless-website.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
