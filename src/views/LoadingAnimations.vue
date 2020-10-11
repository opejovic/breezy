<template>
  <div class="">
    <div class="text-2xl tracking-tight w-full font-medium pb-4">
      Loading placeholder animations
    </div>

    <div
      id="animation-container"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    >
      <animatedPlaceholderOne />
      <animatedPlaceholderTwo />
      <animatedPlaceholderThree />
      <animatedPlaceholderFour />
      <animatedPlaceholderFive />
    </div>
  </div>
</template>

<script>
import AnimatedPlaceholderOne from "@/components/loading-animations/AnimatedPlaceholderOne.vue";
import AnimatedPlaceholderTwo from "@/components/loading-animations/AnimatedPlaceholderTwo.vue";
import AnimatedPlaceholderThree from "@/components/loading-animations/AnimatedPlaceholderThree.vue";
import AnimatedPlaceholderFour from "@/components/loading-animations/AnimatedPlaceholderFour.vue";
import AnimatedPlaceholderFive from "@/components/loading-animations/AnimatedPlaceholderFive.vue";

export default {
  name: "LoadingAnimations",

  components: {
    AnimatedPlaceholderOne,
    AnimatedPlaceholderTwo,
    AnimatedPlaceholderThree,
    AnimatedPlaceholderFour,
    AnimatedPlaceholderFive
  }
};
</script>
