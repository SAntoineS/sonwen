<template>
  <div class="fixed w-full h-24 flex justify-center items-center">
    <div class="flex p-5">
      <vue-custom-tooltip label="Weather" position="is-bottom">
        <font-awesome-icon class="text-3xl" :icon="['fas', 'umbrella']" @click="nav('weather')"/>
      </vue-custom-tooltip>
    </div>
    <div class="flex p-5">
      <vue-custom-tooltip label="Hub" position="is-bottom">
        <font-awesome-icon class="text-3xl" :icon="['fas', 'home']" @click="nav('hub')"/>
      </vue-custom-tooltip>
    </div>
    <div class="flex p-5">
      <vue-custom-tooltip label="Twitch" position="is-bottom">
        <font-awesome-icon class="text-3xl" :icon="['fas', 'video']" @click="nav('twitch')"/>
      </vue-custom-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  name: "app_nav",
  methods: {
    nav(url){
      window.location = url;
    }
  }
}
</script>

<style scoped>

</style>
