<template>
  <div>
    <div class="text-2xl tracking-tight w-full font-medium pb-4">
      Loading placeholder animations
    </div>

    <div id="animation-container" class="flex grid-cols-4 space-x-10">
      <animatedPlaceholderOne />
      <animatedPlaceholderTwo />
      <animatedPlaceholderThree />
      <animatedPlaceholderFour />
    </div>
  </div>
</template>

<script>
import AnimatedPlaceholderOne from "@/components/loading-animations/AnimatedPlaceholderOne.vue";
import AnimatedPlaceholderTwo from "@/components/loading-animations/AnimatedPlaceholderTwo.vue";
import AnimatedPlaceholderThree from "@/components/loading-animations/AnimatedPlaceholderThree.vue";
import AnimatedPlaceholderFour from "@/components/loading-animations/AnimatedPlaceholderFour.vue";

export default {
  name: "LoadingAnimations",

  components: {
    AnimatedPlaceholderOne,
    AnimatedPlaceholderTwo,
    AnimatedPlaceholderThree,
    AnimatedPlaceholderFour
  }
};
</script>
