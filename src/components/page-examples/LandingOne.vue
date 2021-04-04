<template>
  <div class="max-w-6xl md:border rounded bg-gray-600">
    <div
      class="resizable relative z-50 pr-4 md:pr-0 max-w-full"
      style="min-width: 400px;"
    >
      <div class="z-0 block">
        <iframe
          class="h-screen w-full overflow-y-hidden"
          style="pointer-events: none;"
          :srcdoc="data.landingOne"
          frameborder="0"
        ></iframe>
      </div>
      <div
        @mousedown="resize"
        data-name="handle"
        class="sr-only sm:not-sr-only sm:border-l sm:bg-gray-200 sm:absolute sm:right-0 sm:inset-y-0 sm:flex sm:items-center sm:w-4"
        style="cursor: ew-resize"
      >
        <svg
          fill="currentColor"
          class="h-4 w-4 text-gray-800 pointer-events-none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import data from "@/data";

export default defineComponent({
  data() {
    return {
      data: data
    };
  },

  setup() {
    let el;
    let prevX;
    let startWidth;

    onMounted(() => {
      el = document.querySelector(".resizable");
    });

    const mousemove = e => {
      el.style.width = startWidth + e.clientX - prevX + "px";
    };

    const resize = e => {
      const html = document.getElementsByTagName("HTML")[0];
      html.style = "cursor: ew-resize";

      document.addEventListener("mousemove", mousemove);
      document.addEventListener("mouseup", stop);

      prevX = e.clientX;
      startWidth = parseInt(
        document.defaultView.getComputedStyle(el).width,
        10
      );
    };

    const stop = () => {
      document.removeEventListener("mousemove", mousemove);
      const html = document.getElementsByTagName("HTML")[0];
      html.style = "";
    };

    return {
      resize,
      stop
    };
  }
});
</script>
