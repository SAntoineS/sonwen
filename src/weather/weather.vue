<template>
  <div class="select-none flex flex-col justify-center font-body bg-gray-200 h-screen">
    <div class="flex flex-col justify-center items-center h-1/3">
      <h1 class="text-7xl text-center">weather <span class="font-black">lab</span></h1>
      <div class="flex flex-col items-center h-32">
        <input id="searchBar" type="text" placeholder="Search..."
               class="bg-transparent w-96 text-5xl mt-10 outline-none text-gray-500 text-center"
               spellcheck="false" v-model="query" @keypress="fetchWeather">
        <span class="text-sm text-red-600 uppercase" v-if="weather.cod === '404'">{{ weather.message }}</span>
        <span class="text-sm text-red-600 uppercase" v-if="weather.cod === '400'">{{ weather.message }}</span>
      </div>

    </div>
    <div class="flex justify-center h-1/3">

      <div class="flex flex-col items-center justify-center w-96 h-96" v-if="typeof weather.main != 'undefined'">
        <h1 class="text-4xl text-center">
          <vue-custom-tooltip v-if="isFav" label="Remove from favorite" position="is-bottom">
            <font-awesome-icon class="text-xl mb-1" :icon="['fas', 'trash-alt']" @click="removeFromFav(weather.name)"/>
          </vue-custom-tooltip>
          <vue-custom-tooltip v-if="!isFav" label="Add to favorite" position="is-bottom">
            <font-awesome-icon class="text-xl mb-1" :icon="['fas', 'heart']" @click="addToFav(weather.name)"/>
          </vue-custom-tooltip>
          {{ weather.name }}
          <span
              :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : 'cold'"
              class="text font-black">{{ weather.sys.country }}
        </span>
        </h1>
        <h1 class="text-xl text-center mt-2">{{ dateBuilder() }} <span
            :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : 'cold'"
            class="text font-black">{{ year }}</span></h1>
        <span :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : 'cold'"
              class="text text-7xl text-center mt-10 font-black">{{ Math.round(weather.main.temp) }}°C</span>
        <div v-if="weather.weather[0].main === 'Clouds'">
          <font-awesome-icon class="text-5xl mt-5" :icon="['fas', 'cloud']"/>
        </div>
        <div v-if="weather.weather[0].main === 'Rain'">
          <font-awesome-icon class="text-5xl mt-5" :icon="['fas', 'cloud-rain']"/>
        </div>
        <div v-if="weather.weather[0].main === 'Snow'">
          <font-awesome-icon class="text-5xl mt-5" :icon="['fas', 'snowflake']"/>
        </div>
        <div v-if="weather.weather[0].main === 'Clear'">
          <font-awesome-icon class="text-5xl mt-5" :icon="['fas', 'sun']"/>
        </div>
        <span class="text text-2xl text-center">{{ weather.weather[0].description }}</span>

      </div>


    </div>

    <div class="h-1/3 flex flex-col items-center">
      <h1 class="text-7xl text-center-">favorites <span class="font-black">cities</span></h1>

      <div class="flex items-center justify-evenly w-full h-full text-gray-500">
        <h1 class="text-2xl text-center font-black text-red-600" v-if="favLocation.length === 0">no favorites</h1>
        <div v-for="nameOfFav of favLocation" :key="nameOfFav">
          <h1 class="text-5xl text-center font-black hover:text-black cursor-pointer" @click="searchByFav(nameOfFav)">{{ nameOfFav }}</h1>
        </div>
      </div>


    </div>

  </div>
</template>

<script>

export default {
  name: "weather",
  data() {
    return {
      api_key: '5b2a810a218c72ab85aa753ff9804d23',
      url_base: 'https://api.openweathermap.org/data/2.5/',
      query: '',
      weather: {},
      year: undefined,
      favLocation: [],
      isFav: false
    }
  },
  mounted() {
    this.favLocation = JSON.parse(localStorage.favLocations);
    console.log(this.favLocation);
    console.log(JSON.parse(localStorage.favLocations));
  },
  methods: {
    fetchWeather(e) {
      if (e.key === "Enter") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&units=metric&APPID=${this.api_key}`).then(res => {
          return res.json();
        }).then(this.setResults);
      }
    },
    setResults(results) {
      console.log(results);
      this.isFav = this.favLocation.includes(results.name);
      this.weather = results;
    },
    dateBuilder() {
      let d = new Date();
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      this.year = d.getFullYear();

      return `${day} ${date} ${month}`;
    },
    searchByFav(name){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&APPID=${this.api_key}`).then(res => {
        return res.json();
      }).then(this.setResults);
    },
    addToFav(name) {
      this.favLocation.push(name);
      localStorage.favLocations = JSON.stringify(this.favLocation);
      this.isFav = true;
    },
    removeFromFav(name){
      const list = JSON.parse(localStorage.favLocations);

      const index = list.indexOf(name);
      if (index > -1) {
        list.splice(index, 1);
      }
      localStorage.favLocations = JSON.stringify(list);
      this.favLocation = JSON.parse(localStorage.favLocations);
      this.weather = {};
    }
  }
}
</script>

<style scoped>
.text.warm {
  color: #c50007;
}

.text.cold {
  color: #0052c5;
}

</style>
