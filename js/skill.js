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

const orderSkil = document.getElementById("skills");

skills.forEach((value, i) => {
  const h1 = document.createElement("h1");
  h1.className = "my-skill";
  h1.textContent = value.category;
  orderSkil.appendChild(h1);
  const container = document.createElement("div");
  container.className = "skill-container";

  value.items.forEach((text, i) => {
    const liChild = document.createElement("li");
    liChild.className = "child-skill";
    liChild.textContent += text;
    if (i % 2 == 0) {
      liChild.style.backgroundColor = "rgba(128, 128, 128, 0.089)";
    } else {
      liChild.style.backgroundColor = "rgba(0, 230, 255, 0.089)";
    }
    container.appendChild(liChild);
  });

  orderSkil.appendChild(container);
});
