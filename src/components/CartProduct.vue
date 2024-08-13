<template>
  <div class="cart-item flex grow gap-5 p-5 rounded-xl">
    <img :src="data.img" :alt="'Thumbnail of ' + data.name" class="box-content rounded-lg border border-black" style="width: 165px" />
    <div class="w-full pt-3 pb-2">
      <div class="flex flex-col h-full">
        <div class="flex justify-between grow text-xl">
          <p>{{ data.name }}</p>
          <p>
            {{ data.qty }} &#10761; <span class="font-bold">{{ priceIdr }}</span>
          </p>
        </div>
        <div class="flex text-sm gap-5 justify-end items-center">
          <div class="like-btn cursor-pointer" style="width: 24px">
            <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.4 14.2C23.188 12.448 25 10.348 25 7.6C25 5.84957 24.3046 4.17084 23.0669 2.9331C21.8292 1.69536 20.1504 1 18.4 1C16.288 1 14.8 1.6 13 3.4C11.2 1.6 9.712 1 7.6 1C5.84957 1 4.17084 1.69536 2.9331 2.9331C1.69536 4.17084 1 5.84957 1 7.6C1 10.36 2.8 12.46 4.6 14.2L13 22.6L21.4 14.2Z"
                stroke="#9e9e9e"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <img class="trash-btn cursor-pointer" src="@/assets/icons/trash.svg" alt="delete icon" style="width: 28px" />
          <div class="flex items-center gap-1 text-lg">
            <Button isDisabled="true">
              <img src="@/assets/icons/minus.svg" alt="plus icon" style="width: 24px" />
            </Button>
            <p class="flex justify-center items-center" style="width: 40px; height: 40px">{{ data.qty }}</p>
            <Button>
              <img src="@/assets/icons/plus.svg" alt="plus icon" style="width: 24px" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LikeIcon from "@/assets/icons/love.svg?raw";
import Button from "@/components/Button.vue";

export default {
  name: "CartProduct",
  props: ["data"],
  computed: {
    priceIdr() {
      return this.data.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
  components: {
    LikeIcon,
    Button,
  },
};
</script>

<style scoped>
.cart-item {
  position: relative;
}
.cart-item::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: -2;
  border-radius: inherit;
}
</style>
