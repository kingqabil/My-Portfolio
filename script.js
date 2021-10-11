const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body');
const openButton = document.getElementById('hamburgerButton');
const closeButton = document.getElementById('times');
const popupContainer = document.querySelector('.popup-container');
const projectsContainer = document.querySelector('.grid-container');
const headlineSection = document.querySelector('.headline-section');
const portfolioSection = document.getElementById('portfolio');
const aboutSection = document.getElementById('bout');
const contactSection = document.getElementById('contact');
const closePopupButton = document.getElementById('closePopupIcon');
const windowWidth = window.innerWidth;

const hide = (args) => {
  args.forEach((arg) => {
    arg.style.display = 'none';
  });
};

const show = (args) => {
  args.forEach((arg) => {
    arg.style.display = 'flex';
  });
};

const blurElements = (args, state) => {
  args.forEach((element) => {
    if (state) {
      element.style.filter = 'blur(3px)';
    } else {
      element.style.filter = 'blur(0px)';
    }
  });
};

const closeMobileMenu = () => {
  hide([mobileMenu, closeButton]);
  show([openButton]);
  body.style.overflow = 'scroll';
};

const openMobileMenu = () => {
  hide([openButton]);
  show([mobileMenu, closeButton]);
  body.style.overflow = 'hidden';
};



const workProjects = [
  {
    title: 'Profesional Art Printing Data',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './imgs/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://kingqabil.github.io/My-Portfolio/',
    sourceUrl: 'https://github.com/kingqabil/My-Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Data Dashboard Healthcare',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './imgs/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://kingqabil.github.io/My-Portfolio/',
    sourceUrl: 'https://github.com/kingqabil/My-Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Website Protfolio',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './imgs/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://kingqabil.github.io/My-Portfolio/',
    sourceUrl: 'https://github.com/kingqabil/My-Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Profesional Art Printing Data',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './imgs/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://kingqabil.github.io/My-Portfolio/',
    sourceUrl: 'https://github.com/kingqabil/My-Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Data Dashboard Healthcare',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './imgs/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://kingqabil.github.io/My-Portfolio/',
    sourceUrl: 'https://github.com/kingqabil/My-Portfolio',
  },
  {
    title: 'Profesional Art Printing Data',
    title_two: 'Website Protfolio',
    summary:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.',
    image: {
      imageUrl: './imgs/img-placeholder-2.png',
      imageAlt: 'Project image',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    seeLive: 'https://kingqabil.github.io/My-Portfolio/',
    sourceUrl: 'https://github.com/kingqabil/My-Portfolio',
  },
];

let projectHTML = '';

workProjects.forEach((project, index) => {
  projectHTML += `
    <div class="grid-items d-flex grid-item-${(index += 1)}">
      <div class="grid-item-card text-white">`;
  projectHTML += `<div class="grid-item-card-content d-flex ${
    windowWidth >= 992 && index === 1 ? 'hide-on-large' : 'show-on-small'
  }">
          <h2 class="font-crete-round hide-on-large">${project.title}</h2>
          <h2 class="font-crete-round show-on-large hide-on-small">
          ${project.title_two}
          </h2>
          <p class="font-inter">${project.summary}</p>
          <div class="box-container d-flex">
            <ul class="d-flex font-inter list-none">`;
  project.technologies.forEach((tech) => {
    projectHTML += `<li class="box">${tech}</li>`;
  });
  projectHTML += `
          </ul>
          </div>
        </div>
        <div class="button-container openPopupWindow">
          <a
          class="font-inter text-white no-underline primary-button primary-color btn"
          rel="noopener noreferrer"
          >See Project</a>
        </div>
      </div>
    </div>`;
});

projectsContainer.innerHTML = projectHTML;


const form = document.querySelector('form');
const error = document.querySelector('.error-message');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.style.display = 'block';
    error.textContent = 'Please use lowercase characters for your email';
    error.style.color = 'red';
    error.style.fontFamily = 'Roboto, sans-serif';
  }
});
