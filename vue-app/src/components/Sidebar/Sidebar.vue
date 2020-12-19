<template>
  <ul class="sidenav app-sidenav" :class="{ open: value }">
    <router-link
      v-for="link of links"
      :key="link.title"
      tag="li"
      active-class="active"
      :to="link.url"
      exact
    >
      <a class="pointer" href="#">{{ link.title }}</a>
    </router-link>
    <li @click="logout()">
      <a href="#">Выйти</a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      links: [
        { title: "Главная", url: "/" },
        { title: "Новая запись", url: "/todo" },
        { title: "Список записей", url: "/list" },
      ],
    };
  },
  methods: {
    logout() {
      this.$router.push("/login?message=logout");
    },
  },
};
</script>

<style scoped>
@import url("./Sidebar.scss");
</style>
