<template>
  <div>
    {{ currentCat }}
  </div>
</template>

<script>
export default {
  name: "Facts",
  props: {
    currentCat: Object,
    test: String,
  },
};
</script>

<style scoped></style>
