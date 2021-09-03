<template>
  <a
    :href="info.href"
    target="_blank"
    class="
      w-48
      bg-gray-100
      rounded-xl
      p-2
      text-center
      flex flex-col
      items-start
      shadow-md
      hover:shadow-lg
      transition
      duration-500
      relative
      overflow-hidden
      hover:rotate-6
      hover:scale-105
      transform
      group
      z-20
      select-none
    "
  >
    <BackgroundFigure v-for="n in 3" :key="n" :color="info.color" />
    <div class="flex justify-center items-center space-x-2 z-20">
      <div
        class="w-8 h-8 bg-no-repeat bg-center bg-contain flex-none rounded-full"
        :style="{ backgroundImage: `url(${imgPath})` }"
      ></div>
      <div class="text-xs text-gray-500 text-left uppercase">
        {{ info.name }}
      </div>
    </div>

    <div class="text-sm mt-1 text-left z-20">{{ info.degree }}</div>
    <div class="text-sm text-blue-500 mt-1 z-20">
      {{ info.country }}, {{ info.year }}
    </div>
  </a>
</template>
<script>
export default {
  data: function () {
    return {};
  },
  props: {
    imgPath: {
      type: String,
      default: "",
    },
    info: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
};
</script>