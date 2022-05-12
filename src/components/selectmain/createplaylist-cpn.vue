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
</style>