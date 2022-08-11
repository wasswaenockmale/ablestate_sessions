import { inventory } from "./inventory.js";

/**
 * @addItemsToHomePage
 * It adds items dynamically from the inventory database. 
 * My inventory database is an object.
 */
let addItemsToHomePage = ()=>{
    // call the container here 
    let container = document.querySelector(".container")
    // Adding the content to the page dynamica
    for(let inventoryType in inventory){
        let itemSection = document.createElement("div")
        itemSection.classList.add('items-section')
        for( let items of inventory[inventoryType]){
            let itemdiv = document.createElement("div")
            itemdiv.classList.add('item-div')
            let finaldiv = document.createElement("div")
            let img = document.createElement("img")
            img.setAttribute('src', items.image)
            img.setAttribute('alt',`${items.name} image`)
            // console.log(items.image)
            img.classList.add('item-image')
            let h4 = document.createElement('h4')
            h4.textContent = items.name
            let p = document.createElement('p')
            p.textContent = items.price
            let button = document.createElement("button")
            button.textContent = "Add to cart"
            button.classList.add('add-to-cart-button')
            finaldiv.appendChild(img)
            finaldiv.appendChild(h4)
            finaldiv.appendChild(p)
            finaldiv.appendChild(button)

            // Now append the final div to the itemsdiv
            itemdiv.appendChild(finaldiv)

            // Now append it to the itemSection
            itemSection.appendChild(itemdiv)
            // Now append the itemSection to the container.
            container.appendChild(itemSection)
            // console.log(`${items.name} belongs to ${inventoryType}`)

        }
        
    }
}

// Call the addItemsToHomePage below to be able to load items to the page
addItemsToHomePage()

/**
 * making the 'add to cart' clickable and adding items to the cart as well.
 */
let sup = document.querySelector(".cart-counter")
let counter = 1
let button = document.getElementsByClassName("add-to-cart-button")
// let tn = document.querySelectorAll(".add-to-cart-button")
for(let btn of button){
    btn.addEventListener('click', (event)=>{
        // Store what is clicked to the cookie Storage
        
        let itemName = btn.previousSibling.previousSibling.textContent
        let itemImage = btn.previousSibling.previousSibling.previousSibling
        let itemPrice = btn.previousSibling.textContent
        console.log(itemName)
        console.log(itemPrice)
        saveCounter(+getCounter() + 1)
        sup.textContent = getCounter()
        sup.style.color = "red"
    })
}

// Saving the counter to the cookie's local storage.
let saveCounter = (counter)=>{
    localStorage.setItem('counter',counter)
}

// Accessing the counter from the web local storage
let getCounter = ()=> localStorage.getItem('counter')