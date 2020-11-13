const profile = {
  fullName: 'Bereket Girma',
  description: 'FULLSTACK DEVELOPER',
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: 'avatar.svg',
  about: {
    title: `HEY THERE! 
    I'M WEBSITE OWNER`,
    description: `I am a Web Developer based in Las Vegas.
    I’ve built web applications using Node.js and React and have a solid foundation in web design and development. I've recently completed PunchCode’s 3 month web development bootcamp.
    Before moving into development, I worked in the Health sector, where I managed and converted voice recordings that physicians and other healthcare workers make into written reports.
    When I'm not coding, I enjoy spending time with family and learning different cultures and their languages. 
    Right now  I am  looking for a suitable position with a company where outstanding performance is recognised and where I can work on a variety of projects.
    `,
    findMeOn: [
      {
        iconName: 'location',
        text: 'Las Vegas, NV',
        url: '',
        hoverColor: '#546e7a'
      },
      // {
      //   iconName: 'twitter',
      //   text: '@username',
      //   url: 'https://twitter.com/username',
      //   hoverColor: '#1da1f2'
      // },
      {
        iconName: 'email',
        text: 'bereketgirma97@gmail.com',
        url: 'mailto://bereketgirma97@gmail.com',
        hoverColor: '#546e7a'
      },
      // {
      //   iconName: 'lock',
      //   text: '@kuser',
      //   url: 'https://keybase.io/kuser',
      //   hoverColor: '#e9641c'
      // }
    ]
  },
  social: [
    // {
    //   iconName: 'twitter',
    //   url: 'https://twitter.com/username',
    //   text: "I'm on Twitter",
    //   hoverColor: '#1da1f2'
    // },
    {
      iconName: 'telegram',
      url: 'https://t.me/bgirma',
      text: "I'm on Telegram",
      hoverColor: '#0088cc'
    },
    {
      iconName: 'github',
      url: 'https://github.com/bereket-girma',
      text: "I'm on Github",
      hoverColor: '#000'
    },
    {
      iconName: 'email',
      url: 'mailto:bereketgirma97@gmail.com',
      text: 'Send me an email',
      hoverColor: '#000'
    }, 
    {
      iconName: 'linkedin',
      url: 'https://www.linkedin.com/in/bereket-girma-82a87a1b1/',
      text: "I'm on LinkedIn",
      hoverColor: '#000'
    }, 
  ]
}

const projects = [
  {
    title: 'Project Title #1',
    img: '',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Open source', 'React'],
    siteUrl: 'https://amazing.project.com',
    sourceCodeUrl: 'https://github.com/user/project'
  },
  {
    title: 'Project Title #2',
    img: 'https://www.nethruster.com/assets/img/icons/apple-touch-icon.png',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Sample', 'Freeware', 'Go'],
    siteUrl: 'https://amazing.project.com'
  },
  {
    title: 'Project Title #3',
    img: 'https://www.nethruster.com/assets/img/wareader.svg',
    description: 'Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.',
    categories: ['Wat', 'Linux', 'LoL'],
    sourceCodeUrl: 'https://github.com/user/:O'
  }
]

const formUrl = 'http://localhost:4000'
const ReCAPTCHAKey = '6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu'
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = 'no-work-icon.jpg'

export {
  profile,
  projects,
  formUrl,
  ReCAPTCHAKey,
  missingProjectIcon
}
