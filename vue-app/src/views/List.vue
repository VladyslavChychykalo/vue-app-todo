<template>
  <ul>
    <li v-if="items.length === 0">Ваш список пуст</li>
    <li v-else v-for="item of items" :key="item.title">
      <h3>{{ item.name }}</h3>
      <p>{{ item.lastName }}</p>
      <small>{{ item.description }}</small>

      <div class="btn-block">
        <button>Delete</button>
        <button>Edit</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { eventEmitter } from "../main";
export default {
  data() {
    return { items: [] };
  },
  created() {
    eventEmitter.$on("itemsUpdate", (item) => {
      console.log(item);
      this.items.unshift(item);

      console.log(this.items);
    });
  },
};
</script>
