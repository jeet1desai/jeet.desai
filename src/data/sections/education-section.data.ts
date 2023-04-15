import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Computer Engineering',
      institution: 'Government Engineering College - Rajkot',
      image: import('@/assets/logos/gec-logo.jpg'),
      dates: [new Date('2017.07'), new Date('2021.06')],
      description: `Bachelor's degree. Specialization in computer engineering.`,
      links: [website({ url: 'http://www.gecrj.cteguj.in/' })],
    },
    {
      title: 'Science - Higher Secondary School',
      institution: 'Sorath International School - Junagadh',
      image: import('@/assets/logos/sorath-logo.png'),
      dates: [new Date('2015.03'), new Date('2017.03')],
      description: `Higher Secondary School in Math, Physics, Chemistry, English, and Computer.`,
      links: [website({ url: 'https://www.sorathschools.com/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
