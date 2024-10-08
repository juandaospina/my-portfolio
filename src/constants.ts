import {
  HtmlImage,
  CssImage,
  SassImage,
  JavascriptImage,
  TypescriptImage,
  ReactImage,
  AngularImage,
  ReduxImage,
  ReactQueryImage,
  NextImage,
  NodeImage,
  ExpressImage,
  GitImage,
  PythonImage,
  FastapiImage,
  FlaskImage,
  PostgresqlImage,
  MongodbImage,
  FirebaseImage,
  DockerImage,
} from "../public/assets";

export const KNOWLEDGES = {
  HTML5: {
    img: HtmlImage,
    alt: "Html image",
  },
  CSS3: {
    img: CssImage,
    alt: "Css image"
  },
  Sass: {
    img: SassImage,
    alt: "Sass image"
  },
  JavaScript: {
    img: JavascriptImage,
    alt: "JavaScript image"
  },
  TypeScript: {
    img: TypescriptImage,
    alt: "JavaScript image"
  },
  ['React JS']: {
    img: ReactImage,
    alt: "JavaScript image"
  },
  Angular: {
    img: AngularImage,
    alt: "Angular image"
  },
  Redux: {
    img: ReduxImage,
    alt: "Redux image"
  },
  ['React Query']: {
    img: ReactQueryImage,
    alt: "React Query image"
  },
  ['Next JS']: {
    img: NextImage,
    alt: "Next.js image"
  },
  ['Node JS']: {
    img: NodeImage,
    alt: "Node.js image"
  },
  ['Express JS']: {
    img: ExpressImage,  
    alt: "Express.js image"
  },
  Git: {
    img: GitImage,
    alt: "Git image"
  },
  Python: {
    img: PythonImage,
    alt: "Python image"
  },
  FastAPI: {
    img: FastapiImage,
    alt: "FastAPI image"
  },
  Flask: {
    img: FlaskImage,
    alt: "Flask image"
  },
  PostgreSQL: {
    img: PostgresqlImage,
    alt: "PostgreSQL image"
  },
  MongoDB: {
    img: MongodbImage,
    alt: "MongoDB image"
  },
  Firebase: {
    img: FirebaseImage,
    alt: "Firebase image"
  },
  Docker: {
    img: DockerImage,
    alt: "Docker image"
  },
} as const;
