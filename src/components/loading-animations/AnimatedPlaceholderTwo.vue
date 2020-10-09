<template>
  <div class="h-64 w-full animated-placeholder-two rounded-lg"></div>
</template>

<script>
export default {
  name: "AnimatedPlaceholderTwo"
};
</script>

<style lang="scss" scoped>
.animated-placeholder-two {
  background: linear-gradient(
    90deg,
    #eef2f6,
    #eef4fa,
    #ffffff,
    #eef4fa,
    #eef2f6
  );
  background-size: 600% 600%;

  -webkit-animation: left-to-right 2s ease-out infinite;
  -moz-animation: left-to-right 2s ease-out infinite;
  animation: left-to-right 2s ease-out infinite;
}

@-webkit-keyframes left-to-right {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes left-to-right {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes left-to-right {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>