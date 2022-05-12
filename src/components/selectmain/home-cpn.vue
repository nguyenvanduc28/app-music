<template>
  <div class="showTracks"
  >
    <div class="flexitem-track"
    v-for="track in tracks"
    :key="track.id"
    >
      <div>
        <img :src="track.imagetrack">
      </div >

      <div class="profile">
        <div class="nametrack">{{track.name}}</div>
        <div class="authortrack">{{track.author}}</div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['tracks'])
  }
}
</script>

<style scoped>
  .showTracks {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
  }
.flexitem-track {
  width: 190px;
  height: 270px;
  background: #181818;
  padding: 10px;
  cursor: pointer;
}
.flexitem-track:hover {
  background: #252525;
}
.flexitem-track img {
  width: 170px;
  height: 180px;
}

.nametrack {
  height: 30px;
  width: 100%;
  font-size: 120%;
  font-weight: 400;
  overflow-x: hidden;
  color: rgb(248, 248, 245);
}

.authortrack {
  height: 50px;
  width: 100%;
  font-size: 80%;
}
.profile {
  padding-top: 20px;
  color: #A2A2A2;
}
</style>