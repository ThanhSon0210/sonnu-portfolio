import {
  typescript,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  weatherpedia,
  termpw,
  payloadmaster,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  github,
  tanstackrouter,
  antd,
  angular,
  boostrap,
  gitlab,
  // figma,


  cyberScreen,
  admin,
  sonnusport
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Giới Thiệu",
  },
  {
    id: "contact",
    title: "Liên Hệ",
  },
];

export const services = [
  { title: "React", icon: reactjs },
  { title: "Nodejs", icon: nodejs },
  { title: "Javascript", icon: javascript },
  { title: "TailwindCSS", icon: tailwind },
];

export const technologies = [
  { title: "React JS", icon: reactjs },
  { title: "Node JS", icon: nodejs },
  { title: "Typescript", icon: typescript },
  { name: "JavaScript", icon: javascript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Tanstack Router", icon:   tanstackrouter },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Ant Design", icon: antd },
  // { name: "Figma", icon: figma },
  { name: "Angular", icon: angular },
  { name: "Boostrap", icon: boostrap },
  { name: "Gitlab", icon: gitlab },
  { name: "Github", icon: github },

];

export const experiences = [
  {
    title: "Đạt 2 chính chỉ xưởng tại trường",
    company_name: "ReactJS | Typescript ",
    icon: eduskill,
    iconBg: "#161329",
    date: " 08/2023 - 09/2023 || 10/2023 - 11/2023",
    points: [
      "Tìm hiểu nâng cao kiến thức về Typescript, ReactJS, cách xây dựng giao diện thân thiện và tối ưu hơn.",
      "Cũng như có được nền tảng vững chắc hơn cho 2 ngôn ngữ đó.",
    ],
  },
  {
    title: "Thực tập tại Công Ty Cổ Phần Tiên Phong CDS",
    company_name: "TanStack Router | Ant Design",
    icon: mathwork,
    iconBg: "#161329",
    date: "30/09/2024 – 08/12/2024",
    points: [
      "Làm việc với UI library phổ biến, phát triển nhanh hơn.",
      " Hiểu về routing hiện đại thay vì dùng React Router truyền thống.",
      "Có kinh nghiệm về performance, UX/UI, xử lý dữ liệu và tối ưu hiệu suất hiển thị.",
    ],
  },
  // {
  //   title: "Artificial Intelligence Intern",
  //   company_name: "Edunet Foundation | IBM SkillsBuild | AICTE",
  //   icon: edunet,
  //   iconBg: "#161329",
  //   date: "June 2023 - July 2023",
  //   points: [
  //     "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
  //     "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
  //     "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
  //   ],
  // },
];

export const projects = [
  {
    name: "Website Đặt Vé Xem Phim CyberScreen ",
    description:
      "Website giúp người dùng có thể đặt vé cho bộ phim mình muốn xem ngay tại nhà mà không cần đi ra ngoài.",
    tags: [
      { name: "React JS", color: "pink-text-gradient" },
      { name: "Javaascript", color: "pink-text-gradient" },
      { name: "Node JS", color: "blue-text-gradient" },
      { name: "Tailwin CSS", color: "pink-text-gradient" },
      { name: "HTML & CSS", color: "green-text-gradient" },
      { name: "MongoDB(aslat)", color: "pink-text-gradient" },

    ],
    image:cyberScreen,
    source_code_link: "https://github.com/SonLeanCode/Fe-BookMovieTickets",
  },
  {
    name: "Hệ Thống Quản Lý Admin System",
    description:
      "Bảng điều khiển quản trị cho hệ thống DSP - được sử dụng trong quảng cáo theo chương trình. 'sonnu-1'",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "Typescript", color: "green-text-gradient" },
      { name: "TanStack Router", color: "pink-text-gradient" },
      { name: "Ant Design", color: "pink-text-gradient" },
      { name: "NodeJS", color: "pink-text-gradient" },
    ],
    image: admin,
    source_code_link: "https://admin-core.dsp.one/",
  },
  {
    name: "Website bán đồ thể thao SONNU-SPORT",
    description:
      "Bạn đã quá mệt mỏi với hàng giờ đồng hồ ngồi code hãy đến với sonnu-sport để vận động ngay thôi nào!!!",
    tags: [
      { name: "ReactJS", color: "blue-text-gradient" },
      { name: "NodeJS", color: "green-text-gradient" },
      { name: "Javaascript", color: "pink-text-gradient" },
      { name: "HTML & CSS", color: "green-text-gradient" },
      { name: "Boostrap", color: "pink-text-gradient" },

    ],
    image: sonnusport,
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  }
];
