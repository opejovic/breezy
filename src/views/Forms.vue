<template>
  <div id="forms">
    <div class="text-2xl tracking-tight w-full font-medium pb-4">
      Forms
    </div>

    <login-one />
  </div>
</template>

<script>
import LoginOne from "@/components/forms/sign-in-and-registration/LoginOne.vue";

export default {
  name: "Forms",

  components: {
    LoginOne
  }
};
</script>
