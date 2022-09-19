// Main sections of the stop clock.
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")
const micro = document.getElementById("microseconds")

// second section of the stop clock.
// This includes the left and right

// hour section
const hl = document.getElementById("hl")
const hr = document.getElementById("hr")

// minute section
const ml = document.getElementById("ml")
const mr = document.getElementById("mr")

// seconds section
const sl = document.getElementById("sl")
const sr = document.getElementById("sr")


// Now call buttons 
const btn_start = document.getElementById("start")
const btn_pause = document.getElementById("pause")
const btn_stop = document.getElementById("stop")

// When the user clicks on the start button.
btn_start.onclick = ()=>{
    if(micro.innerHTML == '0'){
        let micro_value = +micro.innerText
        setInterval(()=>{
            micro_value+=1
            micro.innerText = micro_value
            if(micro_value === 60){
                let value_sr = +sr.innerHTML
                value_sr++
                if(value_sr ==10){
                    let value_sl = +sl.innerHTML
                    value_sl++
                    sl.innerHTML = value_sl
                    value_sr = 0
                    sr.innerText = value_sr
                }else{
                    sr.innerHTML = value_sr
                }
                sr.innerText = value_sr
                micro_value = 0
            }
        },15)
    }
}

