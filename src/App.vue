<template>
  <div class=" min-h-screen font-inter bg-gray-100 px-10 py-10">
    <div class="w-full">
      <div class="flex">
        <div
          class="flex flex-col pr-10 space-y-4 font-medium text-sm text-gray-700"
        >
          <h1 class="font-mono">Categories</h1>
          <router-link to="/">Home</router-link>
          <router-link to="/page-examples">Page Examples</router-link>
          <router-link to="/forms">Forms</router-link>
          <router-link to="/page-sections">Page Sections</router-link>
          <router-link to="/forms">Elements</router-link>
          <router-link to="/forms">Application Layout</router-link>
          <router-link to="/forms">Headings</router-link>
          <router-link to="/forms">Tables</router-link>
          <router-link to="/forms">Lists</router-link>
          <router-link to="/forms">General Data</router-link>
          <router-link to="/forms">Feedback</router-link>
          <router-link to="/forms">Navigation</router-link>
          <router-link to="/forms">Overlays</router-link>
        </div>
        <div class="w-full">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
