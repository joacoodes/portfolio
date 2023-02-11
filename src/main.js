import './styles.css';

import { experiences, educationS, projects } from './components/experience-data';

//Referencias
const experienceList = document.querySelector('.experienceList');
const educationList = document.querySelector('.educationList');
const projectsList = document.querySelector('.projectsList');


const init = () => {
  experiences.forEach( experience => {
    mostrarExperience(experience);
  });

  educationS.forEach( education => {
    mostrarEducation(education);
  });

  projects.forEach( project => {
    mostrarProjects(project);
  });


  console.log('inicio');
};

const mostrarExperience = ({Puesto, EmpresaUbicacion, Descripcion, Inicio, Fin}) => {

  Fin = (Fin) ? Fin : 'Presente';

  const html = `
    <div class="titleDate">
        <p class="experienceTitle">${Puesto}</p>
        <p class="experienceDate">${Inicio} - ${Fin}</p>
    </div>
    <p class="experienceUbication">${EmpresaUbicacion}</p>
    <p class="experienceDescription">${Descripcion}</p>
  `;

  const liExperience = document.createElement('li');
  liExperience.classList.add('experienceItem');
  liExperience.innerHTML = html;
  experienceList.appendChild(liExperience);
};

const mostrarEducation = ({Instituto, Ubicacion, Descripcion, Fecha}) => {

  const html = `
    <div class="titleDate">
        <p class="experienceTitle">${Instituto}</p>
        <p class="experienceDate">${Fecha}</p>
    </div>
    <p class="experienceUbication">${Ubicacion}</p>
    <p class="experienceDescription">${Descripcion}</p>
  `;

  const liEducation = document.createElement('li');
  liEducation.classList.add('experienceItem');
  liEducation.innerHTML = html;
  educationList.appendChild(liEducation);
};

const mostrarProjects = ({Image, Title, Description, Tags, GitHub, Live}) => {

  const html = `
      <img class="projectImage" src="./src/assets/${Image}.png" alt="project Image">
      <div class="projectTitleLinksContainer">
          <p class="projectTitle">${Title}</p>
          <div class="projectLinksContainer">
              <a href="https://github.com/JoacoBriz/${GitHub}"> <img src="./assets/github-icon.png" alt=""></a>
              <a href="${Live}"> <img src="./src/assets/link-icon.png" alt=""> </a>
          </div>
      </div>
      <p class="projectDescription">${Description}</p>
      <p class="projectTags">${Tags}</p>
  `;

  const liProyects = document.createElement('li');
  liProyects.classList.add('projectItem');
  liProyects.innerHTML = html;
  projectsList.appendChild(liProyects);
};

// Foreach a arrays de datos
init();

const switchTheme = document.getElementById('switch-theme');
let body = document.body;
let buttonSwitch = document.querySelector('.themeLogo');
const elements = document.querySelectorAll("p, a, li, h3, .experienceTitle, .projectTitle, .experienceDate, .experienceDescription");
let status = false;

//SWITCH EVENT

switchTheme.addEventListener('click', (e) => {
  e.preventDefault();
  status = !status;

  if(status === true) {
    body.classList.toggle('themeWhiteBody');
    elements.forEach(t => t.classList.toggle('themeWhite') )
    buttonSwitch.setAttribute("src", "./src/assets/moon-icon.png");
  } else {
    body.classList.remove('themeWhiteBody');
    elements.forEach(t => t.classList.remove('themeWhite'));
    buttonSwitch.setAttribute("src", "./src/assets/sun-icon.png");
  }
});