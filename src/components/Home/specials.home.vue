<template>
  <div style="position: relative" class="sp-container">
    <div>
      <!-- container for the upcoming data -->
      <h2 class="font-2 font-title grey-darken--text text-align-center">
        Nuestros artículos
      </h2>
      <br />
      <v-container>
        <v-row v-if="tab == 1" no-gutters>
          <v-col cols="12" xl="4" lg="4">
            <v-card class="pa-2 card" color="white" flat>
              <ul>
                <li class="li-select" @click="updateTab(1)">Todos</li>
                <li @click="updateTab(2)">Productos</li>
                <li @click="updateTab(3)">Recetas</li>
                <li @click="updateTab(4)">Consejos</li>
              </ul>
            </v-card>
          </v-col>
          <v-col cols="12" v-for="i in data.all" :key="i[i + 1]" xl="4" lg="4">
            <specialCardVue :info="i" />
          </v-col>
        </v-row>
        <v-row v-else-if="tab == 2" no-gutters>
            <v-col cols="12" xl="4" lg="4">
            <v-card class="pa-2 card" color="white" flat>
              <ul>
                <li @click="updateTab(1)">Todos</li>
                <li class="li-select" @click="updateTab(2)">Productos</li>
                <li @click="updateTab(3)">Recetas</li>
                <li @click="updateTab(4)">Consejos</li>
              </ul>
            </v-card>
          </v-col>
          <v-col cols="12" v-for="i in data.products" :key="i[i + 1]" xl="4" lg="4">
            <specialCardVue :info="i" />
          </v-col>
        </v-row>
        <v-row v-else-if="tab == 3" no-gutters>
            <v-col cols="12" xl="4" lg="4">
            <v-card class="pa-2 card" color="white" flat>
              <ul>
                <li @click="updateTab(1)">Todos</li>
                <li @click="updateTab(2)">Productos</li>
                <li class="li-select" @click="updateTab(3)">Recetas</li>
                <li @click="updateTab(4)">Consejos</li>
              </ul>
            </v-card>
          </v-col>
          <v-col cols="12" v-for="i in data.recetas" :key="i[i + 1]" xl="4" lg="4">
            <specialCardVue :info="i" />
          </v-col>
        </v-row>
        <v-row v-else no-gutters>
            <v-col cols="12" xl="4" lg="4">
            <v-card class="pa-2 card" color="white" flat>
              <ul>
                <li @click="updateTab(1)">Todos</li>
                <li @click="updateTab(2)">Productos</li>
                <li @click="updateTab(3)">Recetas</li>
                <li class="li-select" @click="updateTab(4)">Consejos</li>
              </ul>
            </v-card>
          </v-col>
          <v-col cols="12" v-for="i in data.tips" :key="i[i + 1]" xl="4" lg="4">
            <specialCardVue :info="i" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import specialCardVue from "./utilities/special.card.vue";
import { indexArticles } from "../../api/requests";

export default {
  data() {
    return {
      data: {
        all: [],
        products: [],
        recetas: [],
        tpis: [],
      },
      tab: 1,
      tabs: {
        all: 1,
        products: 2,
        recetas: 3,
        tips: 4,
      },
      sw: 1,
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.allArticles();
  },
  methods: {
    updateTab(value) {
      this.tab = value;
    },
    allArticles() {
      console.log("BUG");
      //  this.$vs.loading({ color: '#004f93' })
      indexArticles()
        .then((resp) => {
          this.data.all = resp.data;
          this.data.products = resp.data.filter((x) => {
            return x.category === "Productos";
          });
          this.data.recetas = resp.data.filter((x) => {
            return x.category === "Recetas";
          });
          this.data.tips = resp.data.filter((x) => {
            return x.category === "Consejos";
          });
        })
        .catch((error) => {
          console.log("error", error);
          //   this.$vs.loading.close()
        });
    },
  },
  components: {
    specialCardVue,
  },
};
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
ul {
  list-style: none;
}
ul[role="list"],
ol[role="list"],
li {
  list-style: none;
}
li {
  padding-top: 15px;
  padding-bottom: 15px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 23px;
  /* or 192% */

  letter-spacing: 0.03em;
  text-transform: uppercase;
}
.li-select {
  color: #d8ad3d;
}
li:hover {
  color: #d8ad3d;
}
ul.ba {
  list-style-type: none;
}
.sp-container {
  padding: 4%;
}
.tab {
  margin: 0 10%;
  background: #ffffff;
  height: 8vh;
  border-radius: 13px;
}
.sh-container {
  position: absolute;
  top: -15%;
  width: 100%;
}
@media screen and (max-width: 600px) {
  .sh-container {
    position: absolute;
    top: -3em;
    width: 90% !important;
  }
  .hide-xs {
    display: none !important;
  }
}
</style>
