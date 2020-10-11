<template>
  <div>
    <div class="h-64 w-full animated-placeholder-five rounded-lg"></div>
  </div>
</template>

<script>
export default {
  name: "AnimatedPlaceholderFive"
};
</script>

<style lang="scss" scoped>
@keyframes animatedBackground {
  from {
    background-position: 0px;
  }
  to {
    background-position: calc(10rem * 10) 0;
  }
}

.animated-placeholder-five {
  width: 100%;
  background-image: linear-gradient(
    90deg,
    #e4e4e4 0%,
    #f1f1f1 40%,
    #ededed 60%,
    #e4e4e4 100%
  );
  background-repeat: repeat;
  animation: animatedBackground 3s linear infinite;
}
</style>
