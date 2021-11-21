<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>



<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";
export default {
  name: 'default',
  components: {EmptyLayout,MainLayout},
  data: () => ({}),
  watch: {},
  methods: {},
  mounted() {},
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },
};
</script>

<style lang="scss">
@import "/assets/scss/styles.scss";
</style>