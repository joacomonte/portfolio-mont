
import { IWebCardContent } from './interfaces/IWebCardConent'

export const montech_content: IWebCardContent = {
    imageSrc: "/cover-montech.png",
    altText: "montech",
    title: "FullStack Montech Website",
    emphasisText: "Emphasis Areas",
    description: "This is my first developed website. Practice Client and Server Side generating my own Rest API using Node.JS and Express.JS",
    features: [
      "AuthContext",
      "useNavigate / useParams",
      "formik (for forms)",
      "yup (for validation schema)",
      "AsyncPaginate",
      "Modals & Portals (for product preview img)",
      "Sequelize (to create tables on MySQL)",
      "jsonwebtoken",
      "bcrypt"
    ],
    websiteLink: "https://montech.netlify.app",
    sourceCodeLink: "https://github.com/joacomonte/FullStack-Front-Montech"
  };

export const wordle_content: IWebCardContent = {
    imageSrc: "/cover-wordle.png",
    altText: "wordle",
    title: "Wordle Game",
    emphasisText: "Emphasis Areas",
    description: "Just for fun, I created a Wordle game using React",
    features: [
      "useState",
      "useEffect",
      "Data Handling"
    ],
    websiteLink: "https://wordle-montech.netlify.app",
    sourceCodeLink: "https://github.com/joacomonte/Wordle-game-ReactJS/tree/main/wordle-app"
  };

export const sideProject_content: IWebCardContent = {
    imageSrc: "/sideproject.png",
    altText: "sideproject",
    title: "Framer Motion Practice",
    emphasisText: "Emphasis Areas",
    description: "Side Project focused on Framer Motion, Typescript, NextAuth.js and Prisma DB integration",
    features: [
      "New NextJS Version",
      "Framer Motion",
      "Typescript",
      "NextAuth.js implementation",
      "Prisma DB integration",
      "Tailwind CSS",
      "tRCP practice",
    ],
    websiteLink: "https://side-pro.vercel.app",
    sourceCodeLink: "https://github.com/joacomonte/sidepro"
  };

export const marlimCatalog_content: IWebCardContent = {
    imageSrc: "/marlimCatalog.png",
    altText: "marlim",
    title: "Freelance Marlim Catalog",
    emphasisText: "Emphasis Areas",
    description: "I aimed to develop this app in a very short period of time, while being very simple to the user change the prices of the catalog's products.",
    features: [
      "Freelance job",
      "Rapid Development",
      "Google Cloud API",
      "Google Spreadsheet integration"
    ],
    websiteLink: "https://marlim-mayorista.netlify.app",
    sourceCodeLink: "https://github.com/joacomonte/Marlim-mayorista-ReactJS"
  };

export const copyPasty_content: IWebCardContent = {
    imageSrc: "/copy-pasty.jpeg",
    altText: "copypasty",
    title: "Copy-Pasty",
    emphasisText: "Emphasis Areas",
    description: "A lightweight web application that allows you to easily copy and paste text snippets between different devices without the need for login. It leverages Firebase for seamless data storage and retrieval.",
    features: [
      "Firebase Integration",
      "User-friendly Interface",
      "Next.js",
      "Firebase"
    ],
    websiteLink: "https://copy-pasty.vercel.app",
    sourceCodeLink: "https://github.com/joacomonte/copypasti-NextJS-Firebase"
  };

export const revisado_content: IWebCardContent = {
    imageSrc: "/revisado.png",
    altText: "revisado",
    title: " FullStack Revisado (e-commerce)",
    emphasisText: "Emphasis Areas",
    description: "FullStack web. The idea was to create a simple e-commerce website for a friend entrepreneur (not finished)",
    features: [
      "Full Login system by my own",
      "Cookies for login",
      "SSR Technology",
      "Typescript",
      "MongoDB",
      "jsonwebtoken",
      "My own UI/UX Design",

    ],
    websiteLink: "https://revisado-front-next-js.vercel.app/",
    sourceCodeLink: "https://github.com/joacomonte/Revisado.Front.NextJS"
  };

export const ToDoApp_content: IWebCardContent = {
    imageSrc: "/ToDoApp.png",
    altText: "ToDoApp",
    title: "Simple To-Do App",
    emphasisText: "Emphasis Areas",
    description: "I developed this app with a primary objective of honing my skills in TypeScript and UX design (not UI).",
    features: [
      "Rapid Development (5hs)",
      "TypeScript",
      "User Experience (UX)",
    ],
    websiteLink: "https://form-test-ui-ux.vercel.app",
    sourceCodeLink: "https://github.com/joacomonte/ChallengeCor"
  };

export const fireBase_content: IWebCardContent = {
    imageSrc: "/firebaseStorage.png",
    altText: "Upload imgs to FireBase",
    title: "firebase testing",
    emphasisText: "Emphasis Areas",
    description: "Testing and practicing UX, Firebase Storage, and Typescript. User interactions include pausing, resuming, and canceling uploads. The component demonstrates React-Firebase integration for data and image management.",
    features: [
      "New NextJS Version",
      "TypeScript",
      "User Experience (UX)",
      "Firebase as IMG storage",
    ],
    websiteLink: "https://next13-firebase-test.vercel.app",
    sourceCodeLink: "https://github.com/joacomonte/next13-firebase-test"
  };

  const webCards_Content: IWebCardContent[] = 
  [
    sideProject_content, 
    marlimCatalog_content, 
    copyPasty_content, 
    fireBase_content,
    ToDoApp_content, 
    montech_content, 
    revisado_content, 
    wordle_content,
  ];

  export default webCards_Content;