import 'ress'

import '../styles/main.scss'

const root = document.documentElement
root.style.setProperty('--vh', window.innerHeight / 100 + 'px')

window.addEventListener('load', () => {}, { once: true, passive: true })
