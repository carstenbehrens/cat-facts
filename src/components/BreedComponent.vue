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
    <div class="breed-container__image">
      <a :href="catImage.link">
        <ImageComponent
          :height="catImage.height"
          :width="catImage.width"
          :src="catImage.src"
        />
      </a>
      <CreditComponent
        prefix="Photo by:"
        :name="catImage.user.name"
        suffix="on Unsplash"
      />
    </div>
  </div>
</template>

<script>
import ImageComponent from "./ImageComponent";
import CreditComponent from "./CreditComponent";

export default {
  name: "BreedComponent",
  components: {
    ImageComponent,
    CreditComponent,
  },
  props: {
    currentCat: Object,
    catImage: Object,
  },
};
</script>

<style scoped>
.breed-container {
  background: rgba(255, 255, 255, 0.815);
  border-radius: 2px;
  display: inline-block;
  margin-top: 1rem;
  position: relative;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  color: #444d56;
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

.breed-container__image {
  margin: 1rem;
}
</style>
