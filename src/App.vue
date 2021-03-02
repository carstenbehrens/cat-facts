<template>
  <div class="container">
    <button class="meow-button" v-on:click="getRandomCat">Meow</button>
    <div v-if="currentCat">
      <Facts v-bind:currentCat="currentCat" />
    </div>
  </div>
</template>

<script>
import Facts from "./components/Facts.vue";

export default {
  name: "App",
  components: {
    Facts,
  },
  data: function() {
    return {
      isLoading: false,
      currentCat: undefined,
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

      const res = await fetch(
        `https://catfact.ninja/breeds?limit=1&page=${randNumber}`
      );

      const json = await res.json();

      this.currentCat = json.data[0];
    },
  },
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

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.meow-button {
  margin-top: 10vh;
  height: 20vw;
  width: 50vw;
  min-width: 300;
  min-height: 200;
  background: rgb(34, 193, 195);
  background: linear-gradient(
    0deg,
    rgba(34, 193, 195, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
}
</style>
