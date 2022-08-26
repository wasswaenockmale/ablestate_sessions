let getCounter = ()=> localStorage.getItem('counter')

let sup = document.querySelector('sup')
sup.textContent = getCounter()
sup.style.color = "red"

