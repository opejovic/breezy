<template>
  <div class="h-64 w-64 animated-placeholder-four rounded-lg"></div>
</template>

<script>
export default {
  name: "AnimatedPlaceholderFour"
};
</script>

<style lang="scss" scoped>
.animated-placeholder-four {
  background: linear-gradient(
    45deg,
    #e3e3e4,
    #ebebeb,
    #ffffff,
    #ebebeb,
    #e3e3e4
  );
  background-size: 600% 600%;

  -webkit-animation: left-to-right 1.8s ease-out infinite;
  -moz-animation: left-to-right 1.8s ease-out infinite;
  animation: left-to-right 1.8s ease-out infinite;
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