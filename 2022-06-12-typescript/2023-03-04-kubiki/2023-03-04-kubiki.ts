let l = document.querySelector("#pirmais")
let r = document.querySelector("#otrais")

// event.target tips ir pārāk šaurs, es lieku ts noticēt, ka tas ir elements
// "as Element" piespiež mainīt tipu ar spēku, tāpēc ir vajadzīgs targetElement
// ja tas jau būtu Element, tad varētu uzreiz lietot event.target

// event listenerī target.parentNode = l vai r, starp citu

l?.addEventListener("click", (event) => {
  let targetElement: Element = event.target as Element
  let isChild: Boolean = targetElement.id == ""

  if (isChild) l.removeChild(targetElement)
  else r.innerHTML = r.innerHTML + "<div></div>"
})

r?.addEventListener("click", (event) => {
  let targetElement: Element = event.target as Element
  let isChild: Boolean = targetElement.id == ""

  if (isChild) r.removeChild(targetElement)
  else l.innerHTML = l.innerHTML + "<div></div>"
})

// r?.addEventListener("click", (event) => {
//   l.innerHTML = l.innerHTML + "<div></div>"
// })
// l?.addEventListener("click", (event) => {
//   r.innerHTML = r.innerHTML + "<div></div>"
// })
