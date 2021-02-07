<template>
  <div ref="app" id="app">
    <div class="container-fluid">
    </div>
    <router-view />
  </div>
</template>

<script>
import M from "materialize-css";

export default {

  mounted() {
    M.AutoInit();
    if(this.$route.name === 'lobby'){
      this.$refs.app.classList.add('full')
      console.log(this.$refs.app)
    }
  },
  methods: {
    openModal() {
     let element = document.querySelector('.modal')
     const instance = M.Modal.getInstance(element)
     instance.open()
    },
  },
}
</script>
<style>
#app {
  padding-left: 300px;
  /* padding:15px; */
  transition:0.2s;
}
.full{
  padding:15px !important;
}
.toast{
  color:black
}

@media (max-width:980px){
  #app{
    padding-left:0px;
  }
}
</style>
