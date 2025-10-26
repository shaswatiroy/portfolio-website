import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, ExternalLink, Mail, Linkedin, Github, Code } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-bs-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-bs-theme');
    }
  }, [darkMode]);

  const projects = [
    {
      title: 'Blog App',
      description: 'Full-stack MERN application with where users can read, create, update and delete blogs containing images and code blocks.',
      image: '/assets/blog_app/3.png',
      tech: ['MongoDB', 'Express', 'React', 'Node.js'],
      details: [
        {
          image: '/assets/blog_app/3.png',
          caption: "Home Page"
        },
        {
          image: './assets/blog_app/2.png',
          caption: "Login Page"
        },
        {
          image: './assets/blog_app/1.png',
          caption: "Blog Page"
        },
        {
          image: './assets/blog_app/4.png',
          caption: "New Blog Page"
        },
        {
          image: './assets/blog_app/5.png',
          caption: "Personal Blogs Page with edit and delete options"
        },
        
      ]
    },
    {
      title: 'ShopCart',
      description: 'E-Commerse app made in react having checkout and facebook login.',
      image: './assets/shopCart/1.png',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      details: [
        {
          image: './assets/shopCart/1.png',
          caption: "Landing page having products to select from and add to cart."
        },
        {
          image: './assets/shopCart/2.png',
          caption: "Checkout page having all the items added in cart."
        },
        {
          image: './assets/shopCart/3.png',
          caption: "Login page with login with facebook feature."
        },
      ]
    },
    {
      title: 'Book List in MERN',
      description: 'Book List manager in MERN stack. Used node and express to handle backend api and mongo db to store data.',
      image: './assets/BookList/1.png',
      tech: ['React', 'Express', 'MongoDB', 'Chart.js'],
      details: [
        {
          image: './assets/BookList/1.png',
          caption: "Home page showing all the saved books with their author."
        },
        {
          image: './assets/BookList/2.png',
          caption: "Add book modal."
        },
        {
          image: './assets/BookList/3.png',
          caption: "Update book modal."
        },
        {
          image: './assets/BookList/4.png',
          caption: "Delete book modal."
        },
        {
          image: './assets/BookList/5.png',
          caption: "Home page with new record added."
        },
      ]
    },
    {
      title: 'Todo App',
      description: 'Todo List app managing daily tasks to incerase our productivity.',
      image: './assets/Todo/1.png',
      tech: ['Next.js', 'MongoDB', 'Node.js', 'Tailwind'],
      details: [
        {
          image: './assets/Todo/1.png',
          caption: "Home page showing todo list of current date."
        },
        {
          image: './assets/Todo/2.png',
          caption: "Task complete modal."
        },
        {
          image: './assets/Todo/3.png',
          caption: "Weekly tasks page."
        },
        {
          image: './assets/Todo/4.png',
          caption: "Completed task striked off and added new task 'jogging'."
        },
        {
          image: './assets/Todo/5.png',
          caption: "Task updated in all task page too."
        },
      ]
    }
  ];

  const skills = [
    { name: 'MongoDB', color: 'success' },
    { name: 'Express.js', color: 'secondary' },
    { name: 'React', color: 'info' },
    { name: 'Node.js', color: 'success' },
    { name: 'JavaScript', color: 'warning' },
    { name: 'TypeScript', color: 'primary' },
    { name: 'HTML5', color: 'danger' },
    { name: 'CSS3', color: 'primary' },
    { name: 'Bootstrap', color: 'primary' },
    { name: 'Tailwind CSS', color: 'info' },
    { name: 'REST API', color: 'secondary' },
    { name: 'Git', color: 'dark' },
    { name: 'Redux', color: 'primary' }
  ];


  useEffect(() => {
    if (modalProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalProject]);

  return (
    <div className={darkMode ? 'bg-dark text-light' : 'bg-light'} style={{ minHeight: '100vh' }}>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-white'} shadow-sm sticky-top`}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#home">
            <Code size={32} className="me-2 text-primary" />
            <span className="fw-bold fs-4">DevPortfolio</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
              <li className="nav-item ms-3">
                <button
                  className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'} btn-sm`}
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-5">
        <div className="container">
          <div className="row align-items-center min-vh-75">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-3 fw-bold mb-3">Web Enthusiast & Developer-in-Progress</h1>
              <p className="lead mb-4">Hi, I'm Shaswati. I enjoy creating simple, elegant web experiences and growing my skills one project at a time.</p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="#projects" className="btn btn-primary btn-lg">View My Work</a>
                <a href="#contact" className="btn btn-outline-primary btn-lg">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-5 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold mb-4 text-center">About Me</h2>
              <p className="lead text-center mb-4">
                I'm an enthusiastic and curious techie with a growing passion for web development. During my studies, I built my first blog and shopping websites, which sparked my love for creating interactive and user-friendly digital experiences. 
                I enjoy exploring how different technologies come together to build modern web applications and am constantly learning to strengthen my front-end and back-end development skills.</p>
              <p className="text-center">
                When I’m not coding, I love experimenting with new design ideas, reading about emerging tech trends, and finding creative ways to improve my projects. I’m excited to keep learning, building, and collaborating on projects that make a real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Featured Projects</h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-6">
                <div className={`card h-100 ${darkMode ? 'bg-secondary text-light' : ''} shadow-sm`}>
                  <img src={project.image} className="card-img-top" alt={project.title} style={{ height: '250px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                    <div className="mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="badge bg-primary me-2 mb-2">{tech}</span>
                      ))}
                    </div>

                    <div className="mt-auto d-flex gap-2">
                      <button
                        className={`btn btn-primary`}
                        onClick={() => setModalProject(project.title)}
                      >
                        View More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Modal (shows screenshots only for selected project) */}
      {modalProject && (
        <>
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            role="dialog"
            aria-modal="true"
            aria-labelledby="projectScreenshotsLabel"
            onClick={() => setModalProject(null)}
          >
            <div className="modal-dialog modal-xl modal-dialog-centered" role="document" onClick={(e) => e.stopPropagation()}>
              <div className={`modal-content ${darkMode ? 'bg-secondary text-light' : ''}`}>
                <div className="modal-header">
                  <h5 className="modal-title fw-bold" id="projectScreenshotsLabel">{modalProject} — Screenshots</h5>
                  <button type="button" className={`btn-close ${darkMode ? 'btn-close-white' : ''}`} aria-label="Close" onClick={() => setModalProject(null)}></button>
                </div>
                <div className="modal-body">
                  <div className="container">
                    <div className="row g-3">
                      {/* Use details array from the selected project */}
                      {(() => {
                        const selected = projects.find(p => p.title === modalProject);
                        const images = selected?.details

                        if (!images || images.length === 0) {
                          return (
                            <div className="col-12">
                              <p className="text-center mb-0">No additional screenshots available for this project.</p>
                            </div>
                          );
                        }

                        return images.map((shot, i) => (
                          <div key={i} className="col-md-6">
                            <div className={`card ${darkMode ? 'bg-dark text-light' : ''} h-100`}>
                              <img src={shot.image} className="card-img-top" alt={`${modalProject} screenshot ${i + 1}`} style={{ height: '220px', objectFit: 'cover' }} />
                              <div className="card-body">
                                <h6 className="card-subtitle mb-2 text-muted">{modalProject}</h6>
                                <p className="card-text small mb-0">{shot.caption}</p>
                              </div>
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={() => setModalProject(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* backdrop */}
          <div className="modal-backdrop fade show" onClick={() => setModalProject(null)}></div>
        </>
      )}

      {/* Skills Section */}
      <section id="skills" className={`py-5 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Technical Skills</h2>
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="d-flex flex-wrap justify-content-center gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className={`badge bg-${skill.color} fs-6 px-3 py-2`}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-5 ${darkMode ? 'bg-dark' : 'bg-white'}`}>
        <div className="container">
          <h2 className="display-5 fw-bold mb-5 text-center">Get In Touch</h2>
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              <p className="lead mb-4">
                I'm always interested in hearing about new projects and opportunities.
                Let's connect and build something amazing together!
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <a href="mailto:s.roy.355@westcliff.edu" className="btn btn-primary">
                  <Mail size={20} className="me-2" />
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/shaswati-roy-choudhury/" className="btn btn-outline-primary">
                  <Linkedin size={20} className="me-2" />
                  LinkedIn
                </a>
                <a href="https://github.com/shaswatiroy/" className="btn btn-outline-primary">
                  <Github size={20} className="me-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-4 ${darkMode ? 'bg-black' : 'bg-dark'} text-light`}>
        <div className="container text-center">
          <p className="mb-0">&copy; 2025 Shaswati Roy Choudhury. Built with React & Bootstrap 5.</p>
        </div>
      </footer>
    </div>
  );
}