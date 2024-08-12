<template>
  <paginate>
    <ul class="flex items-center gap-6 px-1">
      <li>
        <Button color="blue">
          <img src="@/assets/icons/chevron-left.svg" />
        </Button>
      </li>
      <li class="font-bold underline cursor-pointer">1</li>
      <li class="hover:underline cursor-pointer">2</li>
      <li class="hover:underline cursor-pointer">3</li>
      <li class="hover:underline cursor-pointer">4</li>
      <li class="hover:underline cursor-pointer">5</li>
      <li>
        <Button color="blue">
          <img src="@/assets/icons/chevron-right.svg" />
        </Button>
      </li>
    </ul>
  </paginate>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  name: "Pagination",
  components: { Button },
};
</script>
