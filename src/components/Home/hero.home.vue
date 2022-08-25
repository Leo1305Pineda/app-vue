<template>
  <div>
    <v-row align="center" justify="center" class="hero" no-gutters>
      <v-col class="col-hero" cols="12" xl="12" lg="12">
        <v-container>
          <p class="font-1 margin-1 font-title grey-darken--text text-align-left">Logo</p>
          <p class="font-1 margin-1 font-title grey-darken--text text-align-left" style="margin-top: 15%;">
            El secreto <span>de tu cocina</span>
          </p>
        </v-container>
      </v-col>
      <v-col cols="12" xl="2" lg="2" />
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Hero",

  components: {},
};
</script>
<style>
p span {
  display: block;
}

.hero {
  height: 100vh;
  background: url("../../assets/images/hero.png");
  background-repeat: no-repeat, cover;
}

.col-hero {
  height: 80vh;
}

.margin-1 {
  margin-left: 10%;
}

.font-title {
  text-align: center;
  font-family: "Caveat";
}

@media screen and (max-width: 600px) {
  .hero {
    background: url("../../assets/images/hero.png");
    background-size: cover;
    padding: 5%;
  }
  .font-title {
    text-align: left;
    line-height: 1.2;
  }

  .font-desc {
    font-weight: 500;
    text-align: left;
  }
}
</style>
