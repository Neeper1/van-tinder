import vanData from './data.js'

class Van {
    constructor(data) {
        Object.assign(this, data)
    }
    
    setMatchStatus(status) {
        this.hasBeenLiked = status
        this.hasBeenSwiped = true
    }
    
    getVanHtml() {
        const { name, avatar, age, bio } = this
        return `
            <img id="like" class="badge-like none" src="images/like-image.png">
            <img id="nope" class="badge-nope none" src="images/nope-image.png">
            <div class="featured-van">
                <div class="van-info">
                    <h4> ${name}, ${age} </h4>
                    <div class="van-bio">
                        ${bio}
                    </div>
                </div>
                <img class="van-img" src="${avatar}">
            </div>`
    }
}

export default Van