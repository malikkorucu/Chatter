<template>
  <div class="chat-page">
    <app-side-nav></app-side-nav>

    <div
      class="content d-flex align-items-center justify-content-center container "
    >
      <app-dropdown class="dropdown"></app-dropdown>
      <app-chat-screen></app-chat-screen>}
    </div>
  </div>
</template>

<script>
import dropdown from "../components/common/dropdown";
import SideNav from "../components/common/sideNav";
import chatScreen from "../components/chat/chatScreen";

export default {
  components: {
    appSideNav: SideNav,
    appDropdown: dropdown,
    appChatScreen: chatScreen,
  },

};
</script>

<style scoped>
.chat-page {
  /* background: url("../assets/bg.jpg")center center no-repeat; */
  background-attachment: fixed;
  background: url("../assets/bg-dark.png");
  background-size: cover;
  min-height: 100vh;
}
.dropdown {
  position: absolute;
  right: 15px;
  top: 15px;
}

.content {
  /* padding-top: 150px; */
  position:relative;
  min-height: 100vh;
}
</style>
