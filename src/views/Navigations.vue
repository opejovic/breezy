<template>
  <div id="forms">
    <div class="text-2xl tracking-tight w-full font-medium pb-4">
      Navigations
    </div>

    <div>
      <p class="pb-2">Horizontal</p>
      <navOne />
    </div>
  </div>
</template>

<script>
import NavOne from "@/components/navs/NavOne.vue";

export default {
  name: "Navigations",

  components: {
    NavOne
  }
};
</script>
