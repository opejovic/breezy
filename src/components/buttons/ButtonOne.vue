<template>
  <div data-name="indigo-one">
    <button
      class="text-sm px-6 py-2 rounded-full flex items-center space-x-2 transition duration-500 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:shadow-outline"
    >
      <p>{{ title }}</p>

      <svg
        class="w-3 h-3"
        viewBox="0 0 20 20"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g
          id="Page-1"
          stroke="none"
          stroke-width="1"
          fill="currentColor"
          fill-rule="evenodd"
        >
          <g id="icon-shape">
            <polygon
              id="Combined-Shape-Copy"
              points="16.1715729 9 10.1005051 2.92893219 11.5147186 1.51471863 20 10 19.2928932 10.7071068 11.5147186 18.4852814 10.1005051 17.0710678 16.1715729 11 -5.68434189e-14 11 -5.68434189e-14 9"
            ></polygon>
          </g>
        </g>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "Button One",

  props: {
    title: {
      type: String,
      default: "Indigo One"
    }
  }
};
</script>
