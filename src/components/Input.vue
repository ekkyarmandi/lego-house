<template>
  <input class="px-5 py-2 border rounded-lg border-black drop-shadow-md" type="text" :placeholder="placeholder + '..'" :style="`width: ${width}px`" />
</template>

<script>
export default {
  name: "Input",
  props: {
    placeholder: {
      type: String,
      default: "placeholder text",
    },
    width: {
      type: String,
      default: "640",
    },
  },
};
</script>
