<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import ModalLayout from "@/layouts/ModalLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "modal") + "-layout";
    },
  },
  components: {
    ModalLayout,
    MainLayout,
  },
};
</script>
