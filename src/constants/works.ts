export const works = [
  { 
    title: "Chsms!", 
    description: "A real-time web chat application made for fun while also learning the tech-stack.",  
    img: "/assets/chsms-cover.avif",
    techstack: [ "Typescript", "NextJS", "Firebase", "Tailwind", "NestJS", "Nx"  ],
    link: "/chsms",
    githubLink: "https://github.com/gleepgorp/chsms-chat",
  },
  { 
    title: "UC PaperTrace", 
    description: "A thesis project, document tracking system for University of Cebu Lapu-Lapu Mandaue.",  
    img: "/assets/papertrace.avif",
    techstack: [ "ReactJS", "ASP.NET", "CSS", "MaterialUI", "MySQL" ],
    link: "/uc-papertrace",
    githubLink: "https://github.com/ivan-clark/paper-trace",
  },
];

export enum worksEnum {
  Chsms = "Chsms!",
  PaperTrace = "UC-Papertrace",
  DescChsms = "A real time web chat application that I made. I wanted to create a Messenger clone to dive in and learn how real-time chat works using SocketIO. It was a fun and challenging experience.",
  DescTrace = "A thesis project, an internal document tracking system for University of Cebu Lapu-Lapu Mandaue departments. This system replaces the logbook of each departments, making the tracking of documents seamless and easy.",
  ImgPapertrace = "/assets/papertrace.avif",
  ImgChsms = "/assets/chsms-cover.avif",
  papertraceAlt = "UC-Papertrace cover",
  chsmsAlt = "Chsms! cover"
}