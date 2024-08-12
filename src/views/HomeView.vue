<template>
  <div>
    <SearchBar />
    <ul class="flex flex-wrap gap-9 justify-between">
      <li v-for:="product in products">
        <Product :data="product" />
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
  name: "HomeView",
  data() {
    return {
      products: [
        { name: "Lego House", img: "example.png", price: 30000, id: 1 },
        { name: "Lego House", img: "example.png", price: 30000, id: 2 },
        { name: "Lego House", img: "example.png", price: 30000, id: 3 },
        { name: "Lego House", img: "example.png", price: 30000, id: 4 },
        { name: "Lego House", img: "example.png", price: 30000, id: 5 },
        { name: "Lego House", img: "example.png", price: 30000, id: 6 },
        { name: "Lego House", img: "example.png", price: 30000, id: 7 },
        { name: "Lego House", img: "example.png", price: 30000, id: 8 },
      ],
    };
  },
  components: { Product, SearchBar, Pagination },
};
</script>
