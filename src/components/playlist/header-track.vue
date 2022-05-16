<template>
  <div class="header-root">
    <div class="imageTrack">
      <img :src="currentTrack.imagetrack" alt="">
    </div>
    <div class="nameTrack-author">
      <div class="p1">{{currentTrack.name}}</div>
      <div class="p2">{{currentTrack.author}}</div>
    </div>
    <div class="button-heart">
      <button>
        <fa-icon icon="fa-regular fa-heart" />
      </button>
    </div>
  </div>
</template>
<script>

import { mapState } from 'vuex'

export default {
    props: ['track'],

    computed: {
    ...mapState(['currentTrack'])
  },
}
</script>

<style scoped>
.header-root {
  display: flex;
  justify-content: left;
}
img {
  height: 56px;
  width: 56px;
  margin: 15px 0;
}

button {
  border: 0;
  background: none;
  color: rgb(189, 189, 172);
}
button:hover {
  color: white;
}

.btn:focus {
  box-shadow: 0 0 0 0;
}
.nameTrack-author {
  margin: 0 14px;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.nameTrack-author div {
  height: 20px;
  width: 100%;
}
.p1 {
  overflow: hidden;
  font-size: 14px;
}
.p2 {
  font-size: 10.5px;
  font-weight: 300;
}
.button-heart {
  display: flex;
  justify-content: center;
}
</style>