let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let resetBtn = document.getElementById("reset-btn")

function increment() {
    countEl.textContent++
}

function save() {
    saveEl.textContent += countEl.textContent + " - "

    if(saveEl.style.display == "") { // empty string is the computed value of "display: none"
        saveEl.style.display = "inline-block"
        resetBtn.style.display = "inline"
    }

    countEl.textContent = 0
}

function reset() {
    saveEl.textContent = "Previous entries: "

    if(saveEl.style.display == "inline-block") {
        saveEl.style.display = "" // empty string is the computed value of "display: none"
        resetBtn.style.display = ""
    }

    countEl.textContent = 0
}