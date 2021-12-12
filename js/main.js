async function bootstrap() {
  const icon = document.getElementById('icon')
  const icon1 = document.getElementById('a')
  const icon2 = document.getElementById('b')
  const icon3 = document.getElementById('c')
  const nav = document.getElementById('nav')
  const blue = document.getElementById('blue')

  icon.addEventListener('click', function () {
    icon1.classList.toggle('a')
    icon2.classList.toggle('c')
    icon3.classList.toggle('b')
    nav.classList.toggle('show')
    blue.classList.toggle('slide')
  })

  const faders = document.querySelectorAll('.fade-in')
  const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px -2px 0px',
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
