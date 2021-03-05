<template>
  <div class="container">
    <img :height="height" :width="width" :src="src" />
  </div>
</template>

<script>
export default {
  name: "ImageComponent",
  props: {
    src: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
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
