const sections = document.querySelectorAll(".section");
const content = document.getElementById("content");

const sectionData = {
  about: `
    <h2>Hi There!</h2>
    <p>
    My name is Keegan Schwartz, i'm an aspiring game developer and designer from Wisconsin. 
    I take pride in making ideas come to life through both the process of design and progmramming.
    With a sharp mind for thinking on my feet and outside the box, I can keep work flowing despite 
    hiccups that threaten to slow down development of my projects. My personal passion is to learn
    constantly and always be improving or finding something new I haven't learned yet. 
    </p>

    <p>
    I'm currently a student at the University of Wisconsin-Whitewater, aquiring my Bachelors 
    in Media Arts and Game Development, with a minor in general buisness. I have a few 
    small projects under my belt, and i'm always looking to expand my portfolio and learn new skills. I have a strong interest in game design, and I hope to one day work in the game industry as a designer or developer.
    My personal strength is with the Java programming language but I'm learning more each day with
    C# and HTML/CSS/JS. My main interest is in game development, but i'm interested in all aspects 
    of program development and design. 
    </p>
  `,
  skills: ` 
    <h2>My Toolbox</h2>
    <ul>
      <li>Product Design</li>
      <li>Brand Systems</li>
      <li>Interaction Design</li>
      <li>Prototyping</li>
    </ul>
  `,
  experience: `
    <h2>What I've Done</h2>
    <p>Senior Product Designer at Northstar Studio.</p>
    <p>Previously helped early-stage companies find clarity through brand and product design.</p>
  `,
  work: `
    <h2>Work Showcase</h2>
     <div class="project-grid">

    <div class="project-card">
      <div class="project-thumb"></div>
      <h3>Project One</h3>
      <p>A short description of the project goes here.</p>
    </div>

    <div class="project-card">
      <div class="project-thumb"></div>
      <h3>Project Two</h3>
      <p>A short description of the project goes here.</p>
    </div>

    <div class="project-card">
      <div class="project-thumb"></div>
      <h3>Project Three</h3>
      <p>A short description of the project goes here.</p>
    </div>

  </div>
  `
};

sections.forEach(section => {
  section.addEventListener("mouseenter", () => {
    updateContent(section.dataset.section);
  });

  section.addEventListener("click", () => {
    setActive(section);
    updateContent(section.dataset.section);
  });
});

function updateContent(key) {
  content.innerHTML = sectionData[key];
}

function setActive(selected) {
  sections.forEach(sec => sec.classList.remove("active"));
  selected.classList.add("active");
}
