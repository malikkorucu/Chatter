<template>
  <div class="w-full max-w-xs">
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Username"
      v-model="username"
    />
    <button @click="enterChatName" class="btn btn-danger">CHAT</button>
  </div>
</template>

<script>
export default {
    data(){
        return {
            username:""
        }
    },
    methods:{
        enterChatName(){
            this.$router.replace({name:'chat' , query:{username:this.username}})
        }
    }
};
</script>

<style lang="scss" scoped></style>
