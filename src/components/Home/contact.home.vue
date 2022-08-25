<template>
  <form enctype="multipart/form-data">
    <div class="contact-container">
      <div>
        <!-- container for the upcoming data -->
        <h2 class="font-2 font-title grey-darken--text text-align-center">Contáctanos</h2>
        <br />
        <v-container style="te">
          <v-row style="max-width: 50vw">
            <v-col cols="12" xl="6" lg="6">
              <label>nombre</label>
              <input
                class="w-full mt-4"
                label="Nombre"
                v-model="user.firstname"
                name="firstname"
                type="text"
              />
            </v-col>
            <v-col cols="12" xl="6" lg="6">
              <label>apellido</label>
              <input
                class="w-full mt-4"
                label="Nombre"
                v-model="user.lastname"
                name="lastname"
                type="text"
              />
            </v-col>
            <v-col cols="12" xl="6" lg="6">
              <label>email</label>
              <input
                class="w-full mt-4"
                label="Nombre"
                v-model="user.email"
                name="email"
                type="email"
              />
            </v-col>
            <v-col cols="12" xl="6" lg="6">
              <label>téléfono</label>
              <input
                class="w-full mt-4"
                label="Nombre"
                v-model="user.phone"
                name="phone"
                type="phone"
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <button class="ml-4 mt-2 btn-send" @click.prevent="onSubmit">
                <span>enviar</span>
              </button>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </form>
</template>

<script>
const user = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
};
import { postOrPut } from "../../api/requests";

export default {
  data: () => ({
    user: Object.assign(user),
  }),
  methods: {
    onSubmit() {
      console.log(this.status);
      const data = Object.assign({
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email,
        phone: this.user.phone,
      });
      console.log(data);
      postOrPut(data)
        .then(() => {})
        .catch(() => {});
    },
  },
  computed: {},
};
</script>

<style>
input:hover {
  border-color: #d8ad3d;
}
.btn-send {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 26px;
  /* or 173% */

  text-align: center;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background: #d8ad3d;
  border-radius: 50px;
  color: white;
  width: 170px;
  height: 55px;
  position: absolute;
  right: 23%;
}
label {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  line-height: 24px;
  /* or 185% */

  display: flex;
  align-items: center;
  text-transform: uppercase;
}
.row {
  margin-right: auto;
  margin-left: auto;
}
input {
  border: 1px solid grey;
  margin-left: auto;
  margin-right: auto;
}
.contact-container {
  padding: 4%;
}
.box {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  height: 13vh;
  min-width: 100px;
  width: 150px;
  border-radius: 25px !important;
  position: absolute;
  background: white;
  padding-top: 2%;
}
.box-1 {
  top: 15%;
  right: -5%;
}
.box-2 {
  top: 85%;
  right: -5%;
}
.box-3 {
  top: 75%;
  left: -5%;
}
@media screen and (max-width: 600px) {
  .contact-container {
    padding: 10%;
  }
  .box {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 7vh;
    min-width: 100px;
    width: 100px;
    border-radius: 20px !important;
    position: absolute;
    background: white;
    padding-top: 2.5%;
  }
  .box-1 {
    top: 35%;
    right: -5%;
  }
  .box-2 {
    top: 80%;
    right: -5%;
  }
  .box-3 {
    top: 75%;
    left: -5%;
  }
}
</style>
