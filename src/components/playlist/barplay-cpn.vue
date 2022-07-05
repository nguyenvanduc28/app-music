<template>
  <div class="playbar-root">
    <div class="player-controls">
      <div class="player-controls-left">
        <button class="tron-button">
          <fa-icon icon="shuffle" />
        </button>
        <button class="back-button" @click="backtrack()">
          <fa-icon icon="backward-step" />
        </button>
      </div>
      <div>
        <button id="toggle-button" @click="toggle()">
          <fa-icon icon="play" />
        </button>
      </div>

      <div class="player-controls-right">
        <button class="next-button" @click="nexttrack()">
          <fa-icon icon="forward-step" />
        </button>
        <button class="loop-button">
          <fa-icon icon="repeat" />
        </button>
      </div>
    </div>

    <div class="playback-bar">
      <div id="timerunning">00:00</div>
      <div class="rangeaudio">
        <input id="range" type="range" value="0" step="1" min="0" max="200" />
        <audio id="audio" :src="currentTrack.linktrack"></audio>
      </div>
      <div id="timetrack">00:00</div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from "vuex";
export default {
  mounted() {
    this.getCurrentTrack();
    this.running();
  },

  computed: {
    ...mapState(["currentTrack", "currentId", "change", "volum"]),
  },

  data() {
    return {
      run: false,
      timesong: 0,
      timerunn: 0,
    };
  },
  updated() {
    this.updateTrack();
  },

  methods: {
    ...mapActions(["getCurrentTrack", "nextId", "prevId"]),
    ...mapMutations(["changeTrack"]),
    nexttrack() {
      this.nextId();
      this.run = true;
      setTimeout(() => {
        this.toggle();
      }, 500);
      setTimeout(() => {
        this.toggle();
      }, 500);

      this.getCurrentTrack();
    },

    backtrack() {
      this.prevId();
      this.run = true;

      setTimeout(() => {
        this.toggle();
      }, 500);
      setTimeout(() => {
        this.toggle();
      }, 500);
      this.getCurrentTrack();
    },

    toggle() {
      this.run = !this.run;
      const audiotrack = document.getElementById("audio");
      const play = document.getElementById("toggle-button");
      const timetrack = document.getElementById("timetrack");
      if (this.run == true) {
        play.innerHTML = `play`;
        audiotrack.play();
        setTimeout(() => {
          this.timesong = audiotrack.duration;
          var x = this.formatTime(this.timesong);
          timetrack.innerHTML = x;
        }, 500);
      } else {
        play.innerHTML = `pause`;
        audiotrack.pause();
      }

      this.changeTrack(false);
    },

    formatTime(sec_num) {
      let hours = Math.floor(sec_num / 3600);
      let minutes = Math.floor((sec_num - hours * 3600) / 60);
      let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

      hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
    },

    running() {
      const audio = document.getElementById("audio");
      const range = document.getElementById("range");
      const timerunning = document.getElementById("timerunning");
      // this.changeVol();

      audio.ontimeupdate = () => {
        audio.volume = this.volum;
        if (audio.duration) {
          const timenow = Math.floor(
            (audio.currentTime / audio.duration) * 200
          );
          range.value = timenow;
        }

        var y = this.formatTime(audio.currentTime);
        timerunning.innerHTML = y;
        if (audio.ended) {
          this.nexttrack();
        }
      };
    },

    updateTrack() {
      if (this.change == true) {
        this.run = true;
        setTimeout(() => {
          this.toggle();
        }, 500);
        setTimeout(() => {
          this.toggle();
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.playbar-root {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.player-controls {
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  gap: 16px;
}
.player-controls-left,
.player-controls-right {
  display: flex;
  flex: 1;
  gap: 8px;
}

.player-controls-left {
  justify-content: flex-end;
}
.player-controls-right {
  justify-content: flex-start;
}

button {
  background: none;
  border: 0;
  color: rgb(197, 209, 219);
}

button:hover {
  color: white;
}

.playback-bar {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.timerunning {
  margin-right: 10px;
  font-size: 14px;
}

.timetrack {
  margin-left: 10px;
  font-size: 14px;
}
.rangeaudio {
  width: 100%;
}

.rangeaudio input {
  width: 100%;
  margin-top: 3px;
}

@media screen and (max-width: 500px) {
  .playback-bar {
    display: none;
  }
}
</style>