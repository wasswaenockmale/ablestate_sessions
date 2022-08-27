const images = document.querySelectorAll("img")
let arrClassNames = Array(images.length).fill("num")
let obj = {
    "one":1,
    "two":2,
    "three":3,
    "four":4
}

let imagedir = "./media/images/" // This is the starter URL for the images.

for(let image of images){
    image.addEventListener('click',()=>{
        let check = image.src.split("/")[image.src.split("/").length - 1]
        if(!check.includes("fill")){
            let [num, ext] = check.split("_")
            let index = obj[num]
            for(let k =  0; k < index; k++){
                let [name, extension] = ext.split(".")
                let newNum =  getKey(obj,k+1)
                arrClassNames[k] = newNum;
                images[k].src= imagedir+newNum+"_"+name+"_"+"fill"+"."+extension
                if(images[k].previousElementSibling !== null){
                    images[k].previousElementSibling.classList.add("hr-progress")
                    // console.log(`${k}`,images[k].nextElementSibling)
                }
            }
        }else{
            // Here, I am supposed to undo the progress.
            let [num, ext,fill] = check.split("_")
            let index = obj[num] + 1
            
            for(let k = arrClassNames.length-1; k >= index; k--){
                let newNum = getKey(obj, k+1)
                arrClassNames[k] = "num"
                images[k].src = imagedir+newNum+"_"+ext+".svg"
                if(images[k].nextElementSibling !== null){
                    images[k].nextElementSibling.classList.remove("hr-progress")
                }
            }
            images[index-1].src = imagedir+getKey(obj,index)+"_"+ext+".svg"
            if(images[index-1].nextElementSibling !== null){
                images[index - 1].nextElementSibling.classList.remove("hr-progress")
                // images[index-1].previousElementSibling.classList.remove("hr-progress")
            }
        }
    })
}


// This function helps me find the key basing on the value.
function getKey(object, value){
    return Object.keys(obj).find(key=>object[key] === value)
}