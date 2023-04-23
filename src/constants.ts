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
} as const;
