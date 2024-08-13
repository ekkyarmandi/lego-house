<template>
  <div>
    <h1 class="text-3xl font-bold">Cart</h1>
    <div class="flex gap-6 mt-5 mb-10">
      <ul class="flex flex-col gap-3 grow">
        <li v-for:="product in products">
          <CartProduct :data="product" />
        </li>
      </ul>
      <div class="total h-fit rounded-xl py-5 px-6">
        <div class="text-xl font-bold flex gap-8 mb-6">
          <p>Total</p>
          <p>{{ total }}</p>
        </div>
        <Button color="blue" widthFull="true">Checkout</Button>
      </div>
    </div>
  </div>
</template>

<script>
import CartProduct from "@/components/CartProduct.vue";
import Button from "@/components/Button.vue";

export default {
  name: "CartView",
  data() {
    return {
      products: [
        { name: "Lego House", img: "example.png", price: 30000, id: 1, qty: 1 },
        { name: "Lego House", img: "example.png", price: 30000, id: 2, qty: 1 },
        { name: "Lego House", img: "example.png", price: 30000, id: 3, qty: 1 },
      ],
    };
  },
  computed: {
    total() {
      const total = this.products.reduce((acc, item) => acc + item.price, 0);
      return total.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
  components: { CartProduct, Button },
};
</script>

<style scoped>
.total {
  position: relative;
}
.total::after {
  content: "";
  position: absolute;
  background-color: white;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  border-radius: inherit;
}
</style>
