const mobileMenu = document.getElementById('mobile-menu');
const body = document.querySelector('body');
const openButton = document.getElementById('hamburgerButton');
const closeButton = document.getElementById('times');
const headlineSection = document.querySelector('.headline-section');
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

document.querySelectorAll('.mobileMenuOption').forEach((item) => {
  item.addEventListener('click', closeMobileMenu);
});

openButton.addEventListener('click', openMobileMenu);

closeButton.addEventListener('click', closeMobileMenu);
