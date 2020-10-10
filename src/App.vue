<template>
  <div class="min-h-screen font-inter bg-white px-5 sm:px-10 py-10">
    <div class="w-full">
      <!-- Display on small screens -->
      <div class="flex justify-between items-center xl:hidden mr-auto">
        <div>
          <h1 class="font-mono w-full pb-10">
            <span class="font-extrabold">
              <a href="https://github.com/opejovic/breezy">
                <svg
                  class="text-gray-800"
                  width="90"
                  height="27"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M77 18.6c-.4 0-.9.3-1.3.7-.4.5-.7 1-.8 1.6-.2 1.3.1 2.4.9 3.2.7.7 2 1.2 3.5 1.5l7.4 1.2.3-.1.2-.3L89 14.9v-.4l-.4-.2-7.1-1.1c-1.7-.3-3-.2-3.9.3-.9.5-1.4 1.4-1.6 2.6-.1.6 0 1.1.2 1.6.2.4.5.7.8.9zm3.8-1.6c0-.2 0-.4.2-.5l.6-.2 2.4.4-.3 1.6-2.3-.3c-.3 0-.4-.2-.5-.4a1 1 0 01-.1-.6zm-.4 5.6c-.2 0-.4-.1-.5-.3a1 1 0 01-.1-.7c0-.2.1-.4.3-.5.1-.2.4-.2.6-.2l2.6.4L83 23l-2.6-.4zM59 21.8v.5l.3.2 4 .6h.5l.3-.3 2.2-3.3 1.5.2-.6 3.5.1.4.3.2 3.9.6.3-.1.2-.3 1.8-11.5V12l-.4-.2-7-1a7 7 0 00-2.8 0 4 4 0 00-2 1.2c-.6.6-1 1.3-1 2.2-.3 1.6.1 2.9 1.3 3.8L59 21.8zm7-5.7a.8.8 0 01-.5-.4 1 1 0 01-.1-.7l.3-.6c.2-.2.4-.2.6-.2l2.3.3-.3 2L66 16zm-20.3.7h-.4l-.2.4-.4 2.5.1.3.3.2L56.4 22h.3l.2-.4L58.7 10v-.4l-.4-.2-11-1.7-.4.1-.2.3-.4 2.5.1.4.3.2 7 1-.2 1.2-6-1-.3.1c-.2.1-.2.2-.2.4l-.4 2.3v.3l.4.2 6 1-.2 1-7.1-1zm-15.1-2.4h-.4l-.2.4-.4 2.5.1.4.3.2 11.3 1.7h.3l.2-.4 1.8-11.5v-.3l-.4-.2-11-1.8-.4.1-.2.3-.4 2.6v.3l.4.2 7 1-.3 1.2-5.9-1-.4.2-.1.3-.4 2.3v.4l.4.2 6 .9-.2 1.1-7.1-1.1zm-15-2.6l-.4.1-.2.4-.5 2.6.1.4.3.2 11.5 1.8.3-.1.2-.3.4-2.6a.8.8 0 00-.1-.6l-4.9-6 5 .7h.4L28 8l.4-2.7V5l-.4-.2L17.3 3h-.4l-.2.4-.4 2.6c0 .2 0 .4.2.6l4.7 6-5.7-.9zM1 .5L.7.6.6 1V1l3.3 8.1-.6 4v.3l.4.2 3.8.6h.3l.2-.4.6-4 5.7-6.7V3v-.2l-.3-.2-3.7-.6c-.4 0-.6 0-.8.3L6.9 5.5 5.4 1.7a.8.8 0 00-.7-.6L1 .5z"
                    fill="currentColor"
                  />
                </svg> </a
            ></span>
            <br />
            <span class="text-xs italic">Vue x Tailwind</span>
          </h1>
        </div>
        <div data-name="hamburger-menu relative">
          <button class="focus:outline-none" id="hamburger" @click="toggle">
            <svg
              v-if="state.menuOpen"
              class="w-8 h-8 text-gray-900"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 8.6l-7-7-1.5 1.3 7 7.1-7 7L3 18.6l7.1-7 7 7 1.5-1.4-7-7.1 7-7L17 1.4l-7.1 7z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              class="text-gray-900 w-8 h-8"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
                fill="currentColor"
                fill-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Menu on sm screens -->
      <div
        class="xl:hidden border-t border-b right-0 mr-10 py-10  w-full mb-6 flex flex-col space-y-2"
        v-if="state.menuOpen"
      >
        <router-link to="/">Home</router-link>
        <router-link to="/page-examples">Page Examples</router-link>
        <router-link to="/page-sections">Page Sections</router-link>
        <router-link to="/Navigations">Navigations</router-link>
        <router-link to="/forms">Forms</router-link>
        <router-link to="/elements">Elements</router-link>
        <router-link to="/backgrounds">Backgrounds</router-link>
        <router-link to="/loading-animations">Loading Animations</router-link>
      </div>
      <!-- End small screen menu  -->

      <div class="flex">
        <!--
          Hidden on sm screens
         -->
        <div
          class="hidden xl:flex flex-col pr-10 space-y-4 font-medium text-sm text-gray-700 w-1/12"
        >
          <h1 class="font-mono w-full pb-10">
            <span class="font-extrabold">
              <a href="https://github.com/opejovic/breezy">
                <svg
                  class="text-gray-800"
                  width="90"
                  height="27"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M77 18.6c-.4 0-.9.3-1.3.7-.4.5-.7 1-.8 1.6-.2 1.3.1 2.4.9 3.2.7.7 2 1.2 3.5 1.5l7.4 1.2.3-.1.2-.3L89 14.9v-.4l-.4-.2-7.1-1.1c-1.7-.3-3-.2-3.9.3-.9.5-1.4 1.4-1.6 2.6-.1.6 0 1.1.2 1.6.2.4.5.7.8.9zm3.8-1.6c0-.2 0-.4.2-.5l.6-.2 2.4.4-.3 1.6-2.3-.3c-.3 0-.4-.2-.5-.4a1 1 0 01-.1-.6zm-.4 5.6c-.2 0-.4-.1-.5-.3a1 1 0 01-.1-.7c0-.2.1-.4.3-.5.1-.2.4-.2.6-.2l2.6.4L83 23l-2.6-.4zM59 21.8v.5l.3.2 4 .6h.5l.3-.3 2.2-3.3 1.5.2-.6 3.5.1.4.3.2 3.9.6.3-.1.2-.3 1.8-11.5V12l-.4-.2-7-1a7 7 0 00-2.8 0 4 4 0 00-2 1.2c-.6.6-1 1.3-1 2.2-.3 1.6.1 2.9 1.3 3.8L59 21.8zm7-5.7a.8.8 0 01-.5-.4 1 1 0 01-.1-.7l.3-.6c.2-.2.4-.2.6-.2l2.3.3-.3 2L66 16zm-20.3.7h-.4l-.2.4-.4 2.5.1.3.3.2L56.4 22h.3l.2-.4L58.7 10v-.4l-.4-.2-11-1.7-.4.1-.2.3-.4 2.5.1.4.3.2 7 1-.2 1.2-6-1-.3.1c-.2.1-.2.2-.2.4l-.4 2.3v.3l.4.2 6 1-.2 1-7.1-1zm-15.1-2.4h-.4l-.2.4-.4 2.5.1.4.3.2 11.3 1.7h.3l.2-.4 1.8-11.5v-.3l-.4-.2-11-1.8-.4.1-.2.3-.4 2.6v.3l.4.2 7 1-.3 1.2-5.9-1-.4.2-.1.3-.4 2.3v.4l.4.2 6 .9-.2 1.1-7.1-1.1zm-15-2.6l-.4.1-.2.4-.5 2.6.1.4.3.2 11.5 1.8.3-.1.2-.3.4-2.6a.8.8 0 00-.1-.6l-4.9-6 5 .7h.4L28 8l.4-2.7V5l-.4-.2L17.3 3h-.4l-.2.4-.4 2.6c0 .2 0 .4.2.6l4.7 6-5.7-.9zM1 .5L.7.6.6 1V1l3.3 8.1-.6 4v.3l.4.2 3.8.6h.3l.2-.4.6-4 5.7-6.7V3v-.2l-.3-.2-3.7-.6c-.4 0-.6 0-.8.3L6.9 5.5 5.4 1.7a.8.8 0 00-.7-.6L1 .5z"
                    fill="currentColor"
                  />
                </svg> </a
            ></span>
            <br />
            <span class="text-xs italic">Vue x Tailwind</span>
          </h1>
          <router-link to="/">Home</router-link>
          <router-link to="/page-examples">Page Examples</router-link>
          <router-link to="/page-sections">Page Sections</router-link>
          <router-link to="/navigations">Navigations</router-link>
          <router-link to="/forms">Forms</router-link>
          <router-link to="/elements">Elements</router-link>
          <router-link to="/backgrounds">Backgrounds</router-link>
          <router-link to="/loading-animations">Loading Animations</router-link>
          <!-- <router-link to="/forms">Application Layout</router-link>
          <router-link to="/forms">Headings</router-link>
          <router-link to="/forms">Tables</router-link>
          <router-link to="/forms">Lists</router-link>
          <router-link to="/forms">General Data</router-link>
          <router-link to="/forms">Feedback</router-link>
          <router-link to="/forms">Navigation</router-link>
          <router-link to="/forms">Overlays</router-link> -->
        </div>

        <div class="w-full">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "App",

  setup() {
    const state = reactive({
      menuOpen: false
    });

    function toggle() {
      return (state.menuOpen = !state.menuOpen);
    }

    return {
      state,
      toggle
    };
  }
};
</script>
