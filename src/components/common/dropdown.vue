<template>
  <div>
    <!-- Dropdown Trigger -->
    <a class="text-white dropdown-trigger btn" href="#" data-target="dropdown1"
      ><small>malikkorucu</small></a
    >
    <!-- Dropdown Structure -->
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#!">one</a></li>
      <li><a href="#!">two</a></li>
      <li class="divider" tabindex="-1"></li>
      <li><a href="#!">three</a></li>
      <li>
        <a href="#!"><i class="material-icons">view_module</i>four</a>
      </li>
      <li>
        <a href="#!"><i class="material-icons">cloud</i>five</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn{
    background:rgb(73, 92, 73);
}
</style>
