<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <Navbar />
    <div class="container h-full pt-10 mx-auto overflow-y-scroll" style="width: 1100px">
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
  name: "AppView",
  components: {
    Navbar,
  },
  render() {
    // document.title = ""
    const element = document.querySelector("#app .container > div");
    if (element) {
      console.log(element.offsetHeight);
    }
  },
};
</script>

<style src="./assets/tailwind.css" />
