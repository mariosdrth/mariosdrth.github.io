const homeBreakpoint = $('#home').offset().top + $('#home').outerHeight() - 100;
const aboutBreakpoint = $('#about').offset().top + $('#about').outerHeight() - 100;
const experienceBreakpoint = $('#experience').offset().top + $('#experience').outerHeight() - 100;
const portfolioBreakpoint = $('#portfolio').offset().top + $('#portfolio').outerHeight() - 100;
const contactBreakpoint = $('#contact').offset().top + $('#contact').outerHeight() - 100;
let slideIndexMedApp = 0;
let slideIndexMedAppFullScreen = 0;

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
  $(window).scroll(showPortfolio);
  $(window).scroll(showContactForm);

  $('#home-nav').click(() => adaptActiveClassOnNav);
  $('#about-nav').click(() => adaptActiveClassOnNav);
  $('#experience-nav').click(() => adaptActiveClassOnNav);
  $('#contact-nav').click(() => adaptActiveClassOnNav);

  $('.nav__list__item--home').click(() => $('#home').get(0).scrollIntoView());
  $('.nav__list__item--about').click(() => $('#about').get(0).scrollIntoView());
  $('.nav__list__item--experience').click(() => $('#experience').get(0).scrollIntoView());
  $('.nav__list__item--portfolio').click(() => $('#portfolio').get(0).scrollIntoView());
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

  $(document).keydown(event => checkArrowsPressedForSlideshow(event.keyCode));
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

const showPortfolio = () => {
  const scroll = $(window).scrollTop();
  if (scroll > experienceBreakpoint - 400 || scroll + $(window).height() > getDocHeight() - 20) {
    $('.portfolio-content__slideshow').addClass('show');
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
    if (slideIndexMedApp < 4) {
      slideIndexMedApp++;
      updateImgSlideshowMedApp();
    } else {
      slideIndexMedApp = 0;
      updateImgSlideshowMedApp();
    }
  } else if (direction === -1) {
    if (slideIndexMedApp > 0) {
      slideIndexMedApp--;
      updateImgSlideshowMedApp();
    } else {
      slideIndexMedApp = 4;
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
  if (slideIndexMedApp === 0) {
    imageOne.css('background-image', 'url(../img/med-app-patients.png)');
    imageTwo.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-home.png)');
    imageThree.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-login.png)');
    imageFour.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-sessions.png)');
    imageFive.css('background-image', 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(../img/med-app-cont-form.png)');
    clearDotsMedApp();
    $('#dot-1-med').addClass('active-dot');
  } else if (slideIndexMedApp === 1) {
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
  }
};

const fullScreenImg = () => {
  $('html').css('overflow', 'hidden');
  updateImage();
  $('.img-wrapper').addClass('img-wrapper-active');
};

const closeFullScreenImg = () => {
  $('.img-wrapper').removeClass('img-wrapper-active');
  $('html').css('overflow', 'auto');
  slideIndexMedAppFullScreen = 0;
  updateImagesClasses();
};

const updateImage = () => {
  if (slideIndexMedApp === 0) {
    $('.img-wrapper-images-back-1').attr('src', 'img/med-app-sessions.png');
    $('.img-wrapper-images-back-2').attr('src', 'img/med-app-cont-form.png');
    $('.img-wrapper-images-back-3').attr('src', 'img/med-app-patients.png');
    $('.img-wrapper-images-back-4').attr('src', 'img/med-app-home.png');
    $('.img-wrapper-images-back-5').attr('src', 'img/med-app-login.png');
  } else if (slideIndexMedApp === 1) {
    $('.img-wrapper-images-back-1').attr('src', 'img/med-app-cont-form.png');
    $('.img-wrapper-images-back-2').attr('src', 'img/med-app-patients.png');
    $('.img-wrapper-images-back-3').attr('src', 'img/med-app-home.png');
    $('.img-wrapper-images-back-4').attr('src', 'img/med-app-login.png');
    $('.img-wrapper-images-back-5').attr('src', 'img/med-app-sessions.png');
  } else if (slideIndexMedApp === 2) {
    $('.img-wrapper-images-back-1').attr('src', 'img/med-app-patients.png');
    $('.img-wrapper-images-back-2').attr('src', 'img/med-app-home.png');
    $('.img-wrapper-images-back-3').attr('src', 'img/med-app-login.png');
    $('.img-wrapper-images-back-4').attr('src', 'img/med-app-sessions.png');
    $('.img-wrapper-images-back-5').attr('src', 'img/med-app-cont-form.png');
  } else if (slideIndexMedApp === 3) {
    $('.img-wrapper-images-back-1').attr('src', 'img/med-app-home.png');
    $('.img-wrapper-images-back-2').attr('src', 'img/med-app-login.png');
    $('.img-wrapper-images-back-3').attr('src', 'img/med-app-sessions.png');
    $('.img-wrapper-images-back-4').attr('src', 'img/med-app-cont-form.png');
    $('.img-wrapper-images-back-5').attr('src', 'img/med-app-patients.png');
  } else if (slideIndexMedApp === 4) {
    $('.img-wrapper-images-back-1').attr('src', 'img/med-app-login.png');
    $('.img-wrapper-images-back-2').attr('src', 'img/med-app-sessions.png');
    $('.img-wrapper-images-back-3').attr('src', 'img/med-app-cont-form.png');
    $('.img-wrapper-images-back-4').attr('src', 'img/med-app-patients.png');
    $('.img-wrapper-images-back-5').attr('src', 'img/med-app-home.png');
  }
};

