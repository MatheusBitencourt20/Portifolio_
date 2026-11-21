
import "./App.css";


const projects = [
  {
    id: 1,
    number: "PROJETO 001",
    title: "Exercícios de ADS",
    description:
      "Exercícios e atividades desenvolvidos durante minha formação em ADS.",
    technologies: "Python · Lógica de programação",
    link: "https://github.com/MatheusBitencourt20/Exercicios-Unilago-ads",
  },
  {
    id: 2,
    number: "PROJETO 002",
    title: "Desafio de Código em Java",
    description:
      "Desafios de codigos da plataforma DIO, bootcamp CI&T - Java AI Copilot",
    technologies: "Java · Back-end",
    link: "https://github.com/MatheusBitencourt20/Desafios_Codigo",
  },
  {
    id: 3,
    number: "PROJETO 003",
    title: "Herança e Polimorfismo em Java",
    description:
      "Projeto de Sistema para controle administrativo",
    technologies: "Java · Back-end · POO",
    link: "https://github.com/MatheusBitencourt20/Heranca_e_Polimorfismo_em_Java",
  },
  
    {id: 4,
    number: "PROJETO 003",
    title: "Telas personalizadas em Python",
    description:
      "Atividades feitas em sala explorando o uso do tkinter e json para telas com comandos personalizados",
    technologies: "Python · Lógica de programação · POO",
    link: "https://github.com/MatheusBitencourt20/Telas-Tkinter",
  },
];


function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <a href="#inicio" className="logo">MB.</a>

        <nav className="navigation">
          <a href="#projetos">Projetos</a>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#contato" className="nav-contact">
            Contato <span>↗</span>
          </a>
        </nav>

        <a
          href="https://github.com/MatheusBitencourt20"
          target="_blank"
          rel="noreferrer"
          className="header-link"
        >
          GitHub ↗
        </a>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-content">

            <div className="status">
              ✦ Desenvolvedor em formação
            </div>

            <h1>
              Transformando ideias
              <br />
              em soluções <span>digitais.</span>
            </h1>

            <p className="introduction">
              Olá, sou <strong>Matheus Rebelo Bitencourt</strong>,
              <br />
              estudante de ADS e apaixonado por tecnologia.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="primary-button">
                Conheça meus projetos <span>↗</span>
              </a>

              <a href="#contato" className="secondary-button">
                Entre em contato
              </a>
            </div>

            <div className="hero-footer">
              <span>BACK-END DEVELOPER IN PROGRESS</span>
              <span>BRASIL · 2026</span>
            </div>
          </div>
        </section>

        <section className="section" id="sobre">
          <span className="section-label">01 / SOBRE MIM</span>
          <h2>Um pouco sobre <span>minha jornada.</span></h2>
          <p>
            Sou estudante de Análise e Desenvolvimento de Sistemas,
            em transição de carreira para a área de tecnologia.
            Tenho interesse especial em desenvolvimento Back-end,
            lógica de programação e construção de soluções eficientes.
          </p>
        </section>

        <section className="section" id="tecnologias">
          <span className="section-label">02 / TECNOLOGIAS</span>
          <h2>Ferramentas que fazem parte da minha <span>jornada.</span></h2>

          <div className="tech-list">
            {["Java", "Spring Boot", "Python", "SQL", "React", "HTML", "CSS", "Git", "GitHub"].map((tech) => (
              <span className="tech-item" key={tech}>{tech}</span>
            ))}
          </div>
          <p className="tech-note">
            Conhecimentos em desenvolvimento e tecnologias em aprendizado contínuo.
          </p>
        </section>

        
<section className="section" id="projetos">
  <span className="section-label">03 / PROJETOS</span>

  <h2>
    Construindo, aprendendo e <span>evoluindo.</span>
  </h2>

  <div className="projects-grid">
    {projects.map((project) => (
      <div className="project-card" key={project.id}>

        <div>
          <span className="project-number">
            {project.number}
          </span>

          <h3>{project.title}</h3>

          <p>{project.description}</p>

          <span className="project-tech">
            {project.technologies}
          </span>
        </div>

        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="project-link"
        >
          Ver projeto ↗
        </a>

      </div>
    ))}
  </div>
</section>


        
<section className="section contact-section" id="contato">
  <span className="section-label">04 / CONTATO</span>

  <h2>
    Vamos criar algo <span>incrível?</span>
  </h2>

  <p>
    Estou aberto a oportunidades, novos desafios
    e conexões profissionais.
  </p>

  <div className="contact-links">

    {/* E-MAIL */}
    <a
      href="mailto:mrebelo229@gmail.com"
      className="contact-card"
    >
      <span className="contact-icon">✉</span>

      <div>
        <strong>E-mail</strong>
        <small>mrebelo229@gmail.com</small>
      </div>

      <span className="contact-arrow">↗</span>
    </a>

    {/* INSTAGRAM */}
    <a
      href="https://www.instagram.com/matheuszin_b/"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">◎</span>

      <div>
        <strong>Instagram</strong>
        <small>@matheuszin_b</small>
      </div>

      <span className="contact-arrow">↗</span>
    </a>

    {/* GITHUB */}
    <a
      href="https://github.com/MatheusBitencourt20"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">⌘</span>

      <div>
        <strong>GitHub</strong>
        <small>Meus projetos e códigos</small>
      </div>

      <span className="contact-arrow">↗</span>
    </a>
    <a
      href="https://www.linkedin.com/in/matheusbitencourt2003/"
      target="_blank"
      rel="noreferrer"
      className="contact-card"
    >
      <span className="contact-icon">In</span>

      <div>
        <strong>LinkdIn</strong>
        <small>Meu contato proficional</small>
      </div>

      <span className="contact-arrow">↗</span>
    </a>

  </div>
</section>

      </main>

      <footer className="footer">
        <span>MB. © 2026</span>
        <span>Desenvolvido por Matheus Rebelo Bitencourt</span>
        <a href="#inicio">Voltar ao topo ↑</a>
      </footer>
    </div>
  );
}

export default App;
