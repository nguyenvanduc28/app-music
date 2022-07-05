<template>
  <div class="showTracks">
    <div class="flexitem-track" v-for="track in tracks" :key="track.id">
      <div>
        <img :src="track.imagetrack" @click="setTr(track.id)" />
      </div>

      <div class="profile">
        <div class="nametrack" @click="setTr(track.id)">{{ track.name }}</div>
        <div class="authortrack">{{ track.author }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["tracks"]),
  },
  methods: {
    ...mapActions(["selectTrack", "getCurrentTrack"]),
    ...mapMutations(['changeTrack']),
    setTr(id) {
      this.selectTrack(id);
      this.getCurrentTrack();
      this.changeTrack(true);
    },
  },
};
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
  overflow-y: hidden;
  color: rgb(248, 248, 245);
}

.authortrack {
  height: 50px;
  width: 100%;
  font-size: 80%;
}
.profile {
  padding-top: 20px;
  color: #a2a2a2;
}


@media screen and (max-width: 500px) {
  .showTracks {
  gap: 8px;
  padding: 10px 10px;
  }

  .flexitem-track img {
  width: 70px;
  height: 70px;
}
.flexitem-track {
  width: 90px;
  height: 125px;
  background: #181818;
  padding: 5px 10px;
}

.nametrack {
  height: 15px;
  font-size: 80%;
}

.profile {
  padding-top: 5px;
  color: #a2a2a2;
}

.authortrack {
  height: 30px;
  width: 100%;
  font-size: 60%;
  overflow-x: hidden;
  overflow-y: hidden;
}
}
</style>