<template>
  <button :disabled="isDisabled" :class="refinedClassList" @mousedown="handleMouseDown" @mouseup="handleMouseUp">
    <slot />
  </button>
</template>

<script>
import { twMerge } from "tailwind-merge";

export default {
  name: "Button",
  props: {
    color: {
      default: "red",
    },
    isDisabled: {
      default: false,
    },
    widthFull: {
      default: false,
    },
  },
  data() {
    return {
      classList: "text-white font-bold border border-black py-2 rounded-md flex gap-3 justify-center items-center min-h-10 min-w-10 clone",
    };
  },
  computed: {
    refinedClassList() {
      const bg = this.color == "red" ? "bg-primary-500" : this.color == "blue" ? `bg-secondary-500` : "";
      const width = this.widthFull && "w-full";
      return twMerge(this.classList, width, bg);
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
