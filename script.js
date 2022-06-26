let count = 0
let counter = document.querySelector("#counting")
let secondCounter = document.querySelector("#countingPart2")

function add1() {
    count++
    counter.innerText = count
    console.log(count)
}
function subtract1(){
    count--
    if(count < 0){
        counter.innerText = "Were not allowed to go below 0, please press the plus button to see more results"
        count++
    }
    else{
        counter.innerText = count
        console.log(count)
    }
}

function addPart2(){
    count++
    if (count > 2){
        count--
        secondCounter.innerText = "Woaaah now we arent allowed to go past 2"
    }
    else{
        secondCounter.innerText = count
        console.log(count)
    }
}
function subtract1Part2(){
    count--
    secondCounter.innerText = count
    console.log(count)
}