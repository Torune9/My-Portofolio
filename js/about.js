const about ="I am a D3 Informatics Engineering student currently preparing for my final thesis defense. With a solid foundation in front-end and back-end development, I have hands-on experience in building responsive and dynamic web applications. My expertise in front-end includes Vue.js, Pinia, and Tailwind, while on the back-end, I work with Express, PostgreSQL, MySQL, and JWT. I am eager to grow and continuously expand my knowledge, embracing new technologies and methodologies to enhance my skills and deliver high-quality solutions.";

const aboutMe = document.getElementsByClassName("about");
const article = document.createElement("article");


const aboutText = document.createElement("p");

aboutText.className = "text-about";

aboutText.textContent = about;

article.appendChild(aboutText);

aboutMe[0].appendChild(article);