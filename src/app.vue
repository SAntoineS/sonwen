<template>
  <div>
<!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">-->
<!--    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">-->
    <app_nav></app_nav>
    <router-view></router-view>
  </div>
</template>

<script>
import app_nav from "@/app_nav";

export default {
  name: "app",
  components: {
    app_nav
  }
}
</script>

<style scoped>

</style>
