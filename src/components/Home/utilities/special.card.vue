<template>
  <div>
    <v-card class="pa-2 card" color="white" flat>
      <div class="card-inner-1">
        <v-row style="height: 100%; margin-bottom: 16px" class="pa-4" no-gutters>
          <v-col cols="12" class="">
            <v-img class="image" eager :src="info.image"> </v-img>
          </v-col>
        </v-row>
      </div>

      <div class="card-inner-2">
        <div class="mt-2">
          <p class="font-4 weight-600">{{ info.title }}</p>
          <v-row no-gutters align="center" justify="center">
            <p class="p-14 weight-500 mb-n1">
              {{ info.content }}
            </p>
            <v-spacer></v-spacer>
          </v-row>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["info"],
};
</script>

<style>
.p-14 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
}
.card {
  height: 50vh;
  border-radius: 45px !important;

  margin: 5%;
}
.card-inner-1 {
  height: 50%;
}
.card-inner-2 {
  height: 35%;
  padding: 3% 6%;
}
.special-text {
  writing-mode: vertical-rl;
  letter-spacing: 7px;
}
.v-image__image {
  height: 204px;
}
@media screen and (max-width: 600px) {
  .card {
    height: 50vh;
    border-radius: 45px !important;

    margin: 5%;
  }
  .chip {
    height: 18px !important;
  }
  .card-inner-2 {
    height: 35%;
    padding: 2% 6%;
  }
}
</style>
