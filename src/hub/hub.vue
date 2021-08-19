<template>
  <div class="select-none flex flex-col justify-center font-body bg-gray-200 h-screen">
    <div class="flex flex-col justify-center items-center h-1/3">
      <h1 class="text-7xl text-center">
        sonwen <span class="font-black">hub</span>
      </h1>
      <div class="w-96 mt-5">
        <socialmedia/>
      </div>
    </div>
  </div>
</template>

<script>
import socialmedia from "@/hub/components/socialmedia";

export default {
  name: 'hub',
  components: {
    socialmedia
  }
}
</script>

<style scoped>

</style>
