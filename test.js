
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function Random(A,n){
    var length = A.length;
    var T = [];
    var i = 0;
    while(i<length) {
        T.push(A[i]);
        i = i + 1;
    }
    i = 0;
    while (i<n) {
        var a = getRandomInt(length);
        var b = getRandomInt(length);
        var c = T[a];
        T[a] = T[b];
        T[b] = c;
        i = i + 1;
    }
    //Nouveau tableau trié aléatoirement
    return T;
}

var Biomes = [];
Biomes.push({name:"Desert",images:"path/images/map/Desert de jour.png",timeset:0},{name:"Desert",images:"path/images/map/Desert de nuit.png",timeset:1});
Biomes.push({name:"Savane",images:"path/images/map/Savane de jour.png",timeset:0},{name:"Savane",images:"path/images/map/Savane de nuit.png",timeset:1});
Biomes.push({name:"Plaine",images:"path/images/map/Plaine de jour.png",timeset:0},{name:"Plaine",images:"path/images/map/Plaine de nuit.png",timeset:1});
Biomes.push({name:"Jungle",images:"path/images/map/Jungle de jour.png",timeset:0},{name:"Jungle",images:"path/images/map/Jungle de nuit.png",timeset:1});
Biomes.push({name:"Marecage",images:"path/images/map/Marecage de jour.png",timeset:0},{name:"Marecage",images:"path/images/map/Marecage de nuit.png",timeset:1});
Biomes.push({name:"Ocean",images:"path/images/map/Ocean de jour.png",timeset:0},{name:"Ocean",images:"path/images/map/Ocean de nuit.png",timeset:1});

var Joueurs = [];
Joueurs.push({name:"Aventurier",images:"path/images/player/Aventurier.svg"});
Joueurs.push({name:"Météorologue",images:"path/images/player/Meteorologue.svg"});
Joueurs.push({name:"Chercheur",images:"path/images/player/Chercheur.svg"});
Joueurs.push({name:"Récolteur",images:"path/images/player/Recolteur.svg"});
Joueurs.push({name:"Géologue",images:"path/images/player/Géologue.svg"});
Joueurs.push({name:"Botaniste",images:"path/images/player/Botaniste.svg"});

var ChangementClimat = [];
ChangementClimat.push({name:"Comète",images:"path/images/ChangementClimat/Comete.svg"});
ChangementClimat.push({name:"Tremblement de Terre",images:"path/images/ChangementClimat/Tremblement de Terre.svg"});
ChangementClimat.push({name:"Marée",images:"path/images/ChangementClimat/Maree.svg"});
ChangementClimat.push({name:"Tsunami",images:"path/images/ChangementClimat/Tsunami.svg"});
//On peut rajouter des effets genre +1 ou -2 pour obtenir la carte correspondante (par exemple en fonction du taux d'humidité)

var Deplacement = [];
Deplacement.push({name:"Eclipse",images:"path/images/Deplacement/Eclipse.svg"});
Deplacement.push({name:"Inversion Rotation",images:"path/images/Deplacement/Inversion rotation.svg"});
Deplacement.push({name:"Réflexion du soleil par la lune",images:"path/images/Deplacement/Reflexion.svg"});
//On peut rajouter une description sur cet evenement pour que la carte soit un peu plus complète

var InfluenceClimat = [];
InfluenceClimat.push({name:"Danger Biologique",images:"path/images/InfluenceClimat/Danger biologique.svg"});
InfluenceClimat.push({name:"Tempête de neige",images:"path/images/InfluenceClimat/Tempete de neige.svg"});
InfluenceClimat.push({name:"Tornade",images:"path/images/InfluenceClimat/Tornade.svg"});
InfluenceClimat.push({name:"Météo favorable",images:"path/images/InfluenceClimat/Meteo favorable.svg"});
InfluenceClimat.push({name:"Pleine Lune",images:"path/images/InfluenceClimat/Pleine lune.svg"});
InfluenceClimat.push({name:"Pluie d'acide",images:"path/images/InfluenceClimat/Pluie acide.svg"});
InfluenceClimat.push({name:"Tempête de Sable",images:"path/images/InfluenceClimat/Tempete de Sable.svg"});

var P = [1,2,3,4,5,6,7,8,9,10,11,12,13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
console.log(P);
console.log(Random(P,50));
console.log(Biomes);
console.log(Random(Biomes,50));
console.log(Joueurs);
console.log(Random(Joueurs,50));
console.log(ChangementClimat);
console.log(Random(ChangementClimat,50));
console.log(Deplacement);
console.log(Random(Deplacement,50));
console.log(InfluenceClimat);
console.log(Random(InfluenceClimat,50));
