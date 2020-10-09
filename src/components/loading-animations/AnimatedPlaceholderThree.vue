<template>
  <div class="h-64 w-64 animated-placeholder-three rounded-lg"></div>
</template>

<script>
export default {
  name: "AnimatedPlaceholderThree"
};
</script>

<style lang="scss" scoped>
.animated-placeholder-three {
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 300%;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1.2s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;
}

@-webkit-keyframes placeholderShimmer {
  0% {
    background-position: -468px 0;
  }

  100% {
    background-position: 468px 0;
  }
}
</style>