// Global variables

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let hScore = 0
let gScore = 0


// Show the leader
function markLeader() {
    homeScore.classList = ""
    guestScore.classList = ""
    if(hScore > gScore) {
        homeScore.classList.add("winning")
        guestScore.classList.add("losing")
    }else if (hScore < gScore) {
        guestScore.classList.add("winning")
        homeScore.classList.add("losing")
    } else {
        homeScore.classList.add("equal")
        guestScore.classList.add("equal")
    }
}

// Home function

function h_add(n) {
    hScore = parseInt(homeScore.textContent) + n
    homeScore.textContent = hScore
    console.log(hScore)
    markLeader()
}

// Guest function

function g_add(n) {
    gScore = parseInt(guestScore.textContent) + n
    guestScore.textContent = gScore
    console.log(gScore)
    markLeader()
}

// New Game

function newGame() {
    homeScore.classList = ""
    guestScore.classList = ""

    hScore = 0
    homeScore.textContent = hScore

    gScore = 0
    guestScore.textContent = gScore
}
