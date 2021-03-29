<template>
  <div
    class="overflow-y-scroll border rounded-lg max-h-screen container bg-gradient"
  ></div>
</template>

<script>
export default {
  name: "BgFour",
};
</script>

<style lang="scss" scoped>
.bg-gradient {
  content: "";
  width: 100%;
  height: 100%;
  position: relative;
  background: url("../../assets/images/bg-four.svg") center/cover;
}
</style>
