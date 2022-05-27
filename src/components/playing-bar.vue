<template>
  <div class="root-playing-bar">
    <div class="playing">
      <Header class="header" />
      <Barplay class="playlist" />
      <Volume class="volume" />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import Header from "./playlist/header-track.vue";
import Volume from "./playlist/volume-audio.vue";
import Barplay from "./playlist/barplay-cpn.vue";
export default {
  components: {
    Header,
    Volume,
    Barplay,
  },
  mounted() {
    this.getTracks();
    setTimeout(() => {
      this.getCurrentTrack();
    }, 1000);
  },

  data() {},

  computed: {},

  methods: {
    ...mapActions(["getTracks", "getCurrentTrack"]),
  },
};
</script>

<style scoped>
.root-playing-bar {
  height: 100%;
  color: white;
  padding: 0 16px;
}
.playing {
  display: flex;
  flex-direction: row;
  height: 100%;
}

/* header */
.header {
  width: 30%;
  min-width: 180px;
}

/* playlist */
.playlist {
  width: 40%;
  max-width: 722px;
}

/* volume */
.volume {
  width: 30%;
  min-width: 180px;
}
</style>