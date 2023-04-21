import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
import {
  bootstrap,
  chakraUi,
  css,
  eslint,
  firebase,
  html,
  javascript,
  jest,
  materialUI,
  nestJs,
  nextJs,
  nx,
  pnpm,
  postgreSql,
  prettier,
  react,
  redux,
  sass,
  tailwindCss,
  typescript,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'Note Market Place',
      image: import('@/assets/portfolio/project-logo.png'),
      dates: [new Date('2020-03'), null],
      details: [
        { label: 'Team size', value: '2 person' },
        { label: 'My role', value: ['Front-end Developer', 'Designer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app', 'Open source'] },
      ],
      pdfDetails: [
        { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
        { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
      ],
      screenshots: [
        { src: import('@/assets/portfolio/project-1-screenshot-3.png'), alt: 'First screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-1.png'), alt: 'Second screenshot' },
        { src: import('@/assets/portfolio/project-1-screenshot-2.png'), alt: 'Third screenshot' },
      ],
      description:
        'A marketplace like platform through which different students of various professions from around the Country from different universities and colleges can come together, collaborate with one another and help each other. Students will be able to acquire free notes from other students, as well as can buy and or sell notes and old textbooks, and handwritten notes for any specific category (or profession).',
      tagsList: {
        title: 'Technologies',
        tags: [react(), html(), css(), javascript(), redux(), bootstrap(), materialUI()],
      },
      links: [
        demo({ url: 'https://notemarketplace.netlify.app/' }),
        github({ url: 'https://github.com/jeet1desai/NoteMarketPlace-FrontEnd' }),
      ],
    },
    // links: [mockups({ url: '#' }), demo({ url: '#' }), website({ url: '#' }), github({ url: '#' })],
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
