<template>
  <div class="overflow-y-scroll border rounded-lg max-h-screen container">
    <svg
      width="1440"
      height="1024"
      viewBox="0 0 1440 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="1440" height="1024" fill="url(#paint0_radial)" />
      <rect width="1440" height="1024" fill="url(#paint1_radial)" />
      <defs>
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(445.5 659.5) rotate(-101.606) scale(303.2 426.374)"
        >
          <stop stop-color="#2F5274" />
          <stop offset="1" stop-color="#008D63" stop-opacity="0.61" />
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(55.5 74.5) rotate(33.4885) scale(630.698 886.919)"
        >
          <stop stop-color="#7052B0" />
          <stop offset="1" stop-color="#FFF06C" />
        </radialGradient>
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
.bg-one {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  background: url("../../assets/images/bg-one.svg") center/cover;
}
</style>