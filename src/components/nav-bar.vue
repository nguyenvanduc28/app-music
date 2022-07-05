<template>
  <div>
    <div class="nav-bar-root">
      <div class="logo">
        <a class="logo1" href="https://open.spotify.com/">
          <img src="../assets/logos/Spotify_Logo_RGB_Green.png" />
        </a>

        <a class="logo2" href="https://open.spotify.com/">
          <img src="../assets/logos/spotify_responsive.png" />
        </a>
      </div>

      <div class="menuList">
        <div class="itemMenu">
          <router-link class-active="active" :to="{ name: 'Home' }" tag="a">
            <fa-icon class="icons" icon="house" />
            <span>Home</span>
          </router-link>
        </div>
        <div class="itemMenu">
          <router-link class-active="active" :to="{ name: 'Search' }" tag="a">
            <fa-icon class="icons" icon="magnifying-glass" />
            <span>Search</span>
          </router-link>
        </div>
        <div class="itemMenu">
          <router-link
            class-active="active"
            :to="{ name: 'YourLibrary' }"
            tag="a"
          >
            <fa-icon class="icons" icon="book-open" />
            <span>Your Library</span>
          </router-link>
        </div>
      </div>

      <div class="storeList">
        <div class="createPlaylist">
          <router-link
            class-active="active"
            :to="{ name: 'CreatePlaylist' }"
            tag="a"
          >
            <fa-icon class="icons" icon="plus" />
            <span>Create Playlist</span>
          </router-link>
        </div>

        <div class="likedSongs">
          <router-link
            class-active="active"
            :to="{ name: 'Likedsong' }"
            tag="a"
          >
            <fa-icon class="icons" icon="heart" />
            <span>Liked Songs</span>
          </router-link>
        </div>

        <div class="hrLine">
          <hr />
        </div>
      </div>
    </div>
    <div class="installApp">
      <router-link class-active="active" :to="{ name: 'Install' }" tag="a">
        <fa-icon class="installIcon" icon="circle-arrow-down" />
        <span>Install App</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.svg-inline--fa {
  vertical-align: -7px;
}
.nav-bar-root {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 24px;
  color: #a7a7a7;
  position: fixed;
  top: 0;
  bottom: 130px;
  left: 0;
  width: 300px;
  background-color: #000000;
}

/* Logo */
.logo img {
  height: 40px;
}

.logo {
  /* border: 1px solid white; */
  height: 65.3px;
}

.logo a {
  padding: 0 24px;
  margin-bottom: 18px;
}

/* Menu list */
.menuList {
  /* border: 1px solid white; */
  height: 120px;
}
.menuList .itemMenu {
  padding: 0 8px;
  height: 40px;
}

router-link {
  padding: 0 16px;
  line-height: 40px;
}

.icons {
  height: 24px;
  width: 24px;
  margin-right: 15px;
}

span {
  height: 16px;
  font-size: 13px;
  font-weight: bold;
  font-family: helvetica, arial, sans-serif;
}
/* store list */
.storeList {
  margin-top: 24px;
  height: 561.7px;
}

.createPlaylist {
  padding: 0 8px;
  height: 40px;
}
.likedSongs {
  padding: 0 8px;
  height: 40px;
}

hr {
  margin-top: 8px;
  margin-left: 24px;
  margin-right: 24px;
  background-color: #a09c9c;
  border: none;
  height: 1px;
  min-height: 1px;
}
/* install App */
.installApp {
  height: 40px;
  padding-left: 10px;
  position: fixed;
  bottom: 90px;
  left: 0;
  width: 300px;
  height: 40px;
  background-color: #000000;
  color: #a7a7a7;
}

.installIcon {
  margin-right: 15px;
  vertical-align: -4px;
}

.menuList a,
.storeList a,
.installApp a {
  color: #a09c9c;
  text-decoration: none;
  padding-left: 14px;
}
.menuList a:hover,
.storeList a:hover,
.installApp a:hover {
  color: antiquewhite;
}

.menuList a:focus,
.storeList a:focus,
.installApp a:focus {
  color: antiquewhite;
}
.logo2 {
  display: none;
}
@media all and (max-width: 500px) {
  .nav-bar-root {
    width: 55px;
  }

  span {
    display: none;
  }
  .logo1 {
    display: none;
  }
  .logo2 {
    display: unset;
  }
  .logo2 img {
    height: 30px;
  }

  .logo a {
    padding: 0 13px;
  }

  .menuList .itemMenu, .installApp, .createPlaylist, .likedSongs {
    padding: 0 4px;
  }

  .installApp {
    bottom: 60px;
  }
}
</style>