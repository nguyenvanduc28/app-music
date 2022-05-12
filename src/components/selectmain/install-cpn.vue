<template>
  <div id="installapp-root">
      <div class="img">
        <img src="https://open.scdn.co/cdn/images/devices/mac.1584582e.png">
      </div>

      <div class="content">
        <p>Seamlessly listen to music you love. Download the Spotify app for your computer.</p>
      </div>

      <div>
        <button type="button" class="btn btn-success"><a href="https://www.spotify.com/vn-vi/download">Get our free app</a></button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#installapp-root {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0;
}

.img img {
  height: 400px;
}

.content {
  font-size: 200%;
  width: 50%;
  text-align: center;
  font-weight: 600;
}

.btn {
  font-size: 150%;
  background: #1FDF64;
  width: 190px;
}

a {
  display: block;
  color: #000000;
  font-size: 70%;
  text-decoration: none;
  width: 100%;
  height: 40px;
  line-height: 40px;
}

.btn:hover {
 box-shadow: 1px 2px white ; 
}
</style>