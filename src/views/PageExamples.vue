<template>
  <div>
    <div class="text-2xl tracking-tight w-full font-medium pb-4">
      Page examples
    </div>
    <landingOne />
  </div>
</template>

<script>
import LandingOne from "@/components/page-examples/LandingOne.vue";

export default {
  name: "PageExamples",

  components: {
    LandingOne,
  },
};
</script>
