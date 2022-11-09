import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Shalom Fredrick James',
  subtitle: 'Frontend Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'src/images/profile.jpg',
  paragraphOne: 'As a frontend developer, I have a lot of experience with different programming languages and tools. I am very familiar with HTML, CSS, and JavaScript.',
  paragraphTwo: 'I have also used frameworks such as ReactJS. I am confident that I can create responsive and user-friendly web applications',
  paragraphThree: ' See my Resume',
  resume: 'https://drive.google.com/file/d/1lOKOsG3fOGgYfhsRyfsnoQLTeV311ift/view?usp=share_link', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'src/images/Screenshot 2022-11-08 at 11.45.43 PM.png',
    title: 'To do list',
    info: 'HTML, CSS, Js',
    info2: '',
    url: '',
    repo: 'https://github.com/the20thfred/todo', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'src/images/Screenshot 2022-11-08 at 11.45.59 PM.png',
    title: 'Cocos cut',
    info: 'HTML, CSS',
    info2: '',
    url: '',
    repo: 'https://github.com/the20thfred/coco-s-cut', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'src/images/Screenshot 2022-11-09 at 12.00.25 AM.png',
    img: 'src/images/Screenshot 2022-11-09 at 12.00.35 AM.png',
    img: 'src/images/Screenshot 2022-11-09 at 12.00.41 AM.png',
    title: 'Restaurant-bookings',
    info: 'HTML,CSS, Bootstrap',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'shalfredjamez@yahoo.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'http://twitter.com/the20thfred',
    },
    {
      id: nanoid(),
      name: 'linktree',
      url: 'linktr.ee/the20thfred',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/shalom-fredrick-james',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/the20thfred',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
