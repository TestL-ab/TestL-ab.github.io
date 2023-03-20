import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'
import { EnvelopeIcon, GlobeIcon } from '@heroicons/react/20/solid'

const people = [
  {
    name: 'Alison Adams Martinez, PhD',
    email: 'alison@alisonmartinez.dev',
    imageUrl: '/images/alison.jpg',
    web: 'alisonmartinez.dev',
  },
  {
    name: 'Chelsea Saunders',
    email: 'c.c.saunders@protonmail.com',
    imageUrl: '/images/chelsea.png',
    web: '',
  },
  {
    name: 'Sarah Bunker',
    email: 'sarah.bunker14@gmail.com',
    imageUrl: '/images/sarah.jpeg',
    web: 'sarahnbunker.com',
  },
  {
    name: 'Abbie Papka',
    email: 'abbiepapka@gmail.com',
    imageUrl: '/images/abbie.png',
    web: '',
  },
  // More people...
]

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  team: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      name: { type: String },
      email: { type: String },
      web: { type: String },
    },
    render: ({ src }) => (
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0"></div>
          <ul
            role="list"
            style={{ listStyleType: 'none' }}
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  className="aspect-[14/13] w-full rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                  {person.name}
                </h3>

                <a href={`mailto:${person.email}`}>{person.email}</a>
                <br></br>
                <a href={`http://www.${person.web}`}>{person.web}</a>
                {/* <p className="text-base leading-7 text-gray-300">
                  {person.email}
                </p>
                <p className="text-sm leading-6 text-gray-500">{person.web}</p> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
