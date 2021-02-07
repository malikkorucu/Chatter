<template>
  <div class="p-0 m-0 d-flex">
    <ul id="slide-out" class="sidenav sidenav-fixed bg-dark">
      <li>
        <div style="height:150px" class="user-view p-0">
          <div
            class="background  d-flex justify-content-center align-items-center"
          >
            <img width="90%" src="../../assets/logo.png" />
          </div>
        </div>
      </li>

      
      <li v-for="user in $store.getters.getOnlines" :key="user" class="user">
        <span class="waves-effect pl-3 py-3 d-flex align-items-center">
          <img
            width="60"
            height="60"
            src="../../assets/profile_user.jpg"
            class="profile-img"
          />
          <div class="d-flex flex-column justify-content-center pl-3">
            <h5 class="username pb-1 mb-0">{{user}}</h5>
            <h6 class="m-0 pt-1 sub-text">
              <i class="fas text-primary fa-check-double"></i> Hello Whatsapp !
              klsdjls ...
            </h6>
          </div>
        </span>
      </li>
    </ul>
    <a data-target="slide-out" class="sidenav-trigger"
      ><i class="material-icons">menu</i></a
    >
  </div>
</template>

<script>
import M from "materialize-css";
import io from "socket.io-client";

export default {
  data() {
    return {
      socket: io(this.$store.getters.getSocketUrl),
    };
  },
  components: {},
  computed: {
    root() {
      return __dirname;
    },
  },
  created() {},
  mounted() {
    M.AutoInit();
  },
};
</script>

<style scoped>
.profile-img {
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 10px 0.5px rgba(255, 255, 255, 0.4);
}
.user {
  border-bottom: 2px solid rgb(71, 71, 71);
  color: white;
  position: relative;
  transition: 0.5s ease all;
}
.username {
  text-decoration: none;
}
.user:hover {
  background-color: rgb(46, 46, 46);
}
.sub-text {
  color: rgb(146, 146, 146);
}
.sidenav {
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.7);
}
.sidenav-trigger {
  display: none;
  position: absolute;
  left: 15px;
  top: 15px;
  z-index: 5;
  cursor: pointer;
}

@media (max-width: 980px) {
  .sidenav-trigger {
    display: block;
  }
}
</style>
