<template>
  <div class="h-64 w-full animated-placeholder-one rounded-lg"></div>
</template>

<script>
export default {
  name: "AnimatedPlaceholderOne",
};
</script>

<style lang="scss" scoped>
// .animated-placeholder-one:hover {
//   -webkit-animation: none;
//   -moz-animation: none;
//   animation: none;
//   background: red;
// }

.animated-placeholder-one {
  background: linear-gradient(-90deg, #eef2f6, #ffffff, #bcbfc3);
  background-size: 400% 400%;

  -webkit-animation: left-to-right 3s ease infinite;
  -moz-animation: left-to-right 3s ease infinite;
  animation: left-to-right 3s ease infinite;
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