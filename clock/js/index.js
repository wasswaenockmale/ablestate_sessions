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
                    if(value_sl == 6){
                        let value_mr = +mr.innerHTML
                        value_mr++
                        if(value_mr == 10){
                            // change the left munite span
                            let value_ml = +ml.innerHTML // Make it a number with a plus sign
                            value_ml++

                            // Here is when the value of the left minute clocks six
                            if(value_ml == 6){
                                let value_hr = +hr.innerHTML
                                value_hr++ 
                                
                                // When the value of right value of the hour changes.
                                if(value_hr == 10){
                                    let value_hl = +hl.innerHTML
                                    value_hl++

                                    hl.innerText = value_hl
                                    value_hr = 0
                                    hr.innerHTML = value_hr
                                }else{
                                    hr.innerText = value_hr
                                }
                                value_ml = 0
                                ml.innerHTML = value_ml
                            }else{
                                ml.innerText = value_ml
                            }
                            value_mr = 0
                            mr.innerHTML = value_mr
                        }else{
                            mr.innerText = value_mr
                        }
                        value_sl = 0
                        sl.innerHTML = value_sl
                    }else{
                        sl.innerHTML = value_sl
                    }
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

btn_pause.onclick = ()=>{
    // Pause the stop clock 
}

btn_stop.onclick = ()=>{

}