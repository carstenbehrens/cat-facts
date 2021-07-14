<template>
  <div class="type">
    <slot name="type"></slot>
  </div>
  <div class="data">
    <slot name="data"></slot>
  </div>
</template>

<script>

export default {
  name: "BreedComponentHeading",
};
</script>

<style scoped>
.type {
  margin-left: 1rem;
  font-weight: bold;
  margin-top: 1rem;
}

.data {
  margin-left: 1rem;
}
</style>
