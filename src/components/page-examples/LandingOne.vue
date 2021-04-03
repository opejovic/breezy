<template>
  <splitpanes class="default-theme" vertical>
    <pane :size="size" min-size="30">
      <iframe
        id="iframe"
        class="w-full border min-h-screen h-full"
        :srcdoc="data.landingOne"
        frameborder="0"
      ></iframe>
    </pane>
    <pane :size="100 - size"></pane>
  </splitpanes>
</template>

<script>
import { onMounted, ref } from "vue";
import data from "@/data";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

export default {
  name: "LandingOne",
  components: {
    Splitpanes,
    Pane,
  },

  data() {
    return {
      data: data,
    };
  },

  setup() {
    const size = ref(0);

    onMounted(() => (size.value = 100));

    return { size };
  },
};
</script>

<style lang="css">
.intro {
  position: relative;
  z-index: 1;
}
.intro::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -3;
  background: url("../../assets/images/bg-one.svg") left top no-repeat;
}
.default-theme.splitpanes--vertical>.splitpanes__splitter:after, .default-theme .splitpanes--vertical>.splitpanes__splitter:after {
  margin-left: 8px !important;
}

.default-theme.splitpanes--vertical>.splitpanes__splitter:before, .default-theme .splitpanes--vertical>.splitpanes__splitter:before {
    margin-left: 0px !important;
}

.default-theme.splitpanes--vertical>.splitpanes__splitter:after, .default-theme .splitpanes--vertical>.splitpanes__splitter:after, .default-theme.splitpanes--vertical>.splitpanes__splitter:before, .default-theme .splitpanes--vertical>.splitpanes__splitter:before {
  width: 3px;
  height: 30px;
  background: darkgrey;
  border-radius: 5px;
}

</style>