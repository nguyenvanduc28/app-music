<template>
  <div class="volume-root">
        <button class="lyric">
          <fa-icon icon="align-center" />
        </button>

        <button class="listalbum">
          <fa-icon icon="list" />
        </button>

        <div class="vol">
          <button class="volumerange">
            <fa-icon icon="volume-high" />
          </button>
        <input id="rangevol" class="progress" type="range" value="2" step="0.1" min="0" max="1" v-on:change="volchange()">
        </div>
  </div>
</template>

<script>
export default {
    props: ['track'],
    mounted() {
      this.volchange()
    },
    data() {
      return {
      }
    },
    methods: {
      volchange: function() {
        const vol = document.getElementById("rangevol");
        this.$emit('change-Vol', vol.value);
        console.log(vol.value);
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
