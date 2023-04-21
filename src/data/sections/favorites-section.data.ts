import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/book-1.jpeg'),
        title: 'The Pragmatic Programmer: From Journeyman to Master',
        author: 'Andy Hunt, Dave Thomas',
        url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
      },
      {
        image: import('@/assets/favorites/books/book-2.jpg'),
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        url: 'https://www.goodreads.com/book/show/179133.Domain_Driven_Design',
      },
      {
        image: import('@/assets/favorites/books/book-3.jpeg'),
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/3735293-clean-code',
      },
      {
        image: import('@/assets/favorites/books/book-4.jpeg'),
        title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/10284614-the-clean-coder',
      },
    ],
  },
  people: {
    title: 'People I learn from',
    data: [
      {
        image: import('@/assets/favorites/people/person-1.jpg'),
        name: 'Kent C. Dodds',
        url: 'https://kentcdodds.com/',
      },
      {
        image: import('@/assets/favorites/people/person-2.jpeg'),
        name: 'Kent Beck',
        url: 'https://www.kentbeck.com/',
      },
      {
        image: import('@/assets/favorites/people/person-3.jpeg'),
        name: 'Eric Evans',
        url: 'https://www.domainlanguage.com/',
      },
      {
        image: import('@/assets/favorites/people/person-4.jpeg'),
        name: 'Martin Fowler',
        url: 'https://martinfowler.com/',
      },
      {
        image: import('@/assets/favorites/people/person-5.jpg'),
        name: 'Robert C. Martin',
        url: 'http://cleancoder.com/',
      },
      {
        image: import('@/assets/favorites/people/person-6.jpeg'),
        name: 'Adam Dymitruk',
        url: 'https://eventmodeling.org/',
      },
    ],
  },
  videos: {
    title: 'Videos I watched',
    data: [
      {
        image: import('@/assets/favorites/videos/video-1.jpeg'),
        title: 'Building Resilient Frontend Architecture • Monica Lent • GOTO 2019',
        url: 'https://youtu.be/TqfbAXCCVwE',
      },
      {
        image: import('@/assets/favorites/videos/video-2.jpeg'),
        title: 'Scaling Yourself • Scott Hanselman • GOTO 2012',
        url: 'https://youtu.be/FS1mnISoG7U',
      },
      {
        image: import('@/assets/favorites/videos/video-3.jpeg'),
        title: "Why Isn't Functional Programming the Norm? - Richard Feldman",
        url: 'https://youtu.be/QyJZzq0v7Z4',
      },
    ],
  },
  medias: {
    title: 'Media I follow',
    data: [
      {
        image: import('@/assets/favorites/media/media-1.jpeg'),
        title: 'Fireship.io',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/c/Fireship',
      },
      {
        image: import('@/assets/favorites/media/media-6.webp'),
        title: '.cult by Honeypot',
        type: 'Blog',
        url: 'https://cult.honeypot.io/',
      },
      {
        image: import('@/assets/favorites/media/media-7.jpg'),
        title: 'Akshay Saini',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@akshaymarch7/videos',
      },
      {
        image: import('@/assets/favorites/media/media-8.jpg'),
        title: 'FreeCodeCamp.org',
        type: 'YouTube channel',
        url: 'https://www.youtube.com/@freecodecamp/videos',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
