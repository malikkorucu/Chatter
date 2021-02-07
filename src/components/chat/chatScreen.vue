<template>
  <div class="chat-screen d-flex flex-column ">
    <app-modal></app-modal>

    <div class="message-container p-4">
      <div
        :key="message.id"
        v-for="message in messages"
        :class="{
          incoming: !isCustomMessage(message.user),
          'outgoing justify-content-end': isCustomMessage(message.user),
        }"
        class="d-flex"
      >
        <span class="message d-flex flex-column mt-1 px-3 py-2">
          <strong v-if="!isCustomMessage(message.user)">{{
            message.user
          }}</strong>
          <p v-if="message.type === 'text'">{{ message.message }}</p>
          <img v-if="message.type === 'image'" :src="message.message" alt="" />
          <small class="date d-flex justify-content-end">{{
            message.time
          }}</small>
        </span>
      </div>
    </div>

    <div class="input bg-dark d-flex align-items-center px-3">
      <VEmojiPicker
        class="emoji-picker"
        :class="{ show: pickerIsShow }"
        @select="selectEmoji"
      />
      <i
        @click="pickerIsShow = !pickerIsShow"
        style="font-size:40px"
        class="far fa-laugh text-secondary"
      ></i>
      <i
        @click="openModal"
        style="font-size:40px"
        class="fas fa-paperclip text-secondary pl-2"
      ></i>
      <div class="input-field col s12 d-flex align-items-center">
        <input
          v-model="text"
          @keyup.enter="sendMessage"
          type="text"
          class="validate text-white"
        />
      </div>
      <i
        @click="sendMessage"
        style="font-size:40px"
        class="fas fa-paper-plane text-secondary pl-2"
      ></i>
    </div>
  </div>
</template>

<script>
import M from "materialize-css";
import VEmojiPicker from "v-emoji-picker";
import io from "socket.io-client";
import modal from "../common/modal";

export default {
  data() {
    return {
      pickerIsShow: false,
      text: "",
      socketMessage: "",
      socket: io(this.$store.getters.getSocketUrl, {
        "sync disconnect on unload": true,
      }),
      messages: [],
    };
  },
  components: {
    VEmojiPicker,
    appModal: modal,
  },
  methods: {
    isCustomMessage(username) {
      return this.$route.query.username === username;
    },
    selectEmoji(emoji) {
      this.text += emoji.data;
    },
    sendMessage() {
      if (this.text) {
        let username = this.$route.query.username;
        const time = new Date().getHours() + ":" + new Date().getMinutes();

        this.socket.emit("chatMessage", {
          user: username,
          message: this.text,
          time,
          type: "text",
          id: Math.random(),
        });
        this.clearInput();
      }
    },
    clearInput() { 
      this.text = "";
    },
    scrollToBottom() {
      const elem = document.querySelector(".message-container");
      elem.scrollTop = elem.scrollHeight - elem.clientHeight;
    },
    openModal() {
      let element = document.querySelector(".modal");
      const instance = M.Modal.getInstance(element);
      instance.open();
    },
  },
  created() {
    this.socket.on("incomingMessage", (message) => {
      this.messages.push(message);

      this.scrollToBottom();
    });

    this.socket.on("image", (image) => {
      // const img = new Image()

      // img.src = `data:image/jpg;base64,${image}`
      console.log(image);
      // console.log(img)
      this.messages.push({
        ...image,
        message: `data:image/jpg;base64,${image.message}`,
      });
    });

    window.addEventListener("click", (e) => {
      if (
        (e.target.classList.contains("message-container") ||
          e.target.classList.contains("validate")) &&
        this.pickerIsShow
      ) {
        this.pickerIsShow = false;
      }
    });
  },

  mounted() {
    this.socket.emit("connection", this.$route.query.username);
    this.socket.on("message", (message) => {
      console.log(message);
    });
    this.socket.on("onlines", (onlines) => {
      this.$store.commit("setOnlines", onlines);
    });
  },
};
</script>

<style scoped>
.chat-screen {
  height: 80vh;
  background: url("../../assets/chat-bg.png");
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  position: relative;
  width: 100%;
}
.message-container {
  overflow-y: scroll;
  height: 100%;
  padding-bottom: 150px !important;
  border-radius: 15px;
  scroll-padding: 0 0 45px 0;
}
.incoming .message {
  color: white;
  background: #262d31;
  border-radius: 15px;
  max-width: 80%;
}
::-webkit-scrollbar {
  width: 0px;
}
.outgoing .message {
  color: white;
  background: #054740;
  border-radius: 15px;
  max-width: 80%;
}
.input {
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.emoji-picker {
  position: absolute;
  left: 10px;
  top: -550%;
  display: none !important;
}
.show {
  display: block !important;
}
i {
  cursor: pointer;
}
i:hover {
  color: #a2bebb !important;
}
.message {
  word-break: break-all;
}
</style>
