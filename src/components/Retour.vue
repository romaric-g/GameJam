<template>
    <div>
        <div>
            <input @click="Launch()" type="submit" value="< Retour sur la page" class="return"/>
        </div>
        <div>
            <div class="gauche" style="flex-grow: 1">
                <input @click="Left()" type="submit" value="<"/>
            </div>
            <div class="image" style="flex-grow: 8">
                <img href="../images/map/Desert\ de\ jour.png" style="display:'inline"/>
                <img href="../images/map/Ocean\ de\ jour.png" style="display:'inline"/>
                <img href="../images/map/plaine\ de\ nuit.png" style="display:'inline"/>
            </div>
            <div class="droite" style="flex-grow: 1">
                <input @click="Right()" type="submit" value=">"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    Launch: function(event) {
      router.push('/Play');
  },
    Right: function(event) {
        pointermap++;
    },
    Left: function(event) {
        pointermap--;
    }
  }
}
</script>

<style lang="scss">

.return {
    font-size: 200%;
    background-color: #264653;
    Color: white;
    font-size: 20%;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    text-decoration: none;
}

.gauche {
    padding-top: 48%;
    padding-left: 5%;
    background-color: #ef476f;
    Color: white;
    font-size: 20%;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    text-decoration: none;
}

.image {
    padding-top: 48%;
}

.droite {
    padding-top: 48%;
    padding-right: 5%;
    background-color: #ef476f;
    Color: white;
    font-size: 20%;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    text-decoration: none;
}

</style>
