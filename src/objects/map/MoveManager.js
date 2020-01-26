import EnvironmentType from "./EnvironementType"

const biomes = [
    new EnvironmentType("Océan", 4, [1,0,0,0]),
    new EnvironmentType("Marais", 3, [1,0,0,1]),
    new EnvironmentType("Jungle", 2, [1,0,1,1]),
    new EnvironmentType("Plaine", 1, [0,1,1,0]),
    new EnvironmentType("Savane", 0, [0,1,0,0]),
    new EnvironmentType("Désert", 5, [0,1,0,0])
]

export default class EnvironmentManager {

    constructor(){
        this.map = [];
        for (let index = 0; index < 12; index++) {
            this.map[index] = biomes[ (Math.floor(Math.random() * 6)) ]
        }
        this.mapPosition = 0;
    }

    getNextBiome(nextAmount) {
        var p = mapPosition;
        nextAmount = (nextAmount % 12) + 12;
        p+= nextAmount;
        p = p % 12;
        return biomes[p];
    }
}