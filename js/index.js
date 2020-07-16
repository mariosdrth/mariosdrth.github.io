const homeBreakpoint = $('#home').offset().top + $('#home').outerHeight() - 100;
const aboutBreakpoint = $('#about').offset().top + $('#about').outerHeight() - 100;
const experienceBreakpoint = $('#experience').offset().top + $('#experience').outerHeight() - 100;
const portfolioBreakpoint = $('#portfolio').offset().top + $('#portfolio').outerHeight() - 100;
const contactBreakpoint = $('#contact').offset().top + $('#contact').outerHeight() - 100;
let slideIndexMedApp = 0;

$('document').ready(() => {
  adaptNav();
  adaptActiveClassOnNav();
  toggleDisplayToTopElement();

  animateElement('.home-content--text--name', 'char');
  animateElement('#main-role', 'char-role');

  $(window).scroll(adaptNav);
  $(window).scroll(adaptActiveClassOnNav);
  $(window).scroll(toggleDisplayToTopElement);
  $(window).scroll(showSummary);
  $(window).scroll(showExperience);
  $(window).scroll(showContactForm);

  $('#home-nav').click(() => adaptActiveClassOnNav);
  $('#about-nav').click(() => adaptActiveClassOnNav);
  $('#experience-nav').click(() => adaptActiveClassOnNav);
  $('#contact-nav').click(() => adaptActiveClassOnNav);

  $('.nav__list__item--home').click(() => $('#home').get(0).scrollIntoView());
  $('.nav__list__item--about').click(() => $('#about').get(0).scrollIntoView());
  $('.nav__list__item--experience').click(() => $('#experience').get(0).scrollIntoView());
  $('.nav__list__item--contact').click(() => $('#contact').get(0).scrollIntoView());

  $('body').tooltip({ selector: '[data-toggle=tooltip]' });

  $('.logo-gen').click(() => window.open('https://www.genedata.com/', '_blank'));
  $('.logo-alten').click(() => window.open('https://www.alten.fr/', '_blank'));
  $('.logo-amadeus').click(() => window.open('https://www.amadeus.com/en', '_blank'));
  $('.logo-ots').click(() => window.open('https://www.ots.gr/', '_blank'));

  $('.alert').click(() => removeAlertOnBackdropClick());
  $('.alert__content').click(event => event.stopPropagation());
  $('.alert__content--close-btn').click(() => toggleAlert());

  $('#item--alt--free').click(event => event.preventDefault());
});

const toggleAlert = () => {
  if (!$('.alert').hasClass('alert-active')) {
    $('.alert').addClass('alert-active');
    $('.alert__content').addClass('alert__content-active');
  } else {
    $('.alert').removeClass('alert-active');
    $('.alert__content').removeClass('alert__content-active');
  }
};

const removeAlertOnBackdropClick = () => {
  if ($('.alert').hasClass('alert-active')) {
    $('.alert').removeClass('alert-active');
    $('.alert__content').removeClass('alert__content-active');
  }
};

const toggleClassesToAlert = (success, msg) => {
  $('.alert__content--header').removeClass('error');
  $('.alert__content--message').removeClass('error-msg');
  $('.alert__content--header').removeClass('success');
  $('.alert__content--message').removeClass('success-msg');

  if (success) {
    $('.alert__content--header').html('Success!');
    $('.alert__content--header').addClass('success');
    $('.alert__content--message').html(msg);
    $('.alert__content--message').addClass('success-msg');
  } else {
    $('.alert__content--header').html('Error!');
    $('.alert__content--header').addClass('error');
    $('.alert__content--message').html('The following error occured: <br>' + msg);
    $('.alert__content--message').addClass('error-msg');
  }
};

const showSummary = () => {
  const scroll = $(window).scrollTop();
  if (scroll > homeBreakpoint - 200 || scroll + $(window).height() > getDocHeight() - 20) {
    $('.about-content__summary').addClass('show-summary');
  }
};

const showExperience = () => {
  const scroll = $(window).scrollTop();
  if (scroll > aboutBreakpoint - 400 || scroll + $(window).height() > getDocHeight() - 20) {
    $('.experience-content__details').addClass('show');
  }
};

