<template>
  <div class="overflow-y-scroll border rounded-lg">
    <svg
      width="1096"
      height="886"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0)" fill="#2953E7" fill-opacity=".1">
        <path
          d="M0 0h1096L898 361.4a173.6 173.6 0 01-62.6 65.2 165 165 0 00-66.7 77L749 550.2a208.4 208.4 0 01-244.3 120.7 88.3 88.3 0 01-16.8-6.2l-156-76.7a393 393 0 00-276.7-26.4L0 576.5V0z"
        />
        <path
          d="M-1 0h1096L895.5 424.6a186.2 186.2 0 01-61.4 73.1 177 177 0 00-64.6 84.5L740 663.9a192 192 0 01-236 118.4 81.3 81.3 0 01-17-7.3l-139.5-80a393 393 0 00-314.5-33.4L-1 672.4V0z"
        />
        <path
          d="M-2 0h1096L893.5 477.9a199.8 199.8 0 01-60.6 79.6 189.8 189.8 0 00-63.2 90.7L733.5 760a181.3 181.3 0 01-230.6 116c-6-2-11.6-4.8-16.8-8.2l-127.3-81.6a393 393 0 00-344-39.4L-2 753V0z"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <path fill="#fff" d="M0 0h1096v886H0z" />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: "BgOne",
};
</script>

<style lang="scss" scoped>
.gradient-bg {
  background: linear-gradient(
    264.51deg,
    #ffe580 4.38%,
    #ff7571 11.51%,
    #ff7270 25.06%,
    #ea5dad 36.04%,
    #c2a0fd 47.63%,
    #9867f0 59.03%,
    #3bf0e4 69.96%,
    #33ce43 83.74%,
    #b2f4b6 95.62%
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
  -webkit-animation: gradient-shift 10s ease infinite;
  animation-name: gradient-shift;
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation: gradient-shift 40s ease infinite;
  animation-name: gradient-shift;
  animation-duration: 40s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  -webkit-text-fill-color: transparent;
}
.gradient-bg {
  background: linear-gradient(
    264.51deg,
    #ffe580 4.38%,
    #ff7571 11.51%,
    #ff7270 25.06%,
    #ea5dad 36.04%,
    #c2a0fd 47.63%,
    #9867f0 59.03%,
    #3bf0e4 69.96%,
    #33ce43 83.74%,
    #b2f4b6 95.62%
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
  -webkit-animation: gradient-shift 10s ease infinite;
  animation-name: gradient-shift;
  animation-duration: 10s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  animation: gradient-shift 40s ease infinite;
  animation-name: gradient-shift;
  animation-duration: 40s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
  -webkit-text-fill-color: transparent;
}
@keyframes gradient-shift {
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
</style>