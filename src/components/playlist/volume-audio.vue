<template>
  <div class="volume-root">
        <button class="lyric">
          <fa-icon icon="align-center" />
        </button>

        <button class="listalbum">
          <fa-icon icon="list" />
        </button>

        <div class="vol">
          <button class="volumerange" @click="mute()">
            <fa-icon icon="volume-high" />
          </button>
        <input id="rangevol" class="progress" type="range" value="2" step="0.1" min="0" max="1" v-on:change="volchange()">
        </div>
  </div>
</template>

<script>

import { mapMutations, mapState } from "vuex";
export default {
    data() {
      return {
        ismute: false,
        tmp: 0
      }
    },
    computed: {
      ...mapState(["volum"])
    },
    methods: {
      ...mapMutations(['setVolume']),

      volchange() {
        const vol = document.getElementById("rangevol");
        this.setVolume(vol.value);
      },

      mute() {
        const vol = document.getElementById("rangevol");
        if (vol.value > 0) {
          this.tmp = vol.value;
          vol.value = 0;
          this.setVolume(0);

        } else
        {
          vol.value = this.tmp;
          this.setVolume(this.tmp);
        }
      }
    },
}
</script>

<style scoped>
.volume-root {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  flex-flow: row nowrap;
  
}
.lyric {
  width: 32px;
  height: 32px;
}
.listalbum {
  width: 32px;
  height: 32px;
}
.vol {
  display: flex;
  align-items: center;
  height: 32px;
  
}

.vol button {
  width: 32px;
  height: 32px;
}

.vol input {
  width: 60%;
}
button {
  background: none;
  border: 0;
  color: rgb(179, 170, 161);
}

button:hover {
  color: white;
}
</style>
