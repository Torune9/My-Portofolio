const skills = [
  {
    category: "Soft Skills",
    items: [
      "Able to communicate ideas clearly and collaborate well within a team.",
      "Quickly adjusts to new work environments and technologies.",
      "Possesses a strong drive to explore and learn new concepts, consistently improving skills in line with job requirements.",
      "Committed to maximizing efforts to cover any team weaknesses, ensuring successful project completion.",
      "Continuously working on enhancing problem-solving abilities to tackle challenges effectively.",
    ],
  },
  {
    category: "Technical Skills",
    items: [
      "Proficient in using Git, GitHub, and GitLab for efficient code management and collaboration.",
      "Proficient in Vue.js, Pinia, and Tailwind for building responsive and dynamic user interfaces.",
      "Experienced with Express, PostgreSQL, MySQL, and JWT for creating robust and secure server-side applications.",
      "Solid knowledge in PHP and the Laravel framework for web development.",
    ],
  },
];

const experiences = [
  {
      company: "PT BTS.id",
      position: "Junior Web Developer (Internship)",
      duration: "July 2023 - January 2024",
      responsibilities: [
          "Developed web applications using Node.js",
          "Worked on front-end development with Vue.js",
          "Utilized Express for server-side logic"
      ]
  },
  
];


const about ="I am a D3 Informatics Engineering student currently preparing for my final thesis defense. With a solid foundation in front-end and back-end development, I have hands-on experience in building responsive and dynamic web applications. My expertise in front-end includes Vue.js, Pinia, and Tailwind, while on the back-end, I work with Express, PostgreSQL, MySQL, and JWT. I am eager to grow and continuously expand my knowledge, embracing new technologies and methodologies to enhance my skills and deliver high-quality solutions.";

const aboutMe = document.getElementsByClassName("about");
const article = document.createElement("article");
const experience = document.getElementsByClassName("experience")
const wrapperExp = document.getElementById("wrapper-exp")

const aboutText = document.createElement("p");

aboutText.className = "text-about";

aboutText.textContent = about;

article.appendChild(aboutText);

aboutMe[0].appendChild(article);



experiences.forEach(val => {
  const experienceList= document.createElement("ul")
  const experienceOrder= document.createElement("li")
  const date = document.createElement("h4")
  const position  = document.createElement("h4")
  const desc  = document.createElement("p")
  
  wrapperExp.appendChild(experienceList)

  experienceOrder.textContent = val.company
  date.textContent = val.duration
  position.textContent = val.position
  desc.textContent = val.responsibilities

  experienceOrder.appendChild(date)
  experienceOrder.appendChild(position)
  experienceOrder.appendChild (desc)

  experienceList.appendChild(experienceOrder)
})


const orderSkil = document.getElementById("skills");

skills.forEach((value, i) => {
  const h1 = document.createElement("h1");
  h1.className = "my-skill";
  h1.textContent = value.category;
  orderSkil.appendChild(h1);
  const container = document.createElement("div")
  container.className = "skill-container"

  value.items.forEach((text, i) => {
    const liChild = document.createElement("li");
    liChild.className = "child-skill";
    liChild.textContent += text;
    if (i % 2 == 0) {
      liChild.style.backgroundColor = "rgba(128, 128, 128, 0.089)"
    }else{
      liChild.style.backgroundColor = "rgba(0, 230, 255, 0.089)"
    }
    container.appendChild(liChild);
  });

  orderSkil.appendChild(container)
});

window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.about,.skills,.project,.experience,.sertificate,.tech');

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
      el.classList.add('scroll-active');
    }
  });
});


const btnMenu  = document.getElementById('btn')
const wrapperMenu = document.querySelector('.wrapper-menu')

btnMenu.addEventListener('click',()=>{
  wrapperMenu.classList.toggle('visible')
})