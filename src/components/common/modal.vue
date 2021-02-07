<template>
  <div>
    <div id="modal1" class="modal">
      <div class="modal-content">
        <h4>Resim Gönder</h4>
        <p>
          Aşağıdan göndermek istediginiz resim dosyasını yükleyiniz...
        </p>
        <img
          height="350"
          width="100%"
          :src="currentImg ? currentImg : defaultImg"
          alt=""
        />
        <form action="#">
          <div class="file-field input-field">
            <div class="btn">
              <span>Resim</span>
              <input @change="changeImg($event)" type="file" />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <a @click="sendImage" href="#!" class="modal-close waves-effect waves-green btn-flat"
          >Gönder</a
        >
      </div>
    </div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  data() {
    return {
      currentImg: "",
      defaultImg:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAIVBMVEX19fXd3d3z8/Pq6urb29vi4uLx8fHt7e3n5+fk5OTf39/UY198AAACNElEQVR4nO3a4Y6rIBCGYRUE9P4veO0KijB022xSTOd9zj/Xk9AvMgjOMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgDualrGy+t6juhNXB7Sxofe4bmQVIxqt6z2w25jkhMbR9B7ZbcjzbMNMS3wroqX3yG7DtCJae4+sm+lqEFb8FNFU3qtCaAXyilVDSN7+J6Jx7j3+D2gWnkYkFzrK05OI1sV457wJ2avk9T9b1RHZOduTTcdd19qjOqK13GwEIro+QsJ7tPudbi5f8p3iWiSfe8zS0/bh4fYgRdQ6GRJOAJRGdG7oJx+CyaoSEe2Ot0GfZtZRmer3TJ0RpUVryfJIU6/avqmMKJ14XAqPjRlVR0kqI4qlp3xe4uVyVdMYUfzNVdVJ14koleZ6fd+nWnmurTGiPQlXH5HEha7ITmNETrz6sN9fFCOFEdl9yZeOIve/FGVcY0T7VSLK8BT9Sa5Fwqe0GAa1KO1h6xUtvnWzoqUkqs1Y7HmYiuw0RhR/c7UZW57e/tWqN6C4YTVWjKJ861YZUTouCpeM4gkJO/38McpWNXu0hFRbN50Rnb/arKPd/i3ulZu/l7Aby9uInMu+nAm9WUojanWjSQ1+WiOSMxL7+9RGJPXEyDfqjajqjnXSp1jlEW2z7fzG6OdWo5buiB4NRsGYsDQ61YnoNRoiEg7y36GiFbvZiE5Cp7KZ+g29hw4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIbhB3oYDvixwDtCAAAAAElFTkSuQmCC",
      socket: io(this.$store.getters.getSocketUrl),
      file: null,
    };
  },
  methods: {
    changeImg(e) {
      this.file = e.target.files[0];
      this.currentImg = URL.createObjectURL(this.file);
    },
    sendImage() {
      let username = this.$route.query.username;
      const time = new Date().getHours() + ":" + new Date().getMinutes();

      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result.replace(/.*base64,/, "");
        this.socket.emit("image", {
          user: username,
          message: base64,
          type: "image",
          time,
          id: Math.random(),
        });
      };
      reader.readAsDataURL(this.file);
    },
  },
  created() {},
};
</script>

<style scoped>
.modal {
  width: 70% !important;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 0px;
}
</style>
