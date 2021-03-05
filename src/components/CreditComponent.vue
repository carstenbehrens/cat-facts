<template>
  <p class="CreditComponent">
    <template v-if="prefix"> {{ prefix }}&nbsp; </template>
    <template v-if="name">
      {{ name }}
    </template>
    <template v-if="suffix"> &nbsp;{{ suffix }} </template>
  </p>
</template>

<script>
export default {
  name: "CreditComponent",
  props: {
    prefix: String,
    name: String,
    suffix: String,
  },
};
</script>

<style scoped>
.CreditComponent {
  color: #70757a;
  font-size: 14px;
}
</style>
