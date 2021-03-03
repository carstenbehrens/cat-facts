<template>
  <div class="breed-container">
    <div class="breed-container__heading">
      Breed:
    </div>
    <div class="breed-container__entry">
      {{ currentCat.breed }}
    </div>
    <div class="breed-container__heading">
      Country:
    </div>
    <div class="breed-container__entry">
      {{ currentCat.country }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Breed",
  props: {
    currentCat: Object,
    test: String
  }
};
</script>

<style scoped>
.breed-container {
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 300px;
  margin-top: 1rem;
  position: relative;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.breed-container:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.breed-container__entry {
  margin-left: 1rem;
}

.breed-container__heading {
  margin-left: 1rem;
  font-weight: bold;
  margin-top: 1rem;
}
</style>
