<template>
  <div class="container">
    <img :height="height" :width="width" :src="src" />
  </div>
</template>

<script>
export default {
  name: "Image",
  props: {
    src: String,
    height: Number,
    width: Number,
  },
};
</script>

<style>
img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
