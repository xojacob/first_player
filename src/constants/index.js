import Artwork1 from "/src/assets/Artwork1.jpg";
import Artwork2 from "/src/assets/Artwork2.jpg";
import Artwork3 from "/src/assets/Artwork3.jpg";
import Artwork4 from "/src/assets/Artwork4.jpg";
import Artwork5 from "/src/assets/Artwork5.jpg";
import Artwork6 from "/src/assets/Artwork6.jpg";
import Artwork7 from "/src/assets/Artwork7.jpg";
import Artwork8 from "/src/assets/Artwork8.jpg";
import Artwork9 from "/src/assets/Artwork9.jpg";
import starthere from "/src/assets/starthere.jpg";
import analogascension from "/src/assets/analogascension.png";
import { a } from "react-spring";

export const navLinks = [
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "myprojects",
    title: "My Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const homeLink = [{ id: "hero", title: "Hero" }];
export const blogposts = [
  {
    id: 1,
    title: "Who Am I?",
    content:
      "Hello, my name is Jacob. I am a passionate individual with a lifelong affinity for art and design. I have come from a family of artists and have spent much of my time drawing and designing over the years. I have been using programs such as Photoshop, ProCreate, Illustrator, and lightroom for as long as 12 years in my spare time creating digital artworks of all kinds. With such an interest in, and experience with digital design and a background in IT, naturally I found web development to be an interesting side of the programming world. As I venture into the realm of web development, I discovere an avenue to merge my creative instincts with technical expertise. From personal studies, to those associated with my Bachelor's degree in Computer Science, I have gained a solid foundation in HTML, CSS, JavaScript, React, and backend development utilizing Node.js and Express. Along my academic journey, I have completed a range of projects such as microprocessor programming and leading agile project development teams. Beyond the realm of technology, I find solace in producing music as a personal hobby. With a multidimensional skill set and a dedication to excellence, I am eager to contribute my creativity and technical acumen to crafting engaging and innovative web experiences.",
    date: "29th June 2023",
  },
  {
    id: 2,
    title: "My Experience",
    content:
      "I bring with me a wealth of experience that has shaped me into a well-rounded professional. My journey began as a Consumer Electronics and IT Sales Specialist at JB Hi-Fi, where I excelled in assisting customers in selecting electronic devices, troubleshooting technical issues, and providing exceptional product knowledge. I honed my communication and customer service skills, actively addressing customer concerns and ensuring a positive shopping experience. Transitioning to a Retail Sales Associate role at Ralph Lauren, I continued to deliver outstanding customer service while consistently exceeding sales targets through my comprehensive product knowledge and sales techniques. Throughout my professional journey, I have acquired a strong foundation in customer service, visual merchandising, and cash handling. These experiences have fostered my ability to thrive in fast-paced environments and collaborate effectively with teams. Combined with my technical skills and passion for web development, I am poised to contribute to the creation of user-friendly websites and applications, providing innovative and engaging digital experiences to users.",
    date: "29th June 2023",
  },
];
export const projects = [
  {
    id: 1,
    name: "artwork",
    title: "Artwork",
  },
  {
    id: 2,
    name: "music",
    title: "Music",
  },
  {
    id: 3,
    name: "computerscience",
    title: "Computer Science",
  },
];

export const projectData = [
  {
    id: 1,
    title: "Microprocessor Controlled LED Strip",
    utilises: "Utilises",
    utilisestext: "C and Assembly Language for programming Arduino Uno",
    content:
      "A challenging project that required meticulous research and detail to ensure the microcontroller was configured correctly to read an analogue signal and convert the voltage to an integer to act as a volume metre. I had to go beyond the project scope by implementing self-taught assembly code to get a precise output signal that matched the 800kHz clock frequency of the LED strip.\n• Programmed a 60 LED strip with an ATmega328P microprocessor in C without the use of software libraries.\n• Learned assembly language for the processor to send precisely timed instructions for the RGB light information to match the LED strip’s clock speed.\n• Converted an analogue auxiliary signal into a digital PWM signal and lit the strip according to the voltage of the input, making it act as a volume meter.\n• Demonstrated proficiency in C and AVR assembly language",
  },
  {
    id: 2,
    title: "Agile Project Management for Ecommerce",
    utilises: "Utilises",
    utilisestext: "Agile development principles, techniques, and roles.",
    content:
      "A fun, engaging group project that challenged us to work effectively in a collaborative environment and apply agile development principles to consistently deliver results. This project introduced me to development techniques that I hadn’t experienced before, and provided insight into how to collaborate and communicate with other people in a simulated workplace environment.\n• Collaborated with four other students to apply agile software development techniques in a team setting for a fictional ecommerce company\n• Managed weekly scrum meetings and learned the roles and responsibilities of agile developers\n• Developed project artifacts using agile methodology relevant to a business context\n• Applied high performing team concepts to proactively build an effective team\n• Communicated effectively with peers within an IT project environment\n• Analysed a business context to develop a project plan to manage a project\n• Demonstrated understanding of different project management strategies, tools, and techniques",
  },
  {
    id: 3,
    title: "Full Stack Web Development for Building/ Accessing API Endpoints",
    utilises: "Utilises",
    utilisestext: "React, Javascript, HTML, CSS, JSON, Express, MySQL",
    content:
      "A challenging project that allowed me to exercise my creative skills to create an engaging front-end website using React and TailwindCSS, accessing a movie database with a custom-built API. Implementing a secure user login and authentication using JSON web tokens was a challenging task, and the API gave me a better understanding on back-end development techniques I hadn’t explored before.\n• Developed a sophisticated website project, utilizing Express, JavaScript, SQL, and JSON to construct a robust API.\n• Implemented API endpoints to seamlessly access and retrieve movie data sourced from IMDB, ensuring users have access to up-to-date information.\n• Designed and implemented secure user authentication features, including register, login, and profile update endpoints, prioritizing the protection and confidentiality of user data.\n• Constructed an elegant front-end application using React and Tailwind CSS, resulting in a visually appealing, cohesive, and functional web app.\n• Demonstrated comprehensive integration between the front-end and back-end components, effectively showcasing all endpoints of the database.\n• Ensured an intuitive user experience through user-friendly navigation and responsive design, enhancing usability and accessibility.\n• Implemented industry best practices for API development, including meticulous error handling and data validation, ensuring the reliability and robustness of the system",
  },
];
export const musicText = [
  {
    content:
      "XOSC is a musical project of mine that explores genres like synthwave, drum & bass, jungle, ambient, and electronica. The project began in early 2020 when I purchaced my first synthesizer, downloaded a copy of FL Studio, and began writing my own music.\nHaving grown up surrounded by music and playing the piano, I sorely needed an outlet to express this creative ambition I have had since I was a kid. Since beginning this project, I have gathered a deep understanding on audio production techniques like mixing and mastering, sound synthesis, multi-track recording and many more.\nSo far I have released 2 bodies of work, the first being the Start Here EP, released on soundcloud late 2021, produced entirely in FL Studio. Albeit rough around the edges, this project layed the groudwork for the themes I explore in future projects.\nNot long after, the second project that recieved a more formal release, Analog Ascension, was released in early 2022. I began producing music in Reaper after the release of Start Here, and to this day it remains my prefered digital audio workstation. Analog Ascension is my first project made in Reaper, and the higher prouction value is a testatment to the creative freedom that Reaper provides.\nAs you can tell, it’s been a while since my last release. I’m working on a new project right now, but I have other business that’s taken priority in the meantime.",
  },
];
export const musicData = [
  {
    id: 1,
    title: "Analog Ascension",
    date: "February 2022",
    tracks:
      "1. Waterworld, 2. Crystal Vision, 3. Underworld, 4. The DMT Experience",
    image: analogascension,
  },
  {
    id: 2,
    title: "Start Here",
    date: "November 2021",
    tracks:
      "1. TechNoir 23:49, 2. Nocturntal, 3. Eclipse, 4. Midnight, 5. New Dawn, 6. Shrine, 7. Insert Disc 2",
    image: starthere,
  },
];

export const musicLinks = [
  {
    title: "Spotify",
    link: "",
  },
  {
    title: "Soundcloud",
    link: "",
  },
  {
    title: "Title",
    link: "",
  },
];

export const compSciDetails = [
  {
    title: "University Projects",
    content:
      "During my time at QUT I have pushed myself to consistently deliver challenging and noteworthy projects in each subject. I wanted to get the most out of my time and the resources available during my undergrad, and the result is a series of projects that I am proud of, and would have never believed I was capable of achieving before I started studying. Below you can find a list of the most notable projects I’ve finished along my journey, which I accomplished with the help from talented peers and teaching staff. \nClick to expand the projects and reveal more information:",
  },
];

export const artGallery = [
  {
    id: 1,
    title: "If Love is the Answer, You're Home",
    caption:
      "A poster I made to commemorate some of my favourite artists. Thank your for giving us some of the best music we've heard for over 28 years. I hope you are now home.",
    image: Artwork1,
  },
  {
    id: 2,
    title: "Perseverance",
    caption:
      "Perseverance, a laborious digital illustration of mine where I explore more hyper-realistic rendering techniques. Toying with harmony and complimentary colours. I tested my ability to maintain a high level of detail throughout the canvas.",
    image: Artwork2,
  },
  {
    id: 3,
    title: "Crooked Forest",
    caption:
      "Entangled woods crawl across the horizon, obscured by dense fog. I was testing my ability to render fog as if it were a volumetric field.",
    image: Artwork3,
  },
  {
    id: 4,
    title: "Fungi Forest",
    caption:
      "A Delve into the beautiful nature of flaura and fungi. I had a lot of fun creating the glowing sensation of different mushrooms.",
    image: Artwork4,
  },
  {
    id: 5,
    title: "Iridescence",
    caption:
      "Portrait of iridescent skin. I was testing out my ability to render hair in a headshot illustration. Experimenting with filters, I found an interesting effect that caused the skin to appear iridescent.",
    image: Artwork5,
  },
  {
    id: 6,
    title: "Powerlines",
    caption:
      "Entangles power lines silhouetting a setting sun. I took a photo of these power lines during my time in Japan and turned them into a cell-shaded illustration.",
    image: Artwork6,
  },
  {
    id: 7,
    title: "Undergrowth",
    caption:
      "A quick scene of a twisted forest. minimalist style and brush textures.",
    image: Artwork7,
  },
  {
    id: 8,
    title: "Sunset Solitude",
    caption: "Just a man enjoying the view.",
    image: Artwork8,
  },
  {
    id: 9,
    title: "Dawn Dream",
    caption:
      "A quick photo study of early morning fog. Practicing my digital painting skills and focusing on doing everything on one layer. ",
    image: Artwork9,
  },
];
