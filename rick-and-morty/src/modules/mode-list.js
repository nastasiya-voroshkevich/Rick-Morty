
import { cardList } from "./cards";


export function modeList() {
  const arrApi = [];
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((users) => {
      cardList(users.results)
      for (let i = 2; i <= users.info.pages; i++) {
        arrApi.push(`https://rickandmortyapi.com/api/character/?page=${i}`)
      }
    })
    .catch(() => console.log('some error'));



  function throttle(callee, timeout) {
    let timer = null

    return function perform(...args) {
      if (timer) return

      timer = setTimeout(() => {
        callee(...args)

        clearTimeout(timer)
        timer = null
      }, timeout)
    }
  }


  async function checkPosition() {
    const height = document.body.offsetHeight
    const screenHeight = window.innerHeight
    const scrolled = window.scrollY

    const threshold = height - screenHeight / 4
    const position = scrolled + screenHeight

    if (position >= threshold && arrApi.length > 0) {

      fetch(`${arrApi[0]}`)
        .then((response) => response.json())
        .then((users) => {
          cardList(users.results)
        })
        .catch(() => console.log('some error'));

      arrApi.shift()
    }

  }


  (() => {
    window.addEventListener('scroll', throttle(checkPosition))
    window.addEventListener('resize', throttle(checkPosition))
  })()
}

