<template>
  <div data-name="backgrounds">
    <div class="text-2xl tracking-tight w-full font-medium pb-4">
      Backgrounds
    </div>
    <div class="space-y-4">
      <bgOne />
      <bgTwo />
      <bgThree />
      <bgFour />
    </div>
  </div>
</template>

<script>
import BgOne from "@/components/backgrounds/BgOne.vue";
import BgTwo from "@/components/backgrounds/BgTwo.vue";
import BgThree from "@/components/backgrounds/BgThree.vue";
import BgFour from "@/components/backgrounds/BgFour.vue";

export default {
  name: "Backgrounds",

  components: {
    BgOne,
    BgTwo,
    BgThree,
    BgFour,
  },
};
</script>

<style lang="scss" scoped>
</style>
