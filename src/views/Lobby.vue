<template>
  <div>
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Oda Adı</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Oda Adı..."
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Oda Kişi Sayısı</label>
        <select v-model="roomCount" class="form-control" id="exampleFormControlSelect1">
          <option :value="i" :key="i" v-for="i in 20">{{ i }}</option>
        </select>
      </div>

      <h4>{{roomCount}}</h4>

      <div class="form-group">
        <label for="exampleFormControlSelect2">Herkese Açık / Güvenli</label>
        <select
          v-model="selectedOption"
          :value="selectedOption"
          class="form-control"
          id="exampleFormControlSelect2"
        >
          <option value="public">Herkese Açık</option>
          <option value="private">Güvenli</option>
        </select>
      </div>

      <div v-if="selectedOption === 'private'" class="form-group">
        <label>Oda Şifresi</label>
        <input
          type="password"
          class="form-control"
          placeholder="Şifre"
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: "public",
      roomCount:1
    };
  },
};
</script>

<style scoped></style>
