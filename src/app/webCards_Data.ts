
import { IWebCardContent } from './interfaces/IWebCardConent'

export const montechContent: IWebCardContent = {
    imageSrc: "/cover-montech.png",
    altText: "montech",
    title: "Montech Website",
    emphasisText: "Emphasis Areas",
    description: "Practice Client and Server Side generating my own Rest API using Node.JS and Express.JS",
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

export const montechContent2: IWebCardContent = {
    imageSrc: "/cover-montech.png",
    altText: "montech",
    title: "Montech Website2",
    emphasisText: "Emphasis Areas",
    description: "Practice Client and Server Side generating my own Rest API using Node.JS and Express.JS",
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

  const webCards_Data: IWebCardContent[] = [montechContent, montechContent2];

  export default webCards_Data;