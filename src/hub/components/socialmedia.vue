<template>
  <div class="flex justify-evenly">
    <vue-custom-tooltip label="Twitter" position="is-bottom">
      <a href="https://twitter.com/antoine_xrz" target="_blank" class="fa fa-twitter"></a>
    </vue-custom-tooltip>
    <vue-custom-tooltip label="Instagram" position="is-bottom">
      <a href="https://www.instagram.com/antoine.xrz/" target="_blank" class="fa fa-instagram"></a>
    </vue-custom-tooltip>
    <vue-custom-tooltip label="GitHub" position="is-bottom">
      <a href="https://github.com/SAntoineS" target="_blank" class="fa fa-github"></a>
    </vue-custom-tooltip>
  </div>
</template>

<script>

export default {
  name: "socialmedia"
}
</script>

<style scoped>
.fa {
  padding: 10px;
  font-size: 35px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
</style>
