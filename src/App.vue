<template>
  <v-app class="animate__animated animate__fadeIn animate__slow">
    <v-app-bar :color="color" class="" fixed style="padding: 0 5%" dark flat>
      <div class="d-flex align-center">
        <!--p class="font-2 mb-n1" :style="`color:${colo}`">Logo</p-->
      </div>

      <v-spacer></v-spacer>
      <div class="d-none d-sm-flex">
        <div class="d-flex align-center" style="margin-right: 20px">
          <v-btn
            style="text-transform: none"
            class="font-7 btn-round btn-color-blue"
            text
            plain
          ></v-btn>
          <v-btn
            style="text-transform: none"
            class="font-7 btn-round btn-color-red"
            text
            plain
          ></v-btn>
          <v-btn
            style="text-transform: none"
            class="font-7 btn-round btn-color-yelow"
            text
            plain
          ></v-btn>
        </div>
      </div>
      <v-app-bar-nav-icon class="d-flex d-sm-none" />
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer class="bg-1">
      <v-container>
        <div class="d-sm-none d-md-flex">
          <v-row no-gutters style="" class="footer d-none d-sm-flex">
            <p class="font-7">© 2022 Logo LLC - All right reserved.</p>
            <v-spacer></v-spacer>
            <div class="jst" style="display: flex; margin-right: 20px">
              <v-btn
                style="flex: 1; text-transform: none"
                class="font-7 mr-2 btn-round btn-color-blue"
                x-small
                text
                plain
              ></v-btn>
              <v-btn
                style="flex: 1; text-transform: none"
                class="font-7 mr-2 btn-round btn-color-red"
                x-small
                text
                plain
              ></v-btn>
              <v-btn
                style="flex: 1; text-transform: none"
                class="font-7 mr-2 btn-round btn-color-yelow"
                x-small
                text
                plain
              ></v-btn>
            </div>
          </v-row>
        </div>
        <v-row
          no-gutters
          style="width: 100%"
          class="footer d-flex d-sm-none d-none d-sm-flex d-md-none"
        >
          <v-spacer></v-spacer>
          <div>
            <div style="display: flex; margin-right: 20px">
              <v-btn
                style="flex: 1; text-transform: none"
                class="font-7 mr-2 btn-color-blue"
                x-small
                text
                plain
                >Review</v-btn
              >
              <v-btn
                style="flex: 1; text-transform: none"
                class="font-7 mr-2 btn-color-red"
                x-small
                text
                plain
                >Tips</v-btn
              >
              <v-btn
                style="flex: 1; text-transform: none"
                class="font-7 mr-2 btn-color-yelow"
                x-small
                text
                plain
                >Alerts</v-btn
              >
            </div>
            <p class="font-7 text-center">© 2022 Logo LLC - All right reserved.</p>
          </div>
          <v-spacer></v-spacer>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import "./css/fonts.css";
export default {
  name: "App",

  data: () => ({
    //
    color: "transparent",
    colo: "white",
  }),
  mounted() {
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("nav-bar");
      if (window.scrollY > 20 && navbar) {
        this.color = "whitesmoke";
        this.colo = "grey";
        navbar.classList.add("scale-in-center");
      } else if (navbar) {
        this.color = "transparent";
        this.colo = "white";
        navbar.classList.remove("scale-in-center");
        navbar.classList.add("scale-out-center");
      }
    });
  },
};
</script>
<style>
.btn-round {
  margin: 12px;
  width: 62px !important;
  height: 62px !important;
  background: rgba(255, 255, 255, 0.15);
  border: 3px solid #009cd9;
  backdrop-filter: blur(14px);
  border-radius: 50% !important;
}
.btn-color-blue {
  border-color: #009cd9;
}
.btn-color-red {
  border-color: #b72c2c;
}
.btn-color-yelow {
  border-color: #d8ad3d;
}
.footer {
  padding: 4%;
}
@media screen and (max-width: 600px) {
  .footer {
    padding: 10%;
  }
}
</style>
