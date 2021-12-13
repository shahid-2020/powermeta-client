async function bootstrap() {
  const toggler = document.querySelector('.menu__toggler')
  const menu = document.querySelector('.menu')

  toggler.addEventListener('click', () => {
    toggler.classList.toggle('active')
    menu.classList.toggle('active')
  })

  const faders = document.querySelectorAll('.fade-in')
  const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px -1px 0px',
  }
  const appearOnScroll = new IntersectionObserver(function (
    entries,
    appearOnScroll
  ) {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return
      } else {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  },
  appearOptions)

  faders.forEach((fader) => {
    appearOnScroll.observe(fader)
  })
}

bootstrap()
