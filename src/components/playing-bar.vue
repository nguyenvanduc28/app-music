<template>
<div class="root-playing-bar">

  <div 
    class="playing"
    v-bind="showTrack(chiso)"
    >
    
      <Header class="header"
      :track="track"
      
      />
      <Barplay class="playlist"
      @next-track="next"
      @back-track="back"
      :track="track"
      :vol="vol"
      />

      <Volume class="volume"
      :track="track"
      @change-Vol="volvalue"
      />
  </div>
</div>
</template>

<script>

import { mapState, mapActions} from 'vuex'

import Header from './playlist/header-track.vue'
import Volume from './playlist/volume-audio.vue'
import Barplay from './playlist/barplay-cpn.vue'
export default {
  components: {
    Header,
    Volume,
    Barplay
  },
  mounted() {
    this.getTracks()
  },

  data() {
      return {
        chiso: 1,
        track: {
          id:'',
          name:'',
          author:'',
          linktrack:'',
          imagetrack:''
        },

        vol:0,
      }
  },

  computed: {
    ...mapState(['tracks'])
  },

  methods: {
    ...mapActions(['getTracks']),

    showTrack: function (chiso) {
      for (var index in this.tracks ) {
        if (this.tracks[index].id == chiso) {
          this.track.id = this.tracks[index].id
          this.track.name = this.tracks[index].name
          this.track.author = this.tracks[index].author
          this.track.linktrack = this.tracks[index].linktrack
          this.track.imagetrack = this.tracks[index].imagetrack
          
        }
      }
    },

    next() {
      let x = this.chiso+1;
      if (x > this.tracks.length) {
        this.chiso = 1;
      } else this.chiso = this.chiso+1;
    },

    back() {
      let x = this.chiso-1;
      if (x == 0 ) {
        this.chiso = this.tracks.length;
      } else this.chiso = this.chiso-1;
    },

    volvalue(vol) {
      this.vol = vol;
    }
  },
}
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