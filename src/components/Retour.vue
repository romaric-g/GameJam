<template>
    <div>
        <div>
            <input @click="Launch()" type="submit" value="<  Retour sur la page" class="return"/>
        </div>
        <div style="c">
            <div class="flex">
                <input @click="Left()" type="submit" value="<" class="fleche"/>
                <input @click="Right()" type="submit" value=">" class="fleche"/>
            </div>
            <div class="image">
                <img src="../images/map/Desert de jour.png" width="32.5%" style="display:'inline'"/>
               <img src="../images/map/Ocean de jour.png" width="32.5%" style="display:'inline'"/>
                <img src="../images/map/plaine de nuit.png" width="32.5%" style="display:'inline'"/>
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
    // Launch: function(event) {
    //   router.push('/Play');
    // },
    // Right: function(event) {
    //     pointermap++;
    //     pointermap = pointermap %12;
    // },
    // Left: function(event) {
    //     pointermap--;
    //     pointermap = pointermap %12;
    // }

}
</script>

<style lang="scss">

.return {
    font-size: 200%;
    background-color: #264653;
    Color: white;
    font-size: 120%;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    border: none;
    text-decoration: none;
}

.fleche {
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
