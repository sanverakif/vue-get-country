<template>
  <div>
    <v-card
      class="mx-auto my-12"
      width="300"
      v-for="country in countryInfo"
      :key="country.numericCode"
    >
      <v-img height="200" width="250" :src="country.flags.svg" style="margin-left:20px"></v-img>

      <v-card-title>{{ country.name }}</v-card-title>

      <v-card-text>
        <div class="my-4 text-subtitle-1">{{ country.nativeName }}</div>

        <div>
          {{ country.numericCode }}
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      error: null,
      countryInfo: null,
    };
  },
  mounted() {
    axios
      .get(
        `https://restcountries.com/v2/name/${this.$route.params.countryDetail}`
      )
      .then((response) => {
        this.countryInfo = response.data;
      })
      .catch((error) => (this.error = error));
  },
};
</script>

<style></style>
