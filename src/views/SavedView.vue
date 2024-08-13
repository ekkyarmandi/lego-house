<template>
  <div>
    <h1 class="text-3xl font-bold mb-5">Saved</h1>
    <SearchBar />
    <ul class="grid grid-cols-4 gap-y-9">
      <li v-for:="product in products">
        <Product :data="product" showAddToCart="false" />
      </li>
    </ul>
    <div class="flex justify-center pt-10">
      <Pagination />
    </div>
    <footer class="text-center pt-10 pb-7">Copyright &copy; <a href="https://ekkyarmandi.com" target="_blank" class="underline hover:text-secondary-500">ekkyarmandi.com</a> 2024</footer>
  </div>
</template>

<script>
import Product from "@/components/Product.vue";
import SearchBar from "@/components/SearchBar.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "SavedView",
  data() {
    return {
      products: [
        { name: "Lego House", img: "example.png", price: 30000, id: 1, liked: true },
        { name: "Lego House", img: "example.png", price: 30000, id: 2, liked: true },
        { name: "Lego House", img: "example.png", price: 30000, id: 3, liked: true },
        { name: "Lego House", img: "example.png", price: 30000, id: 4, liked: true },
        { name: "Lego House", img: "example.png", price: 30000, id: 5, liked: true },
        { name: "Lego House", img: "example.png", price: 30000, id: 6, liked: true },
      ],
    };
  },
  components: { Product, SearchBar, Pagination },
};
</script>