const showContactForm = () => {
  const scroll = $(window).scrollTop();
  if (scroll > portfolioBreakpoint - 400 || scroll + $(window).height() > getDocHeight() - 20) {
    $('.contact-content__form').addClass('show-contact-form');
  }
};

const adaptNav = () => {
  const scroll = $(window).scrollTop();
  if (scroll > 10) {
    $('.nav').addClass('nav-adapted');
  } else {
    $('.nav').removeClass('nav-adapted');
  }
};

const toggleDisplayToTopElement = () => {
  const scroll = $(window).scrollTop();
  if (scroll > 400) {
    $('.to-top').addClass('display-element');
    $('.to-top').removeClass('hide-element');
  } else {
    $('.to-top').removeClass('display-element');
    $('.to-top').addClass('hide-element');
  }
};

const adaptActiveClassOnNav = () => {
  const scroll = $(window).scrollTop();
  if (scroll <= homeBreakpoint) {
    addClassToHomeNav();
  } else if (scroll > homeBreakpoint && scroll <= aboutBreakpoint) {
    addClassToAboutNav();
  } else if (scroll > aboutBreakpoint && scroll <= experienceBreakpoint) {
    addClassToExperienceNav();
  } else if (scroll > experienceBreakpoint && scroll <= contactBreakpoint) {
    addClassToPortfolioNav();
  } else if (scroll > portfolioBreakpoint && scroll <= portfolioBreakpoint) {
    addClassToContactNav();
  }
  if (scroll + $(window).height() > getDocHeight() - 20) {
    addClassToContactNav();
  }
};

const addClassToHomeNav = () => {
  $('#home-nav').addClass('nav__list__item--active');
  $('#about-nav').removeClass('nav__list__item--active');
  $('#experience-nav').removeClass('nav__list__item--active');
  $('#contact-nav').removeClass('nav__list__item--active');
  $('#portfolio-nav').removeClass('nav__list__item--active');
};

const addClassToAboutNav = () => {
  $('#about-nav').addClass('nav__list__item--active');
  $('#home-nav').removeClass('nav__list__item--active');
  $('#experience-nav').removeClass('nav__list__item--active');
  $('#contact-nav').removeClass('nav__list__item--active');
  $('#portfolio-nav').removeClass('nav__list__item--active');
};

const addClassToExperienceNav = () => {
  $('#experience-nav').addClass('nav__list__item--active');
  $('#home-nav').removeClass('nav__list__item--active');
  $('#about-nav').removeClass('nav__list__item--active');
  $('#contact-nav').removeClass('nav__list__item--active');
  $('#portfolio-nav').removeClass('nav__list__item--active');
};

const addClassToPortfolioNav = () => {
  $('#portfolio-nav').addClass('nav__list__item--active');
  $('#contact-nav').removeClass('nav__list__item--active');
  $('#home-nav').removeClass('nav__list__item--active');
  $('#about-nav').removeClass('nav__list__item--active');
  $('#experience-nav').removeClass('nav__list__item--active');
};

const addClassToContactNav = () => {
  $('#contact-nav').addClass('nav__list__item--active');
  $('#home-nav').removeClass('nav__list__item--active');
  $('#about-nav').removeClass('nav__list__item--active');
  $('#experience-nav').removeClass('nav__list__item--active');
  $('#portfolio-nav').removeClass('nav__list__item--active');
};

const getDocHeight = () => {
  var D = document;
  return Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight);
};

const submitForm = event => {
  event.preventDefault();
  const url = 'https://email-rest-api.herokuapp.com/send-email';
  const form = $('.contact-content__form').serializeArray();
  [userName, userEmail, message] = form;
  const body = `Email from: ${userName.value}. \nContact email address: ${userEmail.value}. \nMessage: ${message.value}`;
  const subject = `MY_SITE - Email from: ${userName.value}`;
  const objToSend = {
    receiver: 'mariosdrth2005@gmail.com',
    subject: subject,
    body: body
  };
  $('.loader-wrapper').addClass('visible');
  $('.loader-wrapper').removeClass('invisible');
  axios
    .post(url, objToSend)
    .then(response => {
      $('.loader-wrapper').addClass('invisible');
      toggleClassesToAlert(true, 'Message sent successfully!');
      toggleAlert();
      $('#name').val('');
      $('#email').val('');
      $('#message').val('');
    })
    .catch(err => {
      $('.loader-wrapper').addClass('invisible');
      toggleClassesToAlert(false, err.message);
      toggleAlert();
    });
};

