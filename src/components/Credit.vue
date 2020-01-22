<template>
    
    <div class="box">
        <h2>Crédits</h2>
       <br> <h1>Développeurs de Nuit et Jour:</h1></br>
      <p>Christopher Chabannes 
      <p>Clément Bertin
      <p> Dylan hertay 
      <p> Gauzi  Enzo Arnaudet
          <p>Romaric Gauzi</p>
      </p>
<br> </br>
      <h3>Remerciements:</h3> <br> </br>
      <p>L'INSERB MATMECA</p>
      <p>MMI Bordeaux Montaigne</p>
      <p>Asobo Studio</p>
      <p>Ubisoft</p>
      <p>BeTomorrow</p>
      <p>Marlène Dulaurans</p>
      <p>Raphael Marczak</p>
      <p>Martine Bornerie</p>
      <p>Denis Bartout</p>
        
    </div>

</template>

<script>

var audio1 = new Audio('src/sounds/credit.mp3');
audio1.loop = 0;
audio1.volume = 1;
var playPromise = audio1.play();
if (playPromise !== undefined) {
  playPromise.then(_ => {
    audio1.pause();
    // Automatic playback started!
    // Show playing UI.
  })
  .catch(error => {
    console.log(error)
    // Auto-play was prevented
    // Show paused UI.
  });
}
</script>

<style lang="scss">

.box {
    padding: 30px;
}
p{
    color: white;
    font-size: 30px;
    margin: 20px;
   font-family: 'Titillium Web', sans-serif;
}
h1, h3{
    color:white;
font-size: 40px;
}
h2{
    color: white;
    font-size: 60px;
    text-align:center;
}

</style>