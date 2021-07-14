<template>
  <div class="breed-container">
    <BreedComponentEntry>
      <template v-slot:type>
        Breed:
      </template>
      <template v-slot:data>
        {{ catData.breed }}
      </template>
    </BreedComponentEntry>
    <BreedComponentEntry v-if="catData.country">
      <template v-slot:type>
        Country:
      </template>
      <template v-slot:data>
      {{ catData.country }}
      </template>
    </BreedComponentEntry>
    <div v-if="catImage" class="breed-container__image">
      <a :href="catImage.link">
        <ImageComponent
          :height="catImage.height"
          :width="catImage.width"
          :src="catImage.src"
        />
      </a>
      <CreditComponent
        prefix="Photo by:"
        :name="catImage.username"
        suffix="on Unsplash"
      />
    </div>
  </div>
</template>

<script>
import ImageComponent from "../ImageComponent.vue";
import CreditComponent from "../CreditComponent.vue";
import BreedComponentEntry from "./BreedComponentEntry.vue";

export default {
  name: "BreedComponent",
  components: {
    BreedComponentEntry,
    ImageComponent,
    CreditComponent,
  },
  props: {
    catData: {
      breed: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: false,
      },
      origin: {
        type: String,
        required: false,
      },
      coat: {
        type: String,
        required: false,
      },
      pattern: {
        type: String,
        required: false,
      },
    },
    catImage: {
      height: {
        type: Number,
        required: true,
      },
      src: {
        type: String,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
      alt: {
        type: String,
        required: false,
      },
      username: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
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

.breed-container__image {
  margin: 1rem;
}
</style>
