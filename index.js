import Van from './van.js'
import vanData from './data.js'

let currentVanIndex = 0
let currentVan = new Van(vanData[currentVanIndex])
let isWaiting = false

document.getElementById("accept-button").addEventListener('click', ()=> action(true))
document.getElementById("reject-button").addEventListener('click', ()=> action(false))


function action(status) {
    if(!isWaiting) {
        isWaiting = true
        let actionEl = status ? "like" : "nope"
        document.getElementById(actionEl).classList.remove('none')
    
        if(currentVanIndex < vanData.length - 1) {
            currentVan.setMatchStatus(status)
        } else if(currentVanIndex < vanData.length > 0){
                setTimeout(() => {
                    currentVan.setMatchStatus(false);
                    currentVanIndex = -1
                }, 1500)
            }

                setTimeout(() => {
                    getNewVan()
                    isWaiting = false
                }, 1500)
            } 
            else {
                endSwiping()
            }
}
    


function endSwiping() {
    setTimeout(()=>{
        document.body.innerHTML = `
        <div class="end-swiping">
            <h2>Sorry! 🥲 No more vans in your area at the moment.</h2>
            <h3>Come back later to see what's new</h3>
            <span class="emoji">🚐 💨</span>
        </div>
        `
    }, 1500)
}


function getNewVan() {
    currentVanIndex += 1
    currentVan = new Van(vanData[currentVanIndex])
    render()
}

function render() {
    document.getElementById('card').innerHTML = currentVan.getVanHtml()
}

render()