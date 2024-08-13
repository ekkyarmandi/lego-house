<template>
  <div class="w-fit flex flex-col gap-2 relative">
    <div class="absolute right-3 top-3 cursor-pointer" @click="loved">
      <img v-if:="!data.liked" src="@/assets/icons/love.svg" alt="Love Icon" />
      <img v-if:="data.liked" src="@/assets/icons/love-filled.svg" alt="Love Icon" />
    </div>
    <img :src="data.img" :alt="data.name + 'thumbnail'" class="border-2 border-black rounded-lg" style="width: 246px; height: 246px" />
    <p class="text-xl font-bold">{{ data.name }}</p>
    <p class="text-lg">{{ priceIDR }}</p>
    <div v-if="!showAddToCart">
      <Button :widthFull="true">Add to Cart</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
    showAddToCart: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isLoved: false,
    };
  },
  components: {
    Button,
  },
  methods: {
    loved() {
      this.isLoved = !this.isLoved;
    },
  },
  computed: {
    priceIDR() {
      return this.data.price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
      });
    },
  },
};
</script>
