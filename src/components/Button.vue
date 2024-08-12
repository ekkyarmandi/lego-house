<template>
  <button :disabled="isDisabled" :class="`${backgroundColor} text-white font-bold border border-black py-2 rounded-md flex gap-3 justify-center items-center clone min-h-10 min-w-10`" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: {
      default: "red",
    },
    isDisabled: {
      default: false,
    },
  },
  computed: {
    backgroundColor() {
      if (this.color == "red") {
        return `bg-primary-500`;
      } else if (this.color == "blue") {
        return `bg-secondary-500`;
      }
    },
  },
  methods: {
    handleMouseDown(e) {
      if (e.target.tagName === "BUTTON") {
        e.target.classList.remove("clone");
      } else {
        const btn = e.target.closest("button");
        btn.classList.remove("clone");
      }
    },
    handleMouseUp(e) {
      if (e.target.tagName === "BUTTON") {
        e.target.classList.add("clone");
      } else {
        const btn = e.target.closest("button");
        btn.classList.add("clone");
      }
    },
  },
};
</script>

<style scoped>
button:active:not(:disabled) {
  translate: 3px 3px;
}
button:disabled {
  background-color: #ccc;
}
.clone {
  position: relative;
}
.clone::after {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 6px;
  z-index: -1;
}
</style>