const slideImage = (event, direction) => {
  event.stopPropagation();
  translateImages(direction);
  checkImgSlideshowMedApp(direction);
};

const translateImages = direction => {
  if (direction === 1) {
    if (slideIndexMedAppFullScreen < 4) {
      slideIndexMedAppFullScreen++;
      updateImagesClasses();
    } else {
      slideIndexMedAppFullScreen = 0;
      updateImagesClasses();
    }
  } else if (direction === -1) {
    if (slideIndexMedAppFullScreen > 0) {
      slideIndexMedAppFullScreen--;
      updateImagesClasses();
    } else {
      slideIndexMedAppFullScreen = 4;
      updateImagesClasses();
    }
  }
};

const updateImagesClasses = () => {
  const imgBackOne = $('.img-wrapper-images-back-1');
  const imgBackTwo = $('.img-wrapper-images-back-2');
  const imgBackThree = $('.img-wrapper-images-back-3');
  const imgBackFour = $('.img-wrapper-images-back-4');
  const imgBackFive = $('.img-wrapper-images-back-5');

  const transformOne = 'scale(0.4) translateX(-400rem)';
  const transformTwo = 'scale(0.7) translateX(-60rem)';
  const transformThree = 'none';
  const transformFour = 'scale(0.7) translateX(60rem)';
  const transformFive = 'scale(0.4) translateX(400rem)';

  const opacityOne = '0';
  const opacityTwo = '0.6';
  const opacityThree = '1';
  const opacityFour = '0.6';
  const opacityFive = '0';

  const zIndexOne = '1';
  const zIndexTwo = '2';
  const zIndexThree = '3';
  const zIndexFour = '2';
  const zIndexFive = '1';

  if (slideIndexMedAppFullScreen === 0) {
    imgBackOne.css('transform', transformOne).css('opacity', opacityOne).css('z-index', zIndexOne);
    imgBackTwo.css('transform', transformTwo).css('opacity', opacityTwo).css('z-index', zIndexTwo);
    imgBackThree.css('transform', transformThree).css('opacity', opacityThree).css('z-index', zIndexThree);
    imgBackFour.css('transform', transformFour).css('opacity', opacityFour).css('z-index', zIndexFour);
    imgBackFive.css('transform', transformFive).css('opacity', opacityFive).css('z-index', zIndexFive);
  } else if (slideIndexMedAppFullScreen === 1) {
    imgBackOne.css('transform', transformFive).css('opacity', opacityFive).css('z-index', zIndexFive);
    imgBackTwo.css('transform', transformOne).css('opacity', opacityOne).css('z-index', zIndexOne);
    imgBackThree.css('transform', transformTwo).css('opacity', opacityTwo).css('z-index', zIndexTwo);
    imgBackFour.css('transform', transformThree).css('opacity', opacityThree).css('z-index', zIndexThree);
    imgBackFive.css('transform', transformFour).css('opacity', opacityFour).css('z-index', zIndexFour);
  } else if (slideIndexMedAppFullScreen === 2) {
    imgBackOne.css('transform', transformFour).css('opacity', opacityFour).css('z-index', zIndexFour);
    imgBackTwo.css('transform', transformFive).css('opacity', opacityFive).css('z-index', zIndexFive);
    imgBackThree.css('transform', transformOne).css('opacity', opacityOne).css('z-index', zIndexOne);
    imgBackFour.css('transform', transformTwo).css('opacity', opacityTwo).css('z-index', zIndexTwo);
    imgBackFive.css('transform', transformThree).css('opacity', opacityThree).css('z-index', zIndexThree);
  } else if (slideIndexMedAppFullScreen === 3) {
    imgBackOne.css('transform', transformThree).css('opacity', opacityThree).css('z-index', zIndexThree);
    imgBackTwo.css('transform', transformFour).css('opacity', opacityFour).css('z-index', zIndexFour);
    imgBackThree.css('transform', transformFive).css('opacity', opacityFive).css('z-index', zIndexFive);
    imgBackFour.css('transform', transformOne).css('opacity', opacityOne).css('z-index', zIndexOne);
    imgBackFive.css('transform', transformTwo).css('opacity', opacityTwo).css('z-index', zIndexTwo);
  } else if (slideIndexMedAppFullScreen === 4) {
    imgBackOne.css('transform', transformTwo).css('opacity', opacityTwo).css('z-index', zIndexTwo);
    imgBackTwo.css('transform', transformThree).css('opacity', opacityThree).css('z-index', zIndexThree);
    imgBackThree.css('transform', transformFour).css('opacity', opacityFour).css('z-index', zIndexFour);
    imgBackFour.css('transform', transformFive).css('opacity', opacityFive).css('z-index', zIndexFive);
    imgBackFive.css('transform', transformOne).css('opacity', opacityOne).css('z-index', zIndexOne);
  }
};

const checkArrowsPressedForSlideshow = keyCode => {
  if ($('.img-wrapper').css('z-index') > 0) {
    if (keyCode === 37) {
      translateImages(-1);
      checkImgSlideshowMedApp(-1);
    } else if (keyCode === 39) {
      translateImages(1);
      checkImgSlideshowMedApp(1);
    } else if (keyCode === 27) {
      closeFullScreenImg();
    }
  }
};
