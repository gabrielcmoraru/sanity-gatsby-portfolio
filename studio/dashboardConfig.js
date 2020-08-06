export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f2c2b8967743e373ea83d8f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-56mjmxew',
                  apiId: 'ad4961fd-69c7-4293-befb-22be3c854134'
                },
                {
                  buildHookId: '5f2c2b8d3db416dc0067d594',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ayqe7voj',
                  apiId: '9e179389-5839-4b7d-9d72-2899efb0cbb8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gabrielcmoraru/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ayqe7voj.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
