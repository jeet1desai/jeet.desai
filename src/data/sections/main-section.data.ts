import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Jeet Desai',
  role: 'Software Engineer',
  details: [
    { label: 'Phone', value: '+91 7265876797', url: 'tel:+91 7265876797' },
    { label: 'Email', value: 'jeetdesai149@gmail.com', url: 'mailto:jeetdesai149@gmail.com' },
    { label: 'From', value: 'Gujarat, India' },
    { label: 'Salary range', value: '8,00,000 - 10,00,000 INR' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+91 7265876797' },
    { label: 'Email', value: 'jeetdesai149@gmail.com' },
    { label: 'LinkedIn', value: '/in/jeetdesai2604', url: 'https://linkedin.com' },
    { label: 'GitHub', value: '/jeet1desai', url: 'https://github.com' },
    { label: 'Website', value: 'jeetdesai.netlify.com', url: '/', fullRow: true },
  ],
  description:
    'I`m highly passionate about computing and creating elegant abstractions to solve challenging problems. I am a seeker who always wants to expand himself in every dimension of life in the best way he can.',
  tags: [
    { name: 'Open for freelance' },
    { name: 'Seeking full-time employment' },
    { name: 'Front-end developer' },
    { name: 'Strong problem-solving skills' },
    { name: 'Dedicated to ongoing learning and growth' },
  ],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'Jeet_Desai_2Y_Frontend_Developer.pdf',
  },
  links: [
    github({ url: 'https://github.com/jeet1desai' }),
    linkedin({ url: 'https://www.linkedin.com/in/jeetdesai2604/' }),
    twitter({ url: 'https://twitter.com/DesaiJeet2604' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
