<template>
  <div class="top-bar-menu">
    <div class="back-next">
      <button type="button" class="btn btn-outline-secondary" @click="goBack()">
        <fa-icon class="icons" icon="chevron-left" />
      </button>

      <button type="button" class="btn btn-outline-secondary" @click="goForward()">
        <fa-icon class="icons" icon="chevron-right" />
      </button>
    </div>
    <div class="barlast">

    </div>
    <div class="account">
      <div class="divfull">
        <fa-icon class="iconuser" icon="user" />
        <span>User</span>
        <fa-icon class="iconuser" icon="caret-down"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      window.history.back();
    },

    goForward() {
      window.history.forward();
    }
  },
}
</script>

<style scoped>
.top-bar-menu {
  height: 100%;
  padding: 0 32px;
  display: grid;
  grid-template-columns: 96px auto 100px;
}
/* Back Next button */
.btn-outline-secondary {
  color: white;
  border-radius: 30%;
  border: 0;
}
button {
  margin-right: 16px;
}
button:hover {
  background: none;
}
.back-next {
  height: 100%;
  display: flex;
  justify-content: center;
}
/* thanh phu */
.barlast {
  padding-right: 16px;
}
/* account */
.account {
  display: flex;
  justify-content: center;
  color: white;
}

.divfull {
  color: white;
  height: 32px;
  width: 100%;
  margin: auto 0;
  border-radius: 250px;
  background-color: rgba(0, 0, 0, 0.5)
}
.divfull:hover {
  background-color: #282828;
}
.iconuser {
  margin-left: 10px;
}

.divfull span {
  margin-left: 10px;
}
.btn:focus {
  box-shadow: 0 0 0 0;
}

</style>