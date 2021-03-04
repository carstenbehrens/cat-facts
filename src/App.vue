<template>
  <div class="container">
    <button class="meow-button" v-on:click="getRandomCat">Meow</button>
    <template v-if="isLoading">
      <Loading />
    </template>
    <template v-else-if="currentCat && catImage">
      <Breed
        v-bind:currentCat="currentCat"
        v-bind:isLoading="isLoading"
        v-bind:catImage="catImage"
      />
    </template>
  </div>
</template>

<script>
import Breed from "./components/Breed.vue";
import CatService from "./services/catService";
import ImageService from "./services/imageService";
import Loading from "./components/Loading.vue";

const catService = new CatService();
const imageService = new ImageService();

export default {
  name: "App",
  components: {
    Breed,
    Loading
  },
  data: function() {
    return {
      isLoading: false,
      currentCat: undefined,
      catImage: undefined
    };
  },
  methods: {
    getRandomCat: async function() {
      this.isLoading = true;
      /*
        This will genereate a random number between 1 - 98, 
        The reason for this is that the catfact API only has 98 pages (when the limit is set to 1)
      */
      const randNumber = Math.floor(Math.random() * 98) + 1;

      const catResult = await catService.getBreeds(1, randNumber);

      const catData = catResult.data[0];

      const { results } = await imageService.search(`${catData.breed} cat`);

      const imageData = {
        height: results[0].height,
        src: results[0].urls.small,
        width: [0].width
      };

      this.currentCat = catData;
      this.catImage = imageData;
      this.isLoading = false;
    }
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  height: 100vh;
  width: 100vw;
  background-color: #ffffff;
  opacity: 1;
  background-image: linear-gradient(135deg, #ffecfa 25%, transparent 25%),
    linear-gradient(225deg, #ffecfa 25%, transparent 25%),
    linear-gradient(45deg, #ffecfa 25%, transparent 25%),
    linear-gradient(315deg, #ffecfa 25%, #ffffff 25%);
  background-position: 20px 0, 20px 0, 0 0, 0 0;
  background-size: 40px 40px;
  background-repeat: repeat;
}
</style>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.meow-button {
  cursor: pointer;
  margin-top: 1rem;
  border: none;
  background: hsl(0 0% 93%);
  border-radius: 0.25rem;
  padding: 0.75rem 1rem;
  background: hotpink;
  color: white;
  box-shadow: 0 0.75rem 0.5rem -0.5rem hsl(0 50% 80%);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.meow-button:hover {
  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
</style>
