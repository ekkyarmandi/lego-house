<template>
  <nav class="text-white bg-red-400 flex justify-between items-center p-5">
    <div>Logo</div>
    <ul class="flex gap-3 list-none text-lg">
      <li>
        <router-link to="/" class="flex gap-2 py-1 px-3"><img class="w-5" src="@/assets/icons/home.svg" alt="House Icon" />Home</router-link>
      </li>
      <li>
        <router-link to="/saved" class="flex gap-2 py-1 px-3"><img class="w-5" src="@/assets/icons/love.svg" alt="Love Icon" />Saved</router-link>
      </li>
      <li>
        <router-link to="/cart" class="flex gap-2 py-1 px-3"><img class="w-5" src="@/assets/icons/cart.svg" alt="Cart Icon" />Cart</router-link>
      </li>
      <li>
        <router-link to="/user" class="flex gap-2 py-1 px-3"><img class="w-5" src="@/assets/icons/user.svg" alt="User Icon" />User</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  components: {},
};
</script>
