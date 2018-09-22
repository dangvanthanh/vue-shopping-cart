<template>
  <div class="container max-w-sm mx-auto mt-32">
    <form class="bg-white p-6">
      <label class="block mb-2">
        <input type="text" placeholder="Username" class="w-full border border-grey-light p-3">
      </label>
      <label class="block mb-2">
        <input type="password" placeholder="Password" class="w-full border border-grey-light p-3">
      </label>
      <button class="w-full border box-shadow bg-blue-dark text-white p-3 font-semibold">Login</button>
      <div class="text-center mt-8">
        <router-link
          tag="a" 
          :to="{ name: 'signup' }" 
          class="inline-block no-underline text-blue-dark hover:text-grey">
          Create new a account?
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  
}
</script>
