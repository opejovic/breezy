<template>
  <div class="space-y-10">
    <div class="text-2xl tracking-tight w-full font-medium pb-4 space-y-5">
      <h1>Loading placeholder animations</h1>
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
    <div class="text-2xl tracking-tight w-full font-medium pb-4 space-y-5">
      <h1>Other animations</h1>
      <div
        id="animation-container"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <animatedPlaceholderSix />
      </div>
    </div>
  </div>
</template>

<script>
import AnimatedPlaceholderOne from "@/components/animations/AnimatedPlaceholderOne.vue";
import AnimatedPlaceholderTwo from "@/components/animations/AnimatedPlaceholderTwo.vue";
import AnimatedPlaceholderThree from "@/components/animations/AnimatedPlaceholderThree.vue";
import AnimatedPlaceholderFour from "@/components/animations/AnimatedPlaceholderFour.vue";
import AnimatedPlaceholderFive from "@/components/animations/AnimatedPlaceholderFive.vue";
import AnimatedPlaceholderSix from "@/components/animations/AnimatedPlaceholderSix.vue";

export default {
  name: "Animations",

  components: {
    AnimatedPlaceholderOne,
    AnimatedPlaceholderTwo,
    AnimatedPlaceholderThree,
    AnimatedPlaceholderFour,
    AnimatedPlaceholderFive,
    AnimatedPlaceholderSix
  }
};
</script>
