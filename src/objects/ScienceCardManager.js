import ScienceCard from "./ScienceCard";

export default class ScienceCardManager {
    
    constructor(name, description) {
        this.cards = [
            new ScienceCard(1,"Le nom 1", "La description"),
            new ScienceCard(2,"Le nom 2", "La description"),
            new ScienceCard(3,"Le nom 3", "La description"),
            new ScienceCard(4,"Le nom 4", "La description"),
            new ScienceCard(5,"Le nom 5", "La description"),
            new ScienceCard(6,"Le nom 6", "La description"),
            new ScienceCard(7,"Le nom 7", "La description"),
            new ScienceCard(8,"Le nom 8", "La description"),
            new ScienceCard(9,"Le nom 9", "La description"),
            new ScienceCard(10,"Le nom 10", "La description"),
            new ScienceCard(11,"Le nom 11", "La description"),
            new ScienceCard(12,"Le nom 12", "La description")
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