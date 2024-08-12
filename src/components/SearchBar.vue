<template>
  <div class="mb-9 flex items-center justify-between">
    <div class="flex gap-4">
      <Input placeholder="Search" width="640" />
      <Button color="blue">
        <img src="@/assets/icons/search.svg" alt="icon" style="width: 24px" />
      </Button>
      <Button color="blue" isDisabled="true">
        <img src="@/assets/icons/filter.svg" alt="icon" style="width: 24px" />
      </Button>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Input from "@/components/Input.vue";
import Button from "@/components/Button.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "SearchBar",
  components: { Input, Button, Pagination },
};
</script>
