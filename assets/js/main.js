/* ================ MENU SHOW Y HIDDEN ================*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*================ MENU SHOW ================ */ 
// Validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose) {
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*================ REMOVE MENU MOIBLE ================ */ 
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* =================== ACCORDION SKILL ================= */

const skillContent = document.getElementsByClassName('skill__content'),
      skillHeader = document.querySelectorAll('.skill__header')

function toggleSkill() {
    let itemClass = this.parentNode.className

    for(i = 0; i < skillContent.length; i++) {
        skillContent[i].className = 'skill__content skill__close'
    }

    if(itemClass === 'skill__content skill__close' ) {
        this.parentNode.className = 'skill__content skill__open'
    }
}

skillHeader.forEach((el) => {
    el.addEventListener('click', toggleSkill)
})


// ========================== QUALIFICATION TABS =========================
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})


// <!-- ============================PORTFOLIO =========================== -->
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });