function toggleMode() {
  const html = document.documentElement

  /*if (html.classList.contains('light')) {
  html.classList.remove('light')
  }
  else {
  html.classList.add('light')
  }*/

  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/logo-light.png")
    img.setAttribute("alt", "avater com fundo etc.")
  } else {
    img.setAttribute("src", "./assets/assets/logo-dark.png")
    img.setAttribute("alt", "mike com cor do fundo amarelo")
  }
}
