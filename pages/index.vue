<template lang="pug">
  section.container
    div {{dictionary}}
</template>

<script>
export default {
  computed: {
    dictionary() {
      return this.$store.getters["dictionary/get"];
    }
  },

  asyncData({ store }) {}
};
</script>

<style>
</style>
