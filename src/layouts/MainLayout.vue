<template>
  <q-layout view="hHh lpR fff">
    <q-header
      style="backdrop-filter: blur(10px);background-color: rgba(173, 216, 230, 0.5);"
    >
      <q-toolbar>
        <q-toolbar-title>
          <router-link class="router-text" to="/">
            <div class="logo">🩸Plasmatch</div>
          </router-link>
        </q-toolbar-title>

        <q-btn
          dense
          flat
          round
          icon="menu"
          v-if="$q.screen.lt.md"
          @click="right = !right"
        />
        <div v-else>
          <div class="non-ham">
            <div v-if="isOnLandingPage">
              <router-link class="router-text" to="/DonorRegistration">
                <q-btn
                  style="background-color: rgba(173, 216, 230, 0.5); "
                  class="q-mr-sm q-pa-sm q-ma-sm"
                  outline
                  rounded
                  label="Donor"
                />
              </router-link>
              <router-link class="router-text" to="/PatientRegistration">
                <q-btn
                  class="q-mr-sm q-pa-sm q-ma-sm"
                  outline
                  rounded
                  label="Patient"
                />
              </router-link>
              <router-link class="router-text" to="/ContactUs">
                <q-btn
                  color="primar"
                  class="q-mr-sm q-pa-sm q-ma-sm"
                  outline
                  rounded
                  icon-right="mail"
                  label="Contact Us"
                />
              </router-link>
            </div>
          </div>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="right"
      side="right"
      overlay
      behavior="mobile"
      content-class="bg-primary text-white"
    >
      <!-- drawer content -->
      <div style=" margin-top:50%; left-align:left; padding-left:30%">
        Menu
        <hr style="border: 3px solid white;border-radius: 5px;" />
        <router-link class="ham-options" to="/DonorRegistration">
          Donor
        </router-link>
        <router-link class="ham-options" to="/PatientRegistration">
          Patient
        </router-link>
        <router-link class="ham-options" to="/ContactUs">
          Contact
        </router-link>
      </div>
    </q-drawer>

    <!-- <q-footer reveal v-if="$router.currentRoute.name === 'home'">
      <q-toolbar>
        <q-toolbar-title>© Plasmatch 2020</q-toolbar-title>
      </q-toolbar>
    </q-footer> -->

    <q-page-container
      id="page-container"
      class="bg-gra-02"
      style="min-height:100vh; max-hight:100%; padding-right:0px; padding-top:10px"
    >
      <transition name="router-anim">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import Vue from "vue";
import VueTypedJs from "vue-typed-js";

Vue.use(VueTypedJs);

export default {
  name: "MainLayout",
  data() {
    return {
      settingsOpen: false,

      right: false,
      isOnLandingPage: true,

      email: "",
      password: "",
      name: "",

      userName: "",
      userEmail: ""
    };
  },
  updated() {
    if (this.$router.currentRoute.name === "home") this.isOnLandingPage = true;
    else this.isOnLandingPage = false;
  },
  mounted() {
    if (this.$router.currentRoute.name === "home") this.isOnLandingPage = true;
    else this.isOnLandingPage = false;
  },
  methods: {
    patientSignUp() {
      this.$router.push("PatientRegistration");
    },
    donorSignUp() {
      this.$router.push("DonorRegistration");
    }
  }
};
</script>

<style>
.bg-gra-02 {
  /* background: -webkit-linear-gradient(left, #e0eff5 0%, #2196F3 100%); */
  background: #add8e6;
}
.router-anim-enter-active {
  transition: all 0.3s ease-in-out;
}
.router-anim-leave-active {
  transform: scale(1);
}
.router-anim-enter,
.router-anim-leave-to {
  /* transform: translateX(100px); */
  transform: scale(1.1);
  opacity: 0;
}
.logo {
  font-family: "Lobster";
  color: red;
  font-size: 2em;
  transition: 0.1s;
  width: 1px;
}
.logo:hover {
  /* font-size: 55px; */
  filter: brightness(0.9);
  transition: all 0.1s ease-out;
}
.router-text {
  text-decoration: none;
  color: white;
  font-size: 20px;
  transition: 0.1s;
  cursor: pointer;
}
.ham-options {
  display: block;
  margin-top: 0.6em;
  font-size: 2em;
  text-decoration: none;
  text-align: left;
  font-weight: bold;
  color: white;
}

.sign-up-panel {
  border-radius: 20px;
  position: absolute;
  background: white;
  width: 400px;
  right: 0px;
  top: 50px;
}

.sign-up-panel-content {
  padding: 0px;
  color: black;
}

.slide-enter-active {
  transition: all 0.3s;
}
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-enter {
  transform: translateY(-50px);
}
.slide-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}

.ham {
  display: none;
}
.non-ham {
  display: block;
}

@media screen and (max-width: 860px) {
  .ham {
    display: block;
  }
  .non-ham {
    display: none;
  }
}
</style>
