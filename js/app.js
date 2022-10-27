// Parallax эффект
window.addEventListener('scroll', e => {
  document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);
});
// Регистрируем плагины
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
// Создаем плавный скролл
ScrollSmoother.create({
  wrapper: '.wrapper',
  content: '.content'
});
