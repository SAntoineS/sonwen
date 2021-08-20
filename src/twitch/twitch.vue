<template>
  <div class="select-none flex flex-col justify-center font-body bg-gray-200 h-screen">
    <div class="flex flex-col justify-center items-center h-1/3">
      <h1 class="text-7xl text-center">twitch <span class="font-black">lab</span></h1>

    </div>
    <div v-if="logged" class="h-2/3 flex items-center justify-center">
      <div class="h-full w-1/2 flex">

        <div class="w-1/2 h-full flex flex-col items-center">
          <h1 class="text-7xl text-center mb-10">your <span class="font-black">profile</span></h1>

          <img v-bind:src="userInfo.profile_image_url" alt="Girl in a jacket" width="300" height="300"
               class="rounded mb-10">
          <h1 class="text-5xl text-center cursor-pointer hover:text-gray-500"
              @click="nav('https://www.twitch.tv/sonwen ')">{{ userInfo.display_name }}</h1>
          <span class="text-xl text-center">{{ userInfo.email }}</span>
          <div class="w-96 mt-5">
            <span class="text-xl text-center">{{ userInfo.description }}</span>
          </div>
          <vue-custom-tooltip v-if="!isFav" label="Logout" position="is-bottom">
            <font-awesome-icon class="text-7xl mt-5" :icon="['fas', 'sign-out-alt']" @click="logout()"/>
          </vue-custom-tooltip>
        </div>
        <div class="w-1/2 h-full flex flex-col items-center">
          <h1 class="text-7xl text-center ">followed <span class="font-black">channels</span></h1>
          <input id="searchBar" type="text" placeholder="Search channel..."
                 class="bg-transparent w-96 text-xl outline-none text-gray-500 text-center mb-5 mt-5"
                 spellcheck="false" v-model="search">
          <div class="flex flex-col flex-wrap h-2/3 w-1/2">
            <span class="text-xl text-center mb-2  cursor-pointer hover:text-gray-500"
                  v-for="follow of filteredUserFollows"
                  @click="fetchGetStreamInfo(follow)"
                  :key="follow">{{ follow.to_name }}</span>

          </div>
        </div>
      </div>
      <div class="h-full w-1/2 flex flex-col items-center">
        <div class="h-36">
          <h1 class="text-4xl text-center mb-5" v-if="typeof streamInfo != 'undefined'">{{ streamInfo.title }}</h1>
          <h1 class="text-7xl text-center mb-5 text-red-600" v-if="typeof streamInfo == 'undefined'">no stream
            selected</h1>
        </div>
        <div id="twitch-embed"></div>
        <div id="twitch_embed_script_link"></div>
      </div>
    </div>
    <div v-if="!logged" class="h-2/3 flex flex-col items-center">
      <h1 class="text-5xl text-center">username <span class="font-black">twitch</span></h1>
      <input id="searchBarT" type="text" placeholder="Write..."
             class="bg-transparent h-24 w-1/5 text-4xl mt-5 outline-none text-gray-500 text-center"
             spellcheck="false" v-model="nameBar">
      <vue-custom-tooltip label="Login" position="is-bottom">
        <font-awesome-icon class="text-7xl mt-5" :icon="['fas', 'sign-out-alt']" @click="fetchUserInfo(nameBar)"/>
      </vue-custom-tooltip>
    </div>

  </div>
</template>

<script></script>

<script>
export default {
  name: "twitch",
  data: function () {
    return {
      search: '',
      userInfo: undefined,
      userFollows: undefined,
      streamInfo: undefined,
      logged: false,
      nameBar: undefined
    }
  },
  methods: {
    logout: function () {
      this.search = '';
      this.userInfo = undefined;
      this.userFollows = undefined;
      this.streamInfo = undefined;
      this.logged = false;
      this.nameBar = undefined;
      localStorage.removeItem('twitchNameLogged');
    },
    nav(url) {
      window.open(url);
    },
    fetchGetStreamInfo: function (channel) {
      var client_id = "nb7tgbm7awofkk236bcm3b0jf4mpa1";
      var access_token = "o82rpjtsjyb2uykbs1jeqimswycnns";

      fetch(
          'https://api.twitch.tv/helix/streams?user_login=' + channel.to_name,
          {
            "headers": {
              "Client-ID": client_id,
              "Authorization": "Bearer " + access_token
            }
          }
      ).then(function (response) {
        return response.json();
      }).then(data => {
        if (data.data[0]) {
          this.streamInfo = data.data[0];
          this.insertTwitchEmbedScript();
          setTimeout(() => this.runTwitchEmbed(), 500);
        }
        // NOTIF HERE, NOT LIVE
      });
    },
    insertTwitchEmbedScript: function () {
      let twitchEmbedDiv = document.querySelector('#twitch_embed_script_link');
      let twitch_embed_script = document.createElement('Script');
      twitch_embed_script.setAttribute('src', 'https://embed.' +
          'twitch.tv/embed/v1.js');
      twitchEmbedDiv.appendChild(twitch_embed_script);
    },
    runTwitchEmbed: function () {
      let twitchEmbed = document.querySelector('#twitch-embed');

      if (twitchEmbed.firstChild) {
        twitchEmbed.removeChild(twitchEmbed.lastChild);
      }

      var embed = new Twitch.Embed("twitch-embed", {
        width: 1276,
        height: 720,
        channel: this.streamInfo.user_name,
        layout: 'vide-with-chat',
      });

      embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
      })
    },
    fetchUserInfo: function (name) {
      var client_id = "nb7tgbm7awofkk236bcm3b0jf4mpa1";
      var access_token = "o82rpjtsjyb2uykbs1jeqimswycnns";

      fetch(
          // 'https://api.twitch.tv/helix/users',
          'https://api.twitch.tv/helix/users?login=' + name,
          {
            "headers": {
              "Client-ID": client_id,
              "Authorization": "Bearer " + access_token
            }
          }
      ).then(function (response) {
        return response.json();
      }).then(data => {
        if (data.data[0]) {
          localStorage.setItem('twitchNameLogged', name);
          this.userInfo = data.data[0];
          this.fetchUserFollows();
          this.logged = true;
        }

      });
    },
    fetchUserFollows: function () {
      var client_id = "nb7tgbm7awofkk236bcm3b0jf4mpa1";
      var access_token = "o82rpjtsjyb2uykbs1jeqimswycnns";

      fetch(
          'https://api.twitch.tv/helix/users/follows?from_id=' + this.userInfo.id,
          {
            "headers": {
              "Client-ID": client_id,
              "Authorization": "Bearer " + access_token
            }
          }
      ).then(function (response) {
        return response.json();
      }).then(data => {
        this.userFollows = data.data;
      });
    },
  },
  mounted() {
    var name = localStorage.getItem('twitchNameLogged');
    if (name) {
      this.fetchUserInfo(name);
    }
  },
  computed: {
    filteredUserFollows() {
      if (this.userFollows) {
        return this.userFollows.filter(channel => {
          return channel.to_name.toLowerCase().includes(this.search.toLowerCase())
        });
      }
      return false;
    }
  }
}
</script>

<style scoped>

</style>
