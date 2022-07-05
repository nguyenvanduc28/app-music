<template>
    <div class="root">
      <nav class="nav-bar">
        <NavBar />
      </nav>
      <div class="top-bar">
        <TopBar />
      </div>
      <div class="main-view">
        <MainView />
      </div>
      <div class="playing-bar">
        <PlayingBar />
      </div>
    </div>
</template>

<script>
import NavBar from './nav-bar.vue'
import TopBar from './top-bar.vue'
import MainView from './main-view.vue'
import PlayingBar from './playing-bar.vue'

export default {
  components: {
    NavBar, 
    TopBar,
    MainView,
    PlayingBar
  }
}
</script>

<style>

.top-bar {
  /* background-color: #121212; */ 
  background-color: #000000;
  position: fixed;
  top: 0;
  right: 0;
  left: 300px;
  height: 64px;
}
.main-view {
  background-color: #121212;
  position: fixed;
  top: 64px;
  left: 300px;
  right: 0;
  bottom: 90px;
  height: auto;
  overflow-x: hidden;
  overflow-y: scroll;
}

.playing-bar {
  background-color: #181818;
  border-top: 1px solid #282828;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  min-width: 770px;
  overflow-y: scroll;
}

@media screen and (max-width: 500px) {
  .top-bar {
    left: 55px;
  }

  .main-view {
    left: 55px;
  }
}
</style>
