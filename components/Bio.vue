<template>
  <div
    class="
      rounded-2xl
      shadow-md
      p-4
      hover:shadow-lg
      transition
      duration-500
      relative
      group
      overflow-hidden
	  transform
	  hover:rotate-2
	  hover:scale-105
    "
  >
    <p>{{bio.title}}</p>
    <p class="mt-2" v-for="(paragraph, index) in bio.paragraphs" :key="index">
      {{paragraph}}
    </p>
    <BackgroundFigure v-for="n in 5" :key="n" color="bg-green-500" />
  </div>
</template>

<script>
export default {
  props: {
    bio: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>