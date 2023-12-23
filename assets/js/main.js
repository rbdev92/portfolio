import "../css/reset.css";
import "../css/style.css";

document.querySelector("#app").innerHTML = `
<header>
  <nav>
    <ul>
      <li><a href="#home">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main class="container">
  <section id="home">
    <div class="banner">
      <div class="banner-box-one">
        <h1>
          Gosto de estar envolvido em projetos onde eu contribua com a <span style="color: #747bff;">comunidade</span>.
        </h1>
        <p>
          Apaixonado por tecnologia e desenvolvimento web.
        </p>
      </div>
      <div class="banner-box-two">
        <img 
          src="./assets/images/renato.jpeg"
          alt="Foto de Renato Brito"
          width="400"
        >
      </div>
    </div>
  </section>
  <section id="skills">
    <div class="heading">
      <h1>Skills</h1>
    </div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
      aliquam neque labore vitae culpa? Fuga ullam provident atque
      laudantium pariatur, doloremque sunt numquam quia adipisci omnis,
      delectus sit possimus a?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
      aliquam neque labore vitae culpa? Fuga ullam provident atque
      laudantium pariatur, doloremque sunt numquam quia adipisci omnis,
      delectus sit possimus a?
    </p>
  </section>
  <section id="projects">
    <div class="heading">
      <h1>Projects</h1>
    </div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
      aliquam neque labore vitae culpa? Fuga ullam provident atque
      laudantium pariatur, doloremque sunt numquam quia adipisci omnis,
      delectus sit possimus a?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
      aliquam neque labore vitae culpa? Fuga ullam provident atque
      laudantium pariatur, doloremque sunt numquam quia adipisci omnis,
      delectus sit possimus a?
    </p>
  </section>
  <section id="blog">
    <div class="heading">
      <h1>Other</h1>
    </div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
      aliquam neque labore vitae culpa? Fuga ullam provident atque
      laudantium pariatur, doloremque sunt numquam quia adipisci omnis,
      delectus sit possimus a?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
      aliquam neque labore vitae culpa? Fuga ullam provident atque
      laudantium pariatur, doloremque sunt numquam quia adipisci omnis,
      delectus sit possimus a?
    </p>
  </section>
</main>
<footer>
  <div>
    <p>Copyright &copy; 2023 Renato Brito</p>
  </div>
  <div class="social">
    <div>
      <a href="https://github.com/rbdev92" target="_blank"><i class="fa-brands fa-github"></i></a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/renatobrito92/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div>
      <a href="https://instagram.com/rbdev92" target="_blank"><i class="fa-brands fa-instagram"></i></a>
    </div>
  </div>
</footer>
`;

