<template>
  <p class="credit-component">
    <template v-if="prefix"> {{ `${prefix} ` }}</template>
    <template v-if="name">
      {{ name }}
    </template>
    <template v-if="suffix">{{ ` ${suffix}` }} </template>
  </p>
</template>

<script>
export default {
  name: "CreditComponent",
  props: {
    prefix: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    suffix: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.credit-component {
  color: #70757a;
  font-size: 14px;
}
</style>
