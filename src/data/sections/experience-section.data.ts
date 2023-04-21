import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { linkedin, website } from '../helpers/links';
import {
  bootstrap,
  css,
  firebase,
  git,
  html,
  javascript,
  jest,
  materialUI,
  react,
  redux,
  typescript,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Software Engineer',
      company: 'Tatvasoft - Ahmedabad, Gujarat',
      image: import('@/assets/logos/tatvasoft-logo.png'),
      dates: [new Date('2021-01'), null],
      description: `
        - Developed software solutions using React JS, JavaScript, TypeScript, ans Redux.
        - Collaborated with product managers, designers, developers, and QA to deliver high-quality software solutions.
        - Developed reusable UI components for web applications. 
        - Ensured cross-browser compatibility and accessibility of web applications.
        - Contributed to improving website performance and optimizing the user experience through techniques such as lazy loading and code optimization.
        - Created and maintained documentation for code and web application functionality.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [
          react(),
          javascript(),
          typescript(),
          redux(),
          html(),
          css(),
          jest(),
          bootstrap(),
          git(),
          materialUI(),
          firebase(),
        ],
      },
      links: [
        website({ url: 'https://www.tatvasoft.com/' }),
        linkedin({ url: 'https://www.linkedin.com/company/tatvasoft' }),
      ],
    },
    // {
    //   role: 'React.js developer',
    //   company: 'Facebook',
    //   image: import('@/assets/logos/facebook-logo.png'),
    //   dates: [new Date('2019-04'), new Date('2020-02')],
    //   description: `
    //     - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
    //     - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
    //     - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
    //     - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [react(), reactQuery(), chakraUi(), eslint()],
    //   },
    //   links: [website({ url: '#' }), instagram({ url: '#' })],
    // },
    // {
    //   role: 'Junior front-end developer',
    //   company: 'GitLab',
    //   image: import('@/assets/logos/gitlab-logo.png'),
    //   dates: [new Date('2016-09'), new Date('2019-04')],
    //   description: `
    //     Nulla volutpat justo ante, rhoncus posuere massa egestas in:

    //     - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
    //     - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

    //     Donec non vulputate augue 🤓
    //   `,
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [vue(), tailwindCss(), pnpm()],
    //   },
    //   links: [twitter({ url: '#' }), github({ url: '#' })],
    // },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
