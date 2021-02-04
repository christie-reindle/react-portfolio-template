// Skills Icons
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import dockerIcon from "./images/docker.png"
import awsIcon from "./images/aws.png"
import javaIcon from "./images/java.png"
import es6Icon from "./images/es6.png"

// Images
import aboutImage from "./images/ME.jpg"
import HTML5Phaser from "./images/HTML5PhaserWorkshop.png"
import JLV from "./images/JLV.png"
import JLVReact from "./images/JLVReact.png"
import nodeVISTA from "./images/nodeVISTA.png"
import soundsOfTheSea from "./images/SoundsOfTheSea.jpg"
import stylesForHue from "./images/stylesForHue.png"

// Social Icon
import githubIcon from "./images/github.svg"
import instagramIcon from "./images/instagram.svg"
import linkedinIcon from "./images/linkedin.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Christie",
  headerTagline: [
    //Line 1 For Header
    "Full-Stack",
    //Line 2 For Header
    "Web Developer",
    //Line 3 For Header
    "Software Engineer",
  ],
  //   Header Paragraph
  headerParagraph:
    "",

  //Contact Email
  contactEmail: "creindle@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "Joint Legacy/Longitudinal Viewer (React)", //Project Title - Add Your Project Title Here
      para:
        "JavaScript, Docker, AWS, Microsoft SQL Server, Glassfish", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: JLVReact,
      //Project URL - Add Your Project Url Here
      url: "https://www.health.mil/Reference-Center/Fact-Sheets/2019/11/01/Joint-Longitudinal-Viewer-Fact-Sheet#:~:text=WHAT%20IS%20THE%20JOINT%20LONGITUDINAL,in%20a%20common%20data%20viewer.",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Joint Legacy/Longitudinal Viewer (Java)", //Project Title - Add Your Project Title Here
      para:
        "Groovy, Grails, Springboot, GlassFish, Maven, VirtualBox", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: JLV,
      //Project URL - Add Your Project Url Here
      url: "https://www.youtube.com/watch?v=fFkr8mD7Jfs&ab_channel=UnitedStatesAirForceExpeditionaryMedicalIM%2FIT",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "VistA Adaptive Maintence", //Project Title - Add Your Project Title Here
      para:
        "Node.js, JavaScript, Docker, Mongo, Jenkins, Jasmine, Async, Vagrant, VirtualBox, MUMPS", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: nodeVISTA,
      //Project URL - Add Your Project Url Here
      url: "http://vistadataproject.info/demo/",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Sounds of the Sea", //Project Title - Add Your Project Title Here
      para:
        "JavaScript, Phaser, HTML, CSS", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: soundsOfTheSea,
      //Project URL - Add Your Project Url Here
      url: "https://junior-devleague.github.io/sounds-of-the-sea/",
    },
    {
      id: 5, //DO NOT CHANGE THIS (Please)😅
      title: "Summer Workshop Game", //Project Title - Add Your Project Title Here
      para:
        "HTML5, Javascript, Phaser", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: HTML5Phaser,
      //Project URL - Add Your Project Url Here
      url: "https://github.com/christie-reindle/HTML5-Phaser-Summer-Workshop",
    },
    {
      id: 6, //DO NOT CHANGE THIS (Please)😅
      title: "Styles for Hue", //Project Title - Add Your Project Title Here
      para:
        "React, Redux, JavaScript, Mongo, Express, Sass", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc: stylesForHue,
      //Project URL - Add Your Project Url Here
      url: "http://www.stylesforhue.com/",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Christie Reindle is a software engineer and full-stack web developer. Christie earned a bachelor's degree in both Computer Science and Psychology from University of Hawaii at Manoa. In her senior year of college, she enrolled in DevLeague, an accelerated coding bootcamp to develop talent for employability into the techology industry.",
  aboutParaTwo:
    "After completing the program, she turned her energies to community service. She became a web and software development instructor and taught students ranging from elementary school students, to high school teachers. In 2017, she joined Hawaii Resource Group Technologies, LLC, a company focused on supporting veterans through their medical providers. At this company, she developed experience in the top programming skills such as React, Java, and cloud services.",
  aboutParaThree:
    "She aspires to work for a company that not only supports her, but challenges her to grow as quickly as the industry evolves. In her spare time, she enjoys powerlifting and playing video games.",
  aboutImage,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: reactIcon,
      para:
        "3 years",
    },
    {
      id: 2,
      img: awsIcon,
      para:
        "2 years",
    },
    {
      id: 3,
      img: dockerIcon,
      para:
        "3 years",
    },
    {
      id: 4,
      img: javaIcon,
      para:
        "2 years",
    },
    {
      id: 5,
      img: jsIcon,
      para:
        "4 years",
    },
    {
      id: 6,
      img: es6Icon,
      para:
        "3 years",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's work together",
  social: [
    // Add Or Remove The Link Accordingly
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/christie-reindle/",
    },
    { 
      img: githubIcon, 
      url: "https://github.com/christie-reindle"
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/ohmydeargoodness",
    },
  ],

  // End Contact Section ---------------
}
