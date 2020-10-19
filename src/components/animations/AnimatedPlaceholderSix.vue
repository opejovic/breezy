<template>
  <div>
    <div class="h-64 w-full animated-placeholder-six rounded-lg"></div>
  </div>
</template>

<script>
export default {
  name: "AnimatedPlaceholderSix"
};
</script>

<style lang="scss" scoped>
@keyframes animation-six {
  0% {
    background-position: 58% 50%;
  }
  25% {
    background-position: 100% 0%;
  }
  75% {
    background-position: 10% 50%;
  }
  to {
    background-position: 58% 50%;
  }
}

.animated-placeholder-six {
  background: linear-gradient(
    264.51deg,
    #e9d790 2.19%,
    #ffe580 4.38%,
    #e7716d 11.58%,
    #dd5d5a 25.16%,
    #c84891 36.02%,
    #7d59bd 47.63%,
    #9867f0 59.03%,
    #3addc7 69.96%,
    #33ce79 83.74%,
    #90c393 94.62%,
    #90c393 98.92%
  );
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto;
  background-clip: border-box;
  background-position: 58% 50%;
  background-position-x: 58%;
  background-position-y: 50%;
  background-size: 500%;
  -webkit-background-clip: border-box;
  background-clip: border-box;
  background-clip: border-box;
  -webkit-animation: animation-six 10s ease infinite;
  animation-name: animation-six;
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation: animation-six 40s ease infinite;
  animation-name: animation-six;
  animation-duration: 40s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  -webkit-text-fill-color: transparent;
}
</style>
