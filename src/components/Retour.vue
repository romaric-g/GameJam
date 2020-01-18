<template>
    <div>
        <div>
            <input @click="Launch()" type="submit" value="< Retour sur la page" class="return"/>
        </div>
        <div>
            <div style="flex-grow: 1">
                <input @click="Left()" type="submit" value="<" class="gauche"/>
            </div>
            <div class="image" style="flex-grow: 8">
                <img href="../images/map/Desert\ de\ jour.png" style="display:'inline"/>
                <img href="../images/map/Ocean\ de\ jour.png" style="display:'inline"/>
                <img href="../images/map/plaine\ de\ nuit.png" style="display:'inline"/>
            </div>
            <div style="flex-grow: 1">
                <input @click="Right()" type="submit" value=">" class="droite"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        pointermap: nowmap();
        }
    }
  methods: {
    Launch: function(event) {
      router.push('/Play');
  },
    Right: function(event) {
        pointermap++;
        pointermap = pointermap %12;
    },
    Left: function(event) {
        pointermap--;
        pointermap = pointermap %12;
    }
  }
}
</script>

<style lang="scss">

.return {
    font-size: 200%;
    background-color: #264653;
    Color: white;
    font-size: 60%;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    text-decoration: none;
}

.gauche {
    margin-top: 48%;
    margin-left: 5%;
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
    margin-top: 48%;
}

.droite {
    margin-top: 48%;
    margin-right: 5%;
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
