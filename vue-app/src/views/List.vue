<template>
  <ul>
    <li v-if="values.length === 0">Ваш список пуст</li>
    <li v-else v-for="value of values" :key="value.title">
      <h3>{{ value.title }}</h3>
      <p>{{ value.subtitle }}</p>

      <div class="btn-block">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return { values: [{ title: "asd", subtitle: "adasd" }] };
  },
};
</script>
