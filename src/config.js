const profile = {
  fullName: "Bereket Girma",
  description: "FULLSTACK DEVELOPER",
  // The basepath is the assets folder
  /// the file sould be imported in assets-import.js
  avatarPath: "avatar.svg",
  about: {
    title: `HEY THERE! 
    I'M WEBSITE OWNER`,
    description: `I am a Web Developer based in Las Vegas.
    I’ve built web applications using Node.js and React and have a solid foundation in web design and development. I've recently completed PunchCode’s web development bootcamp.
    Before moving into development, I worked in the Health sector, where I managed and converted voice recordings that physicians and other healthcare workers make into written reports.
    When I'm not coding, I enjoy spending time with family and learning different cultures and their languages. 
    Right now  I am  looking for a suitable position with a company where outstanding performance is recognised and where I can work on a variety of projects.
    `,
    findMeOn: [
      {
        iconName: "location",
        text: "Las Vegas, NV",
        url: "",
        hoverColor: "#546e7a",
      },
      // {
      //   iconName: 'twitter',
      //   text: '@username',
      //   url: 'https://twitter.com/username',
      //   hoverColor: '#1da1f2'
      // },
      {
        iconName: "email",
        text: "bereketgirma97@gmail.com",
        url: "mailto://bereketgirma97@gmail.com",
        hoverColor: "#546e7a",
      },
      // {
      //   iconName: 'lock',
      //   text: '@kuser',
      //   url: 'https://keybase.io/kuser',
      //   hoverColor: '#e9641c'
      // }
    ],
  },
  social: [
    // {
    //   iconName: 'twitter',
    //   url: 'https://twitter.com/username',
    //   text: "I'm on Twitter",
    //   hoverColor: '#1da1f2'
    // },
    {
      iconName: "email",
      url: "mailto:bereketgirma97@gmail.com",
      text: "Send me an email",
      hoverColor: "#000",
    },

    {
      iconName: "linkedin",
      url: "https://www.linkedin.com/in/bereket-girma-82a87a1b1/",
      text: "I'm on LinkedIn",
      hoverColor: "#000",
    },
    {
      iconName: "github",
      url: "https://github.com/bereket-girma",
      text: "I'm on Github",
      hoverColor: "#000",
    },
    {
      iconName: "telegram",
      url: "https://t.me/bgirma",
      text: "I'm on Telegram",
      hoverColor: "#0088cc",
    },
  ],
};

const projects = [
  {
    title: "Vegas Land",
    img: "https://raw.githubusercontent.com/bereket-girma/Vegas-Land/19b45bcdc1656b5e4643eba6b5064b5c1a36ac0d/client/public/assets/logo-062.svg",
    description:
      "A curated website made for people to explore downtown Vegas' restaurants, bars, shops & experiences. One of its main features include \"Happy Hours\", which displays active happy hours located in downtown. ", 
    categories: ["Sample",  "React"],
    // siteUrl: "https://amazing.project.com",
    sourceCodeUrl: "https://github.com/bereket-girma/Vegas-Land",
  },
  {
    title: "Jellow",
    img: "https://lh4.googleusercontent.com/Eet95KOwx5-41DUOpu2WqgvHBcMFNe8YGOtCTU2p6VRyTHYp-_TyclyROxK2hLN7ZL5xV6FG3qIBT6OWX7DjO0ZpaAyPb-uPN0qDKNYcVlh3lkgjrxJ2omGjSj3IL-Np9qL10g5p06M",
    description:
      "A web-based Kanban-style list-making application.",
    categories: ["Sample",  "React"],
    // siteUrl: "https://amazing.project.com",
    sourceCodeUrl:"https://github.com/bereket-girma/Jellow-App"
  },
  {
    title: "Terra & Mare Restaurant",
    img: "https://lh4.googleusercontent.com/Eet95KOwx5-41DUOpu2WqgvHBcMFNe8YGOtCTU2p6VRyTHYp-_TyclyROxK2hLN7ZL5xV6FG3qIBT6OWX7DjO0ZpaAyPb-uPN0qDKNYcVlh3lkgjrxJ2omGjSj3IL-Np9qL10g5p06M",
    description:
      "Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.",
    categories: ["Javascript"],
    // siteUrl: "https://amazing.project.com",
    sourceCodeUrl:"https://github.com/bereket-girma/12-group-restaurant"
  },
  {
    title: "Hex Clock ",
    img: "https://lh4.googleusercontent.com/oAJGJ2_TmF3uBm7KUgvIfZc7zHucevLJ73hzWRKfHqF-Y7IvTTswuPi0dIor2bLafO8XApjA-RU61aK4yi8hLZN8_4GAcmVSBWxKm76-",
    description:
      "Color changing clock based on current time converted to hex color codes",
    categories: [ "Open Source", "Javascript"],
    sourceCodeUrl: "https://github.com/bereket-girma/10-JS-clock",
  },
  

];

const formUrl = "http://localhost:4000";
const ReCAPTCHAKey = "6LcBOC8UAAAAAM9YRyBp1RR-1NnwvMU8UDsR63Vu";
// The basepath is the assets folder
/// the file sould be imported in assets-import.js
const missingProjectIcon = "no-work-icon.jpg";

export { profile, projects, formUrl, ReCAPTCHAKey, missingProjectIcon };
