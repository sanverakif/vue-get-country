<template>
  <div>
    <div><v-text-field label="gir" v-model="search"></v-text-field></div>
    <div v-if="countryInfo" >
      <div
        v-for="country in filteredCountries"
        :key="country.numericCode"
      >
        <router-link
          :to="{
            name: 'countryDetail',
            params: { countryDetail: country.name },
          }"
          class="linkTile"
        >
          <img
            v-bind:src="country.flags.svg"
            class="flag"
            height="100"
            width="100"
          />
          <div class="text">
            <h1>{{ country.name }}</h1>

            <p><span>Region: </span> {{ country.region }}</p>
            <p><span>Capital: </span> {{ country.capital }}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div
      v-for="country in countryInfo"
      :key="country.numericCode"
    >
      <img :src="country.flags.svg" />
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      dialog: false,
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "region", value: "region" },
        { text: "capital", value: "capital" },
      ],
      search: "",
      error: null,
      countryInfo: null,
    };
  },
  mounted() {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        console.log(response);
        this.countryInfo = response.data;
      })
      .catch((error) => (this.error = error));
  },
  computed: {
    filteredCountries: function () {
      return this.countryInfo.filter((country) => {
        if (this.region === "" || this.region === "All Regions") {
          return country.name.toLowerCase().match(this.search.toLowerCase());
        } else if (this.search !== "") {
          return country.name.toLowerCase().match(this.search.toLowerCase());
        } else {
          return country.region.match(this.region);
        }
      });
    },
  },
};
</script>
