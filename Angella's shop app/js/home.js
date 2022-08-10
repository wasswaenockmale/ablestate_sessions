import { inventory } from "./inventory.js";

// console.log(inventory)
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
        button.classList.add('add-to-cart-button')

        finaldiv.appendChild(img)
        finaldiv.appendChild(h4)
        finaldiv.appendChild(p)
        finaldiv.appendChild(button)

        // Now append the final div to the itemsdiv
        itemdiv.appendChild(finaldiv)

        // Now append it to the itemSection
        itemSection.appendChild(itemdiv)
        console.log(itemSection)
        container.appendChild(itemSection)
        // console.log(`${items.name} belongs to ${inventoryType}`)

    }
    
}
/**
 * making the 'add to cart' clickable and adding items to the cart as well.
 */