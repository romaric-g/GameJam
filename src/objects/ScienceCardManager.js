import ScienceCard from "./ScienceCard";

export default class ScienceCardManager {
    
    constructor(name, description) {
        this.cards = [
            new ScienceCard("Le nom 1", "La description"),
            new ScienceCard("Le nom 2", "La description"),
            new ScienceCard("Le nom 3", "La description"),
            new ScienceCard("Le nom 4", "La description"),
            new ScienceCard("Le nom 5", "La description"),
            new ScienceCard("Le nom 6", "La description"),
            new ScienceCard("Le nom 7", "La description"),
            new ScienceCard("Le nom 8", "La description"),
            new ScienceCard("Le nom 9", "La description"),
            new ScienceCard("Le nom 10", "La description"),
            new ScienceCard("Le nom 11", "La description"),
            new ScienceCard("Le nom 12", "La description")
        ]
        this.availableCard = null;
    }

    reavealCard() {
        console.log("lqs,fkse,fkz enkoeznfkzn ekfnzekl f")
        var i = Math.floor(Math.random() * this.cards.length);
        this.availableCard = this.cards.splice(i,1)[0];
    }

    removeFromCardList() {
        this.availableCard = null
    }

    returnToCardList() {
        this.cards.push(this.availableCard)
        this.availableCard = null
    }




}