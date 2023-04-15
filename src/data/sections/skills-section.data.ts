import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  bootstrap,
  css,
  eslint,
  fastAPI,
  firebase,
  git,
  graphQL,
  html,
  javascript,
  jest,
  materialUI,
  mongoDb,
  nodeJS,
  postgreSql,
  prettier,
  python,
  react,
  reactQuery,
  redux,
  typescript,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        react({
          level: 5,
          // description: 'Proin ut erat sed massa tempus suscipit. Mauris efficitur nunc sem, nec scelerisque ligula bibendum ut.',
        }),
        javascript({ level: 5 }),
        typescript({ level: 4 }),
        redux({ level: 4 }),
        jest({ level: 3 }),
        html({ level: 5 }),
        css({ level: 5 }),
        nodeJS({ level: 3 }),
        postgreSql({ level: 3 }),
        mongoDb({ level: 3 }),
        prettier({ level: 5 }),
        eslint({ level: 4 }),
        bootstrap({ level: 5 }),
        git({ level: 4 }),
        materialUI({ level: 5 }),
        firebase({ level: 2 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [python(), fastAPI(), graphQL(), reactQuery()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:us', name: 'English' },
        { icon: 'circle-flags:in', name: 'Hindi' },
        { icon: 'circle-flags:in', name: 'Gujarati' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
