<template>
  <div class="container">
    <img
      :height="catImage.height"
      :width="catImage.width"
      :src="catImage.src"
    />
  </div>
</template>

<script>
export default {
  name: "CatImage",
  props: {
    catImage: {
      height: Number,
      src: String,
      width: Number
    }
  }
};
</script>

<style>
img {
  display: block;
  width: 100%;
  height: auto;
}
</style>
