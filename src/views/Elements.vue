<template>
  <div class="text-2xl tracking-tight w-full font-medium pb-4">Elements</div>

  <div class="space-y-10">
    <div>
      <h3 class="border-b mb-4">Buttons</h3>
      <div class="flex items-center space-x-6">
        <buttonOne title="Indigo One" color="indigo" />
        <buttonOne title="Green One" color="green" />
      </div>
    </div>

    <div>
      <h3 class="border-b mb-4">Other elements</h3>
      <div class="flex items-center space-x-6">
        <searchFormOne />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import ButtonOne from "@/components/buttons/ButtonOne.vue";
import SearchFormOne from "@/components/forms/SearchFormOne.vue";

export default {
  name: "Elements",

  components: {
    ButtonOne,
    SearchFormOne,
  },

  setup() {
    const size = ref(0);

    onMounted(() => (size.value = 100));

    return { size };
  },
};
</script>
