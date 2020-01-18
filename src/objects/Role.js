var roles = ["Métérologue", "Chercheur", "Farmer", "Botaniste", "Géologue", "Aventurier"]
var size = 6

export default class Role {
  constructor() {
    let i = Math.floor(Math.random() * size);
    this.name = roles[i];
    console.log(i)
    roles.splice(i, 1)
    size--
  }
}
