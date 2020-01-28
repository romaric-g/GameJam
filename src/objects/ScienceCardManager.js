import ScienceCard from "./ScienceCard";

export default class ScienceCardManager {

    constructor(name, description) {
        this.cards = [
            new ScienceCard(1,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(2,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(3,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(4,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(5,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(6,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(7,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(8,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(9,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(10,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(11,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne"),
            new ScienceCard(12,"Vous gagner des points de science", "Lors d’une pluie acide l'environnement est protégé et l'ecosystème se soigne")
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
