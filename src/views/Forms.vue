<template>
  <div id="forms">
    <div class="text-2xl tracking-tight border-b w-full font-medium">Forms</div>

    <div></div>
    <loginOne />
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
