  const refs = {
    mobileMenuNav: document.querySelector('.nav__list'),
    mobileMenuNavLinks: document.querySelectorAll('.nav__link'),
    menuBtn :document.querySelector('[data-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
    homeMobileMenuLink: document.querySelector('[data-home]'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    openModalBtnMobile: document.querySelector('[data-modal-open-mobile]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
    
function resetActiveLinks(linkToActivate) {
  refs.mobileMenuNavLinks.forEach(el => {
      el.classList.remove('nav__link--current')
  })
  linkToActivate.classList.add('nav__link--current')
}
  
(() => {
    refs.menuBtn.addEventListener('click', manageMobileMenu)
  
    function manageMobileMenu() {
    const expanded =
      refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;

    refs.menuBtn.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll')
    refs.menuBtn.setAttribute('aria-expanded', !expanded);
    refs.mobileMenu.classList.toggle('is-open');
      
    resetActiveLinks(homeMobileMenuLink)   
  };
})();

(() => {
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.openModalBtnMobile.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

(() => {
  refs.mobileMenuNav.addEventListener('click', switchActive);
  function switchActive(e) {
    resetActiveLinks(e.target)
  }
})();