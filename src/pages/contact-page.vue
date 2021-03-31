<template>
  <div class="card">
    <div class="q-pa-md">
      <div v-if="regSuccessful" class="centerr">
        <div value='df  ' style='height: 100%; background: white;border-radius: 5px; padding: 20px'>
          <h3 style="text-align: center; margin: 10px;">Thank you!</h3>
          <h5 style="text-align: center; margin: 10px;">
            We'll mail you at <span style="color: black; text-decoration: underline ;">{{ this.email }}</span>
          </h5>
          <img
            src="../assets/thank-you.gif"
            alt=""
            style="margin-left: 25%; width: 400px"
          />
          <div>
            <router-link to="/" style="text-decoration:none">
              <q-btn
                style="margin-left:48%"
                color="primary"
                label="Home"
                size="large"
              />
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>
        <q-stepper vertical color="primary" v-model="ok">
          <h3 style="text-align: center; margin: 10px;">Send Us a Message!</h3>
          <q-input
            style="margin:40px;"
            outlined
            v-model="name"
            label="Name"
            type="text"
          />
          <q-input
            style="margin:40px;"
            outlined
            v-model="email"
            label="Email"
            type="email"
            :rules="[
              val =>
                (val &&
                  val.length > 10 &&
                  val.includes('@') &&
                  val.includes('.')) ||
                'Invalid Email'
            ]"
          />
          <div style="max-width: 100%;margin-top:10px">
            <q-input
              class="q-ma-lg"
              v-model="message"
              filled
              type="textarea"
              style="background-color: white"
              label="Message"
            />
          </div>
          <q-btn
            color="primary"
            label="Submit"
            style="margin-left:40%;"
            @click="onSubmit"
          />
        </q-stepper>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      regSuccessful: false,
      ok: ""
    };
  },
  methods: {
    onSubmit() {
      var info = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      console.log(info);
      axios
        .post("https://apiv1.plasmatch.in/SendMessage/", info)
        .then(response => {
          if (response.status === 201) {
            this.$q.notify({
              type: "positive",
              message: "Message Sent!",
              position: "top",
              duration: 50
            });
            console.log(response)
            this.regSuccessful = !this.regSuccessful;
          }
        })
        .catch(error => {
          if (error.response) {
            console.log("bad requset");
            this.$q.notify({
              type: "negative",
              message: "Enter A Valid Email or Try Again Later :(",
              position: "top",
              duration: 50
            });
          }
        });
    }
  }
};
</script>
<style>
#map {
  min-height: 500px;
  max-height: 500px;
  min-width: 300px;
  max-width: 700px;
}
.card {
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  border-radius: 5px;
}
.centerr {
  margin-left: auto;
  margin-right: auto;
}
</style>