const animateElement = (elementIdentifier, spanClass) => {
  const contentName = $(elementIdentifier);
  const contentNameInnerText = contentName.text().trim();
  let newDom = '';

  contentNameInnerText.split('').forEach(letter => {
    newDom += '<span class="' + spanClass + '">' + (letter == ' ' ? '&nbsp;' : letter) + '</span>';
  });

  contentName.html(newDom);
};

const checkImgSlideshowMedApp = direction => {
  if (direction === 1) {
    if (slideIndexMedApp < 5) {
      slideIndexMedApp++;
      updateImgSlideshowMedApp();
    } else {
      slideIndexMedApp = 1;
      updateImgSlideshowMedApp();
    }
  } else if (direction === -1) {
    if (slideIndexMedApp > 1) {
      slideIndexMedApp--;
      updateImgSlideshowMedApp();
    } else if (slideIndexMedApp === 0) {
      slideIndexMedApp = 4;
      updateImgSlideshowMedApp();
    } else {
      slideIndexMedApp = 5;
      updateImgSlideshowMedApp();
    }
  }
};

const updateIndexMedApp = (index, id) => {
  clearDotsMedApp();

  $(`#${id}`).addClass('active-dot');

  slideIndexMedApp = index;
  updateImgSlideshowMedApp();
};

const clearDotsMedApp = () => {
  $('#dot-1-med').removeClass('active-dot');
  $('#dot-2-med').removeClass('active-dot');
  $('#dot-3-med').removeClass('active-dot');
  $('#dot-4-med').removeClass('active-dot');
  $('#dot-5-med').removeClass('active-dot');
};

const updateImgSlideshowMedApp = () => {
  const imageOne = $('.portfolio-content__slideshow--item--img-1-med');
  const imageTwo = $('.portfolio-content__slideshow--item--img-2-med');
  const imageThree = $('.portfolio-content__slideshow--item--img-3-med');
  const imageFour = $('.portfolio-content__slideshow--item--img-4-med');
  const imageFive = $('.portfolio-content__slideshow--item--img-5-med');
  if (slideIndexMedApp === 1) {
    imageOne.css('background-image', 'url(../img/med-app-home.png)');
    imageTwo.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-login.png)');
    imageThree.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-sessions.png)');
    imageFour.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-cont-form.png)');
    imageFive.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-patients.png)');
    clearDotsMedApp();
    $('#dot-2-med').addClass('active-dot');
  } else if (slideIndexMedApp === 2) {
    imageOne.css('background-image', 'url(../img/med-app-login.png)');
    imageTwo.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-sessions.png)');
    imageThree.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-cont-form.png)');
    imageFour.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-patients.png)');
    imageFive.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-home.png)');
    clearDotsMedApp();
    $('#dot-3-med').addClass('active-dot');
  } else if (slideIndexMedApp === 3) {
    imageOne.css('background-image', 'url(../img/med-app-sessions.png)');
    imageTwo.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-cont-form.png)');
    imageThree.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-patients.png)');
    imageFour.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-home.png)');
    imageFive.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-login.png)');
    clearDotsMedApp();
    $('#dot-4-med').addClass('active-dot');
  } else if (slideIndexMedApp === 4) {
    imageOne.css('background-image', 'url(../img/med-app-cont-form.png)');
    imageTwo.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-patients.png)');
    imageThree.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-home.png)');
    imageFour.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-login.png)');
    imageFive.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-sessions.png)');
    clearDotsMedApp();
    $('#dot-5-med').addClass('active-dot');
  } else if (slideIndexMedApp === 5) {
    imageOne.css('background-image', 'url(../img/med-app-patients.png)');
    imageTwo.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-home.png)');
    imageThree.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-login.png)');
    imageFour.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-sessions.png)');
    imageFive.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-cont-form.png)');
    clearDotsMedApp();
    $('#dot-1-med').addClass('active-dot');
  }
};

const redirectMedApp = () => {
  window.open('https://med-app-client.herokuapp.com/', '_blank');
};
