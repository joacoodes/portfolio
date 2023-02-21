(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=[{Puesto:"Frontend Developer (Remote)",EmpresaUbicacion:"Known Online / Buenos Aires, AR",Descripcion:`
    Desarrollo y configuración de e-commerce utilizando Vtex IO:
    <br> - Maquetación Web. (.json, .css) 
    <br> - Manejo de checkout tanto nativo con Javascript como UI. 
    <br> - Manejo de Master Data.
    `,Inicio:"Julio 2022",Fin:""},{Puesto:"Frontend Developer (Remote)",EmpresaUbicacion:"Pow / Buenos Aires, AR",Descripcion:`
    <strong>Full Stack Dev Jr</strong>
      <br> - Maquetación Web. (.json, .css)
      <br> - Desarrollo de componentes custom utilizando React y Typescript. (.tsx)
      <br> - Integraciones de sistemas externos via API o Afiliación.
      <br> - Configuración completa del sistema (Logística, Mensajería, Métodos de Pago, Master Data).
      <br> - Manejo de Hosting y DNS.
      <br>
      <br> <strong>Front End developer Jr |  Ago 2021 ⇒ Ene 2022</strong>
      <br> - Maquetación Web de e-commerce utilizando Vtex IO. (.json, .css)
    `,Inicio:"Agosto 2021",Fin:"Julio 2022"}],m=[{Instituto:"Coder House",Ubicacion:"Mar del Plata / Buenos Aires, AR",Descripcion:"Carrera de Desarrollo Front End",Fecha:"2020 / 2021"},{Instituto:"Instituto Antartida Argentina",Ubicacion:"Mar del Plata / Buenos Aires, AR",Descripcion:"Estudios Secundarios Orientados a Ciencias Sociales",Fecha:"2014 / 2019"}],h=[{Image:"ecommerce-clyde",Title:"Ecommerce Clyde",Description:"Proyecto de Ecommerce funcionando con Firebase como backend para la carga de productos, carrito de compras, checkout, etc.",Tags:"React - Sass - Html - Firebase",GitHub:"ecommerce-clyde",Live:"https://joacobriz.github.io/ecommerce-clyde/"},{Image:"validation-form",Title:"Validation Form",Description:"Proyecto de validación de datos de formulario",Tags:"Javascript - Css - Html",GitHub:"validation-form",Live:"https://joacobriz.github.io/validation-form/"},{Image:"weather-app",Title:"Weather App",Description:"App del Clima utilizando la API openweathermap",Tags:"Javascript - Css - Html",GitHub:"weather-app",Live:"https://joacobriz.github.io/weather-app/"},{Image:"character-counter",Title:"Character Counter",Description:"Contador de caracteres y palabras",Tags:"Javascript - Css - Html",GitHub:"character-counter",Live:"https://joacobriz.github.io/character-counter/"},{Image:"menu-beutiful",Title:"Menu",Description:"Menu de restaurant interactivo con checkout integrado.",Tags:"Javascript - Css - Html",GitHub:"MenuInteractivoJs",Live:"https://joacobriz.github.io/MenuInteractivoJs/"},,{Image:"quiz-app",Title:"Quiz App",Description:"Quiz sobre desarrollo web",Tags:"Javascript - Css - Html",GitHub:"quiz-app",Live:"https://joacobriz.github.io/quiz-app/"}],g=document.querySelector(".experienceList"),b=document.querySelector(".educationList"),f=document.querySelector(".projectsList"),v=()=>{u.forEach(o=>{y(o)}),m.forEach(o=>{L(o)}),h.forEach(o=>{D(o)}),console.log("inicio")},y=({Puesto:o,EmpresaUbicacion:i,Descripcion:r,Inicio:c,Fin:e})=>{e=e||"Presente";const t=`
    <div class="titleDate">
        <p class="experienceTitle">${o}</p>
        <p class="experienceDate">${c} - ${e}</p>
    </div>
    <p class="experienceUbication">${i}</p>
    <p class="experienceDescription">${r}</p>
  `,s=document.createElement("li");s.classList.add("experienceItem"),s.innerHTML=t,g.appendChild(s)},L=({Instituto:o,Ubicacion:i,Descripcion:r,Fecha:c})=>{const e=`
    <div class="titleDate">
        <p class="experienceTitle">${o}</p>
        <p class="experienceDate">${c}</p>
    </div>
    <p class="experienceUbication">${i}</p>
    <p class="experienceDescription">${r}</p>
  `,t=document.createElement("li");t.classList.add("experienceItem"),t.innerHTML=e,b.appendChild(t)},D=({Image:o,Title:i,Description:r,Tags:c,GitHub:e,Live:t})=>{const s=`
      <img class="projectImage" src="./src/assets/${o}.png" alt="project Image">
      <div class="projectTitleLinksContainer">
          <p class="projectTitle">${i}</p>
          <div class="projectLinksContainer">
              <a href="https://github.com/JoacoBriz/${e}"> <img src="./assets/github-icon.png" alt=""></a>
              <a href="${t}"> <img src="./src/assets/link-icon.png" alt=""> </a>
          </div>
      </div>
      <p class="projectDescription">${r}</p>
      <p class="projectTags">${c}</p>
  `,a=document.createElement("li");a.classList.add("projectItem"),a.innerHTML=s,f.appendChild(a)};v();const j=document.getElementById("switch-theme");let l=document.body,p=document.querySelector(".themeLogo");const d=document.querySelectorAll("p, a, li, h3, .experienceTitle, .projectTitle, .experienceDate, .experienceDescription");let n=!1;j.addEventListener("click",o=>{o.preventDefault(),n=!n,n===!0?(l.classList.toggle("themeWhiteBody"),d.forEach(i=>i.classList.toggle("themeWhite")),p.setAttribute("src","./src/assets/moon-icon.png")):(l.classList.remove("themeWhiteBody"),d.forEach(i=>i.classList.remove("themeWhite")),p.setAttribute("src","./src/assets/sun-icon.png"))});
