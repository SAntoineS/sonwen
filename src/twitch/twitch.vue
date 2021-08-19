<template>
  <div class="select-none flex flex-col justify-center font-body bg-gray-200 h-screen">
    <div class="flex flex-col justify-center items-center h-1/3">
      <h1 class="text-7xl text-center">twitch <span class="font-black">lab</span></h1>

    </div>
    <div class="h-2/3 border-2 border-red-600">

    </div>

  </div>
</template>

<script>
export default {
  name: "twitch",
  data: function () {
    return {
      userInfo: undefined
    }
  },
  methods: {
    fetchUserInfo: function () {
      var client_id = "nb7tgbm7awofkk236bcm3b0jf4mpa1";
      var access_token = "o82rpjtsjyb2uykbs1jeqimswycnns";

      fetch(
          'https://api.twitch.tv/helix/users',
          {
            "headers": {
              "Client-ID": client_id,
              "Authorization": "Bearer " + access_token
            }
          }
      ).then(function (response) {
        return response.json();
      }).then(data => {
        console.log(data.data[0]);
      })
    }
  },
  mounted() {
    this.fetchUserInfo();
  }
}
</script>

<style scoped>

</style>
