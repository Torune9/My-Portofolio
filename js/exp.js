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

  const experience = document.getElementsByClassName("experience")

  const wrapperExp = document.getElementById("wrapper-exp")
  
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
  