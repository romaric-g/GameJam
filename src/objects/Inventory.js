export default class Inventory {
    constructor() {
        this.cards = []
    }

    addCard(card) {
        if(this.cards.length >= 5) {
            return false;
        }else{
            this.cards.push(card)
            return true;
        }
    }

}