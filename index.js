let countEl = document.getElementById("count-el")
let saveElHeader = document.getElementById("save-el-header")
let saveEl = document.getElementById("save-el")
let resetBtn = document.getElementById("reset-btn")

function increment() {
    countEl.textContent++
}

function save() {
    saveElHeader.textContent = "Previous entries:"
    saveEl.textContent += countEl.textContent + " - "

    if(resetBtn.style.display == "") { // empty string is the computed value of "display: none"
        resetBtn.style.display = "inline-block"
    }

    countEl.textContent = 0
}

function reset() {
    saveEl.textContent = saveElHeader.textContent = "" // "" reset back to the previous tag content

    if(resetBtn.style.display == "inline-block") {
        resetBtn.style.display = ""
    }

    countEl.textContent = 0
}