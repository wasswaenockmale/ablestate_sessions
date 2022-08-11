let getCounter = ()=> localStorage.getItem('counter')
console.log(getCounter())

let sup = document.querySelector('sup')
sup.textContent = getCounter()
sup.style.color = "red"